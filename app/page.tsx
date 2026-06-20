import WavyUnderline from "@/components/ui/WavyUnderline";
import Image from "next/image";
import Link from "next/link";
import { Microscope, Cpu, ScrollText, FileBadge, GraduationCap, Brain, ArrowRight, Compass, Activity, BrainCircuit, Landmark, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen overflow-x-hidden">

      {/* ── 1. HERO ── */}
      <section className="relative w-full overflow-hidden">
        {/* Ambient blobs */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full bg-[#5C7146]/5 blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#DCA543]/8 blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#5C7146_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-8">

          {/* Left Content Column */}
          <div className="w-full lg:w-[55%] lg:flex-none space-y-6 sm:space-y-7 z-10 flex flex-col justify-center">

            {/* Badge */}
            <div className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
              ELITE UNIVERSITY ADMISSIONS
            </div>

            <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-[4.1rem] font-serif font-medium text-[#403011] leading-[1.08] tracking-tight animate-fade-up delay-100">
              EpicQuest:<br />
              <span className="relative inline-block">
                <span className="relative z-10 text-[#5C7146]">Your Path</span>
                <svg className="absolute -bottom-1.5 left-0 w-full" height="8" viewBox="0 0 120 8" preserveAspectRatio="none" fill="none">
                  <path d="M2 6 Q30 2 60 5 Q90 8 118 3" stroke="#DCA543" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>{" "}
              to<br className="hidden sm:inline" /> the Ivy League
            </h1>

            <p className="text-[0.95rem] sm:text-base lg:text-[1.05rem] text-[#4A4333] leading-[1.75] max-w-[88%] font-serif animate-fade-up delay-200">
              We transform extraordinary students into Ivy League-ready candidates — through structured research, psychometric-aligned skill development, published work, patent filing, and real-world apprenticeships.
            </p>

            {/* Inline mini-stats row */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-3 pt-1 animate-fade-up delay-300">
              {[
                { val: "94%", label: "Admission Rate" },
                { val: "50+", label: "Publications" },
                { val: "12", label: "Patents Filed" },
              ].map(({ val, label }) => (
                <div key={label} className="flex items-center gap-2.5 select-none">
                  <span className="text-xl sm:text-2xl font-serif font-semibold text-[#5C7146] leading-none">{val}</span>
                  <span className="text-xs text-[#6A6A6A] font-serif leading-tight border-l border-[#4A4333]/20 pl-2.5">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1 animate-fade-up delay-400">
              <Link
                href="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center text-center gap-2 sm:gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-[#5C7146] hover:bg-[#4A5C38] text-white rounded-full font-bold text-[13px] sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                Explore our Programs
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/results#success-story"
                className="w-full sm:w-auto inline-flex items-center justify-center text-center gap-2 sm:gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 border-2 border-[#5C7146]/80 text-[#5C7146] hover:bg-[#5C7146]/5 rounded-full font-bold text-[13px] sm:text-sm tracking-wide transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
              >
                Our Success Story
              </Link>
            </div>

            {/* Trust line */}
            <p className="text-[0.78rem] text-[#6A6A6A] font-serif tracking-wide pt-1 select-none">
              Limited spaces for 2026–27 cohort · 94% top-20 global university placement
            </p>

            {/* Contact Strip */}
            <div className="pt-5 border-t border-[#4A4333]/10 flex flex-wrap gap-x-5 gap-y-3 items-center text-[0.82rem] text-[#4A4333] font-serif">
              {[
                { href: "tel:+919971125276", icon: "phone", label: "+91-9971125276" },
                { href: "mailto:contact@epicquestlearning.com", icon: "mail", label: "contact@epicquestlearning.com" },
                { href: "https://www.epicquestlearning.com", icon: "globe", label: "epicquestlearning.com" },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} className="hover:text-[#5C7146] transition-colors flex items-center gap-1.5 group">
                  <span className="w-6 h-6 rounded-full bg-[#5C7146]/8 flex items-center justify-center group-hover:bg-[#5C7146]/15 transition-colors shrink-0">
                    {icon === "phone" && (
                      <svg className="w-3 h-3 text-[#5C7146]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.157-.44.009-.926.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    )}
                    {icon === "mail" && (
                      <svg className="w-3 h-3 text-[#5C7146]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    )}
                    {icon === "globe" && (
                      <svg className="w-3 h-3 text-[#5C7146]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                      </svg>
                    )}
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Image — asymmetric frame with floating badges */}
          <div className="w-full lg:w-[45%] lg:flex-none relative animate-fade-in delay-500">
            {/* Decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[2.5rem_1.5rem_3rem_1.5rem] border-2 border-[#DCA543]/40 pointer-events-none" />

            {/* Main image */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[3/4] rounded-[2.5rem_1.5rem_3rem_1.5rem] overflow-hidden shadow-2xl border-4 border-white/70 group">
              <Image
                src="/images/home/Home_Hero.png"
                alt="Student working on electronics project"
                fill
                className="object-cover object-center brightness-120 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                priority
              />

            </div>

            {/* Decorative element — offset dot cluster */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 pointer-events-none opacity-30 hidden lg:block"
              style={{ backgroundImage: "radial-gradient(#5C7146 1.5px, transparent 1.5px)", backgroundSize: "10px 10px" }} />
          </div>

        </div>
      </section>

      {/* ── 2. THE EPICQUEST METHOD ── */}
      <section className="w-full bg-[#F6EBD4] py-16 sm:py-20 lg:py-28 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col mb-12 lg:mb-14 gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                The EpicQuest Method
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight">
                Your Bespoke <WavyUnderline>Portfolio Journey</WavyUnderline>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif max-w-2xl leading-relaxed mt-2">
              From psychometric assessment to final portfolio submission — a structured, milestone-driven journey tailored entirely to you.
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
                  <div className="text-[0.65rem] font-bold text-[#5C7146] uppercase tracking-[0.15em] mb-1">Step 01</div>
                  <h3 className="text-lg font-serif font-bold text-[#403011]">Assessment</h3>
                  <p className="text-[0.78rem] text-[#4A4333] font-serif max-w-[160px] mx-auto leading-snug mt-1">
                    Psychometric evaluation & goal-setting
                  </p>
                </div>
                <div className="absolute top-[192px] left-1/2 -translate-x-1/2 z-10">
                  <div className="relative w-14 h-14 rounded-full bg-[#5C7146] border-4 border-[#F6EBD4] shadow-lg flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 2 — pin on hilltop at Y≈80, bottom label */}
              <div className="relative w-full h-full">
                <div className="absolute top-[36px] left-1/2 -translate-x-1/2 z-10">
                  <div className="relative w-14 h-14 rounded-full bg-[#5C7146] border-4 border-[#F6EBD4] shadow-lg flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-6 left-0 w-full text-center px-4 select-none">
                  <div className="text-[0.65rem] font-bold text-[#5C7146] uppercase tracking-[0.15em] mb-1">Step 02</div>
                  <h3 className="text-lg font-serif font-bold text-[#403011]">Research</h3>
                  <p className="text-[0.78rem] text-[#4A4333] font-serif max-w-[160px] mx-auto leading-snug mt-1">
                    Skill-building & project research
                  </p>
                </div>
              </div>

              {/* Step 3 — top label, pin at valley Y≈280 */}
              <div className="relative w-full h-full">
                <div className="absolute top-6 left-0 w-full text-center px-4 select-none">
                  <div className="text-[0.65rem] font-bold text-[#5C7146] uppercase tracking-[0.15em] mb-1">Step 03</div>
                  <h3 className="text-lg font-serif font-bold text-[#403011]">Creation</h3>
                  <p className="text-[0.78rem] text-[#4A4333] font-serif max-w-[160px] mx-auto leading-snug mt-1">
                    Publications, patents & prototypes
                  </p>
                </div>
                <div className="absolute top-[192px] left-1/2 -translate-x-1/2 z-10">
                  <div className="relative w-14 h-14 rounded-full bg-[#5C7146] border-4 border-[#F6EBD4] shadow-lg flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 4 — pin at hilltop Y≈80, bottom label */}
              <div className="relative w-full h-full">
                <div className="absolute top-[36px] left-1/2 -translate-x-1/2 z-10">
                  <div className="relative w-14 h-14 rounded-full bg-[#DCA543] border-4 border-[#F6EBD4] shadow-lg flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-6 left-0 w-full text-center px-4 select-none">
                  <div className="text-[0.65rem] font-bold text-[#DCA543] uppercase tracking-[0.15em] mb-1">Step 04</div>
                  <h3 className="text-lg font-serif font-bold text-[#403011]">Placement</h3>
                  <p className="text-[0.78rem] text-[#4A4333] font-serif max-w-[160px] mx-auto leading-snug mt-1">
                    Apprenticeships & Ivy applications
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── MOBILE TIMELINE ── */}
          <div className="lg:hidden relative mt-4">
            {/* Vertical connector line */}
            <div className="absolute left-7 top-7 bottom-7 w-0.5 bg-[#5C7146]/30 z-0" />

            <div className="flex flex-col gap-0">
              {[
                {
                  step: "01", title: "Assessment", desc: "Psychometric evaluation and goal-setting",
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                },
                {
                  step: "02", title: "Research", desc: "Skill-building and project research",
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                },
                {
                  step: "03", title: "Creation", desc: "Publications, patents and prototypes",
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                },
                {
                  step: "04", title: "Placement", desc: "Apprenticeships and Ivy applications", gold: true,
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>
                },
              ].map(({ step, title, desc, icon, gold }) => (
                <div key={title} className="relative flex items-start gap-5 pb-8 last:pb-0 z-10">
                  <div className={`shrink-0 w-14 h-14 rounded-full border-4 border-[#F6EBD4] shadow-md flex items-center justify-center text-white ${gold ? "bg-[#DCA543]" : "bg-[#5C7146]"}`}>
                    {icon}
                  </div>
                  <div className="pt-2.5">
                    <div className={`text-[0.65rem] font-bold uppercase tracking-[0.15em] mb-0.5 ${gold ? "text-[#DCA543]" : "text-[#5C7146]"}`}>Step {step}</div>
                    <h3 className="text-base font-serif font-bold text-[#403011]">{title}</h3>
                    <p className="text-sm text-[#4A4333] font-serif leading-snug mt-0.5 max-w-[260px]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-[#4A4333] font-serif max-w-2xl mx-auto mt-14 leading-relaxed">
            Our four-phase framework ensures every student builds a coherent, compelling narrative — one that admissions officers at Harvard, Yale, Stanford, and beyond will remember.
          </p>

          {/* CTA to learn more */}
          <div className="text-center mt-8">
            <Link
              href="/the-epicquest-method"
              className="w-full sm:w-auto inline-flex items-center justify-center text-center gap-2 sm:gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-[#5C7146] hover:bg-[#4A5C38] text-white rounded-full font-bold text-[13px] sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
            >
              Learn More About Our Method
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. PROGRAMS ── */}
      <section className="w-full py-16 sm:py-20 lg:py-28 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          <div className="flex flex-col mb-12 lg:mb-14 gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                Our Programs
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight">
                Everything <WavyUnderline>We Offer</WavyUnderline>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif max-w-2xl leading-relaxed mt-2">
              Every program builds a world-class university portfolio. Choose your path — or let us map one for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                icon: Brain,
                href: "/programs/psychometric-profiling",
                title: "Psychometric Profiling",
                desc: "Discover your unique cognitive strengths, learning style, and intellectual profile through our proprietary assessment. Results are used to align your program selection, mentorship pairing, and portfolio narrative.",
              },
              {
                num: "02",
                icon: Microscope,
                href: "/programs/applied-research",
                title: "Skills Development & Research",
                desc: "Build real academic credentials through our flagship Skills Academy programs — spanning AI/ML, Finance, Robotics, Biotech, Policy, and Research. Develop peer-reviewed publications, prototypes, and innovation portfolios under expert mentorship.",
              },
              {
                num: "03",
                icon: Cpu,
                href: "/programs/prototype-development",
                title: "Prototype Development",
                desc: "Engineer working prototypes in hardware, software, industrial design, or biotech. From concept to functional model, students document their build process and present to industry panels — creating tangible proof of innovation.",
              },
              {
                num: "04",
                icon: ScrollText,
                href: "/programs/policy-drafts",
                title: "Published Policy Drafts",
                desc: "Author original policy briefs submitted to real think tanks, NGOs, or government portals. Students engage with live policy challenges and receive editorial guidance from former civil servants and academics.",
              },
              {
                num: "05",
                icon: FileBadge,
                href: "/programs/patent-filing",
                title: "Patent Filing Support",
                desc: "Navigate the full patent application process for truly original inventions — from prior art searches and claims drafting to USPTO/IPO submission. Students emerge with a filed patent application and a deep understanding of IP law.",
              },
              {
                num: "06",
                icon: GraduationCap,
                href: "/programs/apprenticeships",
                title: "Apprenticeships & Internships",
                desc: "Gain structured, hands-on experience with research labs, funded startups, and policy organisations. Placements are curated to align with each student's portfolio track and university goals.",
              },
            ].map(({ num, icon: Icon, href, title, desc }) => (
              <Link
                key={title}
                href={href}
                className="group relative flex flex-col gap-4 p-7 sm:p-8 bg-[#FDFBF7] rounded-[2rem] border border-[#4A4333]/8 hover:border-[#566544]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden"
              >
                {/* Number accent */}
                <span className="absolute top-6 right-8 text-[0.65rem] font-bold text-[#4A4333]/25 font-serif tracking-widest select-none">{num}</span>

                <div className="w-11 h-11 rounded-xl bg-[#566544]/10 flex items-center justify-center text-[#566544] group-hover:bg-[#566544] group-hover:text-white transition-all duration-300 shrink-0">
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-[1rem] font-semibold text-[#403011] leading-snug mb-2">{title}</h3>
                  <p className="text-[#4A4333]/80 text-sm font-serif leading-relaxed">{desc}</p>
                </div>
                <span className="mt-auto pt-2 text-[#566544] text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 group-hover:text-[#465732] transition-colors">
                  Explore Details
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                </span>
              </Link>
            ))}
          </div>

          {/* Bottom CTA card */}
          <div className="mt-8 bg-[#F6EBD4] rounded-2xl p-7 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#4A4333]/10">
            <p className="text-[#403011] font-serif text-sm sm:text-base max-w-md leading-relaxed">
              Not sure which program fits? Book a <strong className="font-semibold">free consultation</strong> and we'll map your personalised plan.
            </p>
            <Link
              href="/contact"
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center text-center gap-2 sm:gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-[#5C7146] hover:bg-[#4A5C38] text-white rounded-full font-bold text-[13px] sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. SKILLS ACADEMY ── */}
      <section className="w-full bg-[#F6EBD4] py-16 sm:py-20 lg:py-28 border-t border-b border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Section Header */}
          <div className="flex flex-col mb-12 lg:mb-14 gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                Skills Academy
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight">
                The Flagship <WavyUnderline>Skills Academy</WavyUnderline>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif max-w-2xl leading-relaxed mt-2">
              EpicQuest students build institutional-grade capabilities, published academic research, and provisional patents years before their peers.
            </p>
          </div>

          {/* 5-Fellowship Visual Grid Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "AI / ML & Data Science",
                href: "/skills/ai-ml-data-science",
                tag: "Python Foundations",
                desc: "Train predictive models, analyze finance datasets, and build live streamlit dashboards.",
                icon: BrainCircuit,
                num: "01"
              },
              {
                title: "Applied Finance & Investment Banking",
                href: "/skills/applied-finance-investment-banking",
                tag: "Business Valuation",
                desc: "Master three-statement linkage modeling, DCF formulas, and M&A pitch books.",
                icon: Landmark,
                num: "02"
              },
              {
                title: "Robotics & Drone Science",
                href: "/skills/robotics-drone-science",
                tag: "Autonomous Hardware",
                desc: "Engineer composite drone chassis in Autodesk Fusion 360 and program flight navigation scripts.",
                icon: Cpu,
                num: "03"
              },
              {
                title: "Policy, Economics & Diplomacy",
                href: "/skills/policy-economics-diplomacy",
                tag: "Global Governance",
                desc: "Author empirical policy memos and defend negotiation solutions before Model UN panels.",
                icon: Globe,
                num: "04"
              },
              {
                title: "Research & Patent Incubator",
                href: "/skills/research-patent-incubator",
                tag: "Academic IP Builder",
                desc: "Draft technical provisional patent claims and publish peer-reviewed scientific manuscripts.",
                icon: Microscope,
                num: "05"
              },
            ].map(({ num, icon: Icon, href, title, desc }) => (
              <Link
                key={title}
                href={href}
                className="group relative flex flex-col gap-4 p-7 sm:p-8 bg-[#FDFBF7] rounded-[2rem] border border-[#4A4333]/8 hover:border-[#566544]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden"
              >
                {/* Number accent */}
                <span className="absolute top-6 right-8 text-[0.65rem] font-bold text-[#4A4333]/25 font-serif tracking-widest select-none">{num}</span>

                <div className="w-11 h-11 rounded-xl bg-[#566544]/10 flex items-center justify-center text-[#566544] group-hover:bg-[#566544] group-hover:text-white transition-all duration-300 shrink-0">
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-[1rem] font-semibold text-[#403011] leading-snug mb-2">{title}</h3>
                  <p className="text-[#4A4333]/80 text-sm font-serif leading-relaxed">{desc}</p>
                </div>
                <span className="mt-auto pt-2 text-[#566544] text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 group-hover:text-[#465732] transition-colors">
                  Explore Fellowship
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                </span>
              </Link>
            ))}
          </div>

          {/* Quick link to Skills hub */}
          <div className="text-center mt-14">
            <Link
              href="/skills"
              className="w-full sm:w-auto inline-flex items-center justify-center text-center gap-2 sm:gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-[#5C7146] hover:bg-[#4A5C38] text-white rounded-full font-bold text-[13px] sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
            >
              Enter Skills Academy Hub
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* ── 5. RESULTS & SUCCESS STORIES (MERGED) ── */}
      <section className="w-full bg-[#F6EBD4] py-16 sm:py-20 lg:py-28 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Section Header */}
          <div className="flex flex-col mb-12 lg:mb-14 gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                Proven Outcomes
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight">
                Results That <WavyUnderline>Speak</WavyUnderline> For Themselves
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif max-w-2xl leading-relaxed mt-2">
              Built on real student outcomes, not projections. Published research, filed patents, Ivy League results.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-0 lg:divide-x divide-y lg:divide-y-0 divide-[#4A4333]/15 border border-[#4A4333]/15 rounded-2xl overflow-hidden bg-[#FDFBF7] mb-14">
            {[
              { stat: "94%", label: "Admission Rate", sub: "Top-20 global universities" },
              { stat: "3×", label: "Portfolio Strength", sub: "More achievements than peers" },
              { stat: "50+", label: "Publications", sub: "Recognised research venues" },
              { stat: "12", label: "Patents Filed", sub: "Original student inventions" },
            ].map(({ stat, label, sub }) => (
              <div key={label} className="flex flex-col items-start gap-1.5 px-6 py-8 sm:px-8 sm:py-10 group hover:bg-[#5C7146]/4 transition-colors duration-300">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#5C7146] font-medium leading-none tabular-nums">{stat}</div>
                <div className="text-[0.7rem] font-bold text-[#403011] uppercase tracking-[0.12em] mt-1">{label}</div>
                <div className="text-xs text-[#6A6A6A] font-serif leading-snug">{sub}</div>
              </div>
            ))}
          </div>

          {/* Student Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src: "/images/home/Home_Saatvik.png",
                alt: "Saatvick S.",
                quote: "EpicQuest helped me publish my first research paper at 16. That publication was the centrepiece of my Harvard application.",
                name: "Saatvick S.",
                uni: "USC, Class of 2025",
                tag: "Research Publication",
              },
              {
                src: "/images/home/Home_Jaivir.png",
                alt: "Jaivir G.",
                quote: "The patent I filed through EpicQuest made my UC Berkeley application unforgettable. I wasn't just a student — I was an inventor.",
                name: "Jaivir G.",
                uni: "UC Berkeley, Class of 2026",
                tag: "Patent Filing",
              },
              {
                src: "/images/home/Home_Devanshi.png",
                alt: "Devannshi R.",
                quote: "My policy draft was cited by a state legislator. Harvey Mudd's admissions committee noticed. EpicQuest gave me a voice.",
                name: "Devannshi R.",
                uni: "Harvey Mudd, Class of 2026",
                tag: "Policy Draft",
              },
            ].map(({ src, alt, quote, name, uni, tag }) => (
              <div key={name} className="group flex flex-col rounded-[2rem] overflow-hidden border border-[#4A4333]/10 bg-[#FDFBF7] hover:bg-white hover:shadow-xl hover:-translate-y-1 hover:border-[#566544]/30 transition-all duration-300">
                {/* Image */}
                <div className="relative w-full aspect-[4/3] bg-[#E0DDD5] overflow-hidden">
                  <Image src={src} alt={alt} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D3E1C]/30 to-transparent" />
                  <span className="absolute top-4 left-4 text-[0.65rem] font-bold text-white bg-[#5C7146]/80 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                </div>
                {/* Content */}
                <div className="flex flex-col gap-3 p-6">
                  <blockquote className="text-sm text-[#5A5A5A] font-serif italic leading-relaxed border-l-2 border-[#5C7146]/30 pl-3">
                    &quot;{quote}&quot;
                  </blockquote>
                  <div className="pt-1 border-t border-[#4A4333]/10">
                    <div className="font-semibold text-[#403011] text-sm">{name}</div>
                    <div className="text-[0.75rem] text-[#8A8373] font-serif mt-0.5">{uni}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to full results */}
          <div className="text-center mt-12">
            <Link
              href="/results"
              className="w-full sm:w-auto inline-flex items-center justify-center text-center gap-2 sm:gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-[#5C7146] hover:bg-[#4A5C38] text-white rounded-full font-bold text-[13px] sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
            >
              View All Results & Placements
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. DIAGNOSTIC REPORT TEASER ── */}
      <section className="w-full bg-[#F6EBD4] py-16 sm:py-20 lg:py-28 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Section Header */}
          <div className="flex flex-col mb-12 lg:mb-14 gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                Diagnostic Assessment
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight">
                Know Your Child&apos;s <WavyUnderline>Potential</WavyUnderline>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif max-w-2xl leading-relaxed mt-2">
              Science-backed career & personality mapping for high school and college students — combining two globally validated frameworks in one powerful report.
            </p>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: Features */}
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: Compass,
                  title: "Gunaity Epicometer™",
                  desc: "DISC-based personality assessment adapted for students — mapping behavioural styles across Drive, Influence, Support, and Clarity dimensions with 12 unique hybrid types.",
                  tag: "D · Drive   I · Influence   S · Support   C · Clarity",
                  tagColor: "text-[#566544] bg-[#566544]/10",
                },
                {
                  icon: Activity,
                  title: "Karmattitude™",
                  desc: "Career interest & aptitude profiling across 6 career domains — linking personality strengths to real-world profession pathways.",
                  tag: "6 Career Domains",
                  tagColor: "text-[#DCA543] bg-[#DCA543]/10",
                },
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.title} className="bg-[#FDFBF7] border border-[#4A4333]/10 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-serif font-bold text-[#403011] mb-2 flex items-center gap-2">
                      <ItemIcon className="w-4 h-4 text-[#566544]" />
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4A4333] font-serif leading-relaxed mb-3">
                      {item.desc}
                    </p>
                    <div className={`text-[10px] font-bold ${item.tagColor} px-2 py-1 rounded w-fit uppercase tracking-wider`}>
                      {item.tag}
                    </div>
                  </div>
                );
              })}

              {/* Quick stats */}
              <div className="flex flex-wrap gap-4">
                {[
                  { val: "5 min", label: "To Complete" },
                  { val: "Instant", label: "Insights" },
                  { val: "Detailed", label: "Analysis" },
                ].map(({ val, label }) => (
                  <div key={label} className="flex items-center gap-2.5 select-none">
                    <span className="text-lg sm:text-xl font-serif font-semibold text-[#5C7146] leading-none">{val}</span>
                    <span className="text-xs text-[#6A6A6A] font-serif leading-tight border-l border-[#4A4333]/20 pl-2.5">{label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/test"
                className="w-full sm:w-auto inline-flex items-center justify-center text-center gap-2 sm:gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-[#5C7146] hover:bg-[#4A5C38] text-white rounded-full font-bold text-[13px] sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Right: Report preview image */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-52 h-52 rounded-full bg-[#DCA543]/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-60 h-60 rounded-full bg-[#566544]/10 blur-3xl pointer-events-none" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#DCA543]/20 shadow-2xl bg-white">
                <Image
                  src="/images/diagnostic_test/Diagnostic_Hero.png"
                  alt="EpicQuest Diagnostic Report Preview"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. TEAM SNAPSHOT ── */}
      <section className="w-full bg-[#F6EBD4] py-16 sm:py-20 lg:py-28 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Section Header */}
          <div className="flex flex-col mb-12 lg:mb-14 gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                Our Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight">
                Meet the <WavyUnderline>Team</WavyUnderline>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif max-w-2xl leading-relaxed mt-2">
              IIT, IIM, MIT, and UPenn alumni with 700+ students mentored across 20+ countries. Real credentials, real results.
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Mr. Tilak Mishra",
                role: "Founder Partner",
                credential: "Univ. of Pennsylvania",
                image: "/images/team/Team_Tilak.jpeg",
                accent: "#DCA543",
              },
              {
                name: "Dr. Alok N Jha",
                role: "Managing Partner",
                credential: "IIT Delhi · CS PhD",
                image: "/images/team/Team_Alok.jpeg",
                accent: "#8E8B42",
              },
              {
                name: "Mr. Achal Nath",
                role: "Managing Partner",
                credential: "IIT Delhi · Mech Engg",
                image: "/images/team/Team_Achal.jpeg",
                accent: "#566544",
              },
              {
                name: "Mr. Pratham Naik",
                role: "Head — US & Canada",
                credential: "MIT Sloan · MBA",
                image: "/images/team/Team_Pratham.png",
                accent: "#566544",
              },
            ].map((member) => (
              <div key={member.name} className="group flex flex-col rounded-[2rem] overflow-hidden border border-[#4A4333]/10 bg-[#FDFBF7] hover:bg-white hover:shadow-xl hover:-translate-y-1 hover:border-[#566544]/30 transition-all duration-300">
                {/* Image */}
                <div className="relative w-full aspect-[3/4] bg-[#E0DDD5] overflow-hidden">
                  <Image src={member.image} alt={member.name} fill className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D3E1C]/40 to-transparent" />
                </div>
                {/* Content */}
                <div className="flex flex-col gap-1 p-5">
                  <h3 className="font-semibold text-[#403011] text-sm leading-snug">{member.name}</h3>
                  <p className="text-[0.75rem] text-[#4A4333] font-serif">{member.role}</p>
                  <p className="text-[0.7rem] text-[#8A8373] font-serif italic mt-0.5">{member.credential}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/team"
              className="w-full sm:w-auto inline-flex items-center justify-center text-center gap-2 sm:gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-[#5C7146] hover:bg-[#4A5C38] text-white rounded-full font-bold text-[13px] sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
            >
              Meet the Full Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. PARTNERS & AFFILIATIONS ── */}
      <section className="w-full bg-[#F6EBD4] py-16 sm:py-20 lg:py-28 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col mb-12 lg:mb-14 gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                Partners & Affiliations
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight">
                Backed by Institutions<br className="hidden sm:inline" /> That <WavyUnderline>Matter</WavyUnderline>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif max-w-2xl leading-relaxed mt-2">
              Active collaborations with India&apos;s most prestigious academic, research, and policy institutions — not cosmetic logos.
            </p>
          </div>

          {/* Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { src: "/images/home/Sc_Advisor_GoI.png", alt: "Office of the Principal Scientific Adviser" },
              { src: "/images/home/ISB_BIPP_Logo.png", alt: "Indian School of Business" },
              { src: "/images/home/IIITD-img.png", alt: "IIIT Delhi" },
              { src: "/images/home/IETO_Logo.png", alt: "IETO" },
              { src: "/images/home/AMC_Logo.jpeg", alt: "AMC" },
              { src: "/images/home/Creditas_Logo.jpeg", alt: "Creditas Solutions" },
              { src: "/images/home/Credlabs_Logo.png", alt: "Credlabs" },
              { src: "/images/home/UDC_Logo.png", alt: "UDC" },
            ].map(({ src, alt }) => (
              <div
                key={alt}
                className="bg-white h-24 flex items-center justify-center rounded-xl border border-[#4A4333]/10 shadow-sm px-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-full h-14">
                  <Image src={src} alt={alt} fill className="object-contain transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="rounded-2xl overflow-hidden border border-[#5C7146]/15 flex flex-col sm:flex-row">
            <div className="bg-[#5C7146] px-6 py-5 flex items-center justify-center sm:w-16 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </div>
            <div className="bg-[#5C7146]/6 px-6 py-5">
              <p className="text-[#334155] font-serif text-sm sm:text-[0.95rem] leading-relaxed">
                Affiliations with the <strong className="text-[#403011] font-semibold">Office of the Principal Scientific Adviser</strong> to the Government of India, ISB&apos;s Bharti Institute of Public Policy, IIIT Delhi, and IETO represent active institutional endorsements — signalling to admissions committees worldwide that EpicQuest students operate at the highest levels of academic credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ── */}
      <section className="w-full bg-[#F6EBD4] py-12 sm:py-16 lg:py-24 border-t border-[#4A4333]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#2D3E1C] via-[#374D23] to-[#455434] rounded-3xl px-6 py-16 sm:px-12 md:px-20 md:py-20 shadow-2xl border border-[#5C7146]/20">
            {/* Ambient blobs */}
            <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#DCA543]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#F6EBD4]/8 blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#F6EBD4_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                COHORT ADMISSIONS OPEN
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-serif font-medium text-[#F6EBD4] tracking-tight leading-[1.1] mb-5">
                Ready to Begin Your{" "}
                <em className="text-[#DCA543] not-italic">Ivy League</em>{" "}<WavyUnderline> Journey?</WavyUnderline>
              </h2>
              <p className="text-sm sm:text-base text-[#F6EBD4]/65 font-serif mb-10 max-w-lg mx-auto leading-relaxed">
                Limited spaces remain for our bespoke 2026–27 cohort. Book your diagnostic consultation today and build a tailored admissions strategy.
              </p>

              {/* Mini stats row in dark card */}
              <div className="flex justify-center gap-8 mb-10">
                {[{ val: "94%", label: "Admission Rate" }, { val: "12", label: "Patents Filed" }, { val: "50+", label: "Publications" }].map(({ val, label }) => (
                  <div key={label} className="text-center select-none">
                    <div className="text-2xl font-serif font-semibold text-[#DCA543] leading-none">{val}</div>
                    <div className="text-[0.65rem] text-[#F6EBD4]/50 uppercase tracking-wider mt-1">{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center text-center gap-2 sm:gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-[#DCA543] hover:bg-[#E8B555] text-[#2D3E1C] rounded-full font-bold text-[13px] sm:text-base transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(220,165,67,0.35)] hover:-translate-y-0.5 group"
                >
                  Generate Your Ivy League Plan
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
