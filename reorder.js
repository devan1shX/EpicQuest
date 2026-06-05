const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/test/report/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const startSplit = '<div className="screen-report-content">';
const endSplit = '      </div>{/* end screen-report-content */}';

const beforeSections = content.substring(0, content.indexOf(startSplit) + startSplit.length);
const afterSections = content.substring(content.indexOf(endSplit));

const sectionsContent = content.substring(content.indexOf(startSplit) + startSplit.length, content.indexOf(endSplit));

const sectionsRaw = sectionsContent.split('{/* ══════════════════════════════');

const sections = [];
for (let i = 1; i < sectionsRaw.length; i++) {
  sections.push('{/* ══════════════════════════════' + sectionsRaw[i]);
}

let advancedAnalytics = sections[10];

const summaryStart = '            {/* Report Summary Card */}';
const summaryEnd = '            </div>\n\n          </div>\n        </section>\n      )}';
const summaryIdx = advancedAnalytics.indexOf(summaryStart);

let summaryCard = '';
if (summaryIdx !== -1) {
  const extracted = advancedAnalytics.substring(summaryIdx);
  const endIdx = extracted.indexOf(summaryEnd);
  summaryCard = extracted.substring(0, endIdx + 18);
  advancedAnalytics = advancedAnalytics.substring(0, summaryIdx) + extracted.substring(endIdx + 18);
}

const executiveSummarySection = `
      {/* ══════════════════════════════
          SECTION 2 — EXECUTIVE SUMMARY
      ══════════════════════════════ */}
      {data.advancedAnalytics && (
        <section className="w-full bg-[#FDFBF7] py-16 sm:py-20 page-break border-b border-[#4A4333]/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
${summaryCard.replace(' mt-8', '')}
          </div>
        </section>
      )}
`;

const newSectionsOrder = [
  sections[0],
  executiveSummarySection,
  sections[3],
  sections[1],
  sections[2],
  advancedAnalytics,
  sections[6],
  sections[7],
  sections[4],
  sections[8],
  sections[5],
  sections[9]
];

const newContentMiddle = newSectionsOrder.map((sec, i) => {
  return sec.replace(/SECTION \d+ —/g, "SECTION " + (i + 1) + " —");
}).join('');

const newContent = beforeSections + newContentMiddle + afterSections;

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Reordering successful!');
