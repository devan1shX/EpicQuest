import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen overflow-x-hidden">

      {/* ── 1. ABOUT US HERO ── */}
      <section className="relative w-full overflow-hidden">
        {/* Ambient blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full
                        bg-[#566544]/5 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full
                        bg-[#DCA543]/8 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#566544_1px,transparent_1px)]
                        [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 sm:pt-28 pb-20 sm:pb-28">

          {/* Decorative large background numeral */}
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute -top-4 right-4 sm:right-10 lg:right-14
                       text-[10rem] sm:text-[16rem] lg:text-[22rem] font-serif font-bold
                       text-[#403011]/5 leading-none"
          >
            EQ
          </span>

          {/* Pill */}
          <div className="mb-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                             bg-[#566544]/12 text-[#566544] text-[11px] font-bold uppercase
                             tracking-[0.12em] border border-[#566544]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#566544] inline-block animate-pulse" />
              Who We Are
            </span>
          </div>

          {/* Headline + Intro split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-end">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]
                         font-serif font-medium text-[#403011] tracking-tight leading-[1.1] animate-fade-up"
            >
              Unlocking<br />
              <span className="relative inline-block">
                <span className="relative z-10">Your</span>
                <svg className="absolute -bottom-1.5 left-0 w-full" height="8"
                     viewBox="0 0 120 8" preserveAspectRatio="none" fill="none">
                  <path d="M2 6 Q30 2 60 5 Q90 8 118 3"
                        stroke="#DCA543" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>{" "}
              Potential
            </h1>
            <div className="animate-fade-up delay-100">
              <p className="text-base sm:text-lg text-[#4A4333] font-serif leading-relaxed border-l-2 border-[#DCA543] pl-5 sm:pl-6">
                EpicQuest Learning is a premium applied skills-development and portfolio-building
                startup dedicated to high school students who aspire to stand out at Ivy League
                and top-tier universities. We go far beyond the classroom — we engineer experiences
                that demonstrate intellectual curiosity, leadership, and real-world impact.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-14 sm:mt-18 mb-12 sm:mb-14 h-px w-full bg-[#4A4333]/10" />

        {/* 3 Colored Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

          <div
            className="group bg-[#566544] text-white rounded-3xl p-7 sm:p-8 lg:p-10
                       shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                       flex flex-col justify-between min-h-[200px] sm:min-h-[220px] animate-fade-up delay-200"
          >
            <span className="text-4xl font-serif text-white/20 leading-none select-none">01</span>
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-medium mb-2 sm:mb-3">
                Psychometric-Aligned
              </h3>
              <p className="text-[#E8E8E8] font-serif text-sm sm:text-base leading-relaxed">
                Every program is designed around validated cognitive and personality frameworks.
              </p>
            </div>
          </div>

          <div
            className="group bg-[#8E8B42] text-white rounded-3xl p-7 sm:p-8 lg:p-10
                       shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                       flex flex-col justify-between min-h-[200px] sm:min-h-[220px] animate-fade-up delay-300"
          >
            <span className="text-4xl font-serif text-white/20 leading-none select-none">02</span>
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-medium mb-2 sm:mb-3">
                Research-Driven
              </h3>
              <p className="text-[#F2F2F2] font-serif text-sm sm:text-base leading-relaxed">
                Applied research publications that admissions committees recognise and respect.
              </p>
            </div>
          </div>

          <div
            className="group bg-[#DCA543] text-[#403011] rounded-3xl p-7 sm:p-8 lg:p-10
                       shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                       flex flex-col justify-between min-h-[200px] sm:min-h-[220px] animate-fade-up delay-400"
          >
            <span className="text-4xl font-serif text-[#403011]/20 leading-none select-none">03</span>
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-medium mb-2 sm:mb-3">
                Portfolio-Focused
              </h3>
              <p className="text-[#5A451D] font-serif text-sm sm:text-base leading-relaxed">
                Tangible outputs — patents, prototypes, policy drafts — that set you apart.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* ── 2. FOUNDER'S MESSAGE ── */}
      <section className="w-full bg-[#403011] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-12 sm:mb-16 animate-fade-up">
            <span className="block h-px w-8 sm:w-12 bg-[#DCA543]" />
            <span className="text-[#DCA543] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
              Founder's Message
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 xl:gap-24">

            {/* Image with decorative frame */}
            <div className="w-full sm:w-[75%] md:w-[55%] lg:w-[38%] lg:flex-none flex-shrink-0 animate-fade-in delay-300">
              <div className="relative">
                {/* Decorative offset border */}
                <div
                  className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5
                             w-full h-full rounded-[2rem] border-2 border-[#DCA543]/40 pointer-events-none"
                />
                <div
                  className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4]
                             rounded-[2rem] overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/images/about/About_Tilak.jpeg"
                    alt="Tilak Mishra - Founder & CEO"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#403011]/60 to-transparent" />
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="w-full lg:flex-1 flex flex-col justify-center animate-fade-up delay-200">

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]
                             font-serif font-medium text-white mb-1.5 tracking-tight leading-tight">
                Tilak Mishra
              </h2>
              <p className="text-[#DCA543] font-serif text-sm sm:text-base mb-10 sm:mb-12">
                Founder &amp; CEO, EpicQuest Learning &nbsp;·&nbsp; UPenn Alum
              </p>

              {/* Pull quote */}
              <blockquote className="relative mb-10 sm:mb-12 pl-6 sm:pl-8">
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 text-6xl sm:text-7xl leading-none
                             text-[#DCA543]/30 font-serif select-none"
                >
                  "
                </span>
                <p className="text-[#F6EBD4] font-serif text-xl sm:text-2xl leading-snug italic pt-5">
                  Every student deserves a structured, expert-guided path to showcase
                  their true potential. EpicQuest is that path.
                </p>
              </blockquote>

              <div className="space-y-5 sm:space-y-6 text-[#C9BFA8] font-serif
                              text-base sm:text-[1.05rem] lg:text-[1.08rem] leading-relaxed">
                <p>
                  I built EpicQuest because I saw brilliant students being turned away from their
                  dream universities — not because they lacked talent, but because they lacked the
                  right experiences.
                </p>
                <p>
                  Having navigated the competitive landscape of top-tier education at an Ivy League,
                  I'm passionate about democratizing access to the tools and strategies that truly
                  differentiate applicants. My vision is to empower the next generation of innovators
                  and leaders to confidently pursue their highest academic aspirations, leaving a
                  lasting mark on the world.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/results"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#DCA543] text-[#DCA543] hover:bg-[#DCA543] hover:text-[#403011] rounded-full font-semibold text-sm transition-all duration-300 group"
                >
                  Read Our Success Stories
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              {/* Signature-style divider */}
              <div className="mt-10 sm:mt-12 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[#8E8B42] font-serif text-xs uppercase tracking-widest">
                  EpicQuest Learning
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 3. UNIQUE APPROACH: BEYOND GRADES ── */}
      <section className="w-full bg-[#F6EBD4] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 sm:mb-18 animate-fade-up">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="block h-px w-8 sm:w-12 bg-[#DCA543]" />
                <span className="text-[#8E8B42] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
                  Our Methodology
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]
                           font-serif font-medium text-[#403011] tracking-tight leading-tight"
              >
                Beyond Grades —<br className="hidden sm:block" />
                <em className="not-italic text-[#8E8B42]">A Unique</em> Approach
              </h2>
            </div>
            <p className="text-base sm:text-lg text-[#4A4333] font-serif leading-relaxed max-w-md lg:text-right">
              Ivy League committees look for depth, originality, and demonstrated impact.
              We build all three through a structured, multi-year journey.
            </p>
          </div>

          {/* Approach Items — alternating image/text on large screens, stacked on mobile */}
          <div className="space-y-10 sm:space-y-14">

            {/* Item 1 — image left */}
            <div
              className="group grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] lg:grid-cols-[2fr_3fr]
                         gap-0 rounded-3xl overflow-hidden shadow-md hover:shadow-xl
                         transition-shadow duration-300 bg-white/40 border border-[#4A4333]/8
                         animate-fade-up delay-200"
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:min-h-[260px] overflow-hidden">
                <Image
                  src="/images/about/About_Applied_Research.png"
                  alt="Applied Research"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <span className="text-5xl font-serif text-[#403011]/8 leading-none mb-4 select-none">01</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-[#403011] mb-3 sm:mb-4">
                  Applied Research
                </h3>
                <p className="text-base sm:text-[1.05rem] text-[#4A4333] font-serif leading-relaxed">
                  Students conduct original, publishable research in their chosen field, guided by
                  expert mentors — IIT scientists or Ivy League-trained industry practitioners —
                  and aligned to their psychometric profiles.
                </p>
              </div>
            </div>

            {/* Item 2 — image right */}
            <div
              className="group grid grid-cols-1 sm:grid-cols-[1.4fr_1fr] lg:grid-cols-[3fr_2fr]
                         gap-0 rounded-3xl overflow-hidden shadow-md hover:shadow-xl
                         transition-shadow duration-300 bg-white/40 border border-[#4A4333]/8
                         animate-fade-up delay-300"
            >
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12 order-2 sm:order-1">
                <span className="text-5xl font-serif text-[#403011]/8 leading-none mb-4 select-none">02</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-[#403011] mb-3 sm:mb-4">
                  Prototype Development
                </h3>
                <p className="text-base sm:text-[1.05rem] text-[#4A4333] font-serif leading-relaxed">
                  From idea to working prototype — students learn to solve real problems with
                  tangible, demonstrable solutions that tell a compelling story.
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:min-h-[260px] overflow-hidden order-1 sm:order-2">
                <Image
                  src="/images/about/About_Prototype_Development.png"
                  alt="Prototype Development"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Item 3 — image left */}
            <div
              className="group grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] lg:grid-cols-[2fr_3fr]
                         gap-0 rounded-3xl overflow-hidden shadow-md hover:shadow-xl
                         transition-shadow duration-300 bg-white/40 border border-[#4A4333]/8
                         animate-fade-up delay-400"
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:min-h-[260px] overflow-hidden">
                <Image
                  src="/images/about/About_Policy_Drafting.png"
                  alt="Policy Drafting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <span className="text-5xl font-serif text-[#403011]/8 leading-none mb-4 select-none">03</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-[#403011] mb-3 sm:mb-4">
                  Policy Drafting
                </h3>
                <p className="text-base sm:text-[1.05rem] text-[#4A4333] font-serif leading-relaxed">
                  Published policy drafts on social, environmental, or technological issues —
                  showcasing civic engagement and analytical rigour that admissions committees notice.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


    </main>
  );
}