import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen">

      {/* ── 1. ABOUT US: UNLOCKING YOUR POTENTIAL ── */}
      <section className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-medium text-[#403011] tracking-tight mb-5 sm:mb-6 leading-tight animate-fade-up">
            About Us: Unlocking Your Potential
          </h1>
          <p className="text-base sm:text-lg text-[#4A4333] font-serif leading-relaxed max-w-4xl animate-fade-up delay-100">
            EpicQuest Learning is a premium applied skills-development and portfolio-building startup dedicated to high school students who aspire to stand out at Ivy League and top-tier universities. We go far beyond the walls of the classroom — we engineer experiences that demonstrate intellectual curiosity, leadership, and real-world impact.
          </p>
        </div>

        {/* 3 Colored Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

          <div className="bg-[#566544] text-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 lg:p-10 shadow-md flex flex-col justify-start animate-fade-up delay-200">
            <h3 className="text-xl sm:text-2xl font-serif font-medium mb-3 sm:mb-4">Psychometric-Aligned</h3>
            <p className="text-[#E8E8E8] font-serif text-base sm:text-[1.05rem] leading-relaxed">
              Every program is designed around validated cognitive and personality frameworks.
            </p>
          </div>

          <div className="bg-[#8E8B42] text-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 lg:p-10 shadow-md flex flex-col justify-start animate-fade-up delay-300">
            <h3 className="text-xl sm:text-2xl font-serif font-medium mb-3 sm:mb-4">Research-Driven</h3>
            <p className="text-[#F2F2F2] font-serif text-base sm:text-[1.05rem] leading-relaxed">
              Applied research publications that admissions committees recognise and respect.
            </p>
          </div>

          <div className="bg-[#DCA543] text-[#403011] rounded-2xl sm:rounded-3xl p-7 sm:p-8 lg:p-10 shadow-md flex flex-col justify-start animate-fade-up delay-400">
            <h3 className="text-xl sm:text-2xl font-serif font-medium mb-3 sm:mb-4">Portfolio-Focused</h3>
            <p className="text-[#5A451D] font-serif text-base sm:text-[1.05rem] leading-relaxed">
              Tangible outputs — patents, prototypes, policy drafts — that set you apart.
            </p>
          </div>

        </div>
      </section>

      {/* ── 2. FOUNDER'S MESSAGE ── */}
      <section className="w-full bg-[#F6EBD4] py-14 sm:py-20 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20">

            {/* Image — fixed aspect ratio, consistent rounding on all screens */}
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[37%] lg:flex-none flex-shrink-0 animate-fade-in delay-300">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-none lg:min-h-[500px] rounded-[2rem_3.5rem_2.5rem_4.5rem] overflow-hidden shadow-2xl border-4 border-white/60">
                <Image
                  src="/images/about/About_Tilak.jpeg"
                  alt="Tilak Mishra - Founder & CEO"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:flex-1 flex flex-col justify-center py-2 lg:py-8 animate-fade-up delay-200">

              {/* Badge */}
              <div className="mb-6 sm:mb-8">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#566544]/10 text-[#566544] text-xs font-semibold uppercase tracking-widest border border-[#566544]/20">
                  A Message From Our Founder
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-serif font-medium text-[#403011] mb-1.5 tracking-tight">
                Tilak Mishra
              </h2>
              <p className="text-[#6A6A6A] font-serif text-sm sm:text-[1rem] mb-8 sm:mb-10">
                Founder &amp; CEO, EpicQuest Learning | UPenn alum
              </p>

              <div className="space-y-5 sm:space-y-6 text-[#4A4333] font-serif text-base sm:text-[1.05rem] lg:text-[1.1rem] leading-relaxed">
                <p>
                  I built EpicQuest because I saw brilliant students being turned away from their dream universities — not because they lacked talent, but because they lacked the right experiences. Every student deserves a structured, expert-guided path to showcase their true potential. EpicQuest is that path.
                </p>
                <p>
                  Having navigated the competitive landscape of top-tier education at an Ivy League, I'm passionate about democratizing access to the tools and strategies that truly differentiate applicants. My vision is to empower the next generation of innovators and leaders to confidently pursue their highest academic aspirations, leaving a lasting mark on the world.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 3. UNIQUE APPROACH: BEYOND GRADES ── */}
      <section className="w-full bg-[#F6EBD4] py-14 sm:py-20 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="mb-12 sm:mb-16 animate-fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-medium text-[#403011] tracking-tight mb-4 sm:mb-5 leading-tight">
              Our Unique Approach: Beyond Grades
            </h2>
            <p className="text-base sm:text-lg text-[#4A4333] font-serif leading-relaxed max-w-3xl">
              Ivy League admissions committees look for depth, originality, and demonstrated impact. We build all three through a structured, multi-year journey tailored to each student's strengths and aspirations.
            </p>
          </div>

          {/* 3-Column Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 xl:gap-x-10 gap-y-12 sm:gap-y-14">

            {/* Item 1 */}
            <div className="flex flex-col group animate-fade-up delay-200">
              <div className="w-full aspect-[4/3] relative rounded-2xl sm:rounded-3xl overflow-hidden mb-5 shadow-sm border border-[#4A4333]/10 group-hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/images/about/About_Applied_Research.png"
                  alt="Applied Research"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#403011] mb-2 sm:mb-3">Applied Research</h3>
              <p className="text-base sm:text-[1.05rem] text-[#4A4333] font-serif leading-relaxed">
                Students conduct original, publishable research in their chosen field, guided by expert mentors — who are IIT scientists or other Ivy League trained industry practitioners — and aligned to psychometric profiles.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col group animate-fade-up delay-300">
              <div className="w-full aspect-[4/3] relative rounded-2xl sm:rounded-3xl overflow-hidden mb-5 shadow-sm border border-[#4A4333]/10 group-hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/images/about/About_Prototype_Development.png"
                  alt="Prototype Development"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#403011] mb-2 sm:mb-3">Prototype Development</h3>
              <p className="text-base sm:text-[1.05rem] text-[#4A4333] font-serif leading-relaxed">
                From idea to working prototype — students learn to solve real problems with tangible, demonstrable solutions.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col group sm:col-span-2 lg:col-span-1 animate-fade-up delay-400">
              <div className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] relative rounded-2xl sm:rounded-3xl overflow-hidden mb-5 shadow-sm border border-[#4A4333]/10 group-hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/images/about/About_Policy_Drafting.png"
                  alt="Policy Drafting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#403011] mb-2 sm:mb-3">Policy Drafting</h3>
              <p className="text-base sm:text-[1.05rem] text-[#4A4333] font-serif leading-relaxed">
                Published policy drafts on social, environmental, or technological issues — showcasing civic engagement and analytical rigour.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}