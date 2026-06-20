import WavyUnderline from "@/components/ui/WavyUnderline";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProgramCTA from "@/components/ProgramCTA";
import {
  ArrowLeft,
  Brain,
  Compass,
  Award,
  Clock,
  BookOpen,
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  FileCheck,
  Users,
  Globe,
  CheckCircle,
} from "lucide-react";

interface StepItem {
  num: string;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
}

const steps: StepItem[] = [
  {
    num: "01",
    title: "D · Drive · Assertive",
    desc: "Goal-oriented, decisive leaders. Excel in entrepreneurship, management, law, and competitive environments.",
    icon: Target,
  },
  {
    num: "02",
    title: "I · Influence · Hustler",
    desc: "Enthusiastic communicators. Thrive in sales, marketing, media, public relations, and performing arts.",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "S · Support · Helper",
    desc: "Dependable, empathetic team-builders. Suited for healthcare, education, social work, and HR roles.",
    icon: Users,
  },
  {
    num: "04",
    title: "C · Clarity · Intellectual",
    desc: "Analytical, detail-focused thinkers. Natural fit for STEM, research, finance, and data science.",
    icon: Brain,
  },
];

const impactStats = [
  {
    icon: Users,
    value: "1,000+",
    label: "Students Assessed",
    sub: "Across leading global high schools",
  },
  {
    icon: Globe,
    value: "12+",
    label: "Hybrid Types",
    sub: "Custom behavioural combinations",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Clarity Score",
    sub: "Report-to-major alignment success",
  },
  {
    icon: CheckCircle,
    value: "2",
    label: "Dual Frameworks",
    sub: "Gunaity & Karmattitude reports",
  },
];

