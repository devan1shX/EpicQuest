import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-cream min-h-screen">

      {/* ── 1. HERO ── */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-14 lg:pb-20 flex flex-col lg:flex-row items-stretch gap-10 lg:gap-0 lg:min-h-[82vh]">

        {/* Left Content Column */}
        <div className="w-full lg:w-[63%] lg:flex-none pr-0 lg:pr-14 space-y-5 sm:space-y-6 z-10 flex flex-col justify-center py-2">
          
          {/* Floating Capsule Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-olive/10 border border-olive/15 text-olive text-xs font-semibold uppercase tracking-widest w-fit shadow-sm select-none animate-fade-up delay-100">
            <span className="w-1.5 h-1.5 rounded-full bg-olive inline-block"></span>
            Elite University Admissions
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-serif font-medium text-[#403011] leading-[1.12] lg:leading-[1.08] tracking-tight animate-fade-up delay-200">
            EpicQuest Learning:<br className="hidden sm:inline" /> Your Path to Ivy League
          </h1>

          <p className="text-sm sm:text-base lg:text-[1.15rem] text-[#4A4333] leading-relaxed max-w-full lg:max-w-[92%] font-serif tracking-wide animate-fade-up delay-300">
            We transform extraordinary high school students into Ivy League-ready candidates — through structured research, psychometric-aligned skill development, published research work, patent filing, and real-world apprenticeships. Your journey to the world's top universities starts here.
          </p>

          {/* Action Buttons & Trust caption */}
          <div className="pt-2 space-y-4 animate-fade-up delay-400">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-[#5C7146] hover:bg-[#4A5C38] text-white rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
              >
                Generate Your Ivy League Plan
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-[#5C7146] text-[#5C7146] hover:bg-[#5C7146]/5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Book Consultation
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-[#4A4333] font-serif tracking-wide pl-1 select-none">
              94% admission rate to Ivy League & top-20 global universities · Limited spaces for 2026–27 cohort
            </p>
          </div>

          {/* Contact Strip */}
          <div className="pt-6 border-t border-[#4A4333]/10 flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-3 items-start sm:items-center text-xs sm:text-[0.92rem] text-[#4A4333] font-serif animate-fade-up delay-500">
            <a href="tel:+919971125276" className="hover:text-olive transition-colors flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-olive/5 flex items-center justify-center group-hover:bg-olive/10 transition-colors shrink-0">
                <svg className="w-4 h-4 text-[#5C7146]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.157-.44.009-.926.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                </svg>
              </div>
              <span>+91-9971125276</span>
            </a>
            <span className="hidden sm:inline text-[#D0C0A0]">•</span>
            <a href="mailto:contact@epicquestlearning.com" className="hover:text-olive transition-colors flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-olive/5 flex items-center justify-center group-hover:bg-olive/10 transition-colors shrink-0">
                <svg className="w-4 h-4 text-[#5C7146]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                </svg>
              </div>
              <span>contact@epicquestlearning.com</span>
            </a>
            <span className="hidden sm:inline text-[#D0C0A0]">•</span>
            <a href="https://www.epicquestlearning.com" className="hover:text-olive transition-colors flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-olive/5 flex items-center justify-center group-hover:bg-olive/10 transition-colors shrink-0">
                <svg className="w-4 h-4 text-[#5C7146]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253"></path>
                </svg>
              </div>
              <span>epicquestlearning.com</span>
            </a>
          </div>
        </div>

        {/* Right Image (Sleek Asymmetric Curved Frame) */}
        <div className="w-full lg:w-[37%] lg:flex-none relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-none lg:min-h-[480px] rounded-[2rem_3.5rem_2.5rem_4.5rem] overflow-hidden shadow-2xl border-4 border-white/60 mt-6 lg:mt-0 group cursor-default animate-fade-in delay-300">
          <Image
            src="/images/home/Home_Hero.png"
            alt="Student working on electronics project"
            fill
            className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out z-0"
            priority
          />
          
          {/* Subtle Overlay Shadow to ensure legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 z-10" />

          
        </div>
      </section>

      {/* ── 2. STATS ── */}
      <section className="w-full bg-[#F6EBD4] py-16 sm:py-20 lg:py-24 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-14">
            <span className="uppercase tracking-widest text-xs font-semibold text-olive bg-olive/10 px-3 py-1 rounded-full mb-4 inline-block">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-3.5xl md:text-4xl lg:text-[2.75rem] font-serif font-medium text-[#403011] tracking-tight leading-tight mb-4">
              Why Choose EpicQuest
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#4A4333] font-serif max-w-2xl leading-relaxed">
              Our numbers speak for themselves — built on real student outcomes, not projections.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 sm:gap-8">
            {[
              { stat: "94%", label: "Admission Rate", sub: "Top-20 global universities" },
              { stat: "3×", label: "Portfolio Strength", sub: "More achievements than peers" },
              { stat: "50+", label: "Publications", sub: "Recognised research venues" },
              { stat: "12", label: "Patents Filed", sub: "Original student inventions" },
            ].map(({ stat, label, sub }) => (
              <div key={label} className="flex flex-col items-start gap-1">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#403011] font-medium leading-none mb-1">{stat}</div>
                <div className="text-sm font-semibold text-[#4A4333] uppercase tracking-wider">{label}</div>
                <div className="text-xs lg:text-sm text-[#6A6A6A] font-serif leading-relaxed">{sub}</div>
              </div>
            ))}
          </div>

          {/* Info callout */}
          <div className="mt-10 sm:mt-14 bg-blue-200 rounded-2xl p-5 sm:p-7 md:p-8 flex items-start gap-4 border border-blue-200/30">
            <div className="text-blue-700 mt-0.5 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </div>
            <p className="text-[#334155] font-serif text-xs sm:text-sm md:text-base leading-relaxed">
              EpicQuest is the only high-school focussed applied skills-development programme that combines psychometric profiling, applied research, patent filing, and professional apprenticeships into a single, cohesive portfolio-building journey.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. PROGRAMS ── */}
      <section className="w-full py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <span className="uppercase tracking-widest text-xs font-semibold text-olive bg-olive/10 px-3 py-1 rounded-full mb-4 inline-block">
              Our Programs
            </span>
            <h2 className="text-3xl sm:text-3.5xl md:text-4xl lg:text-[2.75rem] font-serif font-medium text-[#403011] tracking-tight leading-tight mb-4">Everything We Offer</h2>
            <p className="text-sm sm:text-base md:text-lg text-[#4A4333] font-serif max-w-2xl leading-relaxed">
              Every program is designed to build a world-class university portfolio. Choose your path — or let us map one for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18h8M3 22h18M14 22a7 7 0 10-7-7h7M14 14V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v11M14 9h2.5M9 9h2.5" />
                  </svg>
                ),
                href: "/programs/applied-research",
                title: "Applied Research Publications",
                desc: "Produce peer-reviewed papers in STEM, social sciences, or humanities with full editorial support.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.1a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ),
                href: "/programs/prototype-development",
                title: "Prototype Development",
                desc: "Build working prototypes in hardware, software, industrial design, or biotech.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                  </svg>
                ),
                href: "/programs/policy-drafts",
                title: "Published Policy Drafts",
                desc: "Author policy briefs submitted to think tanks, NGOs, or government portals.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ),
                href: "/programs/patent-filing",
                title: "Patent Filing Support",
                desc: "Navigate the full patent application process for truly original inventions.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                  </svg>
                ),
                href: "/programs/apprenticeships",
                title: "Apprenticeships & Internships",
                desc: "Gain hands-on experience with research labs, startups, and policy organisations.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                ),
                href: "/programs/psychometric-profiling",
                title: "Psychometric Profiling",
                desc: "Discover your unique cognitive strengths and align your portfolio accordingly.",
              },
            ].map(({ icon, href, title, desc }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col gap-5 p-5 sm:p-7 rounded-2xl border border-olive/20 hover:border-olive hover:bg-olive/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5C7146]/10 flex items-center justify-center text-[#5C7146] group-hover:bg-[#5C7146] group-hover:text-[#F6EBD4] transition-all duration-300 shrink-0">
                  {icon}
                </div>
                <h3 className="text-lg font-semibold text-[#403011] leading-snug">{title}</h3>
                <p className="text-[#5A5A5A] text-sm font-serif leading-relaxed flex-1">{desc}</p>
                <span className="text-olive text-sm font-medium group-hover:underline flex items-center gap-1">
                  Learn more <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 sm:mt-14 text-center bg-[#F6EBD4] rounded-2xl p-6 sm:p-10">
            <p className="text-[#403011] font-serif mb-5 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Not sure which program is right for you? Book a free consultation and we'll map out your personalised plan.
            </p>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-[#5C7146] hover:bg-[#4A5C38] text-white rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. HOW IT WORKS ── */}
      <section className="w-full bg-[#F6EBD4] py-16 sm:py-20 lg:py-28 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <span className="uppercase tracking-widest text-xs font-semibold text-olive bg-olive/10 px-3 py-1 rounded-full mb-4 inline-block">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-3.5xl md:text-4xl lg:text-[2.75rem] font-serif font-medium text-[#403011] tracking-tight leading-tight mb-4">
              Your Bespoke Portfolio Journey
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#4A4333] font-serif max-w-2xl leading-relaxed">
              Every student's path is custom-designed. From initial psychometric assessment to final portfolio submission, we guide you through a structured, milestone-driven journey.
            </p>
          </div>

          {/* ── DESKTOP TIMELINE (WINDING ROAD) ── */}
          <div className="hidden lg:block relative min-h-[380px] w-full my-8">
            {/* SVG Winding Road behind pins */}
            <svg className="absolute inset-0 w-full h-[360px] pointer-events-none z-0" viewBox="0 0 1000 360" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              {/* Outer Road */}
              <path
                d="M 0 180 C 50 180, 50 280, 125 280 C 200 280, 300 80, 375 80 C 450 80, 550 280, 625 280 C 700 280, 800 80, 875 80 C 950 80, 950 180, 1000 180"
                stroke="#5C7146"
                strokeWidth="28"
                strokeLinecap="round"
              />
              {/* Inner Dashed Line */}
              <path
                d="M 0 180 C 50 180, 50 280, 125 280 C 200 280, 300 80, 375 80 C 450 80, 550 280, 625 280 C 700 280, 800 80, 875 80 C 950 80, 950 180, 1000 180"
                stroke="#F6EBD4"
                strokeWidth="2.5"
                strokeDasharray="6 8"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>

            {/* Grid of steps */}
            <div className="relative grid grid-cols-4 w-full h-[360px] z-10">
              
              {/* Step 1: Assessment (Top text, bottom pin pointing DOWN) */}
              <div className="relative w-full h-full">
                <div className="absolute top-4 left-0 w-full text-center select-none px-4">
                  <h3 className="text-xl font-serif font-bold text-[#403011] mb-1">Assessment</h3>
                  <p className="text-sm text-[#4A4333] font-serif max-w-[180px] mx-auto leading-normal">
                    Psychometric evaluation and goals
                  </p>
                </div>
                {/* Pin points down to road valley (Y=280) - Floating beautifully above the road */}
                <div className="absolute top-[176px] left-1/2 -translate-x-1/2 w-16 h-20 group cursor-pointer z-10">
                  <svg className="w-16 h-20 text-[#5C7146] drop-shadow-md transform group-hover:scale-105 transition-transform duration-300" fill="currentColor" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 40C16 40 32 24 32 16C32 7.16 24.84 0 16 0C7.16 0 0 7.16 0 16C0 24 16 40 16 40Z" />
                  </svg>
                  <div className="absolute top-[16px] left-1/2 -translate-x-1/2 text-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 2: Research (Bottom text, top pin pointing UP) */}
              <div className="relative w-full h-full">
                {/* Pin points up to road hill (Y=80) - Floating beautifully below the road */}
                <div className="absolute top-[104px] left-1/2 -translate-x-1/2 w-16 h-20 group cursor-pointer z-10">
                  <svg className="w-16 h-20 text-[#5C7146] drop-shadow-md transform group-hover:scale-105 transition-transform duration-300" fill="currentColor" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0C16 0 0 16 0 24C0 32.84 7.16 40 16 40C24.84 40 32 32.84 32 24C32 16 16 0 16 0Z" />
                  </svg>
                  <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 text-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-0 w-full text-center select-none px-4">
                  <h3 className="text-xl font-serif font-bold text-[#403011] mb-1">Research</h3>
                  <p className="text-sm text-[#4A4333] font-serif max-w-[180px] mx-auto leading-normal">
                    Skill building and project research
                  </p>
                </div>
              </div>

              {/* Step 3: Creation (Top text, bottom pin pointing DOWN) */}
              <div className="relative w-full h-full">
                <div className="absolute top-4 left-0 w-full text-center select-none px-4">
                  <h3 className="text-xl font-serif font-bold text-[#403011] mb-1">Creation</h3>
                  <p className="text-sm text-[#4A4333] font-serif max-w-[180px] mx-auto leading-normal">
                    Publications, patents and prototypes
                  </p>
                </div>
                {/* Pin points down to road valley (Y=280) - Floating beautifully above the road */}
                <div className="absolute top-[176px] left-1/2 -translate-x-1/2 w-16 h-20 group cursor-pointer z-10">
                  <svg className="w-16 h-20 text-[#5C7146] drop-shadow-md transform group-hover:scale-105 transition-transform duration-300" fill="currentColor" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 40C16 40 32 24 32 16C32 7.16 24.84 0 16 0C7.16 0 0 7.16 0 16C0 24 16 40 16 40Z" />
                  </svg>
                  <div className="absolute top-[16px] left-1/2 -translate-x-1/2 text-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 4: Placement (Bottom text, top pin pointing UP) */}
              <div className="relative w-full h-full">
                {/* Pin points up to road hill (Y=80) - Floating beautifully below the road */}
                <div className="absolute top-[104px] left-1/2 -translate-x-1/2 w-16 h-20 group cursor-pointer z-10">
                  <svg className="w-16 h-20 text-[#5C7146] drop-shadow-md transform group-hover:scale-105 transition-transform duration-300" fill="currentColor" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0C16 0 0 16 0 24C0 32.84 7.16 40 16 40C24.84 40 32 32.84 32 24C32 16 16 0 16 0Z" />
                  </svg>
                  <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 text-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-0 w-full text-center select-none px-4">
                  <h3 className="text-xl font-serif font-bold text-[#403011] mb-1">Placement</h3>
                  <p className="text-sm text-[#4A4333] font-serif max-w-[180px] mx-auto leading-normal">
                    Apprenticeship and Ivy applications
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ── MOBILE TIMELINE (VERTICAL ROAD) ── */}
          <div className="lg:hidden relative flex flex-col gap-10 py-6 pl-4 sm:pl-0">
            {/* Vertical Road */}
            <svg className="absolute left-[36px] sm:left-1/2 top-0 bottom-0 -translate-x-1/2 w-8 h-full pointer-events-none z-0" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <line x1="16" y1="0" x2="16" y2="100%" stroke="#5C7146" strokeWidth="24" strokeLinecap="round" />
              <line x1="16" y1="0" x2="16" y2="100%" stroke="#F6EBD4" strokeWidth="2" strokeDasharray="5 7" strokeLinecap="round" opacity="0.8" />
            </svg>

            {[
              {
                title: "Assessment",
                desc: "Psychometric evaluation and goals",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                )
              },
              {
                title: "Research",
                desc: "Skill building and project research",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                title: "Creation",
                desc: "Publications, patents and prototypes",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: "Placement",
                desc: "Apprenticeship and Ivy applications",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                  </svg>
                )
              }
            ].map(({ title, desc, icon }, idx) => (
              <div key={title} className="relative flex items-center w-full z-10">
                {/* Vertical pin badge on the road */}
                <div className="absolute left-[36px] sm:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#5C7146] text-white flex items-center justify-center border-4 border-[#F6EBD4] shadow-md shrink-0">
                  {icon}
                </div>
                {/* Text content aligned properly */}
                <div className="pl-20 sm:pl-0 sm:w-1/2 sm:ml-auto sm:text-left pr-4 select-none">
                  <h3 className="text-lg font-serif font-bold text-[#403011]">{title}</h3>
                  <p className="text-sm text-[#4A4333] font-serif leading-normal mt-0.5 max-w-[240px]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm md:text-base text-[#4A4333] font-serif max-w-2xl mx-auto mt-10 sm:mt-14 leading-relaxed">
            Our four-phase framework ensures every student builds a coherent, compelling narrative — one that admissions officers at Harvard, Yale, Stanford, and beyond will remember.
          </p>
        </div>
      </section>

      {/* ── 5. SUCCESS STORIES ── */}
      <section className="w-full py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-14">
            <span className="uppercase tracking-widest text-xs font-semibold text-olive bg-olive/10 px-3 py-1 rounded-full mb-4 inline-block">
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-3.5xl md:text-4xl lg:text-[2.75rem] font-serif font-medium text-[#403011] tracking-tight leading-tight mb-4">
              Champion Achievers{" "}
              <span className="text-[#8A8373] font-normal">2026–27</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#4A4333] font-serif max-w-2xl leading-relaxed">
              Our students have earned admission to the world's most selective universities — armed with published research, filed patents, and real-world experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10 sm:gap-8">
            {[
              {
                src: "/images/home/Home_Saatvik.png",
                alt: "Saatvick S.",
                quote:
                  "EpicQuest helped me publish my first research paper at 16. That publication was the centrepiece of my Harvard application.",
                name: "Saatvick S.",
                uni: "USC, Class of 2025",
              },
              {
                src: "/images/home/Home_Jaivir.png",
                alt: "Jaivir G.",
                quote:
                  "The patent I filed through EpicQuest made my UC Berkeley application unforgettable. I wasn't just a student — I was an inventor.",
                name: "Jaivir G.",
                uni: "UC Berkeley, Class of 2026",
              },
              {
                src: "/images/home/Home_Devanshi.png",
                alt: "Devannshi R.",
                quote:
                  "My policy draft was cited by a state legislator. Harvey Mudd's admissions committee noticed. EpicQuest gave me a voice.",
                name: "Devannshi R.",
                uni: "Harvey Mudd, Class of 2026",
              },
            ].map(({ src, alt, quote, name, uni }) => (
              <div key={name} className="flex flex-col">
                <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden mb-6 shadow-md bg-[#E0DDD5]">
                  <Image src={src} alt={alt} fill className="object-cover" />
                </div>
                <blockquote className="text-sm sm:text-base text-[#5A5A5A] font-serif italic leading-relaxed mb-4 flex-1">
                  "{quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-[#4A4333] text-sm">{name}</div>
                  <div className="text-xs text-[#8A8373] font-serif mt-0.5">{uni}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PARTNERS & AFFILIATIONS ── */}
      <section className="w-full bg-[#F6EBD4] py-16 sm:py-20 lg:py-28 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-10">
            <span className="uppercase tracking-widest text-xs font-semibold text-olive bg-olive/10 px-3 py-1 rounded-full mb-4 inline-block">
              Partners & Affiliations
            </span>
            <h2 className="text-3xl sm:text-3.5xl md:text-4xl lg:text-[2.75rem] font-serif font-medium text-[#403011] tracking-tight leading-tight mb-4">
              Backed by Institutions That Matter
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#4A4333] font-serif max-w-3xl leading-relaxed">
              EpicQuest Learning is proud to be affiliated with some of India's most prestigious academic, research, and policy institutions — active collaborations, not cosmetic logos.
            </p>
          </div>

          {/* Partner Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
            {[
              { src: "/images/home/Sc_Advisor_GoI.png", alt: "Office of the Principal Scientific Adviser" },
              { src: "/images/home/ISB_BIPP_Logo.png", alt: "Indian School of Business" },
              { src: "/images/home/IIITD-img.png", alt: "IIIT Delhi" },
              { src: "/images/home/IETO_Logo.png", alt: "IETO" },
            ].map(({ src, alt }) => (
              <div
                key={alt}
                className="bg-white h-24 flex items-center justify-center rounded-xl border border-[#4A4333]/10 shadow-sm px-6 text-center"
              >
                <div className="relative w-full h-16">
                  <Image src={src} alt={alt} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>

          {/* Info callout */}
          <div className="bg-blue-200 rounded-2xl p-5 sm:p-7 md:p-8 flex items-start gap-4 border border-blue-200/30">
            <div className="text-blue-700 mt-0.5 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </div>
            <p className="text-[#334155] font-serif text-xs sm:text-sm md:text-base leading-relaxed">
              These affiliations with the Office of the Principal Scientific Adviser to the Government of India, ISB's Bharti Institute of Public Policy, IIIT Delhi, and IETO represent active institutional endorsements — signalling to admissions committees worldwide that EpicQuest students operate at the highest levels of academic and policy credibility.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA (PREMIUM FLOATING CARD) ── */}
      <section className="w-full bg-[#F6EBD4] py-12 sm:py-16 lg:py-24 border-t border-[#4A4333]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#2D3E1C] to-[#455434] rounded-3xl px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20 text-center shadow-xl border border-[#5C7146]/20">
            {/* Ambient background blur spots */}
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#F6EBD4]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#F6EBD4]/15 blur-3xl pointer-events-none" />
            
            {/* Delicate abstract grid pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#F6EBD4_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="uppercase tracking-widest text-[11px] font-semibold text-[#F6EBD4] bg-[#F6EBD4]/10 px-3.5 py-1.5 rounded-full mb-6 inline-block border border-[#F6EBD4]/15">
                Cohort Admissions Open
              </span>
              <h2 className="text-3xl sm:text-3.5xl md:text-4xl lg:text-[2.75rem] font-serif font-medium text-[#F6EBD4] tracking-tight leading-tight mb-4">
                Ready to Start Your Ivy League Journey?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#F6EBD4]/80 font-serif mb-10 max-w-xl mx-auto leading-relaxed">
                Limited spaces remain for our bespoke 2026–27 cohort. Book your diagnostic consultation to build a tailored admissions strategy.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-[#F6EBD4] text-[#2D3E1C] hover:bg-[#F6EBD4]/90 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
                >
                  Generate Your Ivy League Plan
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-[#F6EBD4]/30 text-[#F6EBD4] hover:bg-white/10 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}