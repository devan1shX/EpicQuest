"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Printer, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Compass, 
  TrendingUp, 
  Target, 
  Award,
  Users,
  Lightbulb,
  FileText,
  Scroll,
  BookOpen,
  UserCheck
} from "lucide-react";
import { ReportData } from "../engine";

const localFallbackData: ReportData = {
  candidate: {
    name: "Ms. Hetvi Bhanushali",
    status: "Sophomore Year Student",
    university: "UC Santa Barbara, California, USA",
    reportDate: "June 20, 2025",
    preparedBy: "Tilak Mishra, Founder & CEO, EpicQuest Learning (UPenn 2009)"
  },
  framework: {
    name: "Gunaity Epicometer™ Framework",
    description: "The Gunaity Epicometer™ describes behavior in four styles. Everyone uses all four, but most rely on one or two. Two axes: Active/Receptive (vertical) and Skeptical/Agreeable (horizontal).",
    styles: [
      { code: "D", name: "Drive (Assertive)", description: "Action-oriented decisive leaders. Take charge, make decisions. Thrive in entrepreneurship, management, competitive environments." },
      { code: "I", name: "Influence (Hustler)", description: "Enthusiastic communicators. Inspire and persuade. Excel in sales, marketing, media, PR, performing arts." },
      { code: "S", name: "Support (Helper)", description: "Dependable, empathetic team builders. Best for healthcare, education, social work, HR." },
      { code: "C", name: "Clarity (Intellectual)", description: "Analytical, detail-focused thinkers. Natural fit for STEM, research, finance, data science." }
    ]
  },
  foundationScores: {
    pacePosture: {
      active: 60,
      receptive: 40,
      insight: "Leans decisively Active — quick to speak up, ready to lead, comfortable moving fast in group settings."
    },
    orientation: {
      agreeable: 62,
      skeptical: 38,
      insight: "Primary focus on quality of work relationships and wellbeing of people. Fosters consensus, cooperation and shared enthusiasm."
    },
    combinedResult: {
      formula: "Active + Agreeable = I Quadrant",
      type: "Influence / Hustler / Relationship Builder"
    }
  },
  primaryType: {
    code: "I",
    name: "Influence (Hustler)",
    labels: ["The Hustler", "The Relationship Builder", "The Energiser"],
    description: "Fast-paced, collaborative, outgoing. Uses enthusiasm to bring people together. Enjoys meeting people, hearing their stories, and sharing excitement for ideas. Natural energy and optimism create environments where everyone feels included.",
    atTheirBest: "Upbeat, persuasive, expressive, engaging. Infuses a sense of excitement and possibility into projects.",
    potentialWeakness: "Can be seen as disorganised, overly expressive, in a hurry, easily distracted. May get distracted from dull tasks. Struggles to slow down to assess risks.",
    traitPills: ["Enthusiastic", "Talkative", "Collaborative", "Charming", "Impulsive", "Goal-oriented", "Confident", "Influential", "Optimistic", "Sociable"]
  },
  workplacePriorities: [
    { title: "Relationship Building", description: "Building wide professional networks, regular catch-ups, inclusive environments." },
    { title: "Creative Action", description: "Spotting new opportunities, championing bold untested ideas, encouraging quick action." },
    { title: "Inspiring Momentum", description: "Lifting team spirit in tough moments, persuading stakeholders, promoting meaningful change." }
  ],
  situations: {
    thrive: [
      "Fast-paced, creative, innovative workplaces",
      "Roles that involve connecting with and influencing people",
      "Collaborative projects with room for their own ideas",
      "Networking and social professional events",
      "Environments that welcome enthusiasm and energy"
    ],
    difficult: [
      "Slow-paced, steady, highly traditional environments",
      "Inflexible rules and rigid procedures",
      "Detailed analysis or very slow, methodical workflows",
      "Isolated tasks with little human interaction",
      "Colleagues who don't appreciate their effervescent style"
    ]
  },
  strengthsAndBlindSpots: {
    strengths: [
      "Confident communicator",
      "Building professional networks",
      "Being approachable",
      "Being enthusiastic",
      "Persuading others",
      "Lifting team spirit",
      "Inspiring others",
      "Seeing new opportunities",
      "Promoting change",
      "Creating fun atmosphere",
      "Making quick decisions"
    ],
    blindSpots: [
      "Being cautious",
      "Analyzing risks",
      "Following procedures",
      "Being modest",
      "Being methodical",
      "Staying focused",
      "Being even-tempered and calm",
      "Quietly listening",
      "Working independently",
      "Giving constructive feedback",
      "Being systematic"
    ]
  },
  styleDepth: {
    core: { code: "I", name: "Influence/Hustler", status: "Primary Mode", description: "Engaging, enthusiastic, persuasive. Reaches out to build excitement. Thrives on human connection. Withers in isolated, impersonal tasks. Useful for: teachers, managers, marketing, media, salespeople." },
    helper1: { code: "D", name: "Drive/Assertive", status: "Helper Style", description: "Accessible when needed. Can step into decisive, assertive leadership when required — not a natural default. Use strategically." },
    helper2: { code: "S", name: "Support/Helper", status: "Helper Style", description: "Accessible when needed. Empathy and care manifest as genuine helpfulness in one-on-one or high-trust relationships." },
    challenge: { code: "C", name: "Clarity/Intellectual", status: "Challenge Style", description: "Most effortful mode. Precise, systematic, detail-focused work takes the most mental energy. Extended time here may cause stress and motivational dips — but developing this area is meaningful growth." }
  },
  workplaceDescriptorTable: {
    moreLikely: ["Enthusiastic", "Talkative & expressive", "Collaborative", "Charming & persuasive", "Impulsive & spontaneous", "Goal-oriented", "Confident", "Optimistic", "Sociable"],
    lessLikely: ["Cautious", "Analytical", "Organised & systematic", "Reflective & measured", "Soft-spoken", "Self-controlled", "Reliable in routine tasks", "Detailed & precise", "Modest"]
  },
  careerMap: {
    introduction: "As an Influence type, you naturally gravitate toward fields where human connection, communication, and creative energy are core.",
    domains: [
      { id: "01", title: "Media & Communications", description: "Journalism, broadcasting, content creation, PR, and marketing leverage natural expressiveness and ability to connect with audiences at scale." },
      { id: "02", title: "Policy & Public Leadership", description: "Advocacy, diplomacy, and public policy offer the stage to persuade, inspire change, and build coalitions around important ideas." },
      { id: "03", title: "Entrepreneurship & Startups", description: "Founding, pitching, and team-building demands of startup life are a natural playground for someone with this charisma and bias for action." },
      { id: "04", title: "Education & Mentorship", description: "Teaching, coaching, and curriculum design channel enthusiasm to uplift and inspire — creating the inclusive environments they naturally build." },
      { id: "05", title: "Sales & Business Development", description: "Persuasiveness, network-building, and optimism are precisely the traits separating exceptional salespeople from average ones." },
      { id: "06", title: "Social Impact & NGOs", description: "Mission-driven organisations thrive on people who can mobilise communities and inspire action — a natural fit for the Influence orientation." }
    ]
  },
  closing: {
    headline: "Ready to Build Your Portfolio?",
    body: "Your diagnostic is just the beginning. EpicQuest can design a fully personalised, psychometric-aligned portfolio journey built around your Influence strengths — from applied research to apprenticeships.",
    ctaButton1: "Generate Your Ivy League Plan →",
    ctaButton2: "Book Free Consultation"
  },
  branding: {
    company: "EpicQuest Learning LLP",
    address: "8/11, 1st Floor, Sarvapriya Vihar, New Delhi 110016, India",
    phone: "+91 9971125276",
    email: "contact@epicquestlearning.com",
    tagline: "We transform extraordinary high school students into Ivy League-ready candidates through structured research, patent filing, and real-world apprenticeships."
  }
};

export default function DiagnosticReportResultsPage() {
  const router = useRouter();
  const [data, setData] = useState<ReportData>(localFallbackData);
  const [loading, setLoading] = useState(true);
  const [animating, setAnimating] = useState(false);
  const [isSampleReport, setIsSampleReport] = useState(true);

  // Hydrate report data on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedReport = localStorage.getItem("eq_diagnostic_report");
      if (savedReport) {
        try {
          const parsed = JSON.parse(savedReport);
          setData(parsed);
          setIsSampleReport(false);
          setLoading(false);
          
          const timer = setTimeout(() => {
            setAnimating(true);
          }, 150);
          return () => clearTimeout(timer);
        } catch (e) {
          console.error("Failed to parse saved report.", e);
          setIsSampleReport(true);
          setLoading(false);
        }
      } else {
        // No saved report: Redirect immediately to /test to take the assessment
        router.push("/test");
      }
    }
  }, []);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleReset = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("eq_diagnostic_report");
      router.push("/test");
    }
  };

  if (loading) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-[#F6EBD4] text-[#4A4333]">
        <div className="flex flex-col items-center gap-4 select-none">
          <span className="h-9 w-9 bg-[#DCA543]/20 text-[#DCA543] rounded-full animate-ping" />
          <p className="font-serif italic text-xs">Preparing Diagnostic Environment...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen overflow-x-hidden text-[#4A4333] font-sans selection:bg-[#DCA543] selection:text-[#1F2C16]">
      {/* Floating print dossier actions bar */}
      <div className="w-full bg-[#1F2C16] text-[#F6EBD4] text-xs font-bold py-3.5 px-6 sticky top-0 z-40 shadow-md flex items-center justify-between no-print select-none border-b border-white/10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#DCA543] shrink-0 animate-pulse" />
          <span className="font-serif">Confidential report dynamically generated for {data.candidate.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handlePrint}
            className="px-4 py-2 bg-[#DCA543] hover:bg-[#E8B555] text-[#1F2C16] rounded-lg font-bold flex items-center gap-2 cursor-pointer transition-colors shadow"
          >
            <Printer className="w-3.5 h-3.5" />
            Print / Save as PDF
          </button>
          <button 
            onClick={handleReset}
            className="text-[#DCA543] hover:text-white transition-colors underline cursor-pointer font-serif"
          >
            Take New Test
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          PRINT-ONLY STYLES & COVER LETTER
          Hidden on screen. Shown only when window.print() fires.
      ══════════════════════════════════════════════════════════════ */}
      <style jsx global>{`
        /* ── PRINT-ONLY COVER LETTER: hidden on screen ── */
        .print-cover-letter {
          display: none;
        }

        @media print {
          /* ── A4 page setup ── */
          @page {
            size: A4;
            margin: 20mm 22mm 18mm 22mm;
          }

          /* ── Global resets ── */
          html, body {
            background: #ffffff !important;
            color: #1a1a1a !important;
            font-size: 11pt !important;
            line-height: 1.55 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* ── Hide everything on screen ── */
          .no-print,
          header, footer, nav,
          .header, .footer {
            display: none !important;
          }

          /* ── Hide all screen report sections ── */
          .screen-report-content {
            display: none !important;
          }

          /* ── Show print cover letter ── */
          .print-cover-letter {
            display: block !important;
          }

          main {
            background: #ffffff !important;
            color: #1a1a1a !important;
            overflow: visible !important;
            min-height: auto !important;
          }

          /* ── Print page utility classes ── */
          .print-page {
            page-break-after: always;
            break-after: page;
            position: relative;
            min-height: 100vh;
          }
          .print-page:last-child {
            page-break-after: auto;
            break-after: auto;
          }

          .print-card {
            background: #ffffff !important;
            border: 1px solid #cccccc !important;
            box-shadow: none !important;
            page-break-inside: avoid;
            break-inside: avoid;
          }

          .page-break {
            page-break-before: always !important;
            break-before: page !important;
          }

          /* ── Cover letter page-specific styles ── */
          .cover-letter-body {
            font-family: "Times New Roman", "Georgia", "Lora", serif !important;
            font-size: 11pt !important;
            line-height: 1.6 !important;
            color: #1a1a1a !important;
          }
          .cover-letter-body p {
            text-align: justify !important;
            text-justify: inter-word !important;
            margin-bottom: 12pt !important;
          }
          .cover-letter-body .cl-header-rule {
            border: none;
            border-top: 1.5px solid #1a1a1a;
            margin: 6pt 0 14pt 0;
          }
          .cover-letter-body .cl-subject {
            text-align: justify !important;
            text-justify: inter-word !important;
          }
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════
          PRINT-ONLY: PAGE 1 — COVER LETTER
          This entire section is display:none on screen, shown only in print.
      ══════════════════════════════════════════════════════════════ */}
      <div className="print-cover-letter">
        <div className="print-page">
          <div className="cover-letter-body" style={{ fontFamily: '"Times New Roman", Georgia, "Lora", serif' }}>
            {/* Logo top-right */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24pt' }}>
              <img
                src="/logo.png"
                alt="EpicQuest Learning"
                style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            {/* Personal and Confidential */}
            <p style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '12pt', marginBottom: '2pt' }}>
              Personal and Confidential
            </p>
            <hr className="cl-header-rule" />

            {/* Date */}
            <p style={{ marginBottom: '16pt', fontFamily: '"Courier New", Courier, monospace', fontSize: '10.5pt' }}>
              {data.candidate.reportDate}
            </p>

            {/* Addressee block */}
            <div style={{ marginBottom: '4pt', lineHeight: 1.5 }}>
              <p style={{ marginBottom: '2pt' }}>To: {data.candidate.name}</p>
              <p style={{ marginBottom: '2pt' }}>{data.candidate.status}, {data.candidate.university}</p>
              <p style={{ marginBottom: '0' }} className="cl-subject">
                Subject: Leadership Diagnostic Test Results (Gunaity &ndash; Personality Test | Karmattitude &ndash; Career Path Assessment)
              </p>
            </div>

            {/* Salutation */}
            <p style={{ marginTop: '16pt' }}>
              Dear {data.candidate.name?.split(' ').pop()},
            </p>

            {/* Letter body paragraphs */}
            <p>
              Congratulations! You&rsquo;ve just finished a complete assessment of your interests and personality, your strengths and weaknesses, your motivations and influences, and you&rsquo;re well on your way to discovering your ideal career path.
            </p>

            <p>
              In this EpicQuest Leadership Diagnostic report, you&rsquo;ll see a summary of your scores in two broad categories: (i) Gunaity Personality Assessment and its four primary quadrants of Drive (Assertive), Influences (Hustler), Social (Helper), and Clarity (Intellectual); and, (ii) Karmattitude Career Path Potential and its six career interest areas. You&rsquo;ll learn more about what these scores mean, and how your top interest area can show which careers you are suited for.
            </p>

            <p>
              Then, we&rsquo;ll show you how key personality traits can point you toward a career that takes advantage of your natural strengths.
            </p>

            <p>
              Finally, we&rsquo;ll show you how to unlock your full report to get an in-depth profile of your interests and personality, along with personalized career planning advice and a complete listing of careers that match your individual interest profile.
            </p>

            <p>
              Let&rsquo;s get started!
            </p>

            {/* Sign-off */}
            <p style={{ marginTop: '8pt', marginBottom: '4pt' }}>
              On behalf of the entire EpicQuest Learning team &ndash;
            </p>

            <p style={{ marginBottom: '4pt' }}>
              Best regards,
            </p>

            {/* Signature placeholder (blank for now) */}
            <div style={{ height: '56pt', marginBottom: '4pt' }} />

            {/* Signer credentials */}
            <div style={{ lineHeight: 1.5 }}>
              <p style={{ marginBottom: '1pt', fontFamily: '"Courier New", Courier, monospace', fontSize: '10.5pt' }}>
                Tilak Mishra (Wharton School &amp; School of Social Policy &amp; Practice,
              </p>
              <p style={{ marginBottom: '1pt', fontFamily: '"Courier New", Courier, monospace', fontSize: '10.5pt' }}>
                Univ. of Pennsylvania 2009)
              </p>
              <p style={{ marginBottom: '0', fontFamily: '"Courier New", Courier, monospace', fontSize: '10.5pt' }}>
                Founder, EpicQuest Learning LLP
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* All screen-visible sections — hidden during print */}
      <div className="screen-report-content">

      {/* ══════════════════════════════
          SECTION 1 — COVER PAGE HERO (Forest Green)
      ══════════════════════════════ */}
      <section className="w-full bg-[#1F2C16] py-20 sm:py-28 relative overflow-hidden text-[#F6EBD4] border-b border-[#4A4333]/10">
        <div className="absolute inset-0 bg-[radial-gradient(#DCA543_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full z-10 flex flex-col justify-between min-h-[460px] gap-12 animate-fade-up">
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-white/10 pb-10">
            <div>
              <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-[#DCA543] bg-[#DCA543]/10 px-3 py-1.5 rounded-md border border-[#DCA543]/20">
                CONFIDENTIAL ADMISSIONS DOSSIER
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-serif font-medium mt-6 leading-[1.08] tracking-tight text-[#F6EBD4]">
                Leadership Diagnostic<br />Report
              </h1>
              <p className="font-serif italic text-[#F6EBD4]/60 text-base mt-4">
                Powered by Gunaity Epicometer™ &amp; Karmattitude Frameworks
              </p>
            </div>
            
            <div className="shrink-0 flex flex-col gap-3.5 items-start md:items-end">
              <span className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-[#DCA543] text-[#1F2C16] text-xs font-bold shadow-lg print-badge">
                <Award className="w-3.5 h-3.5" />
                Type: {data.primaryType.code} – {data.primaryType.name}
              </span>
              <span className="text-[10px] text-[#F6EBD4]/40 uppercase tracking-widest font-mono mt-1">
                Ref: EQ-2025-{data.primaryType.code}
              </span>
              <button
                onClick={handleReset}
                className="text-xs text-[#DCA543] hover:text-white transition-colors underline cursor-pointer mt-1 font-serif no-print"
              >
                Reset &amp; Retake Diagnostic
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-end mt-4">
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[10px] text-[#F6EBD4]/40 uppercase tracking-widest block font-bold mb-1.5">
                  Prepared For
                </span>
                <p className="text-2xl sm:text-3xl font-serif font-medium text-white leading-tight">
                  {data.candidate.name}
                </p>
                <p className="text-sm text-[#F6EBD4]/80 font-serif mt-1">
                  {data.candidate.status}
                </p>
                <p className="text-xs text-[#DCA543] font-serif italic mt-0.5">
                  {data.candidate.university}
                </p>
              </div>

              <div>
                <span className="text-[10px] text-[#F6EBD4]/40 uppercase tracking-widest block font-bold mb-1.5">
                  Dossier Issue Date
                </span>
                <p className="text-sm font-serif font-medium text-[#F6EBD4]/90">
                  {data.candidate.reportDate}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 md:border-l md:border-white/10 md:pl-10 lg:pl-16">
              <div>
                <span className="text-[10px] text-[#F6EBD4]/40 uppercase tracking-widest block font-bold mb-1.5">
                  Prepared By
                </span>
                <p className="text-sm sm:text-base font-serif font-medium text-[#F6EBD4]/90 leading-relaxed">
                  {data.candidate.preparedBy}
                </p>
                <p className="text-xs text-[#F6EBD4]/50 font-serif italic mt-1.5">
                  Office of Psychometric Design, EpicQuest Learning LLP
                </p>
              </div>
              
              <div className="pt-5 border-t border-white/5 flex items-center gap-3">
                <Award className="w-5 h-5 text-[#DCA543] shrink-0" />
                <p className="text-xs text-[#F6EBD4]/60 leading-relaxed">
                  This diagnostic dossier represents a core strategic framework utilized to design competitive university portfolios for elite applicants.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 2 — FRAMEWORK OVERVIEW & 2D MATRIX GRID (Soft White)
      ══════════════════════════════ */}
      <section className="w-full bg-[#FDFBF7] py-20 sm:py-28 border-b border-[#4A4333]/10 relative z-10 page-break">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Plot Box */}
          <div className="lg:col-span-7 flex flex-col gap-6 p-6 sm:p-10 bg-white rounded-3xl border border-[#4A4333]/8 shadow-sm relative overflow-hidden print-card">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#4A4333]/8 pb-4">
              <div>
                <span className="uppercase tracking-[0.18em] text-[9px] font-bold text-[#DCA543] bg-[#DCA543]/10 px-2.5 py-1 rounded">
                  2D COORDINATES
                </span>
                <h2 className="text-2xl font-serif font-medium text-[#403011] mt-2">
                  The Gunaity Epicometer™
                </h2>
              </div>
              <span className="text-xs text-[#4A4333]/65 font-serif italic select-none">
                Mapped Psychometric Matrix
              </span>
            </div>

            {/* Coordinate Grid Container */}
            <div className="relative w-full aspect-square bg-[#FDFBF7] rounded-2xl border border-[#4A4333]/10 overflow-hidden flex items-center justify-center p-8 select-none shadow-inner">
              
              <div aria-hidden className="absolute inset-0 grid grid-cols-8 grid-rows-8 pointer-events-none opacity-40">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border-[0.5px] border-[#4A4333]/6" />
                ))}
              </div>

              {/* Main Axes */}
              <div aria-hidden className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-[#4A4333]/15 pointer-events-none" />
              <div aria-hidden className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-[#4A4333]/15 pointer-events-none" />

              {/* Quadrant Visual Overlays */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 p-5 text-center pointer-events-none opacity-[0.45]">
                <div className="flex items-start justify-start text-[#5C7146] font-bold text-[10px] uppercase border-r border-b border-dashed border-[#5C7146]/20">
                  Drive (D)
                </div>
                <div className="flex items-start justify-end text-[#DCA543] font-bold text-[10px] uppercase border-l border-b border-dashed border-[#DCA543]/20 bg-[#DCA543]/2">
                  Influence (I)
                </div>
                <div className="flex items-end justify-start text-[#5D7A8C] font-bold text-[10px] uppercase border-r border-t border-dashed border-[#5D7A8C]/20">
                  Clarity (C)
                </div>
                <div className="flex items-end justify-end text-[#D4856A] font-bold text-[10px] uppercase border-l border-t border-dashed border-[#D4856A]/20">
                  Support (S)
                </div>
              </div>

              {/* Axis Headings */}
              <span className="absolute top-3 left-1/2 -translate-x-1/2 bg-[#566544] text-[#F6EBD4] px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider shadow-sm">
                Active ({data.foundationScores.pacePosture.active}%)
              </span>
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#4A4333]/70 text-[#F6EBD4] px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">
                Receptive ({data.foundationScores.pacePosture.receptive}%)
              </span>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#DCA543] text-[#1F2C16] px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider shadow-sm">
                Agreeable ({data.foundationScores.orientation.agreeable}%)
              </span>
              <span className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#4A4333]/70 text-[#F6EBD4] px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">
                Skeptical ({data.foundationScores.orientation.skeptical}%)
              </span>

              {/* Pulsating Coordinate Marker */}
              <div 
                className="absolute z-20 flex items-center justify-center"
                style={{ 
                  bottom: animating ? `${data.foundationScores.pacePosture.active}%` : "50%", 
                  left: animating ? `${data.foundationScores.orientation.agreeable}%` : "50%",
                  transform: "translate(-50%, 50%)"
                }}
              >
                <span className="absolute h-11 w-11 bg-[#DCA543]/20 rounded-full animate-ping pointer-events-none" />
                <span className="absolute h-7 w-7 bg-[#DCA543]/45 rounded-full animate-pulse pointer-events-none" />
                <div className="h-5 w-5 bg-[#DCA543] rounded-full border-2 border-white shadow-md flex items-center justify-center cursor-pointer group">
                  <span className="absolute bottom-full mb-2 bg-[#1F2C16] text-[#FDFBF7] text-[10px] font-bold rounded-md px-2 py-1 shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {data.candidate.name.split(" ")[0]} ({data.foundationScores.orientation.agreeable}%, {data.foundationScores.pacePosture.active}%)
                  </span>
                </div>
              </div>

            </div>

            <p className="text-xs text-[#4A4333]/65 font-serif leading-relaxed text-center italic border-t border-[#4A4333]/5 pt-3">
              *The diagnostic grid maps behavioral tendency as a precise visual vector coordinate.
            </p>
          </div>

          {/* Right Quadrants Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 p-6 sm:p-10 bg-[#FDFBF7] rounded-3xl border border-[#4A4333]/8 shadow-sm print-card">
            <div>
              <span className="uppercase tracking-[0.18em] text-[9px] font-bold text-[#566544] bg-[#566544]/10 px-3.5 py-1.5 rounded-full">
                FRAMEWORK CORE
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#403011] mt-4 mb-4">
                The Four Quadrants
              </h3>
              <p className="text-sm sm:text-base text-[#4A4333] font-serif leading-relaxed">
                {data.framework.description}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {data.framework.styles.map((style) => {
                const isHighlight = style.code === data.primaryType.code;
                const IconComp = style.code === "D" ? Target : style.code === "I" ? Sparkles : style.code === "S" ? Compass : FileText;
                return (
                  <div 
                    key={style.code} 
                    className={`p-5 rounded-2xl border transition-all duration-300 ${
                      isHighlight 
                        ? "bg-[#DCA543]/8 border-[#DCA543] shadow-sm relative overflow-hidden" 
                        : "bg-white border-[#4A4333]/8"
                    }`}
                  >
                    {isHighlight && (
                      <div className="absolute top-0 right-0 w-8 h-8 bg-[#DCA543] text-[#1F2C16] flex items-center justify-center rounded-bl-xl select-none">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <span className={`h-7 w-7 rounded-lg flex items-center justify-center text-xs font-bold uppercase ${
                        style.code === "D" ? "bg-[#5C7146]/20 text-[#5C7146]" :
                        style.code === "I" ? "bg-[#DCA543]/20 text-[#DCA543]" :
                        style.code === "S" ? "bg-[#D4856A]/20 text-[#D4856A]" :
                        "bg-[#5D7A8C]/20 text-[#5D7A8C]"
                      }`}>
                        <IconComp className="w-4 h-4" />
                      </span>
                      <h4 className="font-serif font-bold text-base text-[#403011]">
                        {style.name}
                      </h4>
                    </div>
                    <p className="text-[12px] sm:text-xs text-[#4A4333]/75 font-serif leading-relaxed mt-2.5 pl-10">
                      {style.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 3 — FOUNDATION SCORES (Warm Cream)
      ══════════════════════════════ */}
      <section className="w-full bg-[#F6EBD4] py-20 sm:py-28 border-b border-[#4A4333]/10 page-break">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <span className="uppercase tracking-[0.18em] text-[9px] font-bold text-[#DCA543] bg-[#DCA543]/12 px-4 py-1.5 rounded-full border border-[#DCA543]/20 select-none">
            SECTION 2 — FOUNDATION SCORES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#403011] mt-5 mb-10 leading-tight">
            Pace &amp; Posture, Orientation
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Pace & Posture */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-[#4A4333]/10 pb-3">
                <h3 className="font-serif font-bold text-lg text-[#403011]">
                  Dimension 1 — Pace &amp; Posture
                </h3>
                <span className="text-[10px] text-[#5C7146] font-bold uppercase tracking-wider bg-[#5C7146]/10 px-2 py-0.5 rounded border border-[#5C7146]/20">
                  {data.foundationScores.pacePosture.active >= 50 ? "Leans Active" : "Leans Receptive"}
                </span>
              </div>
              
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center justify-between text-xs font-bold text-[#403011]">
                  <span>ACTIVE: {data.foundationScores.pacePosture.active}%</span>
                  <span>RECEPTIVE: {data.foundationScores.pacePosture.receptive}%</span>
                </div>
                <div className="h-5 w-full bg-[#FDFBF7] rounded-full overflow-hidden flex border border-[#4A4333]/10 shadow-inner">
                  <div 
                    className="h-full bg-[#5C7146] transition-all duration-[1200ms] ease-out-back flex items-center justify-end px-3 text-[10px] font-bold text-white shadow-inner" 
                    style={{ width: animating ? `${data.foundationScores.pacePosture.active}%` : "0%" }}
                  >
                    {animating && `${data.foundationScores.pacePosture.active}%`}
                  </div>
                  <div 
                    className="h-full bg-[#EAE5D9] transition-all duration-[1200ms] ease-out-back flex items-center justify-start px-3 text-[10px] font-bold text-[#403011]"
                    style={{ width: animating ? `${data.foundationScores.pacePosture.receptive}%` : "0%" }}
                  >
                    {animating && `${data.foundationScores.pacePosture.receptive}%`}
                  </div>
                </div>
              </div>

              <div className="bg-[#FDFBF7] border-l-2 border-[#5C7146] p-5 rounded-r-2xl mt-2 shadow-sm border border-l-0 border-[#4A4333]/8">
                <p className="text-sm text-[#4A4333] font-serif leading-relaxed italic">
                  "{data.foundationScores.pacePosture.insight}"
                </p>
              </div>
            </div>

            {/* Orientation */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-[#4A4333]/10 pb-3">
                <h3 className="font-serif font-bold text-lg text-[#403011]">
                  Dimension 2 — Orientation
                </h3>
                <span className="text-[10px] text-[#DCA543] font-bold uppercase tracking-wider bg-[#DCA543]/10 px-2 py-0.5 rounded border border-[#DCA543]/20">
                  {data.foundationScores.orientation.agreeable >= 50 ? "Leans Agreeable" : "Leans Skeptical"}
                </span>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center justify-between text-xs font-bold text-[#403011]">
                  <span>AGREEABLE: {data.foundationScores.orientation.agreeable}%</span>
                  <span>SKEPTICAL: {data.foundationScores.orientation.skeptical}%</span>
                </div>
                <div className="h-5 w-full bg-[#FDFBF7] rounded-full overflow-hidden flex border border-[#4A4333]/10 shadow-inner">
                  <div 
                    className="h-full bg-[#DCA543] transition-all duration-[1200ms] ease-out-back flex items-center justify-end px-3 text-[10px] font-bold text-[#1F2C16] shadow-inner" 
                    style={{ width: animating ? `${data.foundationScores.orientation.agreeable}%` : "0%" }}
                  >
                    {animating && `${data.foundationScores.orientation.agreeable}%`}
                  </div>
                  <div 
                    className="h-full bg-[#E0DDD5] transition-all duration-[1200ms] ease-out-back flex items-center justify-start px-3 text-[10px] font-bold text-[#4A4333]"
                    style={{ width: animating ? `${data.foundationScores.orientation.skeptical}%` : "0%" }}
                  >
                    {animating && `${data.foundationScores.orientation.skeptical}%`}
                  </div>
                </div>
              </div>

              <div className="bg-[#FDFBF7] border-l-2 border-[#DCA543] p-5 rounded-r-2xl mt-2 shadow-sm border border-l-0 border-[#4A4333]/8">
                <p className="text-sm text-[#4A4333] font-serif leading-relaxed italic">
                  "{data.foundationScores.orientation.insight}"
                </p>
              </div>
            </div>

          </div>

          {/* Unified Result Banner */}
          <div className="mt-12 pt-6 border-t border-[#4A4333]/10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#FDFBF7]/60 p-6 rounded-2xl border border-[#4A4333]/8 shadow-sm">
            <div className="flex items-center gap-3.5">
              <TrendingUp className="w-5 h-5 text-[#DCA543] shrink-0" />
              <div>
                <p className="text-[10px] text-[#4A4333]/60 font-bold uppercase tracking-wider">
                  COMBINED RESULT FORMULA
                </p>
                <p className="text-base font-serif font-bold text-[#403011] mt-0.5">
                  {data.foundationScores.combinedResult.formula}
                </p>
              </div>
            </div>
            <div className="px-6 py-2.5 bg-[#DCA543] hover:scale-102 transition-transform text-[#1F2C16] rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
              {data.foundationScores.combinedResult.type}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 4 — PRIMARY TYPE HERO (Soft White)
      ══════════════════════════════ */}
      <section className="w-full bg-[#FDFBF7] py-20 sm:py-28 page-break">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col gap-8">
          
          <span className="uppercase tracking-[0.18em] text-[9px] font-bold text-[#DCA543] bg-[#DCA543]/10 px-3.5 py-1.5 rounded-full border border-[#DCA543]/20 w-fit select-none">
            SECTION 3 — PRIMARY TYPE
          </span>
          
          {/* Headline */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-serif font-medium text-[#403011] leading-[1.08] tracking-tight animate-fade-up">
              You are an{" "}
              <span className="relative inline-block text-[#5C7146]">
                <span className="relative z-10 font-serif">{data.primaryType.name} ({data.primaryType.code})</span>
                <svg className="absolute -bottom-1.5 left-0 w-full" height="8" viewBox="0 0 120 8" preserveAspectRatio="none" fill="none">
                  <path d="M2 6 Q30 2 60 5 Q90 8 118 3" stroke="#DCA543" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>{" "}
              Type:
            </h2>
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mt-6">
              {data.primaryType.labels.map((lbl, idx) => (
                <span 
                  key={lbl} 
                  className={`inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full text-xs font-bold border ${
                    idx === 0 
                      ? "bg-[#DCA543] text-[#1F2C16] border-[#DCA543]" 
                      : "bg-[#DCA543]/10 text-[#403011] border-[#DCA543]/25"
                  }`}
                >
                  {idx === 0 && <UserCheck className="w-3.5 h-3.5" />}
                  {lbl}
                </span>
              ))}
            </div>
          </div>

          <div className="h-[1px] bg-[#4A4333]/10 w-full my-1" />

          {/* Description */}
          <p className="text-lg sm:text-xl text-[#4A4333] font-serif leading-relaxed border-l-3 border-[#DCA543] pl-6 italic">
            "{data.primaryType.description}"
          </p>

          {/* Dual Panel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div className="p-6.5 bg-[#5C7146]/5 rounded-2xl border border-[#5C7146]/10 flex flex-col gap-2 shadow-sm">
              <span className="inline-flex items-center gap-2 text-[#5C7146] font-bold uppercase text-[11px] tracking-wider">
                <span className="h-2 w-2 bg-[#5C7146] rounded-full" />
                At Their Best
              </span>
              <p className="text-sm sm:text-base text-[#4A4333] font-serif leading-relaxed mt-2">
                {data.primaryType.atTheirBest}
              </p>
            </div>

            <div className="p-6.5 bg-[#D4856A]/5 rounded-2xl border border-[#D4856A]/10 flex flex-col gap-2 shadow-sm">
              <span className="inline-flex items-center gap-2 text-[#D4856A] font-bold uppercase text-[11px] tracking-wider">
                <span className="h-2 w-2 bg-[#D4856A] rounded-full" />
                Potential Weakness
              </span>
              <p className="text-sm sm:text-base text-[#4A4333] font-serif leading-relaxed mt-2">
                {data.primaryType.potentialWeakness}
              </p>
            </div>
          </div>

          {/* Traits pills list */}
          <div className="mt-4">
            <span className="block text-[10px] text-[#4A4333]/60 uppercase tracking-widest font-bold mb-4">
              PRIMARY BEHAVIORAL DESCRIPTORS ({data.primaryType.traitPills.length})
            </span>
            <div className="flex flex-wrap gap-2.5">
              {data.primaryType.traitPills.map((pill) => (
                <span 
                  key={pill}
                  className="inline-block px-4 py-2 bg-[#F6EBD4]/40 hover:bg-[#DCA543] hover:text-[#1F2C16] border border-[#4A4333]/8 rounded-full text-xs font-bold text-[#403011] transition-all cursor-default select-none shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 5 — WORKPLACE PRIORITIES (Warm Cream)
      ══════════════════════════════ */}
      <section className="w-full bg-[#F6EBD4] py-20 sm:py-28 border-t border-b border-[#4A4333]/10 page-break">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12">
            <span className="uppercase tracking-[0.18em] text-[9px] font-bold text-[#566544] bg-[#566544]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#566544]/20 select-none">
              SECTION 4 — WORKPLACE PRIORITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#403011] tracking-tight leading-tight mt-4">
              Workplace Priorities
            </h2>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif mt-2 leading-relaxed">
              These three priorities guide {data.candidate.name}'s orientation in cooperative groups, corporate internships, and applied project settings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-2">
            {data.workplacePriorities.map((prio, idx) => {
              const Icon = idx === 0 ? Users : idx === 1 ? Lightbulb : Sparkles;
              return (
                <div 
                  key={prio.title} 
                  className="group relative p-8 bg-[#FDFBF7] hover:bg-white rounded-2xl border border-[#4A4333]/8 hover:border-[#DCA543]/40 hover:shadow-lg transition-all duration-300 flex flex-col gap-5 overflow-hidden print-card"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#DCA543]/3 rounded-bl-3xl group-hover:bg-[#DCA543]/6 transition-colors select-none pointer-events-none" />
                  
                  <div className="h-11 w-11 bg-[#DCA543]/10 text-[#DCA543] rounded-xl flex items-center justify-center shrink-0 border border-[#DCA543]/15">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <span className="text-[10px] text-[#4A4333]/50 font-bold uppercase tracking-wider block mb-1">
                      Priority 0{idx + 1}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-[#403011] tracking-wide group-hover:text-[#5C7146] transition-colors">
                      {prio.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A4333] font-serif leading-relaxed mt-2">
                      {prio.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 6 — SITUATIONS (Soft White)
      ══════════════════════════════ */}
      <section className="w-full bg-[#FDFBF7] py-20 sm:py-28 page-break">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch animate-fade-up">
          
          {/* Environments they thrive in */}
          <div className="p-8 sm:p-10 bg-white rounded-3xl border border-[#4A4333]/8 shadow-sm flex flex-col justify-between print-card">
            <div>
              <div className="flex items-center gap-3 border-b border-[#4A4333]/10 pb-4 mb-6">
                <span className="h-7 w-7 rounded-lg bg-[#5C7146]/10 text-[#5C7146] border border-[#5C7146]/15 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
                <div>
                  <span className="uppercase tracking-widest text-[9px] font-bold text-[#5C7146] block font-sans">
                    SECTION 5 — ENVIRONMENTAL MATRIX
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#403011] mt-0.5">
                    Environments They Thrive In
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-4.5">
                {data.situations.thrive.map((s, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start">
                    <span className="text-[#5C7146] shrink-0 mt-1 select-none">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <p className="text-sm sm:text-base text-[#4A4333] font-serif leading-relaxed">
                      {s}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-4 border-t border-[#4A4333]/5 text-xs text-[#5C7146] font-serif italic select-none font-semibold">
              *Positions focusing on relational momentum maximize {data.candidate.name}'s capabilities.
            </div>
          </div>

          {/* Situations they find difficult */}
          <div className="p-8 sm:p-10 bg-white rounded-3xl border border-[#4A4333]/8 shadow-sm flex flex-col justify-between print-card">
            <div>
              <div className="flex items-center gap-3 border-b border-[#4A4333]/10 pb-4 mb-6">
                <span className="h-7 w-7 rounded-lg bg-[#D4856A]/10 text-[#D4856A] border border-[#D4856A]/15 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-4 h-4" />
                </span>
                <div>
                  <span className="uppercase tracking-widest text-[9px] font-bold text-[#D4856A] block font-sans">
                    SECTION 5 — ENVIRONMENTAL MATRIX
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#403011] mt-0.5">
                    Situations They Find Difficult
                  </h3>
                </div>
              </div>

              <div className="flex flex-col gap-4.5">
                {data.situations.difficult.map((s, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start">
                    <span className="text-[#D4856A] shrink-0 mt-1 select-none">
                      <AlertCircle className="w-4 h-4" />
                    </span>
                    <p className="text-sm sm:text-base text-[#4A4333] font-serif leading-relaxed">
                      {s}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-4 border-t border-[#4A4333]/5 text-xs text-[#D4856A] font-serif italic select-none font-semibold">
              *Isolative and highly static workspaces could lead to dips in motivation.
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 7 — STRENGTHS vs BLIND SPOTS (Warm Cream)
      ══════════════════════════════ */}
      <section className="w-full bg-[#F6EBD4] py-20 sm:py-28 border-t border-b border-[#4A4333]/10 page-break">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12">
            <span className="uppercase tracking-[0.18em] text-[9px] font-bold text-[#DCA543] bg-[#DCA543]/12 px-4 py-1.5 rounded-full border border-[#DCA543]/20 select-none">
              SECTION 6 — COMPETENCY MATRIX
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#403011] tracking-tight leading-tight mt-4">
              Strengths &amp; Blind Spots
            </h2>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif mt-2 leading-relaxed">
              Comparison profiling {data.candidate.name}'s 11 primary clinical strengths alongside 11 actionable growth blind spots.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mt-2">
            
            {/* Strengths Card */}
            <div className="p-8 sm:p-10 bg-[#1F2C16] text-[#F6EBD4] rounded-3xl border border-white/5 shadow-md flex flex-col justify-between print-dark-section">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <h3 className="font-serif font-bold text-xl text-white">
                    11 Strengths &amp; Talents
                  </h3>
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-white/10 text-white border border-white/20 select-none">
                    Validated
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.strengthsAndBlindSpots.strengths.map((str, idx) => (
                    <div key={str} className="flex gap-3 items-center">
                      <span className="shrink-0 select-none">
                        <CheckCircle2 className="w-4 h-4 text-[#DCA543]" />
                      </span>
                      <span className="text-xs sm:text-sm font-serif font-medium text-white/90">
                        {idx + 1}. {str}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-[10px] text-[#F6EBD4]/40 uppercase tracking-widest select-none font-sans font-bold">
                *Targeted applied research projects will leverage these talents.
              </div>
            </div>

            {/* Blind Spots Card */}
            <div className="p-8 sm:p-10 bg-[#F9ECE8] rounded-3xl border border-[#D4856A]/20 shadow-sm flex flex-col justify-between print-card">
              <div>
                <div className="flex items-center justify-between border-b border-[#D4856A]/15 pb-4 mb-6">
                  <h3 className="font-serif font-bold text-xl text-[#403011]">
                    11 Blind Spots &amp; Vulnerabilities
                  </h3>
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-[#D4856A]/10 text-[#D4856A] border border-[#D4856A]/25 select-none">
                    Growth Points
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.strengthsAndBlindSpots.blindSpots.map((blind, idx) => (
                    <div key={blind} className="flex gap-3 items-center">
                      <span className="shrink-0 select-none">
                        <AlertCircle className="w-4 h-4 text-[#D4856A]" />
                      </span>
                      <span className="text-xs sm:text-sm font-serif font-medium text-[#403011]/90">
                        {idx + 1}. {blind}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#D4856A]/15 text-[10px] text-[#D4856A] uppercase tracking-widest select-none font-sans font-bold">
                *Structured mentoring will build methodical discipline.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 8 — STYLE DEPTH (Soft White)
      ══════════════════════════════ */}
      <section className="w-full bg-[#FDFBF7] py-20 sm:py-28 page-break">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12">
            <span className="uppercase tracking-[0.18em] text-[9px] font-bold text-[#DCA543] bg-[#DCA543]/10 px-3.5 py-1.5 rounded-full border border-[#DCA543]/20 w-fit select-none">
              SECTION 7 — STYLE DEPTH
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#403011] tracking-tight leading-tight mt-4">
              Style Adaptability Profile
            </h2>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif mt-2 leading-relaxed">
              Showcasing {data.candidate.name}'s adaptability levels and mental energy expenditure across each behavior mode.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-2">
            
            {/* Core (Spans 2) */}
            <div className="lg:col-span-2 p-8 sm:p-10 bg-white rounded-3xl border border-[#DCA543] shadow-sm relative overflow-hidden flex flex-col justify-between print-card">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#DCA543]/6 rounded-bl-[6rem] pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-3.5">
                  <span className="h-8.5 w-8.5 bg-[#DCA543]/10 text-[#DCA543] border border-[#DCA543]/25 rounded-lg flex items-center justify-center text-sm font-bold uppercase select-none font-sans">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[9px] text-[#DCA543] font-bold uppercase tracking-wider block font-sans">
                      {data.styleDepth.core.status}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-[#403011] mt-0.5">
                      {data.styleDepth.core.name}
                    </h3>
                  </div>
                </div>

                <div className="h-[1px] bg-[#4A4333]/10 w-full my-5" />

                <p className="text-sm sm:text-base text-[#4A4333]/90 font-serif leading-relaxed">
                  {data.styleDepth.core.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#4A4333]/5 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#DCA543]" />
                <span className="text-[10px] text-[#4A4333]/50 font-bold uppercase tracking-widest font-sans">
                  Natural Default State
                </span>
              </div>
            </div>

            {/* Helper 1 */}
            <div className="p-8 sm:p-10 bg-white rounded-3xl border border-[#4A4333]/8 shadow-sm flex flex-col justify-between print-card hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-3.5">
                  <span className="h-8.5 w-8.5 bg-[#5C7146]/10 text-[#5C7146] border border-[#5C7146]/25 rounded-lg flex items-center justify-center text-sm font-bold uppercase select-none font-sans">
                    <Target className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[9px] text-[#4A4333]/50 font-bold uppercase tracking-wider block font-sans">
                      {data.styleDepth.helper1.status}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-[#403011] mt-0.5">
                      {data.styleDepth.helper1.name}
                    </h3>
                  </div>
                </div>

                <div className="h-[1px] bg-[#4A4333]/10 w-full my-5" />

                <p className="text-xs sm:text-sm text-[#4A4333] font-serif leading-relaxed">
                  {data.styleDepth.helper1.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#4A4333]/5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#5C7146]" />
                <span className="text-[10px] text-[#4A4333]/50 font-bold uppercase tracking-widest font-sans">
                  Strategic Helper Mode
                </span>
              </div>
            </div>

            {/* Helper 2 */}
            <div className="p-8 sm:p-10 bg-white rounded-3xl border border-[#4A4333]/8 shadow-sm flex flex-col justify-between print-card hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-3.5">
                  <span className="h-8.5 w-8.5 bg-[#D4856A]/10 text-[#D4856A] border border-[#D4856A]/25 rounded-lg flex items-center justify-center text-sm font-bold uppercase select-none font-sans">
                    <Users className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[9px] text-[#4A4333]/50 font-bold uppercase tracking-wider block font-sans">
                      {data.styleDepth.helper2.status}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-[#403011] mt-0.5">
                      {data.styleDepth.helper2.name}
                    </h3>
                  </div>
                </div>

                <div className="h-[1px] bg-[#4A4333]/10 w-full my-5" />

                <p className="text-xs sm:text-sm text-[#4A4333] font-serif leading-relaxed">
                  {data.styleDepth.helper2.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#4A4333]/5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#D4856A]" />
                <span className="text-[10px] text-[#4A4333]/50 font-bold uppercase tracking-widest font-sans">
                  Secondary Helper Mode
                </span>
              </div>
            </div>

            {/* Challenge - C (Spans 2) */}
            <div className="lg:col-span-2 p-8 sm:p-10 bg-[#F9ECE8] rounded-3xl border border-[#D4856A]/30 shadow-sm relative overflow-hidden flex flex-col justify-between print-card">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4856A]/4 rounded-bl-[6rem] pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-3.5">
                  <span className="h-8.5 w-8.5 bg-[#5D7A8C]/10 text-[#5D7A8C] border border-[#5D7A8C]/25 rounded-lg flex items-center justify-center text-sm font-bold uppercase select-none font-sans">
                    <FileText className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[9px] text-[#D4856A] font-bold uppercase tracking-wider block font-sans">
                      {data.styleDepth.challenge.status}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-[#403011] mt-0.5">
                      {data.styleDepth.challenge.name}
                    </h3>
                  </div>
                </div>

                <div className="h-[1px] bg-[#D4856A]/15 w-full my-5" />

                <p className="text-sm sm:text-base text-[#4A4333] font-serif leading-relaxed">
                  {data.styleDepth.challenge.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#D4856A]/20 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#D4856A] animate-pulse" />
                <span className="text-[10px] text-[#D4856A] font-bold uppercase tracking-widest font-sans">
                  Requires Significant Energy Effort
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 9 — WORKPLACE DESCRIPTOR TABLE (Warm Cream)
      ══════════════════════════════ */}
      <section className="w-full bg-[#F6EBD4] py-20 sm:py-28 border-b border-[#4A4333]/10 page-break">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12">
            <span className="uppercase tracking-[0.18em] text-[9px] font-bold text-[#566544] bg-[#566544]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#566544]/20 select-none">
              SECTION 8 — DESCRIPTORS ANALYSIS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#403011] tracking-tight leading-tight mt-4">
              Workplace Descriptors
            </h2>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif mt-2 leading-relaxed">
              Comparison detailing descriptions most likely and least likely to describe {data.candidate.name}'s actions.
            </p>
          </div>

          {/* Table */}
          <div className="w-full bg-[#FDFBF7] rounded-3xl border border-[#4A4333]/8 shadow-sm overflow-hidden print-card">
            
            <div className="grid grid-cols-2 bg-[#1F2C16] text-[#F6EBD4] font-bold text-xs sm:text-sm uppercase tracking-widest print-dark-section border-b border-[#4A4333]/10">
              <div className="p-4 sm:p-5 border-r border-white/10 flex items-center justify-between">
                <span>More Likely to be Described as</span>
                <span className="text-[#DCA543]">✦</span>
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-between">
                <span>Less Likely to be Described as</span>
                <span className="text-[#D4856A]">✦</span>
              </div>
            </div>

            <div className="divide-y divide-[#4A4333]/8">
              {Array.from({ length: Math.max(data.workplaceDescriptorTable.moreLikely.length, data.workplaceDescriptorTable.lessLikely.length) }).map((_, idx) => (
                <div key={idx} className="grid grid-cols-2 text-xs sm:text-sm font-serif leading-relaxed hover:bg-[#F6EBD4]/20 transition-colors duration-150">
                  
                  {/* More Likely */}
                  <div className="p-4.5 border-r border-[#4A4333]/8 text-[#403011] flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#5C7146] shrink-0" />
                    <span className="font-semibold">
                      {data.workplaceDescriptorTable.moreLikely[idx] || ""}
                    </span>
                  </div>

                  {/* Less Likely */}
                  <div className="p-4.5 text-[#4A4333]/65 flex items-center gap-3">
                    <AlertCircle className="w-4 h-4 text-[#D4856A] shrink-0" />
                    <span>
                      {data.workplaceDescriptorTable.lessLikely[idx] || ""}
                    </span>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 10 — KARMATTITUDE CAREER MAP (Forest Green)
      ══════════════════════════════ */}
      <section className="w-full bg-[#1F2C16] py-20 sm:py-28 relative overflow-hidden text-[#F6EBD4] page-break">
        <div className="absolute inset-0 bg-[radial-gradient(#DCA543_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full z-10 flex flex-col gap-8 animate-fade-up">
          
          <div className="max-w-3xl">
            <span className="uppercase tracking-[0.18em] text-[9px] font-bold text-[#DCA543] bg-[#DCA543]/10 border border-[#DCA543]/20 px-3.5 py-1.5 rounded-full mb-4 inline-block select-none">
              SECTION 9 — KARMATTITUDE CAREER MAP
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white leading-tight mt-1 mb-3">
              Karmattitude Career Map
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-serif leading-relaxed">
              {data.careerMap.introduction}
            </p>
          </div>

          <div className="h-[1px] bg-white/10 w-full my-2" />

          {/* Domains Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.careerMap.domains.map((domain, idx) => {
              const IconComp = 
                idx === 0 ? FileText : 
                idx === 1 ? Scroll : 
                idx === 2 ? TrendingUp : 
                idx === 3 ? BookOpen : 
                idx === 4 ? Target : Compass;
              return (
                <div 
                  key={domain.id}
                  className="group relative p-7 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#DCA543]/30 transition-all duration-300 flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-[#DCA543] text-lg font-bold select-none block group-hover:translate-x-0.5 transition-transform">
                      {domain.id} —
                    </span>
                    <IconComp className="w-5 h-5 text-[#DCA543]/85" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-white tracking-wide">
                      {domain.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-white/75 font-serif leading-relaxed mt-2.5">
                      {domain.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      </div>{/* end screen-report-content */}

    </main>
  );
}
