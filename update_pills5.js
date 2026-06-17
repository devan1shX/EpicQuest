const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

const NEW_PILL_CLASS = "inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6";
const NEW_PILL_CLASS_INLINE = "inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit";

function processFile(filePath) {
  if (!filePath.endsWith('.tsx')) return;
  if (filePath.includes('report')) return; // Ignore test report

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // We look for any <span or <div tag
  const tagRegex = /<(span|div)\s+className="([^"]+)"\s*>([\s\S]*?)<\/\1>/gi;

  content = content.replace(tagRegex, (match, tag, className, innerContent) => {
    // Check if it has pill classes
    if (
      className.includes('rounded-full') && 
      className.includes('uppercase') && 
      (className.includes('bg-[') || className.includes('bg-olive') || className.includes('bg-[#'))
    ) {
      // Exclude absolute and hover (buttons)
      if (className.includes('absolute') || className.includes('hover:')) {
        return match;
      }
      
      // Exclude if already new pill class
      if (className.includes('bg-[#EAEDDE]')) {
        return match;
      }

      // Strip dot
      let cleanedText = innerContent.replace(/<span\s+className="[^"]*w-[0-9\.]+[^"]*rounded-full[^"]*"\s*(?:><\/span>|\/>)/gi, '').trim();
      cleanedText = cleanedText.toUpperCase();

      let targetClass = className.match(/mb-[0-9]+/) ? NEW_PILL_CLASS : NEW_PILL_CLASS_INLINE;
      
      return `<${tag} className="${targetClass}">\n  ${cleanedText}\n</${tag}>`;
    }
    return match;
  });

  // Since some text was matched earlier but not fully uppercase:
  content = content.replace(new RegExp(`(className="${NEW_PILL_CLASS.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}")>\\s*([^<]+?)\\s*</`, 'g'), (match, p1, p2) => {
    return `${p1}>\n  ${p2.toUpperCase()}\n</`;
  });
  content = content.replace(new RegExp(`(className="${NEW_PILL_CLASS_INLINE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}")>\\s*([^<]+?)\\s*</`, 'g'), (match, p1, p2) => {
    return `${p1}>\n  ${p2.toUpperCase()}\n</`;
  });


  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

walkDir(path.join(__dirname, 'app'), processFile);
console.log('Done!');
