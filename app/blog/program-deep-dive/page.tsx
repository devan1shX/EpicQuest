"use client";

import WavyUnderline from "@/components/ui/WavyUnderline";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, ChevronRight, Award, BookOpen, Share2, Bookmark, CheckCircle2 } from "lucide-react";

export default function ProgramDeepDivePostPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("inspiration");

  const sectionsRef = {
    "inspiration": useRef<HTMLElement>(null),
    "eq-philosophy": useRef<HTMLElement>(null),
    "six-pathways": useRef<HTMLElement>(null),
    "who-for": useRef<HTMLElement>(null),
    "first-90-days": useRef<HTMLElement>(null),
  };

  // Scroll Progress and Table of Contents active-link tracking
  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate reading progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // 2. Track active section based on viewport
      const scrollPosition = window.scrollY + 200; // Offset for header padding

      let currentSection = "inspiration";
      for (const [key, ref] of Object.entries(sectionsRef)) {
        if (ref.current) {
          const top = ref.current.offsetTop;
          const height = ref.current.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = key;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollTo = (id: keyof typeof sectionsRef) => {
    const element = sectionsRef[id].current;
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen overflow-x-hidden">

      {/* ── STICKY READING PROGRESS BAR ── */}
      <div
        className="fixed top-[64px] left-0 h-1 bg-[#5C7146] transition-all duration-100 ease-out z-50"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* ── HERO HEADER SECTION ── */}
      <section className="relative w-full overflow-hidden border-b border-[#4A4333]/10 pb-10 sm:pb-12 pt-14 sm:pt-20">
        {/* Dot grid */}
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(#566544_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.055] pointer-events-none" />
        {/* Ambient blob */}
        <div aria-hidden className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full bg-[#566544]/6 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">

          {/* Breadcrumb / Back Navigation */}
          <div className="mb-8 animate-fade-up">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#5C7146] hover:text-[#465732] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.5} />
              Back to Insights Hub
            </Link>
          </div>

          {/* Programme badge */}
          <div className="mb-8">
            <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
              PROGRAM DEEP DIVE
            </span>
          </div>

          {/* Title & Metadata */}
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-[#403011] tracking-tight leading-[1.08]">
              Inside EpicQuest: A Deep Dive into Our 6 Portfolio Pathways
            </h1>

            {/* Author Card & Metadata */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#4A4333]/12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center text-olive border border-[#5C7146]/30 font-bold font-serif text-sm">
                  EQ
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#403011]">EpicQuest Academic Committee</div>
                  <div className="text-[10px] text-[#8A8373] uppercase font-sans tracking-wide">Mentorship &amp; Curriculum Board</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#8A8373] font-serif ml-0 sm:ml-auto">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />April 25, 2026</span>
                <span className="flex items-center gap-1 bg-[#5C7146]/5 px-2.5 py-1 rounded text-[#5C7146] font-semibold">
                  <Clock className="w-3.5 h-3.5" /> 10 min read
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── MAIN FEATURE SPLIT ARTICLE LAYOUT ── */}
      <section className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 pt-10 sm:pt-12 pb-24">

        {/* Cover Image */}
        <div className="relative w-full aspect-[21/9] rounded-[3rem_1.5rem_4rem_1.5rem] overflow-hidden shadow-xl border-4 border-white/60 mb-16 animate-fade-in">
          <Image
            src="/images/blogs/Blog_Post_5_ProgramDeepDive.png"
            alt="One on one mentorship meeting"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#403011]/30 via-transparent to-transparent" />
        </div>

        {/* Dynamic Responsive Double Column Block */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 xl:gap-20 items-start">

          {/* LEFT COLUMN: Sticky Table of Contents (Desktop Only) / Accordion (Mobile Only) */}
          <aside className="lg:sticky lg:top-24 space-y-8 bg-[#FDFBF7]/60 border border-[#4A4333]/8 rounded-3xl p-6 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-[#403011] border-b border-[#4A4333]/10 pb-3 flex items-center justify-between">
              <span>Table of Contents</span>
              <BookOpen className="w-4 h-4 text-olive" />
            </div>

            <nav className="flex flex-col gap-3 text-sm font-serif">
              {[
                { id: "inspiration", label: "1. Capability-First" },
                { id: "eq-philosophy", label: "2. The EQ Philosophy" },
                { id: "six-pathways", label: "3. The 6 Pathways" },
                { id: "who-for", label: "4. Who Is EQ For?" },
                { id: "first-90-days", label: "5. Your First 90 Days" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id as keyof typeof sectionsRef)}
                  className={`text-left transition-all duration-200 pl-3 border-l-2 py-0.5 ${activeSection === item.id
                    ? "text-[#5C7146] font-bold border-[#5C7146] translate-x-1"
                    : "text-[#8A8373] hover:text-[#403011] border-transparent"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="pt-4 border-t border-[#4A4333]/10 flex justify-around text-[#8A8373]">
              <button
                title="Bookmark article"
                onClick={() => alert("Article bookmarked successfully!")}
                className="hover:text-olive transition-colors"
              >
                <Bookmark className="w-4.5 h-4.5" />
              </button>
              <button
                title="Share article"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }}
                className="hover:text-olive transition-colors"
              >
                <Share2 className="w-4.5 h-4.5" />
              </button>
            </div>
          </aside>

          {/* RIGHT COLUMN: MAIN ARTICLE TEXT */}
          <article className="max-w-3xl space-y-12 text-[#2C2C2C] font-serif leading-relaxed text-[1.08rem] sm:text-lg">

            {/* Hook Introduction */}
            <section ref={sectionsRef["inspiration"]} id="inspiration" className="space-y-4 pt-4">
              <div className="text-xl sm:text-2xl text-[#403011] italic leading-normal border-l-4 border-[#DCA543] pl-6 font-medium">
                Unlike traditional tutoring programs that focus on static memorization or standardized test prep, EpicQuest believes in portfolio-first, milestone-driven capability engineering. We pair you with world-class mentors to develop original, published, and patented credentials that signal true elite readiness.
              </div>
            </section>

            {/* Section 2 */}
            <section ref={sectionsRef["eq-philosophy"]} id="eq-philosophy" className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-[#403011] leading-tight">
                The <WavyUnderline>EpicQuest Philosophy</WavyUnderline>
              </h2>
              <p>
                EpicQuest's philosophy is rooted in cognitive alignment. We begin by diagnosing a student's logical and creative strengths through an advanced diagnostic psychometric engine.
              </p>
              <p>
                Instead of forcing a student into a pre-packaged curriculum, we map out a bespoke pathway that integrates their unique intelligence with highly valued computational, research, or public policy spiking portfolios. We don't build generic applicants; we cultivate spiked pioneers.
              </p>
            </section>

            {/* Section 3 */}
            <section ref={sectionsRef["six-pathways"]} id="six-pathways" className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-[#403011] leading-tight">
                The 6 <WavyUnderline>Portfolio Pathways</WavyUnderline>
              </h2>
              <p>
                To provide comprehensive, elite credentials, our portfolio incubator supports students across six specialized engineering pathways:
              </p>

              {/* 6 colored cards styled identically to the mockup */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#566544] text-[#FDFBF7] p-8 rounded-[2rem] border border-[#566544]/20 shadow-md">
                  <h4 className="text-lg font-bold font-serif mb-2">Applied Research Publications</h4>
                  <p className="text-xs leading-relaxed text-[#FDFBF7]/90 font-serif">
                    Formulate novel scientific hypotheses, write professional LaTeX manuscripts, and publish co-authored research alongside expert scientists in selective peer-reviewed international journals.
                  </p>
                </div>
                <div className="bg-[#78885E] text-[#FDFBF7] p-8 rounded-[2rem] border border-[#78885E]/20 shadow-md">
                  <h4 className="text-lg font-bold font-serif mb-2">Prototype Development</h4>
                  <p className="text-xs leading-relaxed text-[#FDFBF7]/90 font-serif">
                    Design and fabricate functioning hardware, autonomous drone sensors, or deep learning software prototype systems to solve local and global sustainability challenges.
                  </p>
                </div>
                <div className="bg-[#DCA543] text-[#403011] p-8 rounded-[2rem] border border-[#DCA543]/20 shadow-md">
                  <h4 className="text-lg font-bold font-serif mb-2 text-[#403011]">Published Policy Drafts</h4>
                  <p className="text-xs leading-relaxed text-[#403011]/90 font-serif">
                    Draft quantitative socio-economic legislative proposals or environmental policy briefs, backed by empirical data, and submit them directly to municipal and regional civic bodies.
                  </p>
                </div>
                <div className="bg-[#C28A4A] text-[#FDFBF7] p-8 rounded-[2rem] border border-[#C28A4A]/20 shadow-md">
                  <h4 className="text-lg font-bold font-serif mb-2">Patent Filing Support</h4>
                  <p className="text-xs leading-relaxed text-[#FDFBF7]/90 font-serif">
                    Refine original mechanical and software inventions, draft utility and design claims, and navigate official intellectual property channels to secure registered provisional patent filings.
                  </p>
                </div>
                <div className="bg-[#566544] text-[#FDFBF7] p-8 rounded-[2rem] border border-[#566544]/20 shadow-md">
                  <h4 className="text-lg font-bold font-serif mb-2">Apprenticeships &amp; Internships</h4>
                  <p className="text-xs leading-relaxed text-[#FDFBF7]/90 font-serif">
                    Gain prestigious, real-world corporate and scientific lab placements to apply your portfolio capabilities under authentic commercial conditions and secure expert validation.
                  </p>
                </div>
                <div className="bg-[#78885E] text-[#FDFBF7] p-8 rounded-[2rem] border border-[#78885E]/20 shadow-md">
                  <h4 className="text-lg font-bold font-serif mb-2">Psychometric Skill Development</h4>
                  <p className="text-xs leading-relaxed text-[#FDFBF7]/90 font-serif">
                    Hone high-value future-ready competencies, including Python foundations, exploratory analytics, dashboard design, and professional defense presentation strategies.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section ref={sectionsRef["who-for"]} id="who-for" className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-[#403011] leading-tight">
                Who Is <WavyUnderline>EpicQuest For?</WavyUnderline>
              </h2>
              <p>
                EpicQuest is designed exclusively for highly ambitious high school students (Grades 9 through 12) who are targetting tier-1 placements at elite institutions like Harvard, Princeton, Stanford, UPenn, and Oxford.
              </p>
              <p>
                Our students do not settle for standard curricular boundaries—they seek to build, publish, invent, and establish themselves as active creators of their fields. If you possess the curiosity and ambition to push beyond the textbook, you are an EpicQuest candidate.
              </p>
            </section>

            {/* Section 5 */}
            <section ref={sectionsRef["first-90-days"]} id="first-90-days" className="space-y-6 pt-6 border-t border-[#4A4333]/10">
              <h2 className="text-3xl font-serif font-bold text-[#403011] leading-tight">
                What to Expect: Your First <WavyUnderline>90 Days</WavyUnderline>
              </h2>
              <p>
                Embarking on a spiked portfolio journey is structured and systematic. Here is the blueprint of your launch phase:
              </p>

              {/* Styled Alternating Vertical Timeline matching mockup layout */}
              <div className="relative mt-12 pl-6 sm:pl-0">
                {/* Vertical Line */}
                <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-0.5 bg-[#4A4333]/15 -translate-x-1/2 hidden sm:block" />
                <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-[#4A4333]/15 sm:hidden" />

                {/* Timeline Item 1 */}
                <div className="relative flex flex-col sm:flex-row items-start sm:justify-between mb-12 sm:mb-16">
                  <div className="absolute left-0 sm:left-1/2 top-1.5 w-10 h-10 rounded-full bg-[#5C7146] text-[#FDFBF7] flex items-center justify-center font-bold text-sm -translate-x-1/2 z-10" />

                  {/* Left side text */}
                  <div className="w-full sm:w-[45%] pl-10 sm:pl-0 sm:text-right">
                    <span className="text-xs font-bold text-[#5C7146] uppercase tracking-widest block mb-1">Days 1–30</span>
                    <h4 className="text-lg font-serif font-bold text-[#403011]">Discovery &amp; Psychometric Assessment</h4>
                    <p className="text-sm text-[#4A4333]/80 mt-2 leading-relaxed font-serif">
                      We administer an exhaustive diagnostic psychometric evaluation mapping your logical patterns, creative interests, and baseline skills to build a customized admissions milestone strategy.
                    </p>
                  </div>
                  <div className="hidden sm:block w-[45%]" />
                </div>

                {/* Timeline Item 2 */}
                <div className="relative flex flex-col sm:flex-row items-start sm:justify-between mb-12 sm:mb-16">
                  <div className="absolute left-0 sm:left-1/2 top-1.5 w-10 h-10 rounded-full bg-[#78885E] text-[#FDFBF7] flex items-center justify-center font-bold text-sm -translate-x-1/2 z-10" />

                  <div className="hidden sm:block w-[45%]" />

                  {/* Right side text */}
                  <div className="w-full sm:w-[45%] pl-10 sm:pl-0">
                    <span className="text-xs font-bold text-[#78885E] uppercase tracking-widest block mb-1">Days 31–60</span>
                    <h4 className="text-lg font-serif font-bold text-[#403011]">Project Selection &amp; Mentorship Matching</h4>
                    <p className="text-sm text-[#4A4333]/80 mt-2 leading-relaxed font-serif">
                      Our committee pairs you with university PhD candidates and industry expert mentors to identify novel research topics, engineering designs, or legislative proposals.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative flex flex-col sm:flex-row items-start sm:justify-between mb-6">
                  <div className="absolute left-0 sm:left-1/2 top-1.5 w-10 h-10 rounded-full bg-[#DCA543] text-[#403011] flex items-center justify-center font-bold text-sm -translate-x-1/2 z-10" />

                  {/* Left side text */}
                  <div className="w-full sm:w-[45%] pl-10 sm:pl-0 sm:text-right">
                    <span className="text-xs font-bold text-[#DCA543] uppercase tracking-widest block mb-1">Days 61–90</span>
                    <h4 className="text-lg font-serif font-bold text-[#403011]">Active Portfolio Building Begins</h4>
                    <p className="text-sm text-[#4A4333]/80 mt-2 leading-relaxed font-serif">
                      You launch into hands-on code development, data aggregation, mathematical modeling, paper drafting, or intellectual property claims, making rapid progress on your spike.
                    </p>
                  </div>
                  <div className="hidden sm:block w-[45%]" />
                </div>
              </div>

            </section>

          </article>

        </div>
      </section>

    </main>
  );
}
