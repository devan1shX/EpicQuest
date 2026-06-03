import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Search,
  ShieldCheck,
  Award,
  CheckCircle,
  Clock,
  BookOpen,
  ArrowRight,
  FileCheck,
  Users,
  TrendingUp,
  Globe,
  Settings,
  ArrowLeft,
  ScrollText,
  PenTool,
} from "lucide-react";

interface StepItem {
  num: string;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const steps: StepItem[] = [
  {
    num: "01",
    title: "Invention Disclosure",
    desc: "Formulate a detailed invention disclosure, documenting the problem solved, unique mechanics, and underlying technical frameworks.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Prior Art Search",
    desc: "Execute an exhaustive database search across USPTO, IPO, and international archives to verify novelty and secure your filing grounds.",
    icon: Search,
  },
  {
    num: "03",
    title: "Patent Claim Drafting",
    desc: "Work with expert advisors to draft the highly precise legal 'claims' that define the boundary and scope of your protection.",
    icon: Settings,
  },
  {
    num: "04",
    title: "Application Assembly",
    desc: "Compile detailed technical drawings, schematics, background descriptions, and formal document bundles ready for patent offices.",
    icon: ShieldCheck,
  },
  {
    num: "05",
    title: "Patent Filing Support",
    desc: "File your provisional or full application with the USPTO or IPO, establishing your official priority date and intellectual property rights.",
    icon: Award,
  },
];

const impactStats = [
  {
    icon: Users,
    value: "<0.1%",
    label: "Applicants with Patents",
    sub: "Rarity in high school applications",
  },
  {
    icon: Clock,
    value: "6–12",
    label: "Months Timeline",
    sub: "Provisional filing in 2–3 months",
  },
  {
    icon: Globe,
    value: "3",
    label: "Patent Types Supported",
    sub: "Utility, Design, Provisional",
  },
  {
    icon: ShieldCheck,
    value: "1:1",
    label: "Expert IP Guidance",
    sub: "Dedicated innovator coaching",
  },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function PatentFilingSupportPage() {
  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen overflow-x-hidden">

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative w-full overflow-hidden border-b border-[#4A4333]/10 pb-20 sm:pb-28 pt-14 sm:pt-20">
        {/* Dot grid */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(#566544_1px,transparent_1px)]
                     [background-size:28px_28px] opacity-[0.055] pointer-events-none"
        />
        {/* Ambient blob */}
        <div
          aria-hidden
          className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full
                     bg-[#566544]/6 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">

          {/* Breadcrumb / Back Navigation */}
          <div className="mb-8 animate-fade-up">
            <Link 
              href="/programs" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#5C7146] hover:text-[#465732] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.5} />
              Back to Programs
            </Link>
          </div>

          {/* Programme badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                             bg-[#566544]/12 text-[#566544] text-[10px] font-bold uppercase
                             tracking-[0.14em] border border-[#566544]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#566544] animate-pulse inline-block" />
              Programme Deep Dive
            </span>
          </div>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.88fr] gap-14 lg:gap-20 items-center">

            {/* ── Left text column ── */}
            <div className="flex flex-col">
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem]
                             font-serif font-medium text-[#403011] tracking-tight
                             leading-[1.07] mb-4">
                Patent Filing
                <br />
                <span className="text-[#566544]">Support &amp; Coaching</span>
              </h1>

              <p className="font-serif text-xl sm:text-2xl text-[#DCA543] italic mb-8 font-medium">
                Invent. Protect. Differentiate.
              </p>

              <div
                className="relative pl-6 border-l-2 border-[#DCA543] space-y-5
                            text-[#4A4333] font-serif text-base sm:text-[17px] leading-relaxed
                            max-w-[560px] mb-10"
              >
                <p>
                  For students with truly original inventions, EpicQuest guides them through the full patent application process—a rare and powerful differentiator in highly competitive university applications. This program is tailored for highly innovative students who have developed or are actively developing an original invention, product, or process, seeking to formalize their intellectual property.
                </p>
                <p className="text-[#4A4333]/80 text-sm sm:text-[15px]">
                  Students receive comprehensive support covering invention disclosure review, in-depth prior art search assistance, expert patent claim drafting, guidance through provisional and full patent filing procedures, and strategic intellectual property coaching.
                </p>
                <p className="text-[#4A4333]/70 text-xs sm:text-sm italic">
                  Fewer than 0.1% of high school applicants nationwide have a filed patent, making this an extraordinary signal of originality, initiative, and advanced problem-solving skills to top-tier university admissions committees.
                </p>
              </div>

              {/* Quick CTA */}
              <Link
                href="/contact"
                className="self-start inline-flex items-center gap-2.5 px-7 py-3.5
                           bg-[#566544] hover:bg-[#455734] text-[#F6EBD4] rounded-full
                           font-semibold text-sm tracking-wide
                           transition-all duration-300 shadow-md hover:shadow-lg
                           hover:shadow-[#566544]/25"
              >
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* ── Right image column ── */}
            <div className="relative">
              {/* Offset decorative slab behind image */}
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 w-full h-full
                           rounded-[2.5rem] bg-[#566544]/12 border border-[#566544]/15"
              />
              {/* Gold accent corner strip */}
              <div
                aria-hidden
                className="absolute -top-3 -left-3 w-20 h-20 rounded-tl-[2rem]
                           border-t-2 border-l-2 border-[#DCA543]"
              />

              <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden
                              border border-[#4A4333]/12 shadow-2xl group">
                <Image
                  src="/images/program/patentFiling/Program_PatentFilingSupport.png"
                  alt="Patent Filing Support"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  priority
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[#403011]/10 opacity-0
                             group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Floating badge over image */}
                <div
                  className="absolute bottom-5 left-5 flex items-center gap-3
                              bg-[#FDFBF7]/95 backdrop-blur-sm rounded-2xl
                              px-4 py-3 shadow-lg border border-[#4A4333]/10"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#DCA543]/15">
                    <Clock className="w-4.5 h-4.5 text-[#DCA543]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#8A8373]">Duration</p>
                    <p className="text-sm font-serif font-semibold text-[#403011]">6 – 12 Months</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ── Impact stats ribbon ── */}
          <div
            className="mt-16 pt-10 border-t border-[#4A4333]/10
                        grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {impactStats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="group flex flex-col gap-1.5 p-5 rounded-2xl
                             bg-[#FDFBF7] border border-[#4A4333]/8
                             hover:border-[#566544]/25 hover:shadow-sm
                             transition-all duration-300"
                >
                  <Icon
                    className="w-5 h-5 text-[#566544] mb-1"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <span className="text-2xl sm:text-3xl font-serif font-semibold text-[#403011]">
                    {s.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#566544]">
                    {s.label}
                  </span>
                  <span className="text-[11px] text-[#8A8373] font-serif leading-snug">
                    {s.sub}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          PROGRAMME SPECS STRIP
      ══════════════════════════════ */}
      <section className="w-full bg-[#566544] py-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {[
              { icon: Clock, text: "6 – 12 Month Timeline" },
              { icon: ScrollText, text: "Utility · Design · Provisional Patents" },
              { icon: BookOpen, text: "USPTO or IPO Filed Status" },
              { icon: Award, text: "1-on-1 Dedicated Advisor" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5 text-[#F6EBD4]">
                <Icon className="w-4 h-4 opacity-75" strokeWidth={1.5} aria-hidden />
                <span className="text-xs sm:text-sm font-medium tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          TIMELINE SECTION
      ══════════════════════════════ */}
      <section className="relative w-full bg-[#F6EBD4] py-20 sm:py-28 border-b border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">

          {/* Section header */}
          <div className="text-center max-w-xl mx-auto mb-20">
            <span
              className="uppercase tracking-[0.14em] text-[10px] font-bold text-[#566544]
                         bg-[#566544]/10 px-3.5 py-1.5 rounded-full mb-5 inline-block
                         border border-[#566544]/15"
            >
              The Portfolio Engine
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium
                         text-[#403011] tracking-tight mb-4"
            >
              Our Patent Blueprint
            </h2>
            <p className="text-sm sm:text-base text-[#4A4333]/80 font-serif leading-relaxed">
              Five structured milestones guiding you from early novelty diagnostics
              to securing your priority filing status.
            </p>
          </div>

          {/* ── Alternating timeline ── */}
          <div className="relative max-w-4xl mx-auto">

            {/* Vertical spine — only visible md+ */}
            <div
              aria-hidden
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px
                         -translate-x-1/2 bg-gradient-to-b from-[#566544]/40
                         via-[#DCA543]/30 to-transparent pointer-events-none"
            />
            {/* Mobile spine */}
            <div
              aria-hidden
              className="md:hidden absolute left-6 top-0 bottom-0 w-px
                         bg-gradient-to-b from-[#566544]/40 via-[#DCA543]/30
                         to-transparent pointer-events-none"
            />

            <div className="space-y-12 sm:space-y-16">
              {steps.map((step, idx) => {
                const StepIcon = step.icon;
                const isLeft = idx % 2 === 0; // even → card on left column

                return (
                  <div
                    key={step.num}
                    className="group relative grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 items-start animate-fade-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {/* ── Spine node (centred on desktop, left on mobile) ── */}
                    <div
                      aria-hidden
                      className="absolute
                                 left-[24px]    top-5      md:left-1/2 md:top-6
                                 -translate-x-1/2 z-10
                                 flex items-center justify-center
                                 w-12 h-12 rounded-full
                                 bg-[#FDFBF7] border-2 border-[#4A4333]/15 shadow-sm
                                 group-hover:scale-110 group-hover:border-[#DCA543] group-hover:bg-[#566544]
                                 group-hover:shadow-[0_0_15px_rgba(220,165,67,0.25)]
                                 transition-all duration-500 ease-out"
                    >
                      <StepIcon className="w-5 h-5 text-[#566544] group-hover:text-[#FDFBF7] transition-colors duration-500" strokeWidth={1.5} />
                    </div>

                    {/* ── Left cell ── */}
                    <div className="hidden md:block md:pr-12">
                      {isLeft && (
                        <div
                          className="relative flex flex-col gap-3 p-7 sm:p-8
                                     bg-[#FDFBF7] rounded-[2rem]
                                     border border-[#4A4333]/8
                                     group-hover:border-[#566544]/25 group-hover:shadow-xl
                                     transition-all duration-500 ease-out overflow-hidden md:text-right"
                        >
                          {/* Watermark number that drifts slightly on hover */}
                          <span
                            aria-hidden
                            className="absolute left-6 bottom-[-10px] text-[8rem] font-serif font-black
                                       text-[#4A4333]/[0.015] group-hover:text-[#DCA543]/[0.035]
                                       leading-none select-none pointer-events-none
                                       group-hover:-translate-y-2 group-hover:scale-105
                                       transition-all duration-700 ease-out"
                          >
                            {step.num}
                          </span>

                          {/* Dynamic Gold right accent bar facing the spine on hover */}
                          <div
                            aria-hidden
                            className="hidden md:block absolute right-0 top-6 bottom-6 w-[3px] bg-transparent
                                       group-hover:bg-[#DCA543] rounded-l-full transition-all duration-500"
                          />
                          {/* Mobile left accent bar */}
                          <div
                            aria-hidden
                            className="md:hidden absolute left-0 top-6 bottom-6 w-[3px] bg-transparent
                                       group-hover:bg-[#DCA543] rounded-r-full transition-all duration-500"
                          />

                          <div className="flex items-center gap-2 md:justify-end">
                            <span className="text-[10px] font-bold text-[#DCA543] uppercase tracking-widest bg-[#DCA543]/8 px-2 py-0.5 rounded">
                              Milestone {step.num}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#403011] tracking-tight leading-snug">
                            {step.title}
                          </h3>

                          <p className="text-[14px] sm:text-[15px] text-[#4A4333]/80 font-serif leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* ── Right cell ── */}
                    <div className="hidden md:block md:pl-12">
                      {!isLeft && (
                        <div
                          className="relative flex flex-col gap-3 p-7 sm:p-8
                                     bg-[#FDFBF7] rounded-[2rem]
                                     border border-[#4A4333]/8
                                     group-hover:border-[#566544]/25 group-hover:shadow-xl
                                     transition-all duration-500 ease-out overflow-hidden"
                        >
                          {/* Watermark number that drifts slightly on hover */}
                          <span
                            aria-hidden
                            className="absolute right-6 bottom-[-10px] text-[8rem] font-serif font-black
                                       text-[#4A4333]/[0.015] group-hover:text-[#566544]/[0.035]
                                       leading-none select-none pointer-events-none
                                       group-hover:-translate-y-2 group-hover:scale-105
                                       transition-all duration-700 ease-out"
                          >
                            {step.num}
                          </span>

                          {/* Dynamic Green left accent bar facing the spine on hover */}
                          <div
                            aria-hidden
                            className="absolute left-0 top-6 bottom-6 w-[3px] bg-transparent
                                       group-hover:bg-[#566544] rounded-r-full transition-all duration-500"
                          />

                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-[#566544] uppercase tracking-widest bg-[#566544]/8 px-2 py-0.5 rounded">
                              Milestone {step.num}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#403011] tracking-tight leading-snug">
                            {step.title}
                          </h3>

                          <p className="text-[14px] sm:text-[15px] text-[#4A4333]/80 font-serif leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Mobile card (always shown, stacked under spine for small viewports) */}
                    <div className="md:hidden col-span-full pl-14 pr-2 -mt-3">
                      <div
                        className="relative flex flex-col gap-3 p-6 sm:p-8
                                   bg-[#FDFBF7] rounded-[2rem]
                                   border border-[#4A4333]/8
                                   group-hover:border-[#566544]/25 group-hover:shadow-xl
                                   transition-all duration-500 ease-out overflow-hidden"
                      >
                        {/* Watermark number */}
                        <span
                          aria-hidden
                          className="absolute right-4 bottom-[-10px] text-[7rem] font-serif font-black
                                     text-[#4A4333]/[0.015] group-hover:text-[#DCA543]/[0.035]
                                     leading-none select-none pointer-events-none
                                     group-hover:-translate-y-2 group-hover:scale-105
                                     transition-all duration-700 ease-out"
                        >
                          {step.num}
                        </span>

                        {/* Mobile left accent bar */}
                        <div
                          aria-hidden
                          className="absolute left-0 top-6 bottom-6 w-[3px] bg-transparent
                                     group-hover:bg-[#DCA543] rounded-r-full transition-all duration-500"
                        />

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-[#DCA543] uppercase tracking-widest bg-[#DCA543]/8 px-2 py-0.5 rounded">
                            Milestone {step.num}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#403011] tracking-tight leading-snug">
                          {step.title}
                        </h3>

                        <p className="text-[13.5px] sm:text-sm text-[#4A4333]/80 font-serif leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          TYPES OF PATENTS (WHY THIS MATTERS)
      ══════════════════════════════ */}
      <section className="w-full bg-[#FDFBF7] py-20 sm:py-28 border-b border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24 items-center">

            {/* Left: editorial pull-quote */}
            <div className="flex flex-col gap-6">
              <span
                className="uppercase tracking-[0.14em] text-[10px] font-bold text-[#DCA543]
                           bg-[#DCA543]/10 px-3.5 py-1.5 rounded-full inline-block
                           border border-[#DCA543]/20 self-start"
              >
                Types Supported
              </span>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium
                           text-[#403011] tracking-tight leading-[1.15]"
              >
                Types of Patents Supported
              </h2>
              <blockquote className="border-l-2 border-[#DCA543] pl-6 font-serif italic
                                     text-base sm:text-lg text-[#4A4333] leading-relaxed">
                "A filed patent is one of the rarest and most impressive credentials a high school student can hold, demonstrating exceptional ingenuity and foresight."
              </blockquote>
              <p className="text-sm text-[#8A8373] font-serif">
                — EpicQuest Technical Advisory Board
              </p>
            </div>

            {/* Right: Patent Types from User Screenshot */}
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: Settings,
                  title: "Utility Patents",
                  desc: "Protect new and useful processes, machines, articles of manufacture, or compositions of matter.",
                },
                {
                  icon: PenTool,
                  title: "Design Patents",
                  desc: "Guard the ornamental design of an article of manufacture.",
                },
                {
                  icon: BookOpen,
                  title: "Provisional Applications",
                  desc: "Establish an early filing date without all formal requirements, offering a simpler and less expensive way to begin the patent process.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex flex-col gap-3 p-6 rounded-2xl bg-[#F6EBD4]
                             border border-[#4A4333]/8 hover:border-[#566544]/20
                             hover:shadow-sm transition-all duration-300 group"
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl
                               bg-[#566544]/10 group-hover:bg-[#566544]/16 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-[#566544]" strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3 className="font-serif font-semibold text-[#403011] text-base sm:text-[17px]">
                    {title}
                  </h3>
                  <p className="text-[13px] sm:text-sm text-[#4A4333]/80 font-serif leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA SECTION
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
              <span
                className="uppercase tracking-[0.18em] text-[9px] font-bold text-[#DCA543]
                           bg-[#DCA543]/12 px-4 py-1.5 rounded-full mb-6 inline-block
                           border border-[#DCA543]/20"
              >
                The Ultimate Outcome
              </span>

              <h2
                className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium
                           text-[#F6EBD4] tracking-tight leading-[1.15] mb-5"
              >
                Irrefutable Academic Impact
              </h2>

              <div className="w-12 h-px bg-[#DCA543]/60 mb-7" />

              <p
                className="text-base sm:text-lg text-[#F6EBD4]/80 font-serif leading-relaxed
                           italic max-w-xl mb-10"
              >
                The ultimate outcome is a formally filed patent application (provisional or full) that stands as an extraordinary portfolio differentiator, showcasing unparalleled innovation and commitment to your academic and professional aspirations.
              </p>

              {/* Two CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4
                             bg-[#DCA543] hover:bg-[#E8B555] text-[#2D3E1C]
                             rounded-full font-bold text-sm sm:text-base
                             transition-all duration-300 shadow-lg
                             hover:shadow-[0_8px_30px_rgba(220,165,67,0.35)]"
                >
                  Schedule a Diagnostic Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 px-6 py-4
                             text-[#F6EBD4]/80 hover:text-[#F6EBD4]
                             text-sm font-medium transition-colors duration-200"
                >
                  Explore all programmes
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
