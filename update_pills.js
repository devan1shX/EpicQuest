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

  // Regex to find standard section pills which usually look like:
  // <div or <span className="... rounded-full bg-.../12 text-... text-[...px] font-bold uppercase tracking-...
  // containing a dot: <span className="w-1.5 h-1.5 rounded-full bg-... inline-block...
  // and some text.
  
  // Actually, we can be more targeted by finding specific known occurrences from our grep search.
  const regexes = [
    // format 1: page.tsx hero pill
    {
      regex: /<div className="inline-flex items-center gap-2 px-4 py-1\.5 rounded-full bg-olive\/10 border border-olive\/20 text-olive text-\[0\.65rem\] font-bold uppercase tracking-\[0\.18em\] w-fit shadow-sm select-none animate-fade-up">\s*<span className="w-1\.5 h-1\.5 rounded-full bg-olive inline-block animate-pulse"><\/span>\s*([^<]+)\s*<\/div>/g,
      replacement: (match, text) => {
        return `<div className="${NEW_PILL_CLASS}">\n              ${text.trim().toUpperCase()}\n            </div>`;
      }
    },
    // format 2: standard section pills
    {
      regex: /<span className="inline-flex items-center gap-2 px-4 py-1\.5 rounded-full bg-\[#[A-F0-9]+\]\/12 text-\[#[A-F0-9]+\] text-\[1[0-1]px\] font-bold uppercase tracking-\[0\.[0-9]+em\] border border-\[#[A-F0-9]+\]\/20(?: select-none)?">\s*(?:<span className="w-1\.5 h-1\.5 rounded-full bg-\[#[A-F0-9]+\] inline-block(?: animate-pulse)?"><\/span>\s*)?([^<]+)\s*<\/span>/gi,
      replacement: (match, text) => {
        return `<span className="${NEW_PILL_CLASS}">\n                    ${text.trim().toUpperCase()}\n                  </span>`;
      }
    },
    // format 3: programs page hero pill
    {
      regex: /<span className="inline-flex items-center gap-2 px-4 py-1\.5 rounded-full\s*bg-\[#566544\]\/12 text-\[#566544\] text-\[10px\] font-bold uppercase\s*tracking-\[0\.14em\] border border-\[#566544\]\/20">\s*<span className="w-1\.5 h-1\.5 rounded-full bg-\[#566544\] inline-block animate-pulse" \/>\s*([^<]+)\s*<\/span>/g,
      replacement: (match, text) => {
        return `<span className="${NEW_PILL_CLASS}">\n                  ${text.trim().toUpperCase()}\n                </span>`;
      }
    },
    // format 4: results page other pills
    {
      regex: /<span className="inline-flex items-center gap-1\.5 px-4 py-1\.5 rounded-full bg-\[#566544\]\/10 text-\[#566544\] text-\[10px\] font-bold uppercase tracking-wider border border-\[#566544\]\/20 select-none">\s*(?:<span className="w-1\.5 h-1\.5 rounded-full bg-\[#566544\] inline-block"><\/span>\s*)?([^<]+)\s*<\/span>/g,
      replacement: (match, text) => {
        return `<span className="${NEW_PILL_CLASS.replace('mb-6', 'mb-4')}">\n                  ${text.trim().toUpperCase()}\n                </span>`;
      }
    },
    // format 5: programs interactive showcase tagline
    {
      regex: /<span className="inline-flex items-center px-3 py-1\.5 rounded-full\s*bg-\[#DCA543\]\/12 text-\[#8A7340\] text-\[9px\] sm:text-\[10px\] font-bold uppercase\s*tracking-\[0\.1em\] border border-\[#DCA543\]\/20">\s*([^<]+)\s*<\/span>/g,
      replacement: (match, text) => {
        return `<span className="${NEW_PILL_CLASS.replace('mb-6', '')}">\n                      ${text.trim().toUpperCase()}\n                    </span>`;
      }
    },
    // format 6: results page "Excellence. Proven." pill
    {
      regex: /<span className="uppercase tracking-\[0\.14em\] text-\[10px\] sm:text-\[11px\] font-bold text-\[#566544\] bg-\[#566544\]\/10 px-3\.5 py-1\.5 rounded-full mb-4 inline-block border border-\[#566544\]\/20">\s*([^<]+)\s*<\/span>/g,
      replacement: (match, text) => {
        return `<span className="${NEW_PILL_CLASS}">\n              ${text.trim().toUpperCase()}\n            </span>`;
      }
    },
    // format 7: the-epicquest-method page pill
    {
      regex: /<span className="inline-flex items-center gap-2 px-4 py-1\.5 rounded-full bg-\[#566544\]\/12 text-\[#566544\] text-\[11px\] font-bold uppercase tracking-\[0\.12em\] border border-\[#566544\]\/20">\s*([^<]+)\s*<\/span>/g,
      replacement: (match, text) => {
        return `<span className="${NEW_PILL_CLASS}">\n                  ${text.trim().toUpperCase()}\n                </span>`;
      }
    }
  ];

  regexes.forEach(({regex, replacement}) => {
    content = content.replace(regex, replacement);
  });
  
  // Specific fix for "THE EPICQUEST LAUNCHPAD" in programs/page.tsx
  content = content.replace(/<span className="inline-flex items-center gap-2 px-4 py-1\.5 rounded-full\s+bg-\[#566544\]\/12 text-\[#566544\] text-\[10px\] font-bold uppercase\s+tracking-\[0\.14em\] border border-\[#566544\]\/20">\s+<span className="w-1\.5 h-1\.5 rounded-full bg-\[#566544\] inline-block animate-pulse" \/>\s+THE EPICQUEST LAUNCHPAD\s+<\/span>/g, 
  `<span className="${NEW_PILL_CLASS}">
                  THE EPICQUEST LAUNCHPAD
                </span>`);
                
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

walkDir(path.join(__dirname, 'app'), processFile);
console.log('Done!');
