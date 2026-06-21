"use client";

import WavyUnderline from "@/components/ui/WavyUnderline";
import Image from "next/image";
import Link from "next/link";
import { BrainCircuit, Landmark, Cpu, Globe, Microscope, ArrowRight, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "5", label: "World-Class Fellowships" },
  { value: "1:1", label: "Mentor-Led Builds" },
  { value: "IIT & Ivy", label: "Expert Instructors" },
  { value: "100%", label: "Portfolio Focused" },
];

const fellowships = [
  {
    id: "ai-ml-data-science",
    num: "01",
    title: "AI / ML & Data Science Fellowship",
    desc: "Build machine learning, analytics, and innovation skills.",
    longDesc: "Work at the cutting edge of technological innovation. Master Python, deep learning architectures, and statistical modelling to build and deploy active AI models solving real-world challenges.",
    image: "/images/skills/Skills_Flagship_1.png",
    icon: BrainCircuit,
    href: "/skills/ai-ml-data-science",
    theme: { bgLight: "bg-[#5C7146]/10", bgHover: "group-hover:bg-[#566544]", textNorm: "text-[#5C7146]", textHover: "group-hover:text-white" },
    outcomes: ["Machine learning pipelines", "Generative AI applications", "Predictive data analytics models"],
  },
  {
    id: "applied-finance-investment-banking",
    num: "02",
    title: "Applied Finance & Investment Banking",
    desc: "Learn valuation, financial modelling, and equity research.",
    longDesc: "Delve deep into corporate finance, equity markets, and asset valuation. Build professional-grade investment reports, financial models, and pitch decks under the guidance of elite analysts.",
    image: "/images/skills/Skills_Flagship_2.png",
    icon: Landmark,
    href: "/skills/applied-finance-investment-banking",
    theme: { bgLight: "bg-[#8E8B42]/10", bgHover: "group-hover:bg-[#566544]", textNorm: "text-[#8E8B42]", textHover: "group-hover:text-white" },
    outcomes: ["DCF & LBO valuation models", "Equity research whitepapers", "M&A pitch deck preparation"],
  },
  {
    id: "robotics-drone-science",
    num: "03",
    title: "Robotics & Drone Science Fellowship",
    desc: "Prototype engineering and innovation systems.",
    longDesc: "Bridge the gap between hardware and software. Design, assemble, and program robotic rigs and drone navigation systems, learning CAD modelling, microcontrollers, and IoT integrations.",
    image: "/images/skills/Skills_Flagship_3.png",
    icon: Cpu,
    href: "/skills/robotics-drone-science",
    theme: { bgLight: "bg-[#DCA543]/10", bgHover: "group-hover:bg-[#566544]", textNorm: "text-[#DCA543]", textHover: "group-hover:text-white" },
    outcomes: ["Autonomous drone pathing", "IoT sensor array integrations", "CAD blueprints & physical MVPs"],
  },
  {
    id: "policy-economics-diplomacy",
    num: "04",
    title: "Policy, Economics & Diplomacy Fellowship",
    desc: "Policy research and global leadership exposure.",
    longDesc: "Analyze key global challenges at the intersection of international relations, economics, and law. Draft high-level policy frameworks and whitepapers targeted at active think tanks.",
    image: "/images/skills/Skills_Flagship_4.png",
    icon: Globe,
    href: "/skills/policy-economics-diplomacy",
    theme: { bgLight: "bg-[#A87A43]/10", bgHover: "group-hover:bg-[#566544]", textNorm: "text-[#A87A43]", textHover: "group-hover:text-white" },
    outcomes: ["Geopolitical risk reports", "Published policy drafts", "Economic impact assessments"],
  },
  {
    id: "research-patent-incubator",
    num: "05",
    title: "Research & Patent Incubator",
    desc: "Develop publications, prototypes, and portfolios.",
    longDesc: "Convert your proprietary technology or original research into official intellectual property. Navigate USPTO prior art searches and draft professional utility or design patents.",
    image: "/images/skills/Skills_Flagship_5.png",
    icon: Microscope,
    href: "/skills/research-patent-incubator",
    theme: { bgLight: "bg-[#5C6A46]/10", bgHover: "group-hover:bg-[#566544]", textNorm: "text-[#5C6A46]", textHover: "group-hover:text-white" },
    outcomes: ["Provisional patent drafts", "Exhaustive prior art search documentation", "Intellectual property strategy"],
  },
];

const buildersOutputs = [
  "Research Papers",
  "AI Models",
  "Prototypes",
  "Finance Reports",
  "Policy Papers",
  "Pitch Decks",
  "Patent Concepts",
];

export default function SkillsPage() {
  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen overflow-x-hidden">

      {/* ════ HERO SECTION ════ */}
      <section className="relative w-full overflow-hidden">
        {/* Decorative backdrop elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#566544]/4 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#DCA543]/6 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#566544_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 sm:pt-28 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">

            {/* Left Content Column */}
            <div className="animate-fade-up">
              {/* Luxury Academy Pill */}
              <div>
                <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[11px] sm:text-[12px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                  THE EPICQUEST SKILLS ACADEMY
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-serif font-medium text-[#403011] tracking-tight leading-[1.08] mb-6">
                Our{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Flagship</span>
                  <svg className="absolute -bottom-1.5 left-0 w-full" height="8" viewBox="0 0 120 8" preserveAspectRatio="none" fill="none">
                    <path d="M2 6 Q30 2 60 5 Q90 8 118 3" stroke="#DCA543" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                Programs
              </h1>

              {/* Tagline */}
              <div className="border-l-3 border-[#DCA543] pl-5 sm:pl-6 mb-8 max-w-xl">
                <p className="text-base sm:text-lg text-[#4A4333] font-serif leading-relaxed font-semibold mb-2">
                  Step 1 of Your EpicQuest Journey:
                </p>
                <p className="text-[14.5px] sm:text-base text-[#5A5241] font-serif leading-relaxed">
                  Every EpicQuest student begins their journey by enrolling in one of our five world-class Flagship Programs. These are not courses — they are structured, mentor-led fellowships designed to build domain expertise, produce real deliverables, and create the foundation for a standout Ivy League portfolio.
                </p>
              </div>

              {/* CTA Action buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center text-center gap-2 sm:gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-[#5C7146] hover:bg-[#4A5C38] text-white rounded-full font-serif font-bold text-[13px] sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group shrink-0"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Illustration Column */}
            <div className="relative animate-fade-up delay-150">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[2.5rem] overflow-hidden border-2 border-[#4A4333]/15 shadow-2xl bg-white/40 group">
                <Image
                  src="/images/skills/Skills_Main.png"
                  alt="EpicQuest Skills Academy"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#403011]/30 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ════ STATS SECTION ════ */}
      <section className="w-full bg-[#EAE2CE] py-8 border-t border-b border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#403011]">{s.value}</span>
                <span className="text-[10px] sm:text-xs text-[#6E6759] uppercase font-bold tracking-wider mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ FELLOWSHIPS GRID SECTION ════ */}
      <section className="relative w-full py-20 sm:py-28 border-b border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Header */}
          <div className="max-w-3xl mx-auto text-center sm:mb-24">
            <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[11px] sm:text-[12px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
              EXPLORE OUR PATHWAYS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#403011] tracking-tight leading-[1.1] mt-2 mb-6">
              Our Five <WavyUnderline>Flagship Fellowships</WavyUnderline>
            </h2>
            <p className="text-base sm:text-lg text-[#4A4333] font-serif leading-relaxed max-w-2xl mx-auto">
              Select an area of focus to construct a comprehensive portfolio. Each pathway is fully customized around your psychometric strengths and guided 1:1 by active researchers and IIT specialists.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 items-stretch">
            {fellowships.map((fellow, idx) => {
              const Icon = fellow.icon;
              const isLargeColumn = idx >= 3; // make bottom 2 cards span 3 grid columns on lg screens

              return (
                <div
                  key={fellow.id}
                  className={`group relative flex flex-col bg-[#FDFBF7] rounded-[2.25rem] border border-[#4A4333]/8 shadow-sm overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500
                             ${isLargeColumn ? "lg:col-span-3" : "lg:col-span-2"}`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Aspect ratio frame for image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-[#4A4333]/8 bg-cream/40">
                    <Image
                      src={fellow.image}
                      alt={fellow.title}
                      fill
                      className="object-cover group-hover:scale-104 transition-transform duration-700"
                    />
                    {/* Icon Floating Badge */}
                    <div
                      className={`absolute bottom-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shrink-0 transition-all duration-300 group-hover:scale-105 ${fellow.theme.bgLight} ${fellow.theme.textNorm} ${fellow.theme.bgHover} ${fellow.theme.textHover}`}
                    >
                      <Icon className="w-6 h-6 transition-colors duration-300" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-col flex-1 p-7 sm:p-8 justify-between">
                    <div>
                      {/* Num badge + name */}
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-[10px] font-black uppercase tracking-[0.16em] text-[#5C7146]"
                        >
                          Fellowship {fellow.num}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#403011] leading-tight mb-3">
                        {fellow.title}
                      </h3>

                      <p className="text-sm text-[#4A4333] font-serif leading-relaxed mb-6">
                        {fellow.longDesc}
                      </p>

                      {/* Outcomes */}
                      <div className="border-t border-[#4A4333]/6 pt-5 mb-7">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#8A8373] block mb-3">
                          What you will build
                        </span>
                        <div className="space-y-2">
                          {fellow.outcomes.map((out, outIdx) => (
                            <div key={outIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#5C7146] shrink-0 mt-0.5" strokeWidth={2} />
                              <span className="text-xs sm:text-[13px] text-[#4A4333] font-serif leading-snug">{out}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Explore Link */}
                    <div className="pt-4 border-t border-[#4A4333]/6">
                      <Link
                        href={fellow.href}
                        className="inline-flex items-center gap-2 text-[11px] uppercase font-bold tracking-wider text-[#5C7146] group-hover:text-[#4A5C38] transition-colors duration-300"
                      >
                        Explore Fellowship Details
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ════ WHAT STUDENTS BUILD ticker ════ */}
      <section className="w-full bg-[#403011] py-16 sm:py-20 text-[#F6EBD4] overflow-hidden relative">
        {/* Ambient dot layer */}
        <div className="absolute inset-0 bg-[radial-gradient(#F6EBD4_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center mb-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium tracking-tight mb-2">
            Students Don't Just Learn. They Build.
          </h3>
          <p className="text-sm sm:text-base text-[#D4CBB6] font-serif max-w-lg mx-auto leading-relaxed">
            Admissions boards verify products, not promises. Here are the core portfolio deliverables engineered during our fellowships:
          </p>
        </div>

        {/* Rolling/Staggered Output Pills */}
        <div className="relative w-full overflow-hidden select-none py-2">

          {/* Edge fades */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#403011] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#403011] to-transparent z-10 pointer-events-none" />

          {/* Infinite Marquee Loop */}
          <div className="animate-marquee flex gap-6 py-2 whitespace-nowrap">
            {/* Set 1 */}
            <div className="flex gap-6 shrink-0 items-center">
              {buildersOutputs.map((item, idx) => (
                <span
                  key={idx}
                  className="px-6 py-2.5 rounded-full border border-[#F6EBD4]/15 bg-white/4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F6EBD4] hover:text-white hover:border-[#DCA543]/40 hover:bg-[#FDFBF7]/8 hover:scale-[1.03] transition-all duration-300 pointer-events-auto cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
            {/* Set 2  */}
            <div className="flex gap-6 shrink-0 items-center" aria-hidden="true">
              {buildersOutputs.map((item, idx) => (
                <span
                  key={`dup-${idx}`}
                  className="px-6 py-2.5 rounded-full border border-[#F6EBD4]/15 bg-white/4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F6EBD4] hover:text-white hover:border-[#DCA543]/40 hover:bg-[#FDFBF7]/8 hover:scale-[1.03] transition-all duration-300 pointer-events-auto cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          FINAL ACTION SECTION
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
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[11px] sm:text-[12px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                TAKE THE FIRST STEP
              </span>

              <h2
                className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium
                           text-[#F6EBD4] tracking-tight leading-[1.15] mb-5"
              >
                Master Skills That Define Ivy <WavyUnderline>Leagues</WavyUnderline>
              </h2>

              <p
                className="text-base sm:text-lg text-[#F6EBD4]/80 font-serif leading-relaxed
                           italic max-w-xl mb-10"
              >
                Every elite admission portfolio starts with a strategic diagnostic. Book a free 60-minute diagnostic session to assess your profile and map out the ideal skills pathway.
              </p>

              {/* Two CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center text-center gap-2 sm:gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-[#DCA543] hover:bg-[#E8B555] text-[#2D3E1C] rounded-full font-serif font-bold text-[13px] sm:text-base transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(220,165,67,0.35)] hover:-translate-y-0.5 group shrink-0"
                >
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
