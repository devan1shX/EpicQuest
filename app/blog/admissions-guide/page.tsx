"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Bookmark, Share2, ChevronRight, CheckCircle2, Award, Zap, BookOpen } from "lucide-react";

// Interactive Quiz/Checklist Questions
const spikesChecklist = [
  {
    id: "curiosity",
    title: "1. Advanced Academic Curiosity",
    desc: "Have you engaged in self-study or taken collegiate level courses beyond your school curriculum?",
    weight: 20,
  },
  {
    id: "research",
    title: "2. Peer-Reviewed Academic Publication",
    desc: "Do you have an original research paper published or accepted in a recognized, peer-reviewed journal?",
    weight: 20,
  },
  {
    id: "tangible",
    title: "3. Tangible Innovation (Patents / Build)",
    desc: "Have you developed a working hardware/software prototype, or filed a registered provisional patent?",
    weight: 20,
  },
  {
    id: "impact",
    title: "4. Quantified Civic or Policy Impact",
    desc: "Have you authored a published policy draft or directed a civic campaign with measurable community metrics?",
    weight: 20,
  },
  {
    id: "narrative",
    title: "5. Singular Spiked Narrative ('Spike')",
    desc: "Does your application clearly highlight one unified area of deep mastery rather than generic multi-tasking?",
    weight: 20,
  },
];

export default function AdmissionsGuidePage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("what-officers-look-for");
  const [checklistState, setChecklistState] = useState<Record<string, boolean>>({});
  const [quizScore, setQuizScore] = useState<number | null>(null);

  const sectionsRef = {
    "what-officers-look-for": useRef<HTMLElement>(null),
    "holistic-process": useRef<HTMLElement>(null),
    "the-five-things": useRef<HTMLElement>(null),
    "spike-auditor": useRef<HTMLElement>(null),
    "how-eq-prepares": useRef<HTMLElement>(null),
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

      let currentSection = "what-officers-look-for";
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
    // Run initial trigger
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

  // Checklist Quiz score calculator
  const toggleChecklistItem = (id: string) => {
    setChecklistState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const calculateScore = () => {
    let score = 0;
    spikesChecklist.forEach((item) => {
      if (checklistState[item.id]) {
        score += item.weight;
      }
    });
    setQuizScore(score);
  };

  const resetQuiz = () => {
    setChecklistState({});
    setQuizScore(null);
  };

  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen overflow-x-hidden">

      {/* ── STICKY READING PROGRESS BAR ── */}
      <div
        className="fixed top-[64px] left-0 h-1 bg-[#5C7146] transition-all duration-100 ease-out z-50"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* ── HERO HEADER SECTION  ── */}
      <section className="relative w-full overflow-hidden border-b border-[#4A4333]/10 pb-10 sm:pb-12 pt-14 sm:pt-20">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(#566544_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.055] pointer-events-none" />
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
          <div className="mb-8">
            <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6">
              ADMISSIONS GUIDE
            </span>
          </div>

          {/* Title & Metadata */}
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-[#403011] tracking-tight leading-[1.08]">
              How to Get Into an Ivy League University: The Complete Guide for 2026–27
            </h1>

            {/* Author Card & Metadata */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#4A4333]/12">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#5C7146]/30">
                  <Image
                    src="/images/about/About_Tilak.jpeg"
                    alt="Tilak Mishra"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#403011]">Tilak Mishra</div>
                  <div className="text-[10px] text-[#8A8373] uppercase font-sans tracking-wide">UPenn Alum &amp; CEO, EpicQuest</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#8A8373] font-serif ml-0 sm:ml-auto">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />May 24, 2026</span>
                <span className="flex items-center gap-1 bg-[#5C7146]/5 px-2.5 py-1 rounded text-[#5C7146] font-semibold">
                  <Clock className="w-3.5 h-3.5" /> 8 min read
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── MAIN FEATURE SPLIT ARTICLE LAYOUT ── */}
      <section className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 pt-10 sm:pt-12 pb-24">

        {/* Asymmetric Core Hero Image Display */}
        <div className="relative w-full aspect-[21/9] rounded-[3rem_1.5rem_4rem_1.5rem] overflow-hidden shadow-xl border-4 border-white/60 mb-16 animate-fade-in">
          <Image
            src="/images/blogs/Blog_Post_1_AdmissionGuide.png"
            alt="Ivy League admissions preparation"
            fill
            priority
            className="object-cover object-[center_35%]"
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
                { id: "what-officers-look-for", label: "1. What Officers Look For" },
                { id: "holistic-process", label: "2. The Holistic Review" },
                { id: "the-five-things", label: "3. 5 Things Setting Students Apart" },
                { id: "how-eq-prepares", label: "4. How EpicQuest Prepares You" },
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
            <div className="text-xl sm:text-2xl text-[#403011] italic leading-normal border-l-4 border-[#DCA543] pl-6 font-medium">
              Securing admission to an Ivy League university is no longer just about perfect grades and SAT scores. In 2026–27, top-tier admissions officers are looking for singular excellence, genuine intellectual curiosity, and real-world impact. Here is your definitive blueprint to stand out.
            </div>

            {/* Section 1 */}
            <section ref={sectionsRef["what-officers-look-for"]} id="what-officers-look-for" className="space-y-4 pt-4">
              <h2 className="text-3xl font-serif font-bold text-[#403011] leading-tight">
                1. What Ivy League Admissions Officers Really Look For
              </h2>
              <p>
                The admissions landscape has undergone a monumental shift. Standardized testing has returned in nuanced formats, and grade inflation has made high GPAs common. As a result, universities rely heavily on holistic review. Officers scan for your "Spike"—a distinctive area of mastery. This is proven through rigorous portfolio components: peer-reviewed research publications, patented inventions, and active civic policy contributions.
              </p>
              <p>
                Instead of checking every single box—playing varsity sports, leading the debate club, and playing an instrument poorly—elite colleges prefer a "well-lopsided" student. They look for deep spikes in single areas of intellectual endeavor. They seek researchers who have pushed past the high school curriculum, developers who have shipped products, and activists who have written legislative drafts.
              </p>
            </section>

            {/* Section 2 */}
            <section ref={sectionsRef["holistic-process"]} id="holistic-process" className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-[#403011] leading-tight">
                2. The Holistic Admissions Process Explained
              </h2>
              <p>
                Holistic review means that every part of your application is scrutinized in context. While grades, coursework difficulty, and test scores get your foot in the door, they rarely seal the deal. Your extracurricular profile, essays, recommendations, and demonstrable real-world impact represent the core of the evaluation.
              </p>
              <p>
                Admissions officers evaluate your profile through three distinct lenses:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong className="text-[#403011]">Academic Rigour:</strong> Have you exhausted the highest-level coursework in your high school, and sought out collegiate level opportunities?
                </li>
                <li>
                  <strong className="text-[#403011]">Intellectual Vitality:</strong> Do you pursue knowledge for its own sake? This is evaluated by looking at independent publications, patents, and advanced scientific projects.
                </li>
                <li>
                  <strong className="text-[#403011]">Community Impact:</strong> Has your work left a tangible mark on those around you? Have you translated academic theories into societal policy or hardware solutions?
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section ref={sectionsRef["the-five-things"]} id="the-five-things" className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-[#403011] leading-tight">
                3. The 5 Things That Set Admitted Students Apart
              </h2>
              <p>
                Based on historical data and direct student placement at institutions like UPenn, Harvard, Stanford, and UC Berkeley, five key attributes consistently separate successful applicants:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {[
                  {
                    title: "Intellectual Curiosity Beyond the Classroom",
                    desc: "Going beyond standard school textbooks to self-study advanced concepts, take university-level courses, and pursue structured research projects with expert mentors."
                  },
                  {
                    title: "Published Research or Tangible Projects",
                    desc: "Having high-quality, peer-reviewed papers published in recognized international journals, or developing functional software/hardware prototypes that solve community problems."
                  },
                  {
                    title: "Leadership with Measurable Impact",
                    desc: "Leading teams to achieve quantifiable objectives, such as raising development funds, launching active local campaigns, or directing technical development cycles."
                  },
                  {
                    title: "A Compelling Personal Narrative",
                    desc: "A coherent thread running through your application essays, recommendation letters, and activities lists that tells a cohesive story of who you are and what you care about."
                  },
                  {
                    title: "Psychometric Fit with the Institution",
                    desc: "Demonstrating alignment with each university's specific culture and values—such as Penn's focus on practical application, or Columbia's commitment to the core curriculum."
                  }
                ].map((item, idx) => (
                  <div key={item.title} className="bg-white/50 border border-[#4A4333]/8 p-6 rounded-2xl shadow-sm hover:bg-white hover:shadow transition-all">
                    <span className="text-[#DCA543] font-bold text-lg mr-2 font-sans">0{idx + 1}.</span>
                    <h4 className="text-[1.05rem] font-bold text-[#403011] inline-block">{item.title}</h4>
                    <p className="text-sm text-[#4A4333] mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>


            {/* Section 5 */}
            <section ref={sectionsRef["how-eq-prepares"]} id="how-eq-prepares" className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-[#403011] leading-tight">
                4. How EpicQuest Prepares You
              </h2>
              <p>
                At EpicQuest, we work one-on-one with high school students to build institutional-grade capabilities. From mapping cognitive profiles to drafting provisional patents, conducting rigorous academic research, and gaining hands-on corporate apprenticeships, we systematically engineer a spike that makes you a clear, undeniable choice for the world's most selective colleges.
              </p>
              <p>
                Our students do not complete static activities. They engage in dynamic learning trajectories that produce:
              </p>

              <div className="space-y-4 my-6">
                {[
                  {
                    title: "Bespoke Mentorship with Ivy & IIT Experts",
                    desc: "You are paired one-on-one with subject-matter mentors who guide your technical research and product build from ideation to completion."
                  },
                  {
                    title: "End-to-End Intellectual Property Development",
                    desc: "Whether you write policy drafts, build drone control scripts, or write deep learning algorithms, we provide fully legal intellectual property support."
                  },
                  {
                    title: "Coherent Portfolio Presentation Strategies",
                    desc: "We ensure that your Spike connects directly to your common application essays and counselor letters, so Admissions officers can easily articulate your unique spike value."
                  }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-5 h-5 rounded-full bg-[#5C7146]/10 flex items-center justify-center text-olive border border-olive/20 shrink-0 mt-1">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#403011] leading-snug">{item.title}</h4>
                      <p className="text-sm text-[#5A5A5A] mt-0.5 leading-relaxed">{item.desc}</p>
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
