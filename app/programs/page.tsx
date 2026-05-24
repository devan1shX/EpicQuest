"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Microscope, Cpu, ScrollText, FileBadge, GraduationCap, Brain, ArrowRight, CheckCircle2, Clock, BarChart3 } from "lucide-react";

const stats = [
  { value: "6", label: "Bespoke Programs" },
  { value: "100%", label: "Custom-Designed" },
  { value: "1:1", label: "Expert Mentorship" },
  { value: "360°", label: "Portfolio Building" },
];

const programs = [
  {
    id: "research",
    num: "01",
    title: "Applied Research Publications",
    tagline: "FOR ASPIRING ACADEMICS & SCHOLARS",
    desc: "Produce peer-reviewed papers in STEM, social sciences, or humanities with full editorial and mentor support.",
    longDesc: "Work 1:1 with seasoned researchers and PhD mentors to formulate a novel hypothesis, conduct literature reviews, and write a publication-ready paper. We guide you from initial citation mapping all the way to submission in recognized peer-reviewed journals.",
    href: "/programs/applied-research",
    icon: Microscope,
    outcomes: [
      "Co-authored paper in peer-reviewed journals",
      "PhD-authored letter of recommendation",
      "Rigorous academic research methodology training"
    ],
    timeline: "12 - 16 Weeks",
    intensity: "High (Research Focus)"
  },
  {
    id: "prototype",
    num: "02",
    title: "Prototype Development",
    tagline: "FOR THE BUILDERS, ENGINEERS & INNOVATORS",
    desc: "Build working prototypes in hardware, software, industrial design, or biotechnology.",
    longDesc: "Translate theoretical concepts into tangible, physical or digital assets. Under the guidance of professional engineers and lab directors, you will design, iterate, and produce a fully functioning MVP or hardware prototype to solve a real-world issue.",
    href: "/programs/prototype-development",
    icon: Cpu,
    outcomes: [
      "Working digital MVP or hardware prototype",
      "Full engineering design document (EDD)",
      "Technical video demonstration & portfolio link"
    ],
    timeline: "10 - 14 Weeks",
    intensity: "Hands-on / Technical"
  },
  {
    id: "policy",
    num: "03",
    title: "Published Policy Drafts",
    tagline: "FOR THE FUTURE DIPLOMATS & SOCIAL SCIENTISTS",
    desc: "Author comprehensive policy briefs submitted to think tanks, NGOs, or government portals.",
    longDesc: "Research global or regional socioeconomic challenges. Author high-quality policy proposals, white papers, or advocacy drafts. Your final document is formatted to professional standards and submitted to active think tanks and government advocacy portals.",
    href: "/programs/policy-drafts",
    icon: ScrollText,
    outcomes: [
      "Formal policy draft submitted to official portals",
      "Comprehensive socioeconomic data analysis",
      "Advocacy campaign outline & public presentation"
    ],
    timeline: "8 - 12 Weeks",
    intensity: "Analytical / Writing"
  },
  {
    id: "patent",
    num: "04",
    title: "Patent Filing Support",
    tagline: "FOR THE INVENTORS & FUTURE FOUNDERS",
    desc: "Navigate the full patent application process for truly original inventions and designs.",
    longDesc: "Protect your intellectual property. Our team helps you conduct patent searches, draft professional utility or design patent applications, and complete the preliminary filing process with the USPTO/IPO.",
    href: "/programs/patent-filing",
    icon: FileBadge,
    outcomes: [
      "Drafted provisional patent application (USPTO/IPO)",
      "Exhaustive prior art search documentation",
      "Commercialization & IP protection strategy"
    ],
    timeline: "14 - 18 Weeks",
    intensity: "Legal / Technical"
  },
  {
    id: "apprenticeship",
    num: "05",
    title: "Apprenticeships & Internships",
    tagline: "FOR FUTURE LEADERS & CORPORATE PIONEERS",
    desc: "Gain hands-on experience with research labs, startups, and policy organisations.",
    longDesc: "Step into the professional arena. Secure a highly selective placement with our network of research labs, advanced tech startups, or global non-profit institutions. Gain real-world deliverables that validate your career path.",
    href: "/programs/apprenticeships",
    icon: GraduationCap,
    outcomes: [
      "Verifiable corporate or research lab internship",
      "Industry reference letter & certificate",
      "Direct project management experience"
    ],
    timeline: "6 - 10 Weeks",
    intensity: "Professional / Immersive"
  },
  {
    id: "psychometric",
    num: "06",
    title: "Psychometric Profiling",
    tagline: "FOR FOUNDATIONAL DIRECTION & STRENGTH ALIGNMENT",
    desc: "Discover your unique cognitive strengths and align your academic portfolio accordingly.",
    longDesc: "Establish a scientific baseline for your interests. Through custom-designed, proprietary diagnostic assessments, uncover your unique analytical, creative, and leadership strengths to map out the ideal university major and career path.",
    href: "/programs/psychometric-profiling",
    icon: Brain,
    outcomes: [
      "Comprehensive 30+ page diagnostic strength report",
      "1:1 advisory debrief session with partners",
      "Tailored academic roadmap for the next 2-4 years"
    ],
    timeline: "2 - 3 Weeks",
    intensity: "Self-Discovery"
  }
];

export default function ProgramsPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeProg = programs[activeIdx];
  const ActiveIcon = activeProg.icon;
  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen overflow-x-hidden">
      
      {/* ══════════════════════════════
          HERO SECTION (Consistent Template)
      ══════════════════════════════ */}
      <section className="relative w-full overflow-hidden">
        {/* Ambient blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full
                        bg-[#566544]/5 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full
                        bg-[#DCA543]/8 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#566544_1px,transparent_1px)]
                        [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 sm:pt-28 pb-16 sm:pb-20">

          {/* Headline + stats two-column */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-end">
            
            <div className="grid grid-cols-1 grid-rows-1 col-span-1 lg:col-span-1">
              
              {/* Invisible Team Page Hero Content Placeholder (forces exact same height/width as Team Hero) */}
              <div className="col-start-1 row-start-1 invisible select-none pointer-events-none opacity-0">
                {/* Pill */}
                <div className="mb-7">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                                   bg-[#566544]/12 text-[#566544] text-[11px] font-bold uppercase
                                   tracking-[0.12em] border border-[#566544]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#566544] inline-block" />
                    The People Behind EpicQuest
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem]
                               font-serif font-medium text-[#403011] tracking-tight
                               leading-[1.08] mb-5">
                  Meet the{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">Minds</span>
                    <svg className="absolute -bottom-1.5 left-0 w-full" height="8"
                         viewBox="0 0 120 8" preserveAspectRatio="none" fill="none">
                      <path d="M2 6 Q30 2 60 5 Q90 8 118 3"
                            stroke="#DCA543" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </span>{" "}
                  Shaping Your Future
                </h1>
                <p className="text-base sm:text-lg text-[#4A4333] font-serif leading-relaxed
                              border-l-2 border-[#DCA543] pl-5">
                  World-class educators, researchers, and strategists — united by one mission:
                  your success. Decades of combined experience from Ivy League institutions,
                  IITs, and global industry.
                </p>
              </div>

              {/* Visible Programs Page Hero Content */}
              <div className="col-start-1 row-start-1 animate-fade-up">
                {/* Pill */}
                <div className="mb-7">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                                   bg-[#566544]/12 text-[#566544] text-[11px] font-bold uppercase
                                   tracking-[0.12em] border border-[#566544]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#566544] inline-block animate-pulse" />
                    THE EPICQUEST LAUNCHPAD
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem]
                               font-serif font-medium text-[#403011] tracking-tight
                               leading-[1.08] mb-5">
                  Everything We{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">Offer</span>
                    <svg className="absolute -bottom-1.5 left-0 w-full" height="8"
                         viewBox="0 0 120 8" preserveAspectRatio="none" fill="none">
                      <path d="M2 6 Q30 2 60 5 Q90 8 118 3"
                            stroke="#DCA543" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-[#4A4333] font-serif leading-relaxed
                              border-l-2 border-[#DCA543] pl-5 max-w-lg">
                  Choose your path — every program is designed to build a world-class university portfolio. Six paths. One destination.
                </p>
              </div>

            </div>

            {/* Stats — 2×2 on all screens */}
            <div className="grid grid-cols-2 gap-4 animate-fade-up delay-150">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col p-5 sm:p-6 bg-[#FDFBF7] rounded-2xl
                               border border-[#4A4333]/8 shadow-sm">
                  <span className="text-3xl sm:text-4xl font-serif font-semibold
                                   text-[#403011] leading-none mb-1.5">
                    {s.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#8A8373] font-serif
                                   uppercase tracking-wider leading-snug">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PROGRAMS INTERACTIVE SHOWCASE SECTION
      ══════════════════════════════ */}
      <section className="relative w-full bg-[#F6EBD4] pb-16 sm:pb-24 border-t border-[#4A4333]/10 z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 animate-fade-up">
            <div>
              <span className="uppercase tracking-[0.14em] text-[11px] font-bold text-[#566544]
                               bg-[#566544]/10 px-3 py-1 rounded-full mb-4 inline-block border border-[#566544]/15">
                EXPERTLY CURATED PATHWAYS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium
                             text-[#403011] tracking-tight leading-tight">
                Our Programs
              </h2>
            </div>
            <p className="text-base text-[#4A4333] font-serif leading-relaxed max-w-md">
              Discover six custom-designed, psychometric-aligned pathways structured to build a world-class admissions portfolio.
            </p>
          </div>

          {/* Interactive Showcase Container */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-8 lg:gap-12 items-start min-h-[600px]">
            
            {/* Left Nav Pane (Pills on desktop, scrollbar on mobile) */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 lg:gap-2.5 
                            scrollbar-none -mx-5 px-5 lg:mx-0 lg:px-0 sticky top-6 z-20">
              {programs.map((prog, idx) => {
                const Icon = prog.icon;
                const isActive = activeIdx === idx;
                
                return (
                  <button
                    key={prog.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`flex items-center gap-4 text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 shrink-0 lg:shrink 
                                ${isActive 
                                  ? "bg-[#566544] border-[#566544] text-[#FDFBF7] shadow-md shadow-[#566544]/15 translate-x-1 lg:translate-x-2" 
                                  : "bg-[#FDFBF7] hover:bg-[#FDFBF7]/80 border-[#4A4333]/8 text-[#403011] hover:border-[#4A4333]/15"
                                }`}
                  >
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-300 
                                    ${isActive ? "bg-[#FDFBF7]/10 text-[#DCA543]" : "bg-[#566544]/8 text-[#566544]"}`}>
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex flex-col">
                      <span className={`text-[10px] uppercase font-bold tracking-wider mb-0.5 
                                      ${isActive ? "text-[#DCA543]" : "text-[#8A8373]"}`}>
                        Program {prog.num}
                      </span>
                      <span className="text-sm sm:text-base font-serif font-semibold leading-snug">
                        {prog.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Showcase Detail Pane */}
            <div className="relative bg-[#FDFBF7] rounded-[2.5rem] border border-[#4A4333]/8 p-8 sm:p-12 lg:p-16 
                            shadow-md min-h-[500px] overflow-hidden flex flex-col justify-between transition-all duration-500 animate-fade-up">
              
              {/* Giant Watermark Graphic in bottom right */}
              <div className="absolute right-[-5%] bottom-[-5%] pointer-events-none select-none overflow-hidden opacity-[0.03] text-[#566544]">
                <ActiveIcon className="w-96 h-96 transition-transform duration-1000 rotate-12 scale-110" strokeWidth={0.5} />
              </div>

              <div className="relative z-10">
                {/* Tagline / Pill */}
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                                   bg-[#DCA543]/12 text-[#7A6030] text-[10px] font-bold uppercase
                                   tracking-[0.08em] border border-[#DCA543]/20">
                    {activeProg.tagline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#403011] tracking-tight leading-none mb-6">
                  {activeProg.title}
                </h3>

                {/* Long description */}
                <p className="text-base sm:text-lg text-[#4A4333] font-serif leading-relaxed mb-8 max-w-2xl">
                  {activeProg.longDesc}
                </p>

                {/* Deliverables / Outcomes */}
                <div className="border-t border-[#4A4333]/8 pt-8 mb-8">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#8A8373] mb-4">
                    Key Outcomes &amp; Deliverables
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeProg.outcomes.map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#566544] shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-[14px] sm:text-[15px] text-[#4A4333] font-serif leading-snug">
                          {outcome}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Metadata & CTA */}
              <div className="relative z-10 border-t border-[#4A4333]/8 pt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
                
                {/* Specs */}
                <div className="flex gap-8">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-5 h-5 text-[#DCA543]" strokeWidth={2} />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A8373]">Duration</span>
                      <span className="text-xs sm:text-sm font-semibold text-[#403011] font-serif">{activeProg.timeline}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2.5">
                    <BarChart3 className="w-5 h-5 text-[#DCA543]" strokeWidth={2} />
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A8373]">Focus Intensity</span>
                      <span className="text-xs sm:text-sm font-semibold text-[#403011] font-serif">{activeProg.intensity}</span>
                    </div>
                  </div>
                </div>

                {/* Explore Button */}
                <Link
                  href={activeProg.href}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#566544] hover:bg-[#4F5A41] text-[#FDFBF7] rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Explore Details
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
                </Link>

              </div>

            </div>

          </div>

          {/* Consultation CTA */}
          <div className="text-center max-w-2xl mx-auto border-t border-[#4A4333]/10 pt-16 mt-20 animate-fade-up">
            <p className="text-[15px] sm:text-[17px] text-[#4A4333] font-serif leading-relaxed mb-6">
              Not sure which program is right for you? Book a free consultation and we'll map out your personalised plan.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#566544] text-[#FDFBF7] font-semibold text-[13px] uppercase tracking-widest hover:bg-[#4F5A41] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Book Your Free Consultation
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}

  