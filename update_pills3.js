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
// A variant without mb-6 for inline use
const NEW_PILL_CLASS_INLINE = "inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit";

function processFile(filePath) {
  if (!filePath.endsWith('.tsx')) return;
  // Skip report page as requested
  if (filePath.includes('report') || filePath.includes('test\\report')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Target "Partners & Affiliations" type pills (app/page.tsx, app/results/page.tsx)
  content = content.replace(/<span className="uppercase tracking-[a-z0-9\[\]\.-]+ text-\[[^\]]+\] font-bold text-\[#[A-F0-9]+\] bg-\[#[A-F0-9]+\]\/[0-9]+ px-[0-9\.]+ py-[0-9\.]+ rounded-full mb-[0-9]+ inline-block[^"]*">\s*([^<]+)\s*<\/span>/gi, 
  `<span className="${NEW_PILL_CLASS}">\n                $1\n              </span>`);

  // 2. Target "Cohort Admissions Open" type pills (app/team/page.tsx, app/page.tsx)
  content = content.replace(/<span className="uppercase tracking-[a-z0-9\[\]\.-]+ text-\[[^\]]+\] font-bold text-\[#[A-F0-9]+\] bg-\[#[A-F0-9]+\]\/[0-9]+ px-[0-9\.]+ py-[0-9\.]+ rounded-full mb-[0-9]+ inline-block[^"]*">\s*([^<]+)\s*<\/span>/gi, 
  `<span className="${NEW_PILL_CLASS}">\n                $1\n              </span>`);

  // 3. Target "The People Behind EpicQuest" type pills (app/team/page.tsx)
  content = content.replace(/<span className="inline-flex items-center gap-[0-9\.]+ px-[0-9\.]+ py-[0-9\.]+ rounded-full\s*bg-\[#[A-F0-9]+\]\/[0-9]+ text-\[#[A-F0-9]+\] text-\[[^\]]+\] font-bold uppercase\s*tracking-[a-z0-9\[\]\.-]+ border border-\[#[A-F0-9]+\]\/[0-9]+(?: select-none)?">\s*<span className="w-[0-9\.]+ h-[0-9\.]+ rounded-full bg-\[#[A-F0-9]+\] inline-block[^"]*" \/>\s*([^<]+)\s*<\/span>/gi,
  `<span className="${NEW_PILL_CLASS}">\n                  $1\n                </span>`);

  // 4. Target "EpicQuest Founding Principle"
  content = content.replace(/<span className="text-\[#[A-F0-9]+\] font-serif text-[a-z]+ tracking-widest uppercase">\s*([^<]+)\s*<\/span>/gi,
  `<span className="${NEW_PILL_CLASS_INLINE}">\n              $1\n            </span>`);

  // 5. Target small inline pills in results page (like Program 01, etc.)
  content = content.replace(/<span className="inline-flex items-center gap-[0-9\.]+ px-[0-9\.]+ py-[0-9\.]+ rounded-full bg-\[#[A-F0-9]+\]\/[0-9]+ text-\[#[A-F0-9]+\] text-\[[^\]]+\] font-bold uppercase tracking-wider border border-\[#[A-F0-9]+\]\/[0-9]+ select-none">\s*(?:<span className="w-[0-9\.]+ h-[0-9\.]+ rounded-full bg-\[#[A-F0-9]+\] inline-block"><\/span>\s*)?([^<]+)\s*<\/span>/gi,
  `<span className="${NEW_PILL_CLASS_INLINE}">\n                  $1\n                </span>`);

  // 6. Fix any remaining `SectionLabel` usages
  content = content.replace(/<span className="uppercase tracking-\[0\.14em\] text-\[11px\] font-bold text-\[#566544\]\s*bg-\[#566544\]\/10 px-3 py-1 rounded-full mb-4 inline-block border border-\[#566544\]\/15">\s*\{children\}\s*<\/span>/g,
  `<span className="${NEW_PILL_CLASS}">\n      {children}\n    </span>`);

  // Force upper case on the inner text for statically known pills if they weren't uppercase
  content = content.replace(/(<span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2\.5 rounded-full bg-\[#EAEDDE\] text-\[#403011\] text-\[13px\] sm:text-\[14px\] font-serif uppercase tracking-widest w-fit(?: mb-6)?">\s*)([^<{]+)(\s*<\/span>)/g, (match, p1, p2, p3) => {
    return p1 + p2.toUpperCase() + p3;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

walkDir(path.join(__dirname, 'app'), processFile);
console.log('Done!');
