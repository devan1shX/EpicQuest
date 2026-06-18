"use client";

import Image from "next/image";
import Link from "next/link";
import { Microscope, Cpu, ScrollText, FileBadge, GraduationCap, Brain, ArrowRight } from "lucide-react";

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
    title: "Skills Development & Research",
    desc: "Build real academic credentials through our flagship Skills Academy programs — spanning AI/ML, Finance, Robotics, Biotech, Policy, and Research. Develop peer-reviewed publications, prototypes, and innovation portfolios under expert mentorship.",
    href: "/programs/applied-research",
    icon: Microscope,
  },
  {
    id: "prototype",
    num: "02",
    title: "Prototype Development",
    desc: "Engineer working prototypes in hardware, software, industrial design, or biotech. From concept to functional model, students document their build process and present to industry panels — creating tangible proof of innovation.",
    href: "/programs/prototype-development",
    icon: Cpu,
  },
  {
    id: "policy",
    num: "03",
    title: "Published Policy Drafts",
    desc: "Author original policy briefs submitted to real think tanks, NGOs, or government portals. Students engage with live policy challenges and receive editorial guidance from former civil servants and academics.",
    href: "/programs/policy-drafts",
    icon: ScrollText,
  },
  {
    id: "patent",
    num: "04",
    title: "Patent Filing Support",
    desc: "Navigate the full patent application process for truly original inventions — from prior art searches and claims drafting to USPTO/IPO submission. Students emerge with a filed patent application and a deep understanding of IP law.",
    href: "/programs/patent-filing",
    icon: FileBadge,
  },
  {
    id: "apprenticeship",
    num: "05",
    title: "Apprenticeships & Internships",
    desc: "Gain structured, hands-on experience with research labs, funded startups, and policy organisations. Placements are curated to align with each student's portfolio track and university goals.",
    href: "/programs/apprenticeships",
    icon: GraduationCap,
  },
  {
    id: "psychometric",
    num: "06",
    title: "Psychometric Profiling",
    desc: "Discover your unique cognitive strengths, learning style, and intellectual profile through our proprietary assessment. Results are used to align your program selection, mentorship pairing, and portfolio narrative.",
    href: "/programs/psychometric-profiling",
    icon: Brain,
  }
];

export default function ProgramsPage() {
  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen overflow-x-hidden">

      {/* ═══ HERO & CARDS GRID SECTION ═══ */}
      <section className="relative w-full overflow-hidden pb-20 sm:pb-28">

        {/* Ambient blobs & Dot Grid */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full
                        bg-[#566544]/6 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full
                        bg-[#DCA543]/8 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#566544_1px,transparent_1px)]
                        [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-20 sm:pt-28">

          {/* Master Grid: Left (Hero text + Stats) & Right (Cards Grid) */}
          <div className="grid grid-cols-1 xl:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">

            {/* ── LEFT COLUMN: Text & Stats ── */}
            <div className="flex flex-col animate-fade-up">

              {/* Pill */}
              <div className="mb-6">
                <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                  THE EPICQUEST LAUNCHPAD
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem]
                             font-serif font-medium text-[#403011] tracking-tight
                             leading-[1.08] mb-6">
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
                            border-l-2 border-[#DCA543] pl-5 max-w-lg mb-10">
                Choose your path — every program is designed to build a world-class university portfolio that gets you noticed by Ivy League admissions committees. Six paths. One destination.
              </p>

              {/* Stats — Single line on desktop/tablet, 2x2 on mobile */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col p-4 sm:p-5 bg-[#FDFBF7] rounded-2xl
                                 border border-[#4A4333]/10 shadow-sm">
                    <span className="text-2xl sm:text-3xl font-serif font-semibold
                                     text-[#403011] leading-none mb-1.5">
                      {s.value}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-[#8A8373] font-serif
                                     uppercase tracking-wider leading-snug">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* ── RIGHT COLUMN: Program Cards Grid ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 animate-fade-up delay-150 xl:mt-16">
              {programs.map((prog, idx) => {
                const Icon = prog.icon;
                return (
                  <div
                    key={prog.id}
                    className="group relative bg-[#FDFBF7] border border-[#DCA543]/60 rounded-[1.5rem] px-6 sm:px-7 pb-6 sm:pb-7 pt-4 sm:pt-5 flex flex-col hover:shadow-xl hover:border-[#DCA543] transition-all duration-300 h-full"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#566544]/10 text-[#566544] flex items-center justify-center shrink-0 group-hover:bg-[#566544] group-hover:text-[#FDFBF7] transition-colors duration-300">
                        <Icon className="w-5 h-5" strokeWidth={1.8} />
                      </div>
                      <h3 className="text-[17px] sm:text-[19px] font-serif font-semibold text-[#403011] leading-tight">
                        {prog.title}
                      </h3>
                    </div>

                    <p className="text-[13px] sm:text-[14px] text-[#4A4333]/90 font-serif leading-relaxed mb-6 flex-1">
                      {prog.desc}
                    </p>

                    <Link
                      href={prog.href}
                      className="inline-flex items-center gap-2 text-[12px] font-serif italic text-[#8A7340] group-hover:text-[#DCA543] transition-colors duration-300"
                    >
                      <span>Explore details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={2} />
                    </Link>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}