"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  FileText, 
  Coins, 
  Globe, 
  Presentation, 
  Sparkles, 
  Folder, 
  ArrowRight,
  CheckCircle2,
  Clock
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
    title: "Public Policy Foundations",
    desc: "Delve into the absolute mechanisms of governance. Explore national policy frameworks, public administration standards, stakeholder alignment mapping, and structural UN SDG development indicators.",
    icon: FileText,
    topics: ["Governance Models", "Policy Frameworks", "Public Administration", "UN SDG Alignment", "Stakeholder Mapping"],
  },
  {
    num: "02",
    weeks: "Weeks 3–5",
    title: "Economics & Global Systems",
    desc: "Deconstruct global market mechanics. Analyze micro/macroeconomic indicators, international trade regulations, inflation behaviors, development economics, and policy impacts.",
    icon: Coins,
    topics: ["Macroeconomics", "Global Trade Systems", "Development Economics", "Market Regulation", "Inflation & Pricing"],
  },
  {
    num: "03",
    weeks: "Weeks 6–8",
    title: "International Relations & Diplomacy",
    desc: "Examine the theater of geopolitics. Map international organization networks, diplomatic negotiation frameworks, conflict resolution strategies, and foreign policy core bedrock principles.",
    icon: Globe,
    topics: ["Geopolitical Systems", "Diplomatic Frameworks", "Conflict Resolution", "Global Negotiations", "Foreign Policy Foundations"],
  },
  {
    num: "04",
    weeks: "Weeks 9–10",
    title: "Policy Research & Writing",
    desc: "Build high-caliber written advocacy. Conduct comparative policy analyses, utilize empirical database interpretation, structure policy briefs, and author technical memos.",
    icon: Presentation,
    topics: ["Empirical Research", "Policy Memo Structure", "Evidence-Based Reasoning", "Data Interpretation", "Report Architecture"],
  },
];

const deliverables = [
  {
    tag: "POLICY BRIEF",
    title: "Policy Brief Memo",
    desc: "An evidence-based policy brief or memo structured for direct submission to a think tank, non-profit NGO, or governmental portal.",
    icon: FileText,
  },
  {
    tag: "ECONOMICS",
    title: "Economic Analysis",
    desc: "A data-driven economic report analyzing a real-world market fluctuation, regulatory policy impact, or developmental economics challenge.",
    icon: Coins,
  },
  {
    tag: "RESEARCH",
    title: "Global Research Paper",
    desc: "An academic-style research paper addressing a pressing geopolitical, diplomatic, or international relations challenge of global significance.",
    icon: Folder,
  },
  {
    tag: "DIPLOMACY",
    title: "Ambassador Presentation",
    desc: "A formal policy presentation delivered in a Model UN, diplomatic simulation, or international summit format for evaluation.",
    icon: Presentation,
  },
  {
    tag: "PORTFOLIO",
    title: "Curated Policy Portfolio",
    desc: "A comprehensive digital portfolio showcase assembling all policy briefs, economics research notes, and foreign affairs writing.",
    icon: Folder,
  },
];

export default function PolicyEconomicsDiplomacyPage() {
  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen overflow-x-hidden">
      
      {/* ══════════════════════════════
          HERO — IDENTICAL TO PROGRAMS DEEP DIVE
      ══════════════════════════════ */}
      <section className="relative w-full overflow-hidden border-b border-[#4A4333]/10 pb-20 sm:pb-28 pt-14 sm:pt-20">
        {/* Dot grid */}
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(#566544_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.055] pointer-events-none" />
        {/* Ambient blob */}
        <div aria-hidden className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full bg-[#566544]/6 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
 
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
          
          {/* Breadcrumb / Back Navigation */}
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
            <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6">
  FELLOWSHIP DEEP DIVE
</span>
          </div>
 
          {/* Two-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.88fr] gap-14 lg:gap-20 items-center">
            
            {/* ── Left text column ── */}
            <div className="flex flex-col">
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem] font-serif font-medium text-[#403011] tracking-tight leading-[1.07] mb-4">
                Policy, Economics &amp;
                <br />
                <span className="text-[#566544]">Diplomacy</span>
              </h1>
 
              <p className="font-serif text-xl sm:text-2xl text-[#DCA543] italic mb-8 font-medium">
                Build Global Leadership Skills.
              </p>
 
              <div className="relative pl-6 border-l-2 border-[#DCA543] space-y-5 text-[#4A4333] font-serif text-base sm:text-[17px] leading-relaxed max-w-[560px] mb-10">
                <p>
                  A premium policy and international relations fellowship helping students develop analytical thinking, policy research, diplomacy exposure, and SDG-focused leadership.
                </p>
                <p className="text-[#4A4333]/80 text-sm sm:text-[15px]">
                  Global universities increasingly seek students who understand leadership, policy, economics, and real-world problem solving, signaling exceptional advocacy capabilities to elite admissions committees.
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
              <div aria-hidden className="absolute -bottom-4 -right-4 w-full h-full rounded-[2.5rem] bg-[#566544]/12 border border-[#566544]/15" />
              <div aria-hidden className="absolute -top-3 -left-3 w-20 h-20 rounded-tl-[2rem] border-t-2 border-l-2 border-[#DCA543]" />
 
              <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-[#4A4333]/12 shadow-2xl group">
                <Image 
                  src="/images/skills/Skills_Flagship_4.png" 
                  alt="Policy, Economics & Diplomacy Fellowship" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                  priority 
                />
                <div aria-hidden className="absolute inset-0 bg-[#403011]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
 
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
 
      {/* ══════════════════════════════
          CURRICULUM TIMELINE BLUEPRINT
      ══════════════════════════════ */}
      <section className="relative w-full bg-[#F6EBD4] py-20 sm:py-28 border-b border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
 
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20 animate-fade-up">
            <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6">
  THE PORTFOLIO ENGINE
</span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-serif font-medium text-[#403011] tracking-tight mb-4 leading-tight">
              Curriculum Blueprint
            </h2>
            <p className="text-sm sm:text-base text-[#4A4333]/80 font-serif leading-relaxed">
              A comprehensive 5-stage university-caliber pathway guiding you from public policy foundations and global market economics to foreign affairs writing and executive negotiations.
            </p>
          </div>
 
          {/* Premium Curriculum Grid Canvas */}
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
 
            {/* Special Climax Card: Milestone 5 Capstone */}
            <div className="group relative bg-[#FDFBF7] rounded-[2.5rem] border-2 border-[#DCA543] p-8 sm:p-10 lg:col-span-2 shadow-md hover:shadow-2xl hover:border-[#566544] transition-all duration-300 overflow-hidden">
              {/* Gold Ribbon Tag */}
              <div className="absolute top-0 right-0 bg-[#DCA543] text-[#FDFBF7] text-[10px] font-black uppercase tracking-widest px-6 py-1.5 rounded-bl-2xl shadow-sm">
                Capstone Phase
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-12 items-center">
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#DCA543]/10 text-[#DCA543] flex items-center justify-center shadow-inner group-hover:bg-[#566544] group-hover:text-[#FDFBF7] transition-all duration-300">
                      <Sparkles className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#403011] tracking-tight mt-1">
                        Leadership &amp; Public Communication
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-[14.5px] sm:text-[15.5px] text-[#4A4333]/90 font-serif leading-relaxed pr-2">
                    Synthesize your research, economic modeling, and policy writing into an active leadership showcase. Perfect your public advocacy, debate, and executive negotiation strategies to defend your solutions before a simulated diplomatic council and seasoned mentors.
                  </p>
                </div>
                
                <div className="bg-[#566544]/5 rounded-3xl p-6 sm:p-7 border border-[#566544]/10 space-y-5 flex flex-col justify-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#566544]">
                    Milestone Deliverables &amp; Outcomes
                  </p>
                  
                  <div className="space-y-3.5">
                    {[
                      "Evidence-Based Policy Brief / Memo submitted to portals",
                      "Data-Driven Economic Analysis Challenge Report",
                      "Academic-Style Global Policy Research Paper",
                      "Model UN / Diplomatic Simulation Presentation Video"
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
 
      {/* ══════════════════════════════
          STUDENT DELIVERABLES SECTION
      ══════════════════════════════ */}
      <section className="relative w-full py-20 sm:py-28 bg-[#F6EBD4] border-b border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
            <span className="uppercase tracking-[0.14em] text-[10px] sm:text-[11px] font-bold text-[#566544] bg-[#566544]/10 px-3 py-1.5 rounded-full mb-4 inline-block border border-[#566544]/20">
              FELLOWSHIP MILESTONES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#403011] tracking-tight leading-[1.1] mt-2 mb-6">
              Student Deliverables
            </h2>
            <p className="text-base text-[#4A4333] font-serif leading-relaxed max-w-2xl mx-auto">
              Our fellowships are milestone-driven. Unlike simple certificate courses, you will engineer five premium, verifiable assets to stand out on any top-tier university application:
            </p>
          </div>

          {/* Deliverables — Outlined Cards: 3 + 2 grid */}
          <div className="max-w-6xl mx-auto">
            {/* Row 1: 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-5 sm:mb-6">
              {deliverables.slice(0, 3).map((del) => {
                const DelIcon = del.icon;
                return (
                  <div
                    key={del.tag}
                    className="bg-[#FDFBF7] rounded-2xl border border-[#DCA543]/60 p-6 sm:p-7 flex flex-col"
                  >
                    <div className="mb-5">
                      <span className="inline-flex items-center gap-2 text-[10px] font-bold text-[#8A7340] uppercase tracking-[0.12em] bg-[#FDFBF7] border border-[#DCA543]/60 px-3 py-1.5 rounded-full">
                        <DelIcon className="w-3.5 h-3.5 text-[#DCA543]" strokeWidth={2} />
                        {del.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-[22px] font-serif font-bold text-[#403011] tracking-tight leading-snug mb-3">
                      {del.title}
                    </h3>

                    <p className="text-[13.5px] sm:text-[14px] text-[#4A4333]/80 font-serif leading-relaxed">
                      {del.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Row 2: 2 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto lg:mx-0">
              {deliverables.slice(3).map((del) => {
                const DelIcon = del.icon;
                return (
                  <div
                    key={del.tag}
                    className="bg-[#FDFBF7] rounded-2xl border border-[#DCA543]/60 p-6 sm:p-7 flex flex-col"
                  >
                    <div className="mb-5">
                      <span className="inline-flex items-center gap-2 text-[10px] font-bold text-[#8A7340] uppercase tracking-[0.12em] bg-[#FDFBF7] border border-[#DCA543]/60 px-3 py-1.5 rounded-full">
                        <DelIcon className="w-3.5 h-3.5 text-[#DCA543]" strokeWidth={2} />
                        {del.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-[22px] font-serif font-bold text-[#403011] tracking-tight leading-snug mb-3">
                      {del.title}
                    </h3>

                    <p className="text-[13.5px] sm:text-[14px] text-[#4A4333]/80 font-serif leading-relaxed">
                      {del.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Featured Student Project — Compact Merged Callout */}
          <div className="mt-14 sm:mt-16 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 sm:gap-10 items-center bg-[#F6EBD4] border border-[#4A4333]/10 rounded-[2rem] p-6 sm:p-8 lg:p-10">
              
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#4A4333]/10 shadow-md">
                <Image 
                  src="/images/skills/Skills_Flagship_4_Youth_Policy.png" 
                  alt="Youth Employment Economic Policy Proposal" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute top-3 left-3 bg-[#5C7146] text-[#FDFBF7] text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow-sm">
                  Featured Project
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#DCA543] block">
                  POLICY, ECONOMICS &amp; GOVERNANCE
                </span>
                
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#403011] leading-tight">
                  Youth Employment Economic Policy Proposal
                </h3>
                
                <p className="text-sm text-[#4A4333] font-serif leading-relaxed">
                  A student-authored policy brief proposing evidence-based interventions to reduce youth unemployment — submitted to an active policy think tank and structured using professional policy memo frameworks with quantitative economic data analysis.
                </p>

                <div className="space-y-2.5 pt-3 border-t border-[#4A4333]/8">
                  {[
                    "Developed quantitative economic model utilizing public labor databases",
                    "Structured 10-page policy brief proposing educational development tracks",
                    "Defended the proposal before real UN diplomats and policy leaders",
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
              Students with authentic policy portfolios stand out dramatically in elite admissions and scholarship applications.
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
