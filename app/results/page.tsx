import WavyUnderline from "@/components/ui/WavyUnderline";
import Image from "next/image";
import Link from "next/link";
import { FileText, Lightbulb, Scroll, Award, Cpu, Target } from "lucide-react";

const stats = [
  { value: "94%", label: "Admission Rate", sub: "Top-20 global universities" },
  { value: "3×", label: "Portfolio Strength", sub: "More achievements than peers" },
  { value: "50+", label: "Publications", sub: "Recognised research venues" },
  { value: "12", label: "Patents Filed", sub: "Original student inventions" },
];

const graduates = [
  { name: "Advika P.", uni: "Cornell University", image: "/images/results/Result_Advika.png" },
  { name: "Anant B.", uni: "UCLA", image: "/images/results/Result_Anant.png" },
  { name: "Saachi S.", uni: "UC Berkeley", image: "/images/results/Result_Saachi.png" },
  { name: "Julien A.", uni: "Princeton University", image: "/images/results/Result_Julien.png" },
  { name: "Rishika T.", uni: "UMich", image: "/images/results/Result_Rishika.png" },

  { name: "Ankur S.", uni: "Harvard University", image: "/images/results/Result_Ankur.png" },
  { name: "Sanaa S.", uni: "UCLA", image: "/images/results/Result_Sanaa.png" },
  { name: "Vansh K.", uni: "Cornell University", image: "/images/results/Result_Vansh.png" },
  { name: "Vinita W.", uni: "Duke University", image: "/images/results/Result_Vinita.png" },
  { name: "Aahan P.", uni: "John Hopkins University", image: "/images/results/Result_Aahan.png" },

  { name: "Anika G.", uni: "John Hopkins University", image: "/images/results/Result_Anika.png" },
  { name: "Harjas G.", uni: "UPenn (Wharton)", image: "/images/results/Result_Harjas.png" },
  { name: "Malay M.", uni: "Dartmouth College", image: "/images/results/Result_Malay.png" },
  { name: "Rainier H.", uni: "NYU", image: "/images/results/Result_Rainier.png" },
  { name: "Sarah A.", uni: "Columbia University", image: "/images/results/Result_Sarah.png" },

  { name: "Saatvick S.", uni: "USC", image: "/images/results/Result_Saatvik.png" },
  { name: "Manvi G.", uni: "UPenn (Wharton)", image: "/images/results/Result_Maanvi.png" },
  { name: "Jaivir G.", uni: "UC Berkeley", image: "/images/results/Result_Jaivir.png" },
  { name: "Tvisha K.", uni: "NYU", image: "/images/results/Result_Tvisha.png" },
  { name: "Sidhant M.", uni: "MIT", image: "/images/results/Result_Sidhant.png" },
];



