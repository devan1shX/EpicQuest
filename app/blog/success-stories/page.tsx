"use client";

import WavyUnderline from "@/components/ui/WavyUnderline";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, ChevronRight, Award, BookOpen, Share2, Bookmark, CheckCircle2 } from "lucide-react";

export default function SuccessStoriesPostPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("inspiration");

  const sectionsRef = {
    "inspiration": useRef<HTMLElement>(null),
    "saatvick-harvard": useRef<HTMLElement>(null),
    "jaivir-berkeley": useRef<HTMLElement>(null),
    "common-themes": useRef<HTMLElement>(null),
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

          {/* Breadcrumb */}
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
            <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[11px] sm:text-[12px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
              STUDENT SUCCESS
            </span>
          </div>

          {/* Title & Metadata */}
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-[#403011] tracking-tight leading-[1.08]">
              From High School to Harvard: Real Stories from EpicQuest Students
            </h1>

            {/* Author Card & Metadata */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#4A4333]/12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center text-olive border border-[#5C7146]/30 font-bold font-serif text-sm">
                  EQ
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#403011]">EpicQuest Advisory Team</div>
                  <div className="text-[10px] text-[#8A8373] uppercase font-sans tracking-wide">Elite Placements Committee</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#8A8373] font-serif ml-0 sm:ml-auto">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />May 10, 2026</span>
                <span className="flex items-center gap-1 bg-[#5C7146]/5 px-2.5 py-1 rounded text-[#5C7146] font-semibold">
                  <Clock className="w-3.5 h-3.5" /> 5 min read
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
            src="/images/blogs/Blog_Post_3_SuccessStories.png"
            alt="Graduates celebrating success"
            fill
            priority
            className="object-cover object-[center_25%]"
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
                { id: "inspiration", label: "1. Transformation" },
                { id: "saatvick-harvard", label: "2. Saatvick S. (Harvard)" },
                { id: "jaivir-berkeley", label: "3. Jaivir G. (Berkeley)" },
                { id: "common-themes", label: "4. Common Themes" },
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
                Behind every Ivy League acceptance letter lies a story of transformation—where average high school profiles are systematically refined into singular, spiked intellectual identities. Meet two students who designed their spikes and earned their placement.
              </div>
            </section>

            {/* Section 2 */}
            <section ref={sectionsRef["saatvick-harvard"]} id="saatvick-harvard" className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-[#403011] leading-tight">
                Saatvick S.'s Story — <WavyUnderline>Harvard University</WavyUnderline>
              </h2>
              <p>
                Saatvick entered EpicQuest with an interest in economics but lacked independent research experience or a distinctive academic identity. Our academic advisory team paired him with PhD mentors to structure a quantitative research paper investigating the efficacy of local micro-lending programs using dynamic regression models.
              </p>
              <p>
                By translating theoretical economic frameworks into empirical civic validation, Saatvick constructed a formidable academic spike. His resulting research paper was published in a highly selective international high school journal, showcasing collegiate-ready research capabilities that made his Harvard application undeniable.
              </p>

              {/* Styled quote box from mockup */}
              <div className="relative border-l-4 border-[#5C7146] pl-6 pr-5 py-5 my-8 bg-[#5C7146]/4 rounded-r-3xl border-t border-b border-r border-[#5C7146]/10 font-serif text-[#4A4333]">
                <span className="absolute -left-3.5 -top-3 text-5xl text-[#5C7146]/20 leading-none font-bold">“</span>
                <p className="italic text-base sm:text-lg mb-3">
                  "EpicQuest didn't just help me write a paper; they helped me discover who I am as a researcher. Authoring and publishing my economics thesis was the turning point of my application."
                </p>
                <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#5C7146]">
                  Saatvick S.
                </div>
                <div className="text-[11px] font-sans text-[#8A8373] mt-0.5">
                  Admitted to Harvard University, Class of 2030
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section ref={sectionsRef["jaivir-berkeley"]} id="jaivir-berkeley" className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-[#403011] leading-tight">
                Jaivir G.'s Story — <WavyUnderline>UC Berkeley</WavyUnderline>
              </h2>
              <p>
                Jaivir wanted to pursue mechanical engineering but knew that hundreds of applicants carried perfect math scores and standard robotics club memberships. Through our Prototype and Patents Incubator, we helped him design, fabricate, and test a fully functional autonomous agricultural drone sensor array designed to monitor soil moisture levels in drought-prone areas.
              </p>
              <p>
                EpicQuest then guided him through the legal filing process to register a provisional patent for his hardware architecture. This credential set his UC Berkeley application apart, framing him not just as a competent high school student, but as a registered young inventor with legal intellectual property.
              </p>

              {/* Styled quote box 2 */}
              <div className="relative border-l-4 border-[#5C7146] pl-6 pr-5 py-5 my-8 bg-[#5C7146]/4 rounded-r-3xl border-t border-b border-r border-[#5C7146]/10 font-serif text-[#4A4333]">
                <span className="absolute -left-3.5 -top-3 text-5xl text-[#5C7146]/20 leading-none font-bold">“</span>
                <p className="italic text-base sm:text-lg mb-3">
                  "Listing my provisional patent number on my UC Berkeley application made me stand out immediately. It proved I was already engineering real solutions before graduating high school."
                </p>
                <div className="text-xs font-sans font-bold uppercase tracking-wider text-[#5C7146]">
                  Jaivir G.
                </div>
                <div className="text-[11px] font-sans text-[#8A8373] mt-0.5">
                  Admitted to UC Berkeley, Class of 2030
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section ref={sectionsRef["common-themes"]} id="common-themes" className="space-y-6 pt-6 border-t border-[#4A4333]/10">
              <h2 className="text-3xl font-serif font-bold text-[#403011] leading-tight">
                What These Stories Have <WavyUnderline>in Common</WavyUnderline>
              </h2>

              <div className="space-y-8 mt-6">
                {[
                  {
                    num: "1",
                    color: "bg-[#5C7146] text-[#FDFBF7]",
                    title: "A Clear Intellectual Identity",
                    desc: "Instead of collecting standard, superficial high school club titles, both students focused on one narrow, deep area of intellectual excellence. They developed a singular 'Spike' that admissions officers could easily summarize in one sentence."
                  },
                  {
                    num: "2",
                    color: "bg-[#78885E] text-[#FDFBF7]",
                    title: "Tangible, Published Work",
                    desc: "Both Saatvick and Jaivir had objective, high-value evidence of their expertise: a peer-reviewed research paper in a selective international journal, and a legally registered provisional patent receipt. These assets stand out far above generic recommendations."
                  },
                  {
                    num: "3",
                    color: "bg-[#DCA543] text-[#403011]",
                    title: "Mentorship That Matters",
                    desc: "Neither student worked alone in a vacuum. By being paired one-on-one with Ivy League advisors, PhD candidates, and IIT engineering mentors, they received specialized guidance that bypassed standard high school curricular limitations."
                  }
                ].map((item) => (
                  <div key={item.num} className="flex gap-5 items-start">
                    <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center font-bold text-sm shrink-0 shadow-sm`}>
                      {item.num}
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-[#403011] leading-snug">{item.title}</h4>
                      <p className="text-sm sm:text-base text-[#4A4333]/90 mt-1.5 leading-relaxed font-serif">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </article>

        </div>
      </section>

    </main>
  );
}
