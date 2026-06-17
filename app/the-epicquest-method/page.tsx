import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen overflow-x-hidden">

      {/* ══════════════════════════════
          HERO — UNTOUCHED
      ══════════════════════════════ */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#566544]/5 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#DCA543]/8 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#566544_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 sm:pt-28 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-end">
            <div className="animate-fade-up">
              <div className="mb-7">
                <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6">
  OUR PROCESS
</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-serif font-medium text-[#403011] tracking-tight leading-[1.08] mb-5">
                Your{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Bespoke</span>
                  <svg className="absolute -bottom-1.5 left-0 w-full" height="8" viewBox="0 0 120 8" preserveAspectRatio="none" fill="none">
                    <path d="M2 6 Q30 2 60 5 Q90 8 118 3" stroke="#DCA543" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                Portfolio Journey
              </h1>
              <p className="text-base sm:text-lg text-[#4A4333] font-serif leading-relaxed border-l-2 border-[#DCA543] pl-5">
                Every student's path is custom-designed. From initial psychometric assessment to final portfolio submission, we guide you through a structured, milestone-driven journey.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-up delay-150">
               <div className="flex flex-col p-5 sm:p-6 bg-[#FDFBF7] rounded-2xl border border-[#4A4333]/8 shadow-sm">
                  <span className="text-3xl sm:text-4xl font-serif font-semibold text-[#403011] leading-none mb-1.5">4</span>
                  <span className="text-[11px] sm:text-xs text-[#8A8373] font-serif uppercase tracking-wider leading-snug">Strategic Phases</span>
               </div>
               <div className="flex flex-col p-5 sm:p-6 bg-[#FDFBF7] rounded-2xl border border-[#4A4333]/8 shadow-sm">
                  <span className="text-3xl sm:text-4xl font-serif font-semibold text-[#403011] leading-none mb-1.5">100%</span>
                  <span className="text-[11px] sm:text-xs text-[#8A8373] font-serif uppercase tracking-wider leading-snug">Custom-Designed</span>
               </div>
               <div className="flex flex-col p-5 sm:p-6 bg-[#FDFBF7] rounded-2xl border border-[#4A4333]/8 shadow-sm">
                  <span className="text-3xl sm:text-4xl font-serif font-semibold text-[#403011] leading-none mb-1.5">1:1</span>
                  <span className="text-[11px] sm:text-xs text-[#8A8373] font-serif uppercase tracking-wider leading-snug">Expert Mentorship</span>
               </div>
               <div className="flex flex-col p-5 sm:p-6 bg-[#FDFBF7] rounded-2xl border border-[#4A4333]/8 shadow-sm">
                  <span className="text-3xl sm:text-4xl font-serif font-semibold text-[#403011] leading-none mb-1.5">12–24</span>
                  <span className="text-[11px] sm:text-xs text-[#8A8373] font-serif uppercase tracking-wider leading-snug">Month Journey</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          THE 4-PHASE JOURNEY — REDESIGNED
      ══════════════════════════════ */}
      <section className="w-full bg-[#F6EBD4] py-16 sm:py-20 lg:py-28 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="mb-14 sm:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6">
                THE JOURNEY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight mb-4">
                Four Phases. One Cohesive Story.
              </h2>
            </div>
            <p className="text-sm sm:text-[15px] text-[#4A4333] font-serif leading-relaxed max-w-sm pb-4">
              A structured journey built for admissions officers who see thousands of applications.
            </p>
          </div>

          {/* ── DESKTOP TIMELINE ── */}
          <div className="hidden lg:block relative w-full my-4">
            {/* Winding road SVG */}
            <svg className="absolute inset-0 w-full h-[360px] pointer-events-none z-0" viewBox="0 0 1000 360" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path
                d="M 0 180 C 50 180, 50 280, 125 280 C 200 280, 300 80, 375 80 C 450 80, 550 280, 625 280 C 700 280, 800 80, 875 80 C 950 80, 950 180, 1000 180"
                stroke="#5C7146"
                strokeWidth="26"
                strokeLinecap="round"
              />
              <path
                d="M 0 180 C 50 180, 50 280, 125 280 C 200 280, 300 80, 375 80 C 450 80, 550 280, 625 280 C 700 280, 800 80, 875 80 C 950 80, 950 180, 1000 180"
                stroke="#F6EBD4"
                strokeWidth="2"
                strokeDasharray="6 8"
                strokeLinecap="round"
                opacity="0.85"
              />
            </svg>

            <div className="relative grid grid-cols-4 w-full h-[360px] z-10">

              {/* Step 1 — top label, pin pointing down into valley at Y≈280 */}
              <div className="relative w-full h-full">
                <div className="absolute top-6 left-0 w-full text-center px-4 select-none">
                  <div className="text-[0.65rem] font-bold text-[#5C7146] uppercase tracking-[0.15em] mb-1">Phase 01</div>
                  <h3 className="text-lg font-serif font-bold text-[#403011]">Assessment</h3>
                  <p className="text-[0.78rem] text-[#4A4333] font-serif max-w-[160px] mx-auto leading-snug mt-1">
                    Psychometric evaluation surfaces your unique strengths.
                  </p>
                </div>
                <div className="absolute top-[192px] left-1/2 -translate-x-1/2 z-10">
                  <div className="relative w-14 h-14 rounded-full bg-[#5C7146] border-4 border-[#F6EBD4] shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 2 — pin on hilltop at Y≈80, bottom label */}
              <div className="relative w-full h-full">
                <div className="absolute top-[36px] left-1/2 -translate-x-1/2 z-10">
                  <div className="relative w-14 h-14 rounded-full bg-[#5C7146] border-4 border-[#F6EBD4] shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-6 left-0 w-full text-center px-4 select-none">
                  <div className="text-[0.65rem] font-bold text-[#5C7146] uppercase tracking-[0.15em] mb-1">Phase 02</div>
                  <h3 className="text-lg font-serif font-bold text-[#403011]">Research</h3>
                  <p className="text-[0.78rem] text-[#4A4333] font-serif max-w-[160px] mx-auto leading-snug mt-1">
                    Skill-building, literature reviews, and deep-dives.
                  </p>
                </div>
              </div>

              {/* Step 3 — top label, pin at valley Y≈280 */}
              <div className="relative w-full h-full">
                <div className="absolute top-6 left-0 w-full text-center px-4 select-none">
                  <div className="text-[0.65rem] font-bold text-[#5C7146] uppercase tracking-[0.15em] mb-1">Phase 03</div>
                  <h3 className="text-lg font-serif font-bold text-[#403011]">Creation</h3>
                  <p className="text-[0.78rem] text-[#4A4333] font-serif max-w-[160px] mx-auto leading-snug mt-1">
                    Publications, filed patents, policy drafts.
                  </p>
                </div>
                <div className="absolute top-[192px] left-1/2 -translate-x-1/2 z-10">
                  <div className="relative w-14 h-14 rounded-full bg-[#5C7146] border-4 border-[#F6EBD4] shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 4 — pin at hilltop Y≈80, bottom label */}
              <div className="relative w-full h-full">
                <div className="absolute top-[36px] left-1/2 -translate-x-1/2 z-10">
                  <div className="relative w-14 h-14 rounded-full bg-[#DCA543] border-4 border-[#F6EBD4] shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-6 left-0 w-full text-center px-4 select-none">
                  <div className="text-[0.65rem] font-bold text-[#DCA543] uppercase tracking-[0.15em] mb-1">Phase 04</div>
                  <h3 className="text-lg font-serif font-bold text-[#403011]">Placement</h3>
                  <p className="text-[0.78rem] text-[#4A4333] font-serif max-w-[160px] mx-auto leading-snug mt-1">
                    Apprenticeships, Ivy applications, network placement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── MOBILE TIMELINE ── */}
          <div className="lg:hidden relative mt-8">
            {/* Vertical connector line */}
            <div className="absolute left-7 top-7 bottom-7 w-0.5 bg-[#5C7146]/30 z-0" />

            <div className="flex flex-col gap-0">
              {[
                {
                  step: "01", title: "Assessment", desc: "Psychometric evaluation surfaces your unique strengths, learning style, and intellectual passions.",
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                },
                {
                  step: "02", title: "Research", desc: "Skill-building, literature reviews, and deep-dives into your chosen domain.",
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                },
                {
                  step: "03", title: "Creation", desc: "Publications, filed patents, policy drafts, and working prototypes.",
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                },
                {
                  step: "04", title: "Placement", desc: "Apprenticeships, Ivy applications, and professional network placement.", gold: true,
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>
                },
              ].map(({ step, title, desc, icon, gold }) => (
                <div key={title} className="relative flex items-start gap-5 pb-8 last:pb-0 z-10">
                  <div className={`shrink-0 w-14 h-14 rounded-full border-4 border-[#F6EBD4] shadow-md flex items-center justify-center text-white ${gold ? "bg-[#DCA543]" : "bg-[#5C7146]"}`}>
                    {icon}
                  </div>
                  <div className="pt-2.5">
                    <div className={`text-[0.65rem] font-bold uppercase tracking-[0.15em] mb-0.5 ${gold ? "text-[#DCA543]" : "text-[#5C7146]"}`}>Phase {step}</div>
                    <h3 className="text-base font-serif font-bold text-[#403011]">{title}</h3>
                    <p className="text-sm text-[#4A4333] font-serif leading-snug mt-0.5 max-w-[260px]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom pull-quote */}
          <div className="mt-16 sm:mt-20 relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-[#4A4333]/12" />
            </div>
            <div className="relative flex justify-center">
              <div className="bg-[#EAE2CE] px-8 py-5 rounded-2xl border border-[#4A4333]/10 max-w-2xl text-center shadow-sm">
                <p className="text-[15px] sm:text-base text-[#403011] font-serif leading-relaxed italic">
                  "Every phase builds on the last — so by the time you apply, Harvard isn't reading a resume. They're reading a story."
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          UNIQUE APPROACH: BEYOND GRADES
      ══════════════════════════════ */}
      <section className="w-full bg-[#F6EBD4] py-20 sm:py-28 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#403011] tracking-tight leading-[1.1] mt-2 mb-6">
              Beyond Grades
            </h2>
            <p className="text-base sm:text-[1.05rem] text-[#4A4333] font-serif leading-relaxed">
              Foundational mastery, academic depth, and demonstrated impact: the pillars Ivy admissions committees never forget. Here is what we actually build with our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
            
            {/* Card 1 */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#4A4333]/10 shadow-lg group">
                <Image src="/images/how_it_works/HowItWorks_SkillsDevelopment.png" alt="Skills Development" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#403011]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] font-bold text-[#DCA543] tracking-widest uppercase mb-3">01 · Skills Academy</span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#403011] mb-5 leading-tight">Skills Development</h3>
                <p className="text-sm sm:text-base text-[#4A4333] font-serif leading-relaxed mb-8">
                  Every EpicQuest journey begins at the Skills Academy. Students enrol in a Flagship Program — spanning AI/ML & Data Science, Applied Finance, Robotics & Drone Science, Biotech, Policy & Diplomacy, or Research & Patent Incubation — building the domain knowledge and skills needed to produce world-class work.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#4A4333]/10 shadow-lg group">
                <Image src="/images/how_it_works/HowItWorks_AppliedResearch.png" alt="Applied Research" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#403011]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[12px] font-bold text-[#DCA543] tracking-widest uppercase mb-3">02 · Publications</span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#403011] mb-5 leading-tight">Applied Research</h3>
                <p className="text-sm sm:text-base text-[#4A4333] font-serif leading-relaxed mb-8">
                  Students conduct original, publishable research in their chosen field, guided by expert mentors — who are IIT scientists or other Ivy League trained industry practitioners — and aligned to psychometric profiles.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#4A4333]/10 shadow-lg group">
                <Image src="/images/how_it_works/HowItWorks_PrototypeDevelopment.png" alt="Prototype Development" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#403011]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[12px] font-bold text-[#DCA543] tracking-widest uppercase mb-3">03 · Patents</span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#403011] mb-5 leading-tight">Prototype Development</h3>
                <p className="text-sm sm:text-base text-[#4A4333] font-serif leading-relaxed mb-8">
                  From idea to working prototype — students learn to solve real problems with tangible, demonstrable solutions that stand apart in any application. We help students file patents to protect their IP.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#4A4333]/10 shadow-lg group">
                <Image src="/images/how_it_works/HowItWorks_PolicyDrafting.png" alt="Policy Drafting" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#403011]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[12px] font-bold text-[#DCA543] tracking-widest uppercase mb-3">04 · Civic Impact</span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#403011] mb-5 leading-tight">Policy Drafting</h3>
                <p className="text-sm sm:text-base text-[#4A4333] font-serif leading-relaxed mb-8">
                  Published policy drafts on social, environmental, or technological issues — showcasing civic engagement and analytical rigour that admissions committees prize above all else.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ══════════════════════════════
          FINAL CTA — REDESIGNED
      ══════════════════════════════ */}
      <section className="w-full bg-[#F6EBD4] py-20 sm:py-28 relative overflow-hidden">
        {/* Dot grid */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(#4A4333_1px,transparent_1px)]
                     [background-size:24px_24px] opacity-[0.03] pointer-events-none"
        />

        <div className="max-w-5xl mx-auto px-5 sm:px-8 relative">
          <div
            className="relative overflow-hidden bg-gradient-to-br
                       from-[#2D3E1C] via-[#374D23] to-[#455434]
                       rounded-[2.5rem] px-8 py-16 sm:px-16 sm:py-20
                       shadow-2xl border border-[#5C7146]/20"
          >
            {/* Decorative corner arcs */}
            <div
              aria-hidden
              className="absolute top-0 right-0 w-64 h-64 rounded-full
                         border border-[#DCA543]/10 -translate-y-1/2 translate-x-1/2"
            />
            <div
              aria-hidden
              className="absolute top-0 right-0 w-44 h-44 rounded-full
                         border border-[#DCA543]/8 -translate-y-1/3 translate-x-1/3"
            />
            <div
              aria-hidden
              className="absolute bottom-0 left-0 w-80 h-80 rounded-full
                         bg-[#F6EBD4]/4 blur-3xl translate-y-1/2 -translate-x-1/4"
            />

            <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6">
                GET STARTED
              </span>

              <h2
                className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium
                           text-[#F6EBD4] tracking-tight leading-[1.15] mb-5"
              >
                Your Portfolio Journey Begins With One Conversation.
              </h2>

              <div className="w-12 h-px bg-[#DCA543]/60 mb-7" />

              <p
                className="text-base sm:text-lg text-[#F6EBD4]/80 font-serif leading-relaxed
                           italic max-w-xl mb-10"
              >
                Book your free diagnostic consultation today. We'll map out a personalised roadmap to the world's top universities — built entirely around you.
              </p>

              {/* Two CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 items-center mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4
                             bg-[#DCA543] hover:bg-[#E8B555] text-[#2D3E1C]
                             rounded-full font-bold text-sm sm:text-base
                             transition-all duration-300 shadow-lg
                             hover:shadow-[0_8px_30px_rgba(220,165,67,0.35)]"
                >
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4
                             border border-[#F6EBD4]/25 text-[#F6EBD4]
                             hover:bg-[#F6EBD4]/10 hover:border-[#F6EBD4]/40
                             rounded-full font-semibold text-sm sm:text-base
                             transition-all duration-300"
                >
                  Explore Programs
                </Link>
              </div>

              {/* Trust signals (adapted for dark theme) */}
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                {["No commitment required", "60-min deep-dive session", "Expert advisor assigned"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#DCA543] flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-[#2D3E1C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[12px] sm:text-[13px] text-[#F6EBD4]/80 font-serif">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
