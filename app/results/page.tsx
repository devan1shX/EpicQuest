import Image from "next/image";
import Link from "next/link";

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
      
      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
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
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#566544]/12 text-[#566544] text-[11px] font-bold uppercase tracking-[0.12em] border border-[#566544]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#566544] inline-block animate-pulse" />
                  Proven Outcomes
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

      {/* ══════════════════════════════
          WALL OF FAME
      ══════════════════════════════ */}
      <section className="w-full bg-[#F6EBD4] py-16 sm:py-24 border-t border-[#4A4333]/10 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="mb-10 animate-fade-up">
            <span className="uppercase tracking-widest text-[0.65rem] font-bold text-[#566544] bg-[#566544]/10 px-3 py-1 rounded-full mb-3 inline-block">
              50+ Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight mb-4">
              A Few from Our Graduate Wall of Fame
            </h2>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif max-w-xl leading-relaxed">
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

      {/* ══════════════════════════════
          SUCCESS STORIES (TESTIMONIALS)
      ══════════════════════════════ */}
      <section className="w-full bg-white py-16 sm:py-24 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <span className="uppercase tracking-widest text-[0.65rem] font-bold text-[#566544] bg-[#566544]/10 px-3 py-1 rounded-full mb-3 inline-block">
              Student Experiences
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight">
                Champion Achievers{" "}
                <span className="text-[#8A8373] font-normal italic">2026–27</span>
              </h2>
              <p className="text-sm text-[#4A4333] font-serif max-w-xs leading-relaxed sm:text-right">
                Published research. Filed patents. Real-world experience. Ivy League results.
              </p>
            </div>
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
              <div key={name} className="group flex flex-col rounded-2xl overflow-hidden border border-[#4A4333]/10 bg-[#F6EBD4]/40 hover:bg-white hover:shadow-lg transition-all duration-300">
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

      {/* ══════════════════════════════
          PARTNERS & AFFILIATIONS
      ══════════════════════════════ */}
      <section className="w-full bg-[#F6EBD4] py-16 sm:py-24 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="uppercase tracking-widest text-[0.65rem] font-bold text-[#566544] bg-[#566544]/10 px-3 py-1 rounded-full mb-3 inline-block">
                Partners & Affiliations
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium text-[#403011] tracking-tight leading-tight">
                Backed by Institutions<br className="hidden sm:inline" /> That Matter
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif max-w-sm leading-relaxed sm:text-right">
              Active collaborations with India's most prestigious academic, research, and policy institutions.
            </p>
          </div>

          {/* Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { src: "/images/home/Sc_Advisor_GoI.png", alt: "Office of the Principal Scientific Adviser" },
              { src: "/images/home/ISB_BIPP_Logo.png", alt: "Indian School of Business" },
              { src: "/images/home/IIITD-img.png", alt: "IIIT Delhi" },
              { src: "/images/home/IETO_Logo.png", alt: "IETO" },
            ].map(({ src, alt }) => (
              <div
                key={alt}
                className="bg-white h-24 flex items-center justify-center rounded-xl border border-[#4A4333]/10 shadow-sm px-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-full h-14">
                  <Image src={src} alt={alt} fill className="object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FINAL CTA
      ══════════════════════════════ */}
      <section className="w-full bg-[#F6EBD4] pb-12 sm:pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#2D3E1C] via-[#374D23] to-[#455434] rounded-3xl px-6 py-16 sm:px-12 md:px-20 md:py-20 shadow-2xl border border-[#5C7146]/20">
            {/* Ambient blobs */}
            <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#DCA543]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#F6EBD4]/8 blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#F6EBD4_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <span className="uppercase tracking-[0.18em] text-[0.65rem] font-bold text-[#DCA543] bg-[#DCA543]/12 px-4 py-1.5 rounded-full mb-6 inline-block border border-[#DCA543]/20">
                Cohort Admissions Open
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-serif font-medium text-[#F6EBD4] tracking-tight leading-[1.1] mb-5">
                Ready to Begin Your{" "}
                <em className="text-[#DCA543] not-italic">Ivy League</em>{" "}
                Journey?
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
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-[#F6EBD4]/25 text-[#F6EBD4] hover:bg-white/8 hover:border-[#F6EBD4]/40 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5"
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
