"use client";

import WavyUnderline from "@/components/ui/WavyUnderline";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, ChevronRight, Award, BookOpen, Share2, Bookmark, CheckCircle2 } from "lucide-react";

export default function ResearchPortfolioPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("why-research-matters");

  const sectionsRef = {
    "why-research-matters": useRef<HTMLElement>(null),
    "the-data-says": useRef<HTMLElement>(null),
    "types-of-research": useRef<HTMLElement>(null),
    "how-to-start": useRef<HTMLElement>(null),
    "eq-program": useRef<HTMLElement>(null),
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

      let currentSection = "why-research-matters";
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
          <div>
            <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
              RESEARCH &AMP; PORTFOLIO
            </span>
          </div>

          {/* Title & Metadata */}
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-[#403011] tracking-tight leading-[1.08]">
              Why Research Experience Is the #1 Differentiator in Ivy League Admissions
            </h1>

            {/* Author Card & Metadata */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#4A4333]/12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center text-olive border border-[#5C7146]/30 font-bold font-serif text-sm">
                  DA
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#403011]">Dr. Aris</div>
                  <div className="text-[10px] text-[#8A8373] uppercase font-sans tracking-wide">IIT &amp; EpicQuest Research Mentor</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#8A8373] font-serif ml-0 sm:ml-auto">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />May 18, 2026</span>
                <span className="flex items-center gap-1 bg-[#5C7146]/5 px-2.5 py-1 rounded text-[#5C7146] font-semibold">
                  <Clock className="w-3.5 h-3.5" /> 6 min read
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
            src="/images/blogs/Blog_Post_2_ResearchPortfolio.png"
            alt="Research and laboratory workspace"
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
                { id: "why-research-matters", label: "1. Why Research Matters" },
                { id: "the-data-says", label: "2. What the Data Says" },
                { id: "types-of-research", label: "3. Types of Research" },
                { id: "how-to-start", label: "4. How to Get Started" },
                { id: "eq-program", label: "5. EpicQuest Program" },
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
            <section ref={sectionsRef["why-research-matters"]} id="why-research-matters" className="space-y-4 pt-4">
              <div className="text-xl sm:text-2xl text-[#403011] italic leading-normal border-l-4 border-[#DCA543] pl-6 font-medium">
                According to recent admissions analyses, over 95% of applicants to Ivy League universities present perfect GPAs and near-perfect standardized test scores. In this sea of numerical uniformity, a student's numerical profile is no longer a differentiator—it is merely a baseline. To stand out, you must demonstrate the ability to <strong className="font-bold text-[#403011]">create</strong> knowledge, not just consume it. Empirical data shows that students who complete and publish high-quality, peer-reviewed academic research double their chances of admission.
              </div>
            </section>

            {/* Section 2 */}
            <section ref={sectionsRef["the-data-says"]} id="the-data-says" className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-[#403011] leading-tight">
                The Research Advantage — What the <WavyUnderline>Data Says</WavyUnderline>
              </h2>
              <p>
                Extracurricular profiles are evaluated on a scale of 1 to 4 by elite universities. A standard school club leadership represents a Level 3, while publishing original research in a selective, peer-reviewed international journal constitutes a Level 1 "Spike".
              </p>
              <p>
                For admissions officers, a peer-reviewed research paper is the ultimate proof of academic viability. It signals that a high school student is already operating at a collegiate level, possesses advanced statistical and analytical capabilities, and is prepared to contribute meaningfully to university laboratories and seminars on day one.
              </p>
            </section>

            {/* Section 3 */}
            <section ref={sectionsRef["types-of-research"]} id="types-of-research" className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-[#403011] leading-tight">
                Types of Research That Impress <WavyUnderline>Admissions Committees</WavyUnderline>
              </h2>
              <p>
                Not all research portfolios are created equal. Depending on your academic spikes, you should focus on a methodology that authenticates your expertise:
              </p>

              {/* Asymmetric styled boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-[#566544] text-[#FDFBF7] p-8 rounded-[2rem] border border-[#566544]/20 shadow-md">
                  <h4 className="text-xl font-bold font-serif mb-3">Applied STEM Research</h4>
                  <p className="text-sm leading-relaxed text-[#FDFBF7]/90 font-serif">
                    Engage in computational modeling, machine learning, robotics, biotechnology, or engineering. Successful projects involve training deep neural networks on public datasets, conducting material science simulations, or fabricating functional autonomous hardware.
                  </p>
                </div>
                <div className="bg-[#78885E] text-[#FDFBF7] p-8 rounded-[2rem] border border-[#78885E]/20 shadow-md">
                  <h4 className="text-xl font-bold font-serif mb-3">Social Science &amp; Policy Research</h4>
                  <p className="text-sm leading-relaxed text-[#FDFBF7]/90 font-serif">
                    Analyze regional microeconomic datasets, model public health policy outcomes, or write formal legislative briefs. This path leverages tools like R, Python, and ArcGIS to translate raw civic data into quantitative policy recommendations.
                  </p>
                </div>
                <div className="md:col-span-2 bg-[#DCA543] text-[#403011] p-8 rounded-[2rem] border border-[#DCA543]/20 shadow-md">
                  <h4 className="text-xl font-bold font-serif mb-3 text-[#403011]">Humanities &amp; Arts Research</h4>
                  <p className="text-sm leading-relaxed text-[#403011]/90 font-serif">
                    Conduct rigorous historical historiographies, comparative literature analyses, or philosophical defenses. High-caliber humanities research demands archival validation, original source critiques, and sophisticated thematic syntheses, culminating in publication or expert panel presentations.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section ref={sectionsRef["how-to-start"]} id="how-to-start" className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-[#403011] leading-tight">
                How to Get Started with Research in <WavyUnderline>High School</WavyUnderline>
              </h2>
              <p>
                Beginning an academic research journey as a high school student can feel daunting. We break it down into four systematic steps:
              </p>

              <div className="space-y-5 my-6">
                {[
                  {
                    title: "1. Find Your Academic Domain",
                    desc: "Identify a highly specific, narrow question rather than a broad topic. Instead of 'AI in Healthcare', explore 'Using CNNs to Detect Glaucoma in Low-resolution Retinal Scans'."
                  },
                  {
                    title: "2. Review Existing Literature",
                    desc: "Search platforms like Google Scholar or PubMed to read active academic papers. Understand what has already been proven so you can formulate a novel, additive hypothesis."
                  },
                  {
                    title: "3. Conduct Rigorous Analysis",
                    desc: "Gather primary or secondary data, apply proper statistical controls, and use quantitative tools (e.g., Python, R, MATLAB) to validate your empirical results."
                  },
                  {
                    title: "4. Draft and Publish",
                    desc: "Structure your paper in LaTeX using standard academic formatting (Abstract, Intro, Method, Results, Discussion). Submit your manuscript to selective, peer-reviewed international high school or undergraduate journals."
                  }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start bg-white/50 border border-[#4A4333]/8 p-5 rounded-2xl shadow-sm hover:bg-white hover:shadow transition-all duration-300">
                    <div className="w-5 h-5 rounded-full bg-[#5C7146]/10 flex items-center justify-center text-olive border border-olive/20 shrink-0 mt-1">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#403011] leading-snug">{item.title}</h4>
                      <p className="text-sm text-[#5A5A5A] mt-0.5 leading-relaxed font-serif">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 */}
            <section ref={sectionsRef["eq-program"]} id="eq-program" className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-[#403011] leading-tight">
                EpicQuest's Applied <WavyUnderline>Research Program</WavyUnderline>
              </h2>
              <p>
                At EpicQuest, we systematically guide ambitious high schoolers through this entire academic cycle. We pair you one-on-one with active university research mentors, PhD candidates, and IIT/Ivy League scientists.
              </p>
              <p>
                Together, you will co-author a high-caliber technical manuscript, navigate peer reviews, secure official LaTeX index listings, and defend your work before an expert panel—ensuring a Tier-1 academic spike on your Common Application.
              </p>


            </section>

          </article>

        </div>
      </section>

    </main>
  );
}
