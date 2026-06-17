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

function processFile(filePath) {
  if (!filePath.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  const regexes = [
    // format 2 (updated to handle any order of inner span classes):
    {
      regex: /<span className="inline-flex items-center gap-2 px-4 py-1\.5 rounded-full bg-\[#566544\]\/12 text-\[#566544\] text-\[[0-9]+px\] font-bold uppercase tracking-\[[^\]]+\] border border-\[#566544\]\/20(?: select-none)?">\s*(?:<span className="[^"]+"><\/span>\s*|<span className="[^"]+" \/>\s*)?([^<]+)\s*<\/span>/gi,
      replacement: (match, text) => {
        return `<span className="${NEW_PILL_CLASS}">\n                  ${text.trim().toUpperCase()}\n                </span>`;
      }
    }
  ];

  regexes.forEach(({regex, replacement}) => {
    content = content.replace(regex, replacement);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

walkDir(path.join(__dirname, 'app'), processFile);
console.log('Done!');
