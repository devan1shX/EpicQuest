import Image from "next/image";
import Link from "next/link";

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
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#566544]/12 text-[#566544] text-[11px] font-bold uppercase tracking-[0.12em] border border-[#566544]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#566544] inline-block animate-pulse" />
                  Our Process
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
      <section className="w-full bg-[#F6EBD4] py-20 sm:py-28 border-t border-[#4A4333]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Section Header */}
          <div className="mb-16 sm:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <span className="uppercase tracking-[0.16em] text-[10px] sm:text-[11px] font-bold text-[#566544] bg-[#566544]/10 px-3 py-1 rounded-full mb-4 inline-block border border-[#566544]/20">
                The Journey
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-serif font-medium text-[#403011] tracking-tight leading-[1.1] mt-2">
                Four Phases. One Cohesive Story.
              </h2>
            </div>
            <p className="text-sm sm:text-[15px] text-[#4A4333] font-serif leading-relaxed max-w-xs">
              A structured journey built for admissions officers who see thousands of applications.
            </p>
          </div>

          {/* Phase Cards — Horizontal staggered layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: "01",
                title: "Assessment",
                subtitle: "Know Thyself",
                desc: "Psychometric evaluation surfaces your unique strengths, learning style, and intellectual passions — the foundation every strategy is built on.",
                accent: "#5C7146",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
              },
              {
                num: "02",
                title: "Research",
                subtitle: "Build Mastery",
                desc: "Skill-building, literature reviews, and deep-dives into your chosen domain — guided by IIT scientists and Ivy-trained practitioners.",
                accent: "#5C7146",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
              {
                num: "03",
                title: "Creation",
                subtitle: "Make an Impact",
                desc: "Publications, filed patents, policy drafts, and working prototypes — real outputs that prove your intellectual depth.",
                accent: "#DCA543",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                num: "04",
                title: "Placement",
                subtitle: "Open Doors",
                desc: "Apprenticeships, Ivy applications, and professional network placement — turning your portfolio into acceptances.",
                accent: "#DCA543",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((phase, i) => (
              <div
                key={phase.num}
                className="group relative flex flex-col bg-[#FDFBF7] rounded-3xl border border-[#4A4333]/8 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Top color bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: phase.accent }}
                />

                <div className="flex flex-col flex-1 p-7 sm:p-8">
                  {/* Phase number + icon row */}
                  <div className="flex items-center justify-between mb-7">
                    <span
                      className="text-[11px] font-black uppercase tracking-[0.18em]"
                      style={{ color: phase.accent }}
                    >
                      Phase {phase.num}
                    </span>
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: phase.accent }}
                    >
                      {phase.icon}
                    </div>
                  </div>

                  {/* Title + subtitle */}
                  <h3 className="text-2xl sm:text-[1.6rem] font-serif font-semibold text-[#403011] leading-tight mb-1">
                    {phase.title}
                  </h3>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#566544] mb-4">
                    {phase.subtitle}
                  </p>

                  {/* Divider */}
                  <div className="w-10 h-px bg-[#DCA543]/50 mb-5" />

                  {/* Description */}
                  <p className="text-[13.5px] text-[#4A4333] font-serif leading-relaxed flex-1">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
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
          
          <div className="max-w-3xl mx-auto text-center mb-20 sm:mb-28">
            <span className="uppercase tracking-[0.14em] text-[10px] sm:text-[11px] font-bold text-[#566544] bg-[#566544]/10 px-3 py-1 rounded-full mb-4 inline-block border border-[#566544]/20">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#403011] tracking-tight leading-[1.1] mt-2 mb-6">
              Beyond Grades
            </h2>
            <p className="text-base sm:text-[1.05rem] text-[#4A4333] font-serif leading-relaxed">
              Foundational mastery, academic depth, and demonstrated impact: the pillars Ivy admissions committees never forget. Here is what we actually build with our students.
            </p>
          </div>

          <div className="flex flex-col gap-20 sm:gap-32">
            
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
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
                <div className="w-12 h-0.5 bg-[#566544]/40" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#4A4333]/10 shadow-lg group order-1 md:order-2">
                <Image src="/images/how_it_works/HowItWorks_AppliedResearch.png" alt="Applied Research" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#403011]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col order-2 md:order-1">
                <span className="text-[12px] font-bold text-[#DCA543] tracking-widest uppercase mb-3">02 · Publications</span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#403011] mb-5 leading-tight">Applied Research</h3>
                <p className="text-sm sm:text-base text-[#4A4333] font-serif leading-relaxed mb-8">
                  Students conduct original, publishable research in their chosen field, guided by expert mentors — who are IIT scientists or other Ivy League trained industry practitioners — and aligned to psychometric profiles.
                </p>
                <div className="w-12 h-0.5 bg-[#566544]/40" />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#4A4333]/10 shadow-lg group">
                <Image src="/images/how_it_works/HowItWorks_PrototypeDevelopment.png" alt="Prototype Development" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#403011]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] font-bold text-[#DCA543] tracking-widest uppercase mb-3">03 · Patents</span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#403011] mb-5 leading-tight">Prototype Development</h3>
                <p className="text-sm sm:text-base text-[#4A4333] font-serif leading-relaxed mb-8">
                  From idea to working prototype — students learn to solve real problems with tangible, demonstrable solutions that stand apart in any application. We help students file patents to protect their IP.
                </p>
                <div className="w-12 h-0.5 bg-[#566544]/40" />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#4A4333]/10 shadow-lg group order-1 md:order-2">
                <Image src="/images/how_it_works/HowItWorks_PolicyDrafting.png" alt="Policy Drafting" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#403011]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col order-2 md:order-1">
                <span className="text-[12px] font-bold text-[#DCA543] tracking-widest uppercase mb-3">04 · Civic Impact</span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#403011] mb-5 leading-tight">Policy Drafting</h3>
                <p className="text-sm sm:text-base text-[#4A4333] font-serif leading-relaxed mb-8">
                  Published policy drafts on social, environmental, or technological issues — showcasing civic engagement and analytical rigour that admissions committees prize above all else.
                </p>
                <div className="w-12 h-0.5 bg-[#566544]/40" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          APPRENTICESHIPS & INTERNSHIPS — REDESIGNED
      ══════════════════════════════ */}
      <section className="relative w-full py-20 sm:py-28 overflow-hidden border-t border-[#4A4333]/10">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/how_it_works/HowItWorks_Apprenticeships_&_Internships_bg.png"
            alt="Apprenticeships Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#F6EBD4]/90" />
          {/* Subtle dot texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#566544_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Two-column header layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-16 sm:mb-20">
            <div>
              <span className="uppercase tracking-[0.14em] text-[10px] sm:text-[11px] font-bold text-[#566544] bg-[#566544]/10 px-3 py-1 rounded-full mb-5 inline-block border border-[#566544]/20">
                Phase 04 · Placement
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#403011] tracking-tight leading-[1.1] mt-2">
                Apprenticeships &<br />Internships
              </h2>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-12 h-0.5 bg-[#DCA543]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#DCA543]">Hands-On Experience</span>
              </div>
            </div>

            <div className="flex items-center">
              <p className="text-[15px] sm:text-base text-[#4A4333] font-serif leading-[1.85] text-justify">
                Classroom learning is only the beginning. Once equipped with knowledge, skills, frameworks, and mindset from applied research, prototype development, and policy drafting, our students are ready to add real value. EpicQuest places them in meaningful apprenticeships with startups, research labs, policy organisations, and industry leaders — building professional networks and real credentials before college even begins.
              </p>
            </div>
          </div>

          {/* Three placement tracks — redesigned as large bordered panels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                label: "Track A",
                title: "Research Labs",
                desc: "Work alongside university professors and industry researchers on live, funded projects with real-world implications.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                highlight: "University & Industry Labs",
              },
              {
                label: "Track B",
                title: "Policy Organisations",
                desc: "Intern with NGOs, think tanks, or government advisory bodies — developing the civic voice that top universities value.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                ),
                highlight: "NGOs, Think Tanks & Gov't",
              },
              {
                label: "Track C",
                title: "Startups & Tech Firms",
                desc: "Gain entrepreneurial experience in fast-paced, innovation-driven environments — and leave with a track record, not just a title.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316v.192" />
                  </svg>
                ),
                highlight: "Startups & Innovators",
              },
            ].map((track, i) => (
              <div
                key={track.title}
                className="group relative flex flex-col bg-[#FDFBF7]/80 backdrop-blur-sm rounded-3xl border border-[#4A4333]/10 p-7 sm:p-8 hover:bg-[#FDFBF7] hover:border-[#DCA543]/30 hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#5C7146]/5 rounded-bl-[4rem] group-hover:bg-[#DCA543]/8 transition-colors duration-500" />

                <div className="mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#DCA543]">{track.label}</span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#5C7146]/10 text-[#5C7146] flex items-center justify-center mb-6 group-hover:bg-[#5C7146] group-hover:text-white transition-all duration-300">
                  {track.icon}
                </div>

                <h3 className="text-xl sm:text-[1.35rem] font-serif font-semibold text-[#403011] mb-2 leading-snug">
                  {track.title}
                </h3>

                <p className="text-[10px] font-bold uppercase tracking-widest text-[#566544] mb-4">
                  {track.highlight}
                </p>

                <div className="w-8 h-px bg-[#DCA543]/60 mb-5" />

                <p className="text-[13.5px] text-[#4A4333] font-serif leading-relaxed flex-1">
                  {track.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          FINAL CTA — REDESIGNED
      ══════════════════════════════ */}
      <section className="w-full bg-[#EAE2CE] py-20 sm:py-28 border-t border-[#4A4333]/10 overflow-hidden relative">

        {/* Decorative rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#566544]/8 pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-[#DCA543]/10 pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full border border-[#566544]/10 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">

          <span className="uppercase tracking-[0.16em] text-[10px] sm:text-[11px] font-bold text-[#566544] bg-[#566544]/10 px-3 py-1 rounded-full mb-7 inline-block border border-[#566544]/20">
            Get Started
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-serif font-medium text-[#403011] tracking-tight leading-[1.12] mb-5">
            Your Portfolio Journey<br className="hidden sm:inline" /> Begins With One Conversation.
          </h2>

          <p className="text-base sm:text-[1.05rem] text-[#4A4333] font-serif leading-relaxed max-w-lg mx-auto mb-10">
            Book your free diagnostic consultation today. We'll map out a personalised roadmap to the world's top universities — built entirely around you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-[#DCA543] hover:bg-[#E8B555] text-[#2D3E1C] rounded-full font-bold text-sm sm:text-[15px] transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(220,165,67,0.4)] hover:-translate-y-0.5 group"
            >
              Book Free Consultation
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#4A4333]/25 hover:border-[#566544]/50 text-[#403011] rounded-full font-semibold text-sm sm:text-[15px] transition-all duration-300 hover:bg-[#566544]/6"
            >
              Explore Programs
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {["No commitment required", "60-min deep-dive session", "Expert advisor assigned"].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#5C7146] flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[12px] sm:text-[13px] text-[#4A4333] font-serif">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