export default function ResultsPage() {
  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen overflow-x-hidden">

      {/* ═══ HERO ═══ */}
      <section className="relative w-full overflow-hidden">
        {/* Ambient blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#566544]/5 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#DCA543]/8 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#566544_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 sm:pt-28 pb-16 sm:pb-20">

          {/* Headline + stats two-column */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-end">
            <div className="animate-fade-up">
              {/* Pill */}
              <div className="mb-7">
                <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                  PROVEN OUTCOMES
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-serif font-medium text-[#403011] tracking-tight leading-[1.08] mb-5">
                Real Admissions,<br className="hidden sm:inline" /> Real{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Results</span>
                  <svg className="absolute -bottom-1.5 left-0 w-full" height="8" viewBox="0 0 120 8" preserveAspectRatio="none" fill="none">
                    <path d="M2 6 Q30 2 60 5 Q90 8 118 3" stroke="#DCA543" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#4A4333] font-serif leading-relaxed border-l-2 border-[#DCA543] pl-5 max-w-lg">
                We measure success not in promises, but in Ivy League placements, published research, and patented inventions. Our numbers speak for themselves.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 animate-fade-up delay-150">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col p-5 sm:p-6 bg-[#FDFBF7] rounded-2xl border border-[#4A4333]/8 shadow-sm">
                  <span className="text-3xl sm:text-4xl font-serif font-semibold text-[#5C7146] leading-none mb-1.5">
                    {s.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#403011] font-bold uppercase tracking-wider leading-snug">
                    {s.label}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#6A6A6A] font-serif leading-snug mt-1">
                    {s.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ UNIVERSITY PLACEMENTS SHOWCASE ═══ */}
      <section id="success-story" className="w-full bg-[#F6EBD4] py-20 sm:py-28 border-t border-b border-[#4A4333]/10 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-14 gap-4 lg:gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                EXCELLENCE. PROVEN.
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight">
                EpicQuest <WavyUnderline>Success Story</WavyUnderline>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif max-w-sm lg:max-w-md leading-relaxed lg:text-right mt-2 lg:mt-0">
              EpicQuest students have earned places at the world's most prestigious universities — from the Ivy League to global top-20 institutions.
            </p>
          </div>

          {/* Direct Placement Grid Image */}
          <div className="relative w-full max-w-4xl mx-auto group">
            <Image
              src="/images/results/Result_Succcess_Story.jpeg"
              alt="EpicQuest Success Story Placements Grid"
              width={1600}
              height={1200}
              className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              priority
            />
          </div>

          {/* Bottom Tagline */}
          <p className="text-center text-sm sm:text-base text-[#4A4333] font-serif max-w-3xl mx-auto mt-16 leading-relaxed select-none">
            From Research &amp; Scholarship to Ivy League-ready portfolios, EpicQuest Learning builds the skills, capabilities, stories, and impact evidence that <strong className="text-[#C2410C] font-extrabold uppercase tracking-wide">top universities value!</strong>
          </p>

        </div>
      </section>

      {/* ═══ REAL-WORLD IMPACT: PATENTS & PUBLICATIONS ═══ */}
      <section className="w-full bg-[#F6EBD4] py-20 sm:py-28 relative z-10 overflow-hidden border-b border-[#4A4333]/10">

        {/* Subtle grid pattern overlay for texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#4A4333_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-14 gap-4 lg:gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                INTELLECTUAL CONTRIBUTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight">
                Real-World Impact:<br />Patents <WavyUnderline>&amp; Publications</WavyUnderline>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif max-w-sm lg:max-w-md leading-relaxed lg:text-right mt-2 lg:mt-0">
              EpicQuest fellows produce verified, tangible, high-caliber intellectual outputs under PhD guidance that carry significant weight before entering university.
            </p>
          </div>

          {/* Asymmetrical Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left: Prestige Folios */}
            <div className="lg:col-span-5 flex flex-col gap-8">

              {[
                {
                  num: "01",
                  title: "Published Papers",
                  icon: FileText,
                  desc: "EpicQuest fellows conduct rigorous primary research under academic mentors, publishing findings in recognized peer-reviewed international journals and presenting at major conferences.",
                },
                {
                  num: "02",
                  title: "Patents Filed",
                  icon: Lightbulb,
                  desc: "For original technical and mechanical inventions, we guide students through rigorous prior art searches, technical claim drafting, and formal patent filing with the USPTO and IPO.",
                },
                {
                  num: "03",
                  title: "Policy Impact",
                  icon: Scroll,
                  desc: "Students analyze global or regional socioeconomic challenges, drafting professional utility briefs and proposals formally submitted to recognized think tanks and government portals.",
                },
              ].map((folio) => {
                const IconComp = folio.icon;
                return (
                  <div key={folio.num} className="group relative flex gap-6 pb-6 border-b border-[#4A4333]/10 transition-all duration-300">
                    <span className="font-serif text-lg font-medium text-[#DCA543] group-hover:text-[#5C7146] transition-colors duration-300 select-none">
                      {folio.num}.
                    </span>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <IconComp className="w-4 h-4 text-[#DCA543] group-hover:text-[#5C7146] group-hover:scale-110 transition-all duration-300" />
                        <h3 className="font-serif font-bold text-lg text-[#403011] tracking-wide group-hover:text-[#5C7146] transition-colors duration-300">
                          {folio.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[#4A4333] font-serif leading-relaxed mt-1">
                        {folio.desc}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Right: Floating Museum Showcase */}
            <div className="lg:col-span-7 relative w-full">
              {/* Outer decorative backdrop glow */}
              <div className="absolute inset-0 bg-[#DCA543]/10 rounded-[2.5rem] blur-2xl pointer-events-none" />

              {/* Luxury Display Frame */}
              <div className="relative p-3 bg-white rounded-[2.5rem] border border-[#4A4333]/10 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#566544]/5 to-transparent pointer-events-none" />

                {/* Image Container with precise golden inner border */}
                <div className="relative w-full aspect-[2.1/1] rounded-[2rem] overflow-hidden border border-[#DCA543]/40 bg-[#FDFBF7]">
                  <Image
                    src="/images/results/Results_RealWorldImapct.png"
                    alt="Authentic patent certificate and published research papers portfolio"
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>

              {/* Floating brass style placard caption */}
              <div className="mt-5 px-6 flex items-center justify-between text-[11px] text-[#4A4333]/70 font-serif tracking-wider uppercase">
                <span>EXHIBIT 1.1 — INTELLECTUAL PORTFOLIO</span>
                <span className="text-[#DCA543]">VERIFIED OUTPUTS</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ═══ REAL-WORLD IMPACT: DEEP DIVE INTO STUDENT WORK ═══ */}
      <section id="deep-dive" className="w-full bg-[#F6EBD4] py-20 sm:py-28 relative z-10 overflow-hidden">
        {/* Soft geometric accent lines */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#566544]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#DCA543]/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-14 gap-4 lg:gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                EXAMPLES OF OUR CHANGEMAKER DESTINY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight">
                Deep Dive into <WavyUnderline>Student Work</WavyUnderline>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif max-w-sm lg:max-w-md leading-relaxed lg:text-right mt-2 lg:mt-0">
              Few examples of our deliverables - These are not hypothetical projects — every deliverable below was produced by a real EpicQuest student, guided by expert mentors, and recognised by institutions beyond the classroom.
            </p>
          </div>

          {/* 2 Column, 2 Row Grid of Compact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

            {/* Card 1: Research Papers */}
            <div className="bg-white rounded-[2rem] border border-[#566544]/20 border-l-[8px] border-l-[#566544] p-8 sm:p-10 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col gap-5">
              <div className="flex">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#566544]/10 text-[#566544] text-[10px] font-normal uppercase tracking-wider border border-[#566544]/20 select-none">
                  <FileText className="w-3.5 h-3.5" />
                  RESEARCH PAPERS
                </span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#403011] tracking-tight leading-snug">
                Published &amp; Award-Winning Papers
              </h3>
              <ul className="list-disc pl-5 font-serif text-sm sm:text-base text-[#4A4333] space-y-4 leading-relaxed">
                <li>
                  <strong className="text-[#403011] font-semibold">Vehicle Design for Least Carbon Emissions &amp; Highest Fuel Efficiency</strong> — Published in an International Academic Journal · 🥈 Silver Medal, National Science Congress
                </li>
                <li>
                  <strong className="text-[#403011] font-semibold">Materials Science Innovation: Alternate Milk Packaging for Enhanced Shelf Life</strong> — Addressing food security in underprivileged households without refrigeration
                </li>
                <li>
                  <strong className="text-[#403011] font-semibold">Nanoparticles &amp; Novel Drug Delivery for Targeted Cancer Therapy</strong> — Cutting-edge biomedical research by a high school student
                </li>
              </ul>
            </div>

            {/* Card 2: Prototype */}
            <div className="bg-white rounded-[2rem] border border-[#566544]/20 border-l-[8px] border-l-[#566544] p-8 sm:p-10 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col gap-5">
              <div className="flex">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#566544]/10 text-[#566544] text-[10px] font-normal uppercase tracking-wider border border-[#566544]/20 select-none">
                  <Cpu className="w-3.5 h-3.5" />
                  PROTOTYPE
                </span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#403011] tracking-tight leading-snug">
                Modular Biogas Ingester — Electrifying a Village Women's Stitching Factory
              </h3>
              <p className="font-serif text-sm sm:text-base text-[#4A4333] leading-relaxed">
                A batch-type, mesophilic biogas ingester designed for maximum efficiency and scalability. Integrated real-time monitoring via Raspberry Pi with advanced sensors for temperature, pressure, pH, and gas flow — powering a rural women's cooperative stitching factory.
              </p>
            </div>

            {/* Card 3: Patent Filed */}
            <div className="bg-white rounded-[2rem] border border-[#566544]/20 border-l-[8px] border-l-[#566544] p-8 sm:p-10 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col gap-5">
              <div className="flex">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#566544]/10 text-[#566544] text-[10px] font-normal uppercase tracking-wider border border-[#566544]/20 select-none">
                  <Lightbulb className="w-3.5 h-3.5" />
                  PATENT FILED
                </span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#403011] tracking-tight leading-snug">
                Smart Waste Management System
              </h3>
              <p className="font-serif text-sm sm:text-base text-[#4A4333] leading-relaxed">
                An integrated urban waste collection and sequestration system designed for scalability. Refined through national-level innovation forums, this invention was formally filed for IP protection — recognised for its novelty and real-world applicability.
              </p>
            </div>

            {/* Card 4: Policy Draft */}
            <div className="bg-white rounded-[2rem] border border-[#566544]/20 border-l-[8px] border-l-[#566544] p-8 sm:p-10 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col gap-5">
              <div className="flex">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#566544]/10 text-[#566544] text-[10px] font-normal uppercase tracking-wider border border-[#566544]/20 select-none">
                  <Scroll className="w-3.5 h-3.5" />
                  POLICY DRAFT
                </span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#403011] tracking-tight leading-snug">
                Leveraging Carbon Financing to Scale Up EVs in Indian Markets
              </h3>
              <p className="font-serif text-sm sm:text-base text-[#4A4333] leading-relaxed">
                A student-authored policy brief presented directly to the President of the Indian Economic Trade Organization (IETO) — proposing a carbon financing framework to accelerate electric vehicle adoption across Indian markets.
              </p>
            </div>

          </div>

          {/* Luxury Prestige Awards & Competitions Strip */}
          <div className="mt-16 pt-10">
            <div className="bg-gradient-to-br from-[#F6EBD4] to-[#EAE5D9]/50 rounded-3xl p-8 md:p-10 border border-[#4A4333]/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#566544]/5 rounded-bl-[8rem] pointer-events-none" />

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border border-[#DCA543] shadow-md shrink-0">
                  <span className="text-[32px] leading-none mb-1">🥇</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-serif font-bold text-lg text-[#403011] uppercase tracking-wide">
                    Participating in Global Prestige Competitions
                  </h4>
                  <p className="text-xs sm:text-[13.5px] text-[#4A4333]/85 font-serif leading-relaxed max-w-4xl">
                    With unique applied knowledge and research validation, our fellows build the robust capability to enter and secure recognition at elite international forums: <span className="text-[#403011] font-semibold">John Locke Essay Competition, Wharton Global High School Investment Competition, Wolves of Wall Street, MIT LaunchX, International Chemistry Olympiad, UK Royal Society of Biology Awards, Harvard MUN, and national Make-in-India hackathons</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ WALL OF FAME ═══ */}
      <section className="w-full bg-[#F6EBD4] py-16 sm:py-24 border-t border-[#4A4333]/10 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-14 gap-4 lg:gap-6 animate-fade-up">
            <div className="max-w-2xl">
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                50+ SUCCESS STORIES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight">
                A Few from Our Graduate Wall <WavyUnderline>of Fame</WavyUnderline>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif max-w-sm lg:max-w-md leading-relaxed lg:text-right mt-2 lg:mt-0">
              Every face below represents a dream achieved — a student who dared to go beyond grades.
            </p>
          </div>

          {/* Grid Container */}
          <div className="w-full bg-[#4A4333]/15 rounded-3xl p-[1px] mb-8 overflow-hidden animate-fade-up delay-100">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1px] bg-[#4A4333]/15 rounded-[calc(1.5rem-1px)] overflow-hidden">
              {graduates.map((grad) => (
                <div key={grad.name} className="flex flex-col items-center text-center p-5 sm:p-6 bg-[#F6EBD4] hover:bg-white/40 transition-colors duration-300">
                  <div className="relative w-full aspect-[4/3] mb-4 rounded-2xl overflow-hidden shadow-sm border border-[#4A4333]/5">
                    <Image
                      src={grad.image}
                      alt={grad.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-[#403011] text-[0.95rem] leading-snug">
                    {grad.name}
                  </h3>
                  <p className="font-serif italic text-[#6A6A6A] text-[0.8rem] mt-1">
                    {grad.uni}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-4 max-w-4xl animate-fade-up delay-200">
            <div className="flex items-start gap-2.5 text-sm sm:text-base text-[#4A4333] font-serif leading-relaxed italic">
              <span className="not-italic text-lg shrink-0">🌱</span>
              <p>
                We encourage using avatars to prioritise humility, privacy, and equal respect for every student's journey — celebrating purpose, impact, growth, and effort over fame, comparison, or social-media-driven recognition.
              </p>
            </div>

            <div className="mt-4 rounded-2xl overflow-hidden border border-[#5C7146]/15 flex flex-col sm:flex-row">
              <div className="bg-[#5C7146] px-6 py-5 flex items-center justify-center sm:w-16 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </div>
              <div className="bg-[#5C7146]/6 px-6 py-5 w-full flex items-center">
                <p className="text-[#334155] font-serif text-sm sm:text-[0.95rem] leading-relaxed">
                  🎓 Join the next cohort of EpicQuest graduates. <strong className="text-[#403011] font-semibold">Limited spots available for 2026–27.</strong>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ SUCCESS STORIES (TESTIMONIALS) ═══ */}
      <section id="champion-achievers" className="w-full bg-[#F6EBD4] py-16 sm:py-24 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-14 gap-4 lg:gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                STUDENT EXPERIENCES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight">
                Champion Achievers{" "}
                <span className="text-[#8A8373] font-normal italic"><WavyUnderline>2026–27</WavyUnderline></span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif max-w-sm lg:max-w-md leading-relaxed lg:text-right mt-2 lg:mt-0">
              Published research. Filed patents. Real-world experience. Ivy League results.
            </p>
          </div>

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
                    "{quote}"
                  </blockquote>
                  <div className="pt-1 border-t border-[#4A4333]/10">
                    <div className="font-semibold text-[#403011] text-sm">{name}</div>
                    <div className="text-[0.75rem] text-[#8A8373] font-serif mt-0.5">{uni}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PARTNERS & AFFILIATIONS ═══ */}
      <section className="w-full bg-[#F6EBD4] py-16 sm:py-20 lg:py-28 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-14 gap-4 lg:gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                Partners & Affiliations
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight">
                Backed by Institutions<br className="hidden sm:inline" /> That <WavyUnderline>Matter</WavyUnderline>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif max-w-sm lg:max-w-md leading-relaxed lg:text-right mt-2 lg:mt-0">
              Active collaborations with India's most prestigious academic, research, and policy institutions — not cosmetic logos.
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
                Affiliations with the <strong className="text-[#403011] font-semibold">Office of the Principal Scientific Adviser</strong> to the Government of India, ISB's Bharti Institute of Public Policy, IIIT Delhi, and IETO represent active institutional endorsements — signalling to admissions committees worldwide that EpicQuest students operate at the highest levels of academic credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="w-full bg-[#F6EBD4] pb-12 sm:pb-16 lg:pb-24">
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

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="/contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#DCA543] hover:bg-[#E8B555] text-[#2D3E1C] rounded-full font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(220,165,67,0.35)] hover:-translate-y-0.5"
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