export default function PsychometricProfilingPage() {
  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen overflow-x-hidden">

      {/* ═══ HERO ═══ */}
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

          {/* Breadcrumb */}
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
            <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
              PROGRAMME DEEP DIVE
            </span>
          </div>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.88fr] gap-14 lg:gap-20 items-center">

            {/* ── Left text column ── */}
            <div className="flex flex-col">
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem]
                             font-serif font-medium text-[#403011] tracking-tight
                             leading-[1.07] mb-4">
                Psychometric
                <br />
                <span className="text-[#566544]">Profiling</span>
              </h1>

              <p className="font-serif text-xl sm:text-2xl text-[#DCA543] italic mb-8 font-medium">
                Discover. Align. Excel.
              </p>

              <div
                className="relative pl-6 border-l-2 border-[#DCA543] space-y-5
                            text-[#4A4333] font-serif text-base sm:text-[17px] leading-relaxed
                            max-w-[560px] mb-10"
              >
                <p>
                  Our Psychometric Profiling programme provides high school and college students
                  with a scientific baseline of their cognitive strengths, personality traits, and leadership potential.
                  Using two globally validated frameworks, we map behavioral styles to premium career options and college majors.
                </p>
                <p className="text-[#4A4333]/80 text-sm sm:text-[15px]">
                  Designed to take the guesswork out of portfolio building, this dual assessment report ensures you engineer
                  a highly original, psychometric-aligned admissions narrative that elite universities value.
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
                  src="/images/program/psychometricProfiling/PsychormetricProfiling_Main.png"
                  alt="Psychometric Profiling"
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
                    <Brain className="w-4.5 h-4.5 text-[#DCA543]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#8A8373]">Assessment</p>
                    <p className="text-sm font-serif font-semibold text-[#403011]">Dual Framework</p>
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

      {/* ═══ SPECS STRIP ═══ */}
      <section className="w-full bg-[#566544] py-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {[
              { icon: Clock, text: "2 – 3 Week Timeline" },
              { icon: BookOpen, text: "30+ Page Diagnostic Report" },
              { icon: Brain, text: "Gunaity & Karmattitude Dual Model" },
              { icon: Award, text: "1-on-1 Expert Advisory Debrief" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5 text-[#F6EBD4]">
                <Icon className="w-4 h-4 opacity-75" strokeWidth={1.5} aria-hidden />
                <span className="text-xs sm:text-sm font-medium tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BLUEPRINT ═══ */}
      <section className="relative w-full bg-[#F6EBD4] py-20 sm:py-28 border-b border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">

          {/* Section header */}
          <div className="text-center max-w-xl mx-auto mb-20 animate-fade-up">
            <span
              className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15"
            >
              The Discovery Blueprint
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium
                         text-[#403011] tracking-tight mb-4"
            >
              The <WavyUnderline>DISC Dimensions</WavyUnderline>
            </h2>
            <p className="text-sm sm:text-base text-[#4A4333]/80 font-serif leading-relaxed">
              Four fundamental behavioral domains mapped by our Gunaity Epicometer™ to define your unique leadership style.
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
                const isLeft = idx % 2 === 0;

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

                          <div aria-hidden className="hidden md:block absolute right-0 top-6 bottom-6 w-[3px] bg-transparent group-hover:bg-[#DCA543] rounded-l-full transition-all duration-500" />
                          <div aria-hidden className="md:hidden absolute left-0 top-6 bottom-6 w-[3px] bg-transparent group-hover:bg-[#DCA543] rounded-r-full transition-all duration-500" />

                          <div className="flex items-center gap-2 md:justify-end">
                            <span className="text-[10px] font-bold text-[#DCA543] uppercase tracking-widest bg-[#DCA543]/8 px-2 py-0.5 rounded">
                              Dimension {step.num}
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

                          <div aria-hidden className="absolute left-0 top-6 bottom-6 w-[3px] bg-transparent group-hover:bg-[#566544] rounded-r-full transition-all duration-500" />

                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-[#566544] uppercase tracking-widest bg-[#566544]/8 px-2 py-0.5 rounded">
                              Dimension {step.num}
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

                    {/* Mobile card */}
                    <div className="md:hidden col-span-full pl-14 pr-2 -mt-3">
                      <div
                        className="relative flex flex-col gap-3 p-6 sm:p-8
                                   bg-[#FDFBF7] rounded-[2rem]
                                   border border-[#4A4333]/8
                                   group-hover:border-[#566544]/25 group-hover:shadow-xl
                                   transition-all duration-500 ease-out overflow-hidden"
                      >
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

                        <div aria-hidden className="absolute left-0 top-6 bottom-6 w-[3px] bg-transparent group-hover:bg-[#DCA543] rounded-r-full transition-all duration-500" />

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-[#DCA543] uppercase tracking-widest bg-[#DCA543]/8 px-2 py-0.5 rounded">
                            Dimension {step.num}
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

      {/* ═══ REPORT DEEP DIVE ═══ */}
      <section className="w-full bg-[#FDFBF7] py-20 sm:py-28 border-b border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1fr] gap-14 lg:gap-20 items-center">

            {/* ── Left image column ── */}
            <div className="relative">
              {/* Offset decorative slab behind image */}
              <div
                aria-hidden
                className="absolute -bottom-4 -left-4 w-full h-full
                           rounded-[2.5rem] bg-[#566544]/12 border border-[#566544]/15"
              />
              {/* Gold accent corner strip */}
              <div
                aria-hidden
                className="absolute -top-3 -right-3 w-20 h-20 rounded-tr-[2rem]
                           border-t-2 border-r-2 border-[#DCA543]"
              />

              <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden
                              border border-[#4A4333]/12 shadow-2xl group">
                <Image
                  src="/images/program/psychometricProfiling/PsychometricProfiling_2.png"
                  alt="EpicQuest Leadership Diagnostic Report Showcase"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[#403011]/10 opacity-0
                             group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>

            {/* ── Right text column ── */}
            <div className="flex flex-col">
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                REPORT INSIGHT
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight mb-6">
                A 30+ Page Blueprint<br />of <WavyUnderline>Your Potential</WavyUnderline>
              </h2>
              <div className="relative pl-6 border-l-2 border-[#DCA543] space-y-5 text-[#4A4333] font-serif text-base sm:text-[17px] leading-relaxed max-w-[560px] mb-10">
                <p>
                  Your Leadership Diagnostic Report is not a generic summary. It is a highly comprehensive, custom-tailored analysis detailing behavior hybrids, work environment fits, and a 2-4 year academic portfolio roadmap.
                </p>
                <p className="text-[#4A4333]/80 text-sm sm:text-[15px]">
                  Developed with academic advisors and industry mentors, this deep dive ensures you understand exactly who you are, what you are capable of, and how to articulate your strengths beautifully on your admissions portfolio.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="w-full bg-[#FDFBF7] py-20 sm:py-28 border-b border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24 items-center">

            {/* Left: editorial pull-quote */}
            <div className="flex flex-col gap-6">
              <span
                className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit border border-[#403011]/15"
              >
                Why Diagnostic?
              </span>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium
                           text-[#403011] tracking-tight leading-[1.15]"
              >
                The Foundation of Every <WavyUnderline>Elite Application</WavyUnderline>
              </h2>
              <blockquote className="border-l-2 border-[#DCA543] pl-6 font-serif italic
                                     text-base sm:text-lg text-[#4A4333] leading-relaxed">
                "Admissions committees at elite universities seek students with immense self-awareness and targeted drive. Our scientific frameworks provide the clarity needed to build a highly focused, unforgettable narrative."
              </blockquote>
              <p className="text-sm text-[#8A8373] font-serif">
                — EpicQuest Leadership Advisory Board
              </p>
            </div>

            {/* Right: benefit tiles (2x2 grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {[
                {
                  icon: Brain,
                  title: "Dual Framework, One Report",
                  desc: "Combines personality profiling and career interest mapping in a single cohesive, student-focused assessment.",
                },
                {
                  icon: Globe,
                  title: "Globally Validated",
                  desc: "Built on globally recognized DISC and career interest models used by leading universities and companies worldwide.",
                },
                {
                  icon: FileCheck,
                  title: "Actionable Guidance",
                  desc: "Provides clear major recommendations, tailored career path options, and immediate next steps.",
                },
                {
                  icon: TrendingUp,
                  title: "Ivy League Legacy",
                  desc: "Rigorous academic grounding ensuring high signal, scientific validity, and immense credibility.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex flex-col gap-3 p-6 sm:p-7 bg-[#FDFBF7] rounded-[2rem]
                             border border-[#4A4333]/8 hover:border-[#566544]/30
                             hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden group"
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl
                               bg-[#566544]/10 group-hover:bg-[#566544] transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-[#566544] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} aria-hidden />
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

      <ProgramCTA
        title="Precision-Guided Portfolio Design"
        description="Align your natural cognitive strengths with high-impact projects, ensuring your application journey is both authentic and highly effective."
      />
    </main>
  );
}
