import WavyUnderline from "@/components/ui/WavyUnderline";
import Image from "next/image";
import Link from "next/link";

const leadershipTeam = [
  {
    name: "Mr. Pratham Naik",
    role: "Investor Nominee | Head — US & Canada",
    credential: "MIT Sloan · MBA",
    bio: "Serial entrepreneur and VC, Legatum Fellow and Social Impact Award Winner (MIT Sloan), TED Speaker. Guides students through curated psychometric-aligned apprenticeships and internships.",
    image: "/images/team/Team_Pratham.png",
    tag: "Entrepreneurship",
    accent: "#566544",
  },
  {
    name: "Dr. Alok N Jha",
    role: "Managing Partner | Data Science, Innovations & Patents",
    credential: "IIT Delhi · CS PhD",
    bio: "5+ Patents, 15+ published papers, 4 start-ups grown and exited, Innovation accelerator. Guides students through original research and innovation patent pipelines.",
    image: "/images/team/Team_Alok.jpeg",
    tag: "Research & Innovation",
    accent: "#8E8B42",
  },
  {
    name: "Mr. Achal Nath",
    role: "Managing Partner | Robotics Automation",
    credential: "IIT Delhi · Mech Engg",
    bio: "Father of modern Indian robotics, 20+ First-in-Market Innovations, Felicitations from 3+ PMs, 5+ Design Patents. Under his tutelage, students design robotics and automation solutions for solving various SDGs.",
    image: "/images/team/Team_Achal.jpeg",
    tag: "Robotics & SDGs",
    accent: "#566544",
  },
  {
    name: "Mr. Tilak Mishra",
    role: "Founder Partner | Head — Problem Solving",
    credential: "Univ. of Pennsylvania · Finance / Entrepreneurship",
    bio: "Educator, VC, M&A Advisor, Business Coach — mentored over 700 high-school students from elite schools in 20+ countries. Curated 500+ individual Ivy League-ready portfolio journeys.",
    image: "/images/team/Team_Tilak.jpeg",
    tag: "Ivy League Strategy",
    accent: "#DCA543",
  },
];

const managementTeam = [
  {
    name: "Mr. Tilak Mishra",
    role: "Founder, Chief Problem Solver",
    credential: "Univ. of Pennsylvania",
    bio: "Designs & drafts psychometric and career-diagnostic tests and reports to curate structured purposeful skills development portfolio for students. Coordinates all career-readiness strategy: psychometric-aligned skills development & research publication programmes, mentor assignments, and academic timelines. Ensures every student meets her  / his milestones.  Teaches Applied Entrepreneurship & Finance of Innovation, and mentors students in civic leadership and policy drafting.",
    image: "/images/team/Team_Management_Tilak.png",
  },
  {
    name: "Mr. Pulkit Agarwal",
    role: "Director — Systems & Compliance",
    credential: "Uni. of London",
    bio: "Brings expertise across AI, Tech, Finance, Corporate Transactions, and Governance. With global credentials from Queen Mary University of London and ACCA, he drives strategic growth, operational excellence, and high-impact partnerships while mentoring future student leaders to build ambitious, outcome-driven careers. Drives the digital infrastructure and operational systems that power EpicQuest's personalised student experience at scale. ",
    image: "/images/team/Team_Management_Pulkit.png",
  },
  {
    name: "Ms. Malvika Khajuria",
    role: "Employability & Global Talent Expert",
    credential: "ex-Gartner",
    bio: "As the Founder of EastBridge, a talent advisory platform focused on bridging globally educated graduates with emerging Indian start-ups, Malvika partners with EpicQuest Learning to scale up strategic alliances, talent screening, industry engagement, and global mentor partnerships. An employability and global talent expert with past experiences at Gartner, Sunstone, Tetr College of Business, Malvika remains single-mindedly focussed on building high-growth talent, employability partnerships  across education, executive search, and innovation.",
    image: "/images/team/Team_Management_Malvika.png",
  },
  {
    name: "Mr. Aditya Trivedi",
    role: "Managing Partner - Products & Purpose",
    credential: "IIM-B - MBA",
    bio: "Aditya Trivedi is an IIM Bangalore alumnus, former SAP Labs leader, and innovation strategist with 22+ years of experience across technology, entrepreneurship, and higher education. Formerly Director at Rashtram School of Public Leadership, Rishihood University, Aditya leads product innovation, program architecture, learner experience, and operational excellence at EpicQuest Learning ensuring that every learning journey is scalable, impactful, and aligned with the future of education and work.",
    image: "/images/team/Team_Management_Aditya.png",
  },
];

const stats = [
  { value: "700+", label: "Students Mentored" },
  { value: "20+", label: "Countries Reached" },
  { value: "500+", label: "Ivy Portfolios Crafted" },
  { value: "5+", label: "Patents Held" },
];

/* ── credential badge ── */
function CredentialBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1
                    rounded-full bg-[#DCA543]/12 border border-[#DCA543]/25">
      <svg className="w-3 h-3 text-[#DCA543] shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
      <span className="text-[10px] sm:text-[11px] text-[#7A6030] font-serif font-medium">{text}</span>
    </div>
  );
}

/* ── Section label ── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
      {children}
    </span>
  );
}

export default function TeamPage() {
  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen overflow-x-hidden">

      {/* ═════  HERO  ═════ */}
      <section className="relative w-full overflow-hidden">
        {/* Ambient blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full
                        bg-[#566544]/5 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full
                        bg-[#DCA543]/8 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#566544_1px,transparent_1px)]
                        [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 sm:pt-28 pb-16 sm:pb-20">

          {/* Headline + stats two-column */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-end">

            <div className="animate-fade-up">
              {/* Pill */}
              <div className="mb-7">
                <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                  THE PEOPLE BEHIND EPICQUEST
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem]
                             font-serif font-medium text-[#403011] tracking-tight
                             leading-[1.08] mb-5">
                Meet the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Minds</span>
                  <svg className="absolute -bottom-1.5 left-0 w-full" height="8"
                    viewBox="0 0 120 8" preserveAspectRatio="none" fill="none">
                    <path d="M2 6 Q30 2 60 5 Q90 8 118 3"
                      stroke="#DCA543" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                Shaping Your Future
              </h1>
              <p className="text-base sm:text-lg text-[#4A4333] font-serif leading-relaxed
                            border-l-2 border-[#DCA543] pl-5">
                World-class educators, researchers, and strategists — united by one mission:
                your success. Decades of combined experience from Ivy League institutions,
                IITs, and global industry.
              </p>
            </div>

            {/* Stats — 2×2 on all screens */}
            <div className="grid grid-cols-2 gap-4 animate-fade-up delay-150">
              {stats.map((s) => (
                <div key={s.label}
                  className="flex flex-col p-5 sm:p-6 bg-[#FDFBF7] rounded-2xl
                                border border-[#4A4333]/8 shadow-sm">
                  <span className="text-3xl sm:text-4xl font-serif font-semibold
                                   text-[#403011] leading-none mb-1.5">
                    {s.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#8A8373] font-serif
                                   uppercase tracking-wider leading-snug">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═════ LEADERSHIP TEAM ════ */}
      <section className="w-full bg-[#F6EBD4] pb-16 sm:pb-24 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between
                          gap-4 mb-12 sm:mb-16 animate-fade-up">
            <div>
              <SectionLabel>The EpicQuest Brain Trust</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium
                             text-[#403011] tracking-tight leading-tight">
                Leadership <WavyUnderline>Team</WavyUnderline>
              </h2>
            </div>
            <p className="hidden sm:block text-sm text-[#4A4333] font-serif leading-relaxed
                          max-w-xs text-right opacity-70">
              Founders &amp; senior partners steering every student's journey
            </p>
          </div>

          {/* 2×2 grid — vertical portrait cards with large images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {leadershipTeam.map((member, idx) => (
              <div
                key={member.name + idx}
                className="group flex flex-col bg-[#FDFBF7] rounded-3xl
                           border border-[#4A4333]/8 shadow-sm hover:shadow-xl
                           transition-all duration-500 overflow-hidden animate-fade-up"
                style={{ animationDelay: `${150 + idx * 80}ms` }}
              >
                {/* Large portrait image */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#E8E3D7]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-[1.04]
                               transition-transform duration-700 ease-out"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24
                                  bg-gradient-to-t from-[#2D3E1C]/55 to-transparent" />
                  {/* Expertise tag */}
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full
                                     bg-[#F6EBD4]/90 text-[#403011] text-[10px] font-bold
                                     uppercase tracking-wider backdrop-blur-sm">
                      {member.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 p-5 sm:p-6">
                  <CredentialBadge text={member.credential} />
                  <h3 className="text-lg sm:text-xl font-serif font-semibold
                                 text-[#403011] leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-bold text-[#566544]
                                uppercase tracking-wide leading-snug">
                    {member.role}
                  </p>
                  <div className="w-8 h-px bg-[#DCA543]/50 my-0.5" />
                  <p className="text-[13px] sm:text-sm text-[#4A4333] font-serif leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════ QUOTE BAND ════ */}
      <div className="w-full bg-[#403011] py-10 sm:py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#F6EBD4_1px,transparent_1px)]
                        [background-size:20px_20px] opacity-[0.04] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12
                        flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[#F6EBD4]/70 font-serif text-sm sm:text-base
                        text-center sm:text-left max-w-xl leading-relaxed italic">
            "Every student deserves a world-class mentor. We've built the team that makes
            that possible."
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-px bg-[#DCA543]/60" />
            <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit border border-[#403011]/15">
              EPICQUEST FOUNDING PRINCIPLE
            </span>
          </div>
        </div>
      </div>

      {/* ═══ MANAGEMENT TEAM ═══ */}
      <section className="w-full bg-[#F0E6CC] pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between
                          gap-4 mb-12 sm:mb-16 animate-fade-up">
            <div>
              <SectionLabel>The EpicQuest Execution Engine</SectionLabel>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium
                             text-[#403011] tracking-tight leading-tight">
                Management <WavyUnderline>Team</WavyUnderline>
              </h2>
            </div>
            <p className="hidden sm:block text-sm text-[#4A4333] font-serif leading-relaxed
                          max-w-xs text-right opacity-70">
              Dedicated professionals driving operations, student success &amp; excellence
            </p>
          </div>

          {/* 2-column grid with horizontal cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {managementTeam.map((member, idx) => (
              <div
                key={member.name + idx}
                className="group flex flex-col sm:flex-row bg-[#FDFBF7] rounded-3xl
                           border border-[#4A4333]/8 shadow-sm hover:shadow-xl
                           transition-all duration-500 overflow-hidden animate-fade-up"
                style={{ animationDelay: `${150 + idx * 80}ms` }}
              >
                {/* Image */}
                <div className="relative w-full sm:w-[40%] xl:w-[35%] shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden bg-[#E8E3D7]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-[1.04]
                               transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center gap-3 p-6 sm:p-7 md:p-8 flex-1 min-w-0">
                  <CredentialBadge text={member.credential} />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-semibold
                                   text-[#403011] leading-tight mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-bold text-[#566544]
                                  uppercase tracking-wide leading-snug">
                      {member.role}
                    </p>
                  </div>
                  <div className="w-10 h-px bg-[#DCA543]/50 my-1" />
                  <p className="text-[13px] sm:text-[14px] text-[#4A4333] font-serif leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
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

              {/* Mini stats row */}
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