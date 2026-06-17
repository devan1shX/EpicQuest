const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const NEW_PILL_CLASS = "inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6";
const NEW_PILL_CLASS_INLINE = "inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit";

function processFile(filePath) {
  if (!filePath.endsWith('.tsx')) return;
  // Skip report page as requested
  if (filePath.includes('report') || filePath.includes('test\\report')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // We look for pill patterns. The old pills typically have this structure:
  // <span (or div) className="... rounded-full ... uppercase ... text-[#...] ... ">
  //   [optional inner dot <span ... />]
  //   Text
  // </span (or div)>
  
  // Let's use a very generic replace function.
  // It finds <span or <div with className containing 'rounded-full' and 'uppercase' and 'bg-['
  // that is NOT an 'absolute' position (to avoid messing up image overlays) and NOT 'hover:' (buttons).
  
  const pillRegex = /<(span|div)\s+className="([^"]*rounded-full[^"]*uppercase[^"]*bg-\[[^"]*)"\s*>([\s\S]*?)<\/\1>/gi;

  content = content.replace(pillRegex, (match, tag, className, innerContent) => {
    // If it's an absolute pill or has hover states, leave it alone.
    if (className.includes('absolute') || className.includes('hover:')) {
      return match;
    }

    // It's a pill! 
    // Strip out the inner dot if it exists.
    let cleanedText = innerContent.replace(/<span\s+className="[^"]*w-[0-9\.]+[^"]*rounded-full[^"]*"\s*(?:><\/span>|\/>)/gi, '').trim();
    
    // Convert text to uppercase just in case it wasn't.
    cleanedText = cleanedText.toUpperCase();

    // Use mb-6 if the old class had mb- or if it seems to be a section header.
    // If it's used inside a tight space, use the inline one. Let's just default to NEW_PILL_CLASS_INLINE, 
    // unless the old class had 'mb-' or it's a known section header.
    // Actually the user wants them to be EXACTLY the same. Let's use the inline one to be safe on spacing,
    // or mb-6 if the original had mb-4, mb-5, etc.
    let targetClass = NEW_PILL_CLASS_INLINE;
    if (className.match(/mb-[0-9]+/)) {
      targetClass = NEW_PILL_CLASS;
    }

    return `<${tag} className="${targetClass}">\n  ${cleanedText}\n</${tag}>`;
  });

  // Since some pills might be already replaced but missed uppercase, let's fix that.
  content = content.replace(new RegExp(`(className="${NEW_PILL_CLASS.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}")>\\s*([^<]+?)\\s*</`, 'g'), (match, p1, p2) => {
    return `${p1}>\n  ${p2.toUpperCase()}\n</`;
  });
  content = content.replace(new RegExp(`(className="${NEW_PILL_CLASS_INLINE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}")>\\s*([^<]+?)\\s*</`, 'g'), (match, p1, p2) => {
    return `${p1}>\n  ${p2.toUpperCase()}\n</`;
  });

  // Also fix `<span className="uppercase tracking-[0.14em] text-[10px] font-bold text-[#566544] bg-[#566544]/10 px-3.5 py-1.5 rounded-full mb-5 inline-block border border-[#566544]/15">The Discovery Blueprint</span>`
  // The regex above handles it! Because it has rounded-full, uppercase, bg-[

  // What about "EpicQuest Intellect Hub" in app/blog/page.tsx?
  // <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-olive/10 border border-olive/20 text-olive text-[0.65rem] font-bold uppercase tracking-[0.18em] w-fit shadow-sm select-none">
  // <span className="w-1.5 h-1.5 rounded-full bg-olive inline-block animate-pulse"></span>
  // EpicQuest Intellect Hub
  // </div>
  // Wait, the bg is `bg-olive/10`, not `bg-[...`. Our regex looked for `bg-\[`. Let's fix that to include `bg-olive`.
  // Let's do another pass for `bg-olive` or `bg-[#`.
  
  const pillRegex2 = /<(span|div)\s+className="([^"]*rounded-full[^"]*uppercase[^"]*(?:bg-\[[^"]*|bg-olive)[^"]*)"\s*>([\s\S]*?)<\/\1>/gi;
  content = content.replace(pillRegex2, (match, tag, className, innerContent) => {
    if (className.includes('absolute') || className.includes('hover:')) return match;
    // Don't double replace if we already put our NEW_PILL_CLASS
    if (className.includes('bg-[#EAEDDE]')) return match;

    let cleanedText = innerContent.replace(/<span\s+className="[^"]*w-[0-9\.]+[^"]*rounded-full[^"]*"\s*(?:><\/span>|\/>)/gi, '').trim();
    cleanedText = cleanedText.toUpperCase();
    let targetClass = className.match(/mb-[0-9]+/) ? NEW_PILL_CLASS : NEW_PILL_CLASS_INLINE;
    return `<${tag} className="${targetClass}">\n  ${cleanedText}\n</${tag}>`;
  });


  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

walkDir(path.join(__dirname, 'app'), processFile);
console.log('Done!');
