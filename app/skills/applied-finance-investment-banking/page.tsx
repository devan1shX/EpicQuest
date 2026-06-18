"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Coins,
  Table,
  DollarSign,
  Sparkles,
  Folder,
  Presentation,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Clock,
  Landmark
} from "lucide-react";

interface MilestoneStep {
  num: string;
  weeks: string;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
  topics: string[];
}

const steps: MilestoneStep[] = [
  {
    num: "01",
    weeks: "Weeks 1–2",
    title: "Accounting & Financial Statements",
    desc: "Master the absolute language of business. Analyze income statements, balance sheets, and cash flow statements, and map how corporate transactions flow through interconnected financial linkages.",
    icon: FileText,
    topics: ["Financial Statements", "Linkage Modeling", "Revenue Recognition", "Working Capital", "Expense Accounting"],
  },
  {
    num: "02",
    weeks: "Weeks 3–5",
    title: "Corporate Finance Foundations",
    desc: "Understand the core mechanics of capital and corporate value. Explore the time value of money, weighted average cost of capital (WACC), corporate risk, and business model viability.",
    icon: Landmark,
    topics: ["Time Value of Money", "Cost of Capital (WACC)", "Risk & Return", "Financial Ratios", "Capital Structure"],
  },
  {
    num: "03",
    weeks: "Weeks 6–8",
    title: "Financial Modelling",
    desc: "Engineer dynamic, fully-integrated three-statement models in Excel. Build forecasting algorithms, perform scenario sensitivity stress tests, and construct five-year projection models.",
    icon: Table,
    topics: ["Three-Statement Modeling", "Forecasting Algorithms", "Scenario Analysis", "Sensitivity Matrices", "Excel Best Practices"],
  },
  {
    num: "04",
    weeks: "Weeks 9–10",
    title: "Valuation Techniques",
    desc: "Calculate the intrinsic and relative worth of leading enterprises. Deploy Discounted Cash Flow (DCF) modeling, comparable company analyses, and M&A precedent transactions.",
    icon: DollarSign,
    topics: ["Discounted Cash Flow (DCF)", "Trading Comparables", "Precedent Transactions", "Enterprise vs. Equity Value", "Terminal Value Concepts"],
  },
];

const deliverables = [
  {
    tag: "EQUITY RESEARCH",
    title: "Equity Research Report",
    desc: "A professional-grade equity research report evaluating a real listed company with an active, data-backed buy/sell recommendation.",
    icon: Folder,
  },
  {
    tag: "FINANCIAL MODEL",
    title: "Three-Statement Model",
    desc: "A fully dynamic, three-statement Excel model linking income statements, balance sheets, and cash flows with advanced scenario variables.",
    icon: Table,
  },
  {
    tag: "PITCH BOOK",
    title: "Investment Presentation",
    desc: "An investment banking-style pitch deck summarizing corporate valuation, financial projections, and strategic advisory recommendations.",
    icon: Presentation,
  },
  {
    tag: "VALUATION",
    title: "Company Valuation Project",
    desc: "A comprehensive valuation workbook applying both intrinsic DCF metrics and relative trading multiple analyses to evaluate corporate worth.",
    icon: Coins,
  },
];

export default function AppliedFinanceInvestmentBankingPage() {
  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen overflow-x-hidden">

      {/* ════ HERO ═══ */}
      <section className="relative w-full overflow-hidden border-b border-[#4A4333]/10 pb-20 sm:pb-28 pt-14 sm:pt-20">
        {/* Dot grid */}
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(#566544_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.055] pointer-events-none" />
        {/* Ambient blob */}
        <div aria-hidden className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full bg-[#566544]/6 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">

          {/* Breadcrumb */}
          <div className="mb-8 animate-fade-up">
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#5C7146] hover:text-[#465732] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.5} />
              Back to Skills Academy
            </Link>
          </div>

          {/* Programme badge */}
          <div className="mb-8">
            <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
              FELLOWSHIP DEEP DIVE
            </span>
          </div>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.88fr] gap-14 lg:gap-20 items-center">

            {/* ── Left text column ── */}
            <div className="flex flex-col">
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem] font-serif font-medium text-[#403011] tracking-tight leading-[1.07] mb-4">
                Applied Finance &amp;
                <br />
                <span className="text-[#566544]">Investment Banking</span>
              </h1>

              <p className="font-serif text-xl sm:text-2xl text-[#DCA543] italic mb-8 font-medium">
                Learn Real Finance &amp; Business Modelling Skills Before College.
              </p>

              <div className="relative pl-6 border-l-2 border-[#DCA543] space-y-5 text-[#4A4333] font-serif text-base sm:text-[17px] leading-relaxed max-w-[560px] mb-10">
                <p>
                  A practical corporate finance and investment banking fellowship helping students build technical business and valuation skills before entering university.
                </p>
                <p className="text-[#4A4333]/80 text-sm sm:text-[15px]">
                  EpicQuest students enter university with advanced analytical and valuation capabilities most undergraduates never gain this early, signaling immense practical capabilities to elite university admissions committees.
                </p>
              </div>

              {/* Quick CTA */}
              <Link
                href="/contact"
                className="self-start inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#566544] hover:bg-[#455734] text-[#F6EBD4] rounded-full font-semibold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#566544]/25"
              >
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* ── Right image column ── */}
            <div className="relative">
              {/* Offset decorative slab behind image */}
              <div aria-hidden className="absolute -bottom-4 -right-4 w-full h-full rounded-[2.5rem] bg-[#566544]/12 border border-[#566544]/15" />
              {/* Gold accent corner strip */}
              <div aria-hidden className="absolute -top-3 -left-3 w-20 h-20 rounded-tl-[2rem] border-t-2 border-l-2 border-[#DCA543]" />

              <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-[#4A4333]/12 shadow-2xl group">
                <Image
                  src="/images/skills/Skills_Flagship_2.png"
                  alt="Applied Finance & Investment Banking Fellowship"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  priority
                />
                <div aria-hidden className="absolute inset-0 bg-[#403011]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating badge over image */}
                <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-[#FDFBF7]/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-[#4A4333]/10">
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#DCA543]/15">
                    <Clock className="w-4.5 h-4.5 text-[#DCA543]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#8A8373]">Duration</p>
                    <p className="text-sm font-serif font-semibold text-[#403011]">12 Weeks</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════ CURRICULUM TIMELINE BLUEPRINT ═══ */}
      <section className="relative w-full bg-[#F6EBD4] py-20 sm:py-28 border-b border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">

          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20 animate-fade-up">
            <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
              THE PORTFOLIO ENGINE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-serif font-medium text-[#403011] tracking-tight mb-4 leading-tight">
              Curriculum Blueprint
            </h2>
            <p className="text-sm sm:text-base text-[#4A4333]/80 font-serif leading-relaxed">
              A comprehensive 5-stage university-caliber pathway guiding you from fundamental corporate accounting to high-performance financial modeling and institutional-grade valuation.
            </p>
          </div>

          {/* Curriculum Grid Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">

            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.num}
                  className="group relative bg-[#FDFBF7] rounded-[2.5rem] border border-[#4A4333]/10 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#566544]/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  style={{ animationDelay: `${idx * 75}ms` }}
                >

                  <div>
                    {/* Top Meta Details */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#566544]/8 text-[#566544] flex items-center justify-center shadow-sm group-hover:bg-[#566544] group-hover:text-[#FDFBF7] transition-all duration-300">
                        <StepIcon className="w-5.5 h-5.5" strokeWidth={1.8} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#403011] tracking-tight leading-snug mb-3">
                      {step.title}
                    </h3>

                    <p className="text-[14px] sm:text-[15px] text-[#4A4333]/80 font-serif leading-relaxed mb-6">
                      {step.desc}
                    </p>
                  </div>

                  {/* Core Focus Areas */}
                  <div className="mt-auto pt-6 border-t border-[#4A4333]/8">
                    <p className="text-[10px] uppercase tracking-wider text-[#8A8373] font-bold mb-3">
                      Core Focus Areas
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {step.topics.map((t) => (
                        <span
                          key={t}
                          className="text-[10.5px] font-medium bg-[#566544]/6 text-[#566544] px-2.5 py-1 rounded-md border border-[#566544]/10 transition-colors duration-300 group-hover:bg-[#566544]/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Special Card: Milestone 5 Capstone */}
            <div className="group relative bg-[#FDFBF7] rounded-[2.5rem] border-2 border-[#DCA543] p-8 sm:p-10 lg:col-span-2 shadow-md hover:shadow-2xl hover:border-[#566544] transition-all duration-300 overflow-hidden">
              {/* Gold Ribbon Tag */}
              <div className="absolute top-0 right-0 bg-[#DCA543] text-[#FDFBF7] text-[10px] font-black uppercase tracking-widest px-6 py-1.5 rounded-bl-2xl shadow-sm">
                Capstone Phase
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-12 items-center">
                {/* Left Side: Detail */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#DCA543]/10 text-[#DCA543] flex items-center justify-center shadow-inner group-hover:bg-[#566544] group-hover:text-[#FDFBF7] transition-all duration-300">
                      <Sparkles className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#403011] tracking-tight mt-1">
                        Investment Banking &amp; Research
                      </h3>
                    </div>
                  </div>

                  <p className="text-[14.5px] sm:text-[15.5px] text-[#4A4333]/90 font-serif leading-relaxed pr-2">
                    Synthesize your entire corporate finance and modeling journey into a professional equity research package. Under the guidance of expert research mentors, you will formulate a comprehensive buy/sell recommendation, construct an industry-grade investment pitch book, and defend your investment thesis to an expert panel of Wall Street mentors.
                  </p>
                </div>

                {/* Right Side: Key Outcomes Box */}
                <div className="bg-[#566544]/5 rounded-3xl p-6 sm:p-7 border border-[#566544]/10 space-y-5 flex flex-col justify-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#566544]">
                    Milestone Deliverables &amp; Outcomes
                  </p>

                  <div className="space-y-3.5">
                    {[
                      "Dynamic 3-Statement Financial Model & Valuation Workbook",
                      "Institutional-Grade Equity Research Report (Buy/Sell recommendation)",
                      "Polished 15-Slide Investment Banking Pitch Book",
                      "Live Video Presentation & Q&A Defense Recording"
                    ].map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#566544] shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-xs sm:text-sm text-[#4A4333] font-serif leading-tight font-medium">
                          {outcome}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ════ STUDENT DELIVERABLES SECTION ═══ */}
      <section className="relative w-full py-20 sm:py-28 bg-[#F6EBD4] border-b border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
            <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
              FELLOWSHIP MILESTONES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#403011] tracking-tight leading-[1.1] mt-2 mb-6">
              Student Deliverables
            </h2>
            <p className="text-base text-[#4A4333] font-serif leading-relaxed max-w-2xl mx-auto">
              Our fellowships are milestone-driven. Unlike simple certificate courses, you will engineer four premium, verifiable assets to stand out on any top-tier university application:
            </p>
          </div>

          {/* Deliverables — Outlined Cards: 2 + 2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {deliverables.map((del) => {
              const DelIcon = del.icon;
              return (
                <div
                  key={del.tag}
                  className="bg-[#FDFBF7] rounded-2xl border border-[#DCA543]/60 p-6 sm:p-7 flex flex-col"
                >
                  {/* Pill badge: icon + tag */}
                  <div className="mb-5">
                    <span className="inline-flex items-center gap-2 text-[10px] font-bold text-[#8A7340] uppercase tracking-[0.12em] bg-[#FDFBF7] border border-[#DCA543]/60 px-3 py-1.5 rounded-full">
                      <DelIcon className="w-3.5 h-3.5 text-[#DCA543]" strokeWidth={2} />
                      {del.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-[22px] font-serif font-bold text-[#403011] tracking-tight leading-snug mb-3">
                    {del.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] sm:text-[14px] text-[#4A4333]/80 font-serif leading-relaxed">
                    {del.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Featured Student Project  */}
          <div className="mt-14 sm:mt-16 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 sm:gap-10 items-center bg-[#F6EBD4] border border-[#4A4333]/10 rounded-[2rem] p-6 sm:p-8 lg:p-10">

              {/* Left Column: Image */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#4A4333]/10 shadow-md">
                <Image
                  src="/images/skills/Skills_Flagship_2_Tesla_Project.png"
                  alt="Tesla Equity Research Report"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#5C7146] text-[#FDFBF7] text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow-sm">
                  Featured Project
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#DCA543] block">
                  EQUITY RESEARCH &amp; VALUATION
                </span>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#403011] leading-tight">
                  Tesla Equity Research Report
                </h3>

                <p className="text-sm text-[#4A4333] font-serif leading-relaxed">
                  A student-authored, institutional-grade equity research report on Tesla Inc. — including a fully integrated three-statement financial model, dynamic DCF valuation, trading comparables, and a structured buy/sell recommendation — built to professional investment banking standards.
                </p>

                {/* Outcomes list */}
                <div className="space-y-2.5 pt-3 border-t border-[#4A4333]/8">
                  {[
                    "Designed with full DCF, WACC, and multiple-based valuation formulas",
                    "Analyzed macroeconomic auto delivery trends, CAPEX, and margins",
                    "Synthesized into a 15-page research report and institutional pitch deck",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5C7146] shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-xs sm:text-[13px] text-[#4A4333] font-serif leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Small CTA */}
          <div className="mt-14 sm:mt-16 text-center max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-[#4A4333] font-serif leading-relaxed mb-6">
              Students with real finance portfolios stand out dramatically in elite admissions and scholarship applications.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#566544] text-[#FDFBF7] rounded-full font-semibold text-sm tracking-wide shadow-md"
            >
              Apply Now
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
