"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Compass, 
  ArrowRight, 
  ArrowLeft, 
  User, 
  GraduationCap, 
  School, 
  CheckCircle2, 
  Sparkles,
  Info,
  ChevronDown,
  ChevronUp,
  Award,
  Shield,
  Activity,
  UserCheck,
  BookOpen
} from "lucide-react";
import { 
  adjectivePairsList, 
  singleTraitsList, 
  forcedChoicesList, 
  compileReport 
} from "./engine";

export default function DiagnosticTestPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);
  
  // Onboarding metadata form states
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [university, setUniversity] = useState("");
  
  // Answers maps Record<qKey, value>
  // Starts empty/blank as requested
  const [answers, setAnswers] = useState<Record<string, any>>({});
  
  // Validation state
  const [validationError, setValidationError] = useState("");
  const [highlightedUnanswered, setHighlightedUnanswered] = useState<string[]>([]);

  // FAQ Accordion active indices state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Check if user already has an active report in localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedReport = localStorage.getItem("eq_diagnostic_report");
      if (savedReport) {
        router.replace("/test/report");
      } else {
        setLoading(false);
      }
    }
  }, [router]);

  const toggleFaq = (index: number) => {
    setActiveFaq(prev => (prev === index ? null : index));
  };

  // Helper to check what questions belong to a step
  const getQuestionsForStep = (currentStep: number) => {
    if (currentStep === 1) return adjectivePairsList.slice(0, 8);
    if (currentStep === 2) return adjectivePairsList.slice(8, 16);
    if (currentStep === 3) return adjectivePairsList.slice(16, 24);
    if (currentStep === 4) return singleTraitsList;
    if (currentStep === 5) return forcedChoicesList;
    return [];
  };

  const handleNextStep = () => {
    setValidationError("");
    setHighlightedUnanswered([]);

    if (step === 0) {
      if (!name.trim()) {
        setValidationError("Please enter your name to personalize your admissions report.");
        return;
      }
      if (!status.trim()) {
        setValidationError("Please enter your school year (e.g. Sophomore, Grade 11).");
        return;
      }
      if (!university.trim()) {
        setValidationError("Please enter your target university (e.g. UC Berkeley, Ivy League).");
        return;
      }
      setStep(1);
      return;
    }

    // Psychometric validations - ensure all options are filled
    const stepQuestions = getQuestionsForStep(step);
    const unanswered = stepQuestions
      .map(q => q.id)
      .filter(qId => answers[qId] === undefined || answers[qId] === null);

    if (unanswered.length > 0) {
      setValidationError("Please answer all questions on this page before moving to the next step.");
      setHighlightedUnanswered(unanswered);
      return;
    }

    if (step < 5) {
      setStep(prev => prev + 1);
      // Smooth scroll back to top of the questionnaire card
      const element = document.getElementById("assessment-portal");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      handleSubmitTest();
    }
  };

  const handlePrevStep = () => {
    setValidationError("");
    setHighlightedUnanswered([]);
    if (step > 0) {
      setStep(prev => prev - 1);
      const element = document.getElementById("assessment-portal");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleAnswerSelect = (qId: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [qId]: value
    }));
    // Remove from highlighted unanswered list on select
    setHighlightedUnanswered(prev => prev.filter(id => id !== qId));
  };

  const handleSubmitTest = () => {
    const reportData = compileReport(name, status, university, answers);
    localStorage.setItem("eq_diagnostic_report", JSON.stringify(reportData));
    router.push("/test/report");
  };

  // Calculate completion progress metrics
  const totalQuestionsCount = adjectivePairsList.length + singleTraitsList.length + forcedChoicesList.length;
  const answeredCount = Object.keys(answers).length;
  const percentComplete = Math.round((answeredCount / totalQuestionsCount) * 100) || 0;

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

  // FAQ Data List
  const faqData = [
    {
      q: "What does the DISC assessment measure?",
      a: "The DISC assessment is a measure of interpersonal behavior that is often used in workplace and elite academic settings. It classifies how we interact in terms of four personality styles: Drive, Influence, Support, and Clarity.\n\nBased on the theories of psychologist William Moulton Marston, the DISC assessment is a simple yet powerful way to unlock your strengths and help your team work better together."
    },
    {
      q: "What are the four DISC personality types?",
      a: "The DISC personality model describes four types: D for Drive, I for Influence, S for Support, and C for Clarity. Each type describes a particular approach to getting work done and contributing to a team.\n\n• Drive: taking charge and making key decisions\n• Influence: engaging others to work together\n• Support: assisting others to achieve group goals\n• Clarity: working independently to produce correct results\n\nEach of the four DISC personality types is equally valuable, and each has its own strengths and weaknesses. Discovering your own type can help you to better understand how to bring your strongest talents to your work, while minimizing your blind spots."
    },
    {
      q: "What are DISC subtypes?",
      a: "DISC subtypes represent a blend of two styles. Each of us has a primary DISC type, but some of us also incorporate quite a bit of an adjacent style into our behavior at work. These styles are referred to as DISC subtypes or hybrid types.\n\nFor example, a person who is primarily a Drive type, but who also has a high level of Influence behavior, would be labeled as a D/i type (DISC + Influence). When we include the subtypes with the four primary DISC types, we are able to accurately describe people whose behavior is primarily driven by one DISC style, as well as people whose behavior is typically a mix of two styles.\n\nThe eight DISC subtypes are:\n• D/i (Drive + Influence)\n• D/c (Drive + Clarity)\n• I/d (Influence + Drive)\n• I/s (Influence + Support)\n• S/i (Support + Influence)\n• S/c (Support + Clarity)\n• C/s (Clarity + Support)\n• C/d (Clarity + Drive)"
    },
    {
      q: "What will I learn from my DISC report?",
      a: "Your DISC profile will show which of the four DISC types fits you best, as well as your scores for the other three types. It will describe how the DISC model can be used to better understand your strengths on a team, as well as the way you like to work.\n\nWhen completing the EpicQuest DISC assessment, you will first see a brief, free report showing a basic overview of your DISC personality type. Then, you have the option of unlocking your full report for a small fee."
    },
    {
      q: "Can I have my employees, team or group take the DISC test?",
      a: "Absolutely. Our EpicQuest @Work platform is designed to make it easy to give the DISC assessment to your team or group. See discounted group pricing and learn how to quickly and easily set up testing for your group on the Testing for Business page."
    },
    {
      q: "How long is this DISC assessment?",
      a: "The test consists of 38 questions and takes about 5 minutes to complete."
    },
    {
      q: "Is this DISC assessment scientifically validated?",
      a: "The DISC has been extensively researched and validated using a large global sample. The assessment has been shown to have excellent reliability according to standard psychometric measures, as well as real-world correlations with key workplace outcomes (see DISC Technical Documentation)."
    },
    {
      q: "Is the DISC personality test really free?",
      a: "You do not need to purchase or register to take this test and view an overview of your results. If you would like, you can purchase a more comprehensive full report for a small fee."
    },
    {
      q: "Do I need to complete this assessment all at once?",
      a: "If you’ve created an account and are logged in when you take the test, your responses will be saved as you go through the test. If you do not log in to an EpicQuest account before starting the test, your progress will not be saved and you will need to complete the test all at once."
    },
    {
      q: "Is the DISC personality test appropriate for children?",
      a: "None of our tests are appropriate for children under the age of 14. Some of our tests may have mature content, and anyone younger than 18 should only take the test with parental guidance."
    },
  ];

  return (
    
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen text-[#4A4333] font-sans selection:bg-[#DCA543] selection:text-[#1F2C16]">
      
      {/* ══════════════════════════════
          HERO SECTION — Consistent with Team Page
      ══════════════════════════════ */}
      <section className="relative w-full border-b border-[#4A4333]/10 py-16 sm:py-24">
        {/* Ambient blobs matching team style - Wrapped in absolute overflow container */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#566544]/5 blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#DCA543]/8 blur-3xl translate-y-1/2 -translate-x-1/4" />
          {/* Dot grid matching team style */}
          <div className="absolute inset-0 bg-[radial-gradient(#566544_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.06]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: PAGINATED QUESTIONNAIRE PANEL */}
            <div id="assessment-portal" className="lg:col-span-7 w-full flex flex-col gap-6 animate-fade-up">
              
              {/* Header Pill */}
              <div className="self-start">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#566544]/12 text-[#566544] text-[11px] font-bold uppercase tracking-[0.12em] border border-[#566544]/20 select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#566544] inline-block animate-pulse" />
                  EpicQuest Leadership Diagnostic
                </span>
              </div>

              {/* Step Header */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium text-[#403011] tracking-tight leading-[1.1]">
                  Establish Your{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">Diagnostic Profile</span>
                    <svg className="absolute -bottom-1.5 left-0 w-full" height="8" viewBox="0 0 120 8" preserveAspectRatio="none" fill="none">
                      <path d="M2 6 Q30 2 60 5 Q90 8 118 3" stroke="#DCA543" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-[#4A4333] font-serif leading-relaxed mt-4 pl-4 border-l-2 border-[#DCA543]">
                  Map your default behavioral vectors to design highly competitive Ivy League academic research and patent portfolio alignments.
                </p>
              </div>

              {/* STEP PROGRESS BAR */}
              <div className="w-full bg-[#FDFBF7] rounded-2xl p-4 border border-[#4A4333]/8 shadow-sm flex items-center justify-between text-xs select-none mt-2">
                <div className="flex items-center gap-2">
                  <span className={`h-6 w-6 rounded-full flex items-center justify-center font-bold font-sans transition-colors ${
                    step >= 0 ? "bg-[#566544] text-white" : "bg-[#4A4333]/10 text-[#4A4333]/50"
                  }`}>
                    1
                  </span>
                  <span className={`font-semibold font-serif ${step === 0 ? "text-[#403011]" : "text-[#4A4333]/50"}`}>
                    Candidate Info
                  </span>
                </div>
                <div className="h-[1px] bg-[#4A4333]/10 flex-1 mx-4 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className={`h-6 w-6 rounded-full flex items-center justify-center font-bold font-sans transition-colors ${
                    step >= 1 ? "bg-[#566544] text-white" : "bg-[#4A4333]/10 text-[#4A4333]/50"
                  }`}>
                    2
                  </span>
                  <span className={`font-semibold font-serif ${step >= 1 ? "text-[#403011]" : "text-[#4A4333]/50"}`}>
                    Psychometric Matrix ({percentComplete}%)
                  </span>
                </div>
              </div>

              {/* INLINE VALIDATION ERROR */}
              {validationError && (
                <div className="p-4 rounded-2xl bg-[#D4856A]/10 border border-[#D4856A]/20 text-[#D4856A] text-xs sm:text-sm font-medium flex items-start gap-2.5 animate-pulse shadow-sm">
                  <Info className="w-4.5 h-4.5 shrink-0 mt-0.5" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* ══════════════════════════════
                  STEP 0: CANDIDATE INFO FORM
              ══════════════════════════════ */}
              {step === 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#4A4333]/8 shadow-md relative overflow-hidden transition-all duration-300">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#566544] to-[#DCA543]" />
                  <h2 className="text-xl sm:text-2xl font-serif font-medium text-[#403011] mb-6 flex items-center gap-2.5">
                    <Compass className="w-5 h-5 text-[#DCA543]" />
                    Candidate Registration
                  </h2>
                  <p className="text-xs sm:text-sm text-[#4A4333]/85 font-serif leading-relaxed mb-6 border-b border-[#4A4333]/8 pb-4">
                    Please enter your profile details. We interpolate these values dynamically across your 30+ page custom dossier, tactical research directions, and admissions priority roadmaps.
                  </p>

                  <div className="space-y-5">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="student-name" className="text-[10px] font-extrabold uppercase tracking-wider text-[#4A4333]/70">
                        Candidate Full Name <span className="text-[#D4856A]">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4333]/45" />
                        <input
                          id="student-name"
                          type="text"
                          placeholder="e.g. Hetvi Bhanushali"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-[#FDFBF7] border border-[#4A4333]/15 rounded-xl py-3 pl-11 pr-4 text-xs sm:text-sm focus:outline-none focus:border-[#566544] focus:ring-1 focus:ring-[#566544] transition-all font-serif"
                        />
                      </div>
                    </div>

                    {/* Grade Status */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="student-status" className="text-[10px] font-extrabold uppercase tracking-wider text-[#4A4333]/70">
                        Academic Grade / Class Status <span className="text-[#D4856A]">*</span>
                      </label>
                      <div className="relative">
                        <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4333]/45" />
                        <input
                          id="student-status"
                          type="text"
                          placeholder="e.g. Sophomore Year Student, Grade 11"
                          value={status}
                          onChange={(e) => setStatus(e.target.value)}
                          className="w-full bg-[#FDFBF7] border border-[#4A4333]/15 rounded-xl py-3 pl-11 pr-4 text-xs sm:text-sm focus:outline-none focus:border-[#566544] focus:ring-1 focus:ring-[#566544] transition-all font-serif"
                        />
                      </div>
                    </div>

                    {/* Target Aspirations */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="target-university" className="text-[10px] font-extrabold uppercase tracking-wider text-[#4A4333]/70">
                        Target Universities / Admissions Focus <span className="text-[#D4856A]">*</span>
                      </label>
                      <div className="relative">
                        <School className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A4333]/45" />
                        <input
                          id="target-university"
                          type="text"
                          placeholder="e.g. UC Santa Barbara (or Ivy League)"
                          value={university}
                          onChange={(e) => setUniversity(e.target.value)}
                          className="w-full bg-[#FDFBF7] border border-[#4A4333]/15 rounded-xl py-3 pl-11 pr-4 text-xs sm:text-sm focus:outline-none focus:border-[#566544] focus:ring-1 focus:ring-[#566544] transition-all font-serif"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#4A4333]/8 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#566544] hover:bg-[#455236] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
                    >
                      Start Assessment
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* ══════════════════════════════
                  STEP 1, 2, 3: BIPOLAR ADJECTIVE PAIRS
              ══════════════════════════════ */}
              {(step === 1 || step === 2 || step === 3) && (
                <div className="flex flex-col gap-5">
                  <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#4A4333]/8 shadow-md">
                    <div className="flex items-center justify-between border-b border-[#4A4333]/8 pb-4 mb-4 select-none">
                      <span className="text-xs text-[#566544] font-extrabold uppercase tracking-wider font-sans">
                        Adjective Pair Block {step} of 3
                      </span>
                      <span className="text-[10px] text-[#4A4333]/60 italic font-serif">
                        Select a point leaning toward your natural default
                      </span>
                    </div>

                    {/* Rating Scale Labels */}
                    <div className="flex items-center justify-between px-2 sm:px-6 pb-2 select-none gap-2 sm:gap-4">
                      <span className="flex-1 min-w-0"></span>
                      <div className="flex items-center justify-between w-[160px] sm:w-[210px] shrink-0">
                        <div className="w-6 sm:w-7 flex justify-center text-[7px] sm:text-[9px] font-extrabold uppercase tracking-widest sm:tracking-wider text-[#4A4333]/45 whitespace-nowrap">Strong</div>
                        <div className="hidden sm:flex w-6 sm:w-7 justify-center text-[7px] sm:text-[9px] font-extrabold uppercase tracking-widest sm:tracking-wider text-[#4A4333]/45 whitespace-nowrap">Lean</div>
                        <div className="w-6 sm:w-7 flex justify-center text-[7px] sm:text-[9px] font-extrabold uppercase tracking-widest sm:tracking-wider text-[#4A4333]/45 whitespace-nowrap">Neutral</div>
                        <div className="hidden sm:flex w-6 sm:w-7 justify-center text-[7px] sm:text-[9px] font-extrabold uppercase tracking-widest sm:tracking-wider text-[#4A4333]/45 whitespace-nowrap">Lean</div>
                        <div className="w-6 sm:w-7 flex justify-center text-[7px] sm:text-[9px] font-extrabold uppercase tracking-widest sm:tracking-wider text-[#4A4333]/45 whitespace-nowrap">Strong</div>
                      </div>
                      <span className="flex-1 min-w-0"></span>
                    </div>

                    <div className="divide-y divide-[#4A4333]/8">
                      {adjectivePairsList.slice((step - 1) * 8, step * 8).map((q) => {
                        const score = answers[q.id];
                        const isHighlighted = highlightedUnanswered.includes(q.id);
                        return (
                          <div 
                            key={q.id}
                            className={`flex items-center justify-between py-5.5 px-2 sm:px-6 gap-2 sm:gap-4 rounded-xl transition-all ${
                              isHighlighted 
                                ? "bg-[#D4856A]/5 border border-dashed border-[#D4856A]/25" 
                                : "hover:bg-[#FDFBF7]/40"
                            }`}
                          >
                            {/* Left Bipolar term */}
                            <span className="flex-1 min-w-0 text-right font-serif font-bold text-[10px] sm:text-sm text-[#403011] select-none leading-tight break-words">
                              {q.left}
                            </span>
                            
                            {/* Rating Circles */}
                            <div className="flex items-center justify-between w-[160px] sm:w-[210px] shrink-0 select-none">
                              {[1, 2, 3, 4, 5].map((val) => {
                                const isSelected = score === val;
                                return (
                                  <button
                                    key={val}
                                    type="button"
                                    onClick={() => handleAnswerSelect(q.id, val)}
                                    className="relative focus:outline-none cursor-pointer"
                                    aria-label={`Rate ${q.left} to ${q.right} as ${val}`}
                                  >
                                    <div className={`h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 flex items-center justify-center transition-all ${
                                      isSelected 
                                        ? "bg-[#566544] border-[#566544] scale-110 shadow" 
                                        : "border-[#4A4333]/20 bg-[#FDFBF7] hover:border-[#DCA543]"
                                    }`}>
                                      {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-white animate-fade-in" />}
                                    </div>
                                  </button>
                                );
                              })}
                            </div>

                            {/* Right Bipolar term */}
                            <span className="flex-1 min-w-0 text-left font-serif font-bold text-[10px] sm:text-sm text-[#403011] select-none leading-tight break-words">
                              {q.right}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Navigation Actions */}
                  <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#4A4333]/8 shadow-sm flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#FDFBF7] hover:bg-[#F6EBD4]/40 border border-[#4A4333]/15 text-[#4A4333] rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Back
                    </button>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#566544] hover:bg-[#455236] text-white rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer"
                    >
                      Next
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* ══════════════════════════════
                  STEP 4: SINGLE BEHAVIORAL TRAITS
              ══════════════════════════════ */}
              {step === 4 && (
                <div className="flex flex-col gap-5">
                  <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#4A4333]/8 shadow-md">
                    <div className="flex items-center justify-between border-b border-[#4A4333]/8 pb-4 mb-5 select-none">
                      <span className="text-xs text-[#566544] font-extrabold uppercase tracking-wider font-sans">
                        Step 4 of 5 — Traits Matrix
                      </span>
                      <span className="text-[10px] text-[#4A4333]/60 italic font-serif">
                        Identify how well each descriptor applies to your behaviors
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {singleTraitsList.map((q) => {
                        const score = answers[q.id];
                        const isHighlighted = highlightedUnanswered.includes(q.id);
                        return (
                          <div 
                            key={q.id}
                            className={`p-4 bg-[#FDFBF7]/60 rounded-2xl border transition-all ${
                              isHighlighted 
                                ? "bg-[#D4856A]/5 border-dashed border-[#D4856A]/25" 
                                : "border-[#4A4333]/8 hover:border-[#DCA543]/20"
                            }`}
                          >
                            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#403011] text-center select-none mb-3">
                              {q.text}
                            </h3>
                            
                            <div className="flex flex-col gap-1.5">
                              <div className="flex justify-between items-center text-[9px] font-extrabold uppercase tracking-wider text-[#4A4333]/45 px-1 select-none">
                                <span>Not Like Me</span>
                                <span>Strongly Like Me</span>
                              </div>
                              
                              <div className="flex items-center justify-between bg-white px-2 py-2 rounded-xl border border-[#4A4333]/6 w-full select-none">
                                {[1, 2, 3, 4, 5].map((val) => {
                                  const isSelected = score === val;
                                  return (
                                    <button
                                      key={val}
                                      type="button"
                                      onClick={() => handleAnswerSelect(q.id, val)}
                                      className="focus:outline-none cursor-pointer"
                                      aria-label={`Rate trait ${q.text} as ${val}`}
                                    >
                                      <div className={`h-6 w-6 rounded-full border flex items-center justify-center transition-all ${
                                        isSelected 
                                          ? "bg-[#566544]/12 border-[#566544] scale-105 shadow-inner" 
                                          : "border-[#4A4333]/15 bg-white hover:border-[#DCA543]"
                                      }`}>
                                        {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-[#566544]" />}
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Navigation Actions */}
                  <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#4A4333]/8 shadow-sm flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#FDFBF7] hover:bg-[#F6EBD4]/40 border border-[#4A4333]/15 text-[#4A4333] rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Back
                    </button>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#566544] hover:bg-[#455236] text-white rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer"
                    >
                      Next
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* ══════════════════════════════
                  STEP 5: BINARY FORCED CHOICES
              ══════════════════════════════ */}
              {step === 5 && (
                <div className="flex flex-col gap-5">
                  <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#4A4333]/8 shadow-md">
                    <div className="flex items-center justify-between border-b border-[#4A4333]/8 pb-4 mb-5 select-none">
                      <span className="text-xs text-[#566544] font-extrabold uppercase tracking-wider font-sans">
                        Step 5 of 5 — Scenario Alignment
                      </span>
                      <span className="text-[10px] text-[#4A4333]/60 italic font-serif">
                        Choose the scenario statement that matches you closest
                      </span>
                    </div>

                    <div className="space-y-4">
                      {forcedChoicesList.map((q) => {
                        const opt = answers[q.id];
                        const isHighlighted = highlightedUnanswered.includes(q.id);
                        return (
                          <div 
                            key={q.id}
                            className={`p-4 bg-[#FDFBF7]/40 rounded-2xl border transition-all ${
                              isHighlighted 
                                ? "bg-[#D4856A]/5 border-dashed border-[#D4856A]/25" 
                                : "border-[#4A4333]/8"
                            }`}
                          >
                            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#403011] leading-relaxed border-b border-[#4A4333]/5 pb-2 mb-3">
                              {q.text}
                            </h3>
                            
                            <div className="flex flex-col gap-2.5 select-none">
                              {/* Option 1 */}
                              <button
                                type="button"
                                onClick={() => handleAnswerSelect(q.id, "opt1")}
                                className={`p-3 rounded-xl border text-left text-[11px] sm:text-xs font-serif leading-relaxed transition-all flex items-start gap-3 cursor-pointer hover:bg-white/60 ${
                                  opt === "opt1"
                                    ? "bg-[#566544]/5 border-[#566544] text-[#403011] font-bold"
                                    : "bg-white border-[#4A4333]/10 text-[#4A4333]/80"
                                }`}
                              >
                                <div className={`h-4.5 w-4.5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                  opt === "opt1" ? "bg-[#566544] border-[#566544] text-white" : "border-[#4A4333]/25 bg-white"
                                }`}>
                                  {opt === "opt1" && (
                                    <svg className="w-3 h-3 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                  )}
                                </div>
                                <span>{q.opt1}</span>
                              </button>

                              {/* Option 2 */}
                              <button
                                type="button"
                                onClick={() => handleAnswerSelect(q.id, "opt2")}
                                className={`p-3 rounded-xl border text-left text-[11px] sm:text-xs font-serif leading-relaxed transition-all flex items-start gap-3 cursor-pointer hover:bg-white/60 ${
                                  opt === "opt2"
                                    ? "bg-[#566544]/5 border-[#566544] text-[#403011] font-bold"
                                    : "bg-white border-[#4A4333]/10 text-[#4A4333]/80"
                                }`}
                              >
                                <div className={`h-4.5 w-4.5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                  opt === "opt2" ? "bg-[#566544] border-[#566544] text-white" : "border-[#4A4333]/25 bg-white"
                                }`}>
                                  {opt === "opt2" && (
                                    <svg className="w-3 h-3 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                  )}
                                </div>
                                <span>{q.opt2}</span>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Navigation Actions */}
                  <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#4A4333]/8 shadow-sm flex items-center justify-between gap-4 mt-2">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#FDFBF7] hover:bg-[#F6EBD4]/40 border border-[#4A4333]/15 text-[#4A4333] rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Back
                    </button>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#566544] hover:bg-[#455236] text-white rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer"
                    >
                      Get Results
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: HIGH-END PSYCHOMETRIC VECTOR ACCENT GRAPHIC */}
            <div className="lg:col-span-5 w-full flex flex-col gap-6 lg:sticky lg:top-[88px] animate-fade-up delay-150">
              
              <div className="bg-[#FDFBF7] border border-[#4A4333]/8 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm">
                <div className="border-b border-[#4A4333]/8 pb-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DCA543] bg-[#DCA543]/10 px-2.5 py-1 rounded">
                    Visual Vector Grid
                  </span>
                  <h2 className="text-xl font-serif font-medium text-[#403011] mt-2">
                    The Gunaity Epicometer™
                  </h2>
                </div>

                {/* Luxury Interactive raw SVG Coordinates Grid */}
                <div className="relative aspect-square bg-[#FBF9F2] rounded-2xl border border-[#4A4333]/8 overflow-hidden p-6 select-none shadow-inner flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Concentric grid rings */}
                    <circle cx="150" cy="150" r="120" stroke="#4A4333" strokeWidth="0.5" strokeOpacity="0.1" />
                    <circle cx="150" cy="150" r="80" stroke="#4A4333" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="3 3" />

                    {/* Four Quadrant Sectors */}
                    {/* D - Top Left */}
                    <path d="M 150 150 L 150 50 A 100 100 0 0 0 50 150 Z" fill="#5C7146" fillOpacity="0.85" stroke="#FBF9F2" strokeWidth="4" />
                    {/* I - Top Right */}
                    <path d="M 150 150 L 250 150 A 100 100 0 0 0 150 50 Z" fill="#DCA543" fillOpacity="0.85" stroke="#FBF9F2" strokeWidth="4" />
                    {/* S - Bottom Right */}
                    <path d="M 150 150 L 150 250 A 100 100 0 0 0 250 150 Z" fill="#D4856A" fillOpacity="0.85" stroke="#FBF9F2" strokeWidth="4" />
                    {/* C - Bottom Left */}
                    <path d="M 150 150 L 50 150 A 100 100 0 0 0 150 250 Z" fill="#5D7A8C" fillOpacity="0.85" stroke="#FBF9F2" strokeWidth="4" />

                    {/* Quadrant Letters */}
                    <text x="105" y="110" fill="#FFFFFF" fontSize="22" fontFamily="Georgia, serif" fontWeight="bold" textAnchor="middle">D</text>
                    <text x="195" y="110" fill="#FFFFFF" fontSize="22" fontFamily="Georgia, serif" fontWeight="bold" textAnchor="middle">I</text>
                    <text x="195" y="200" fill="#FFFFFF" fontSize="22" fontFamily="Georgia, serif" fontWeight="bold" textAnchor="middle">S</text>
                    <text x="105" y="200" fill="#FFFFFF" fontSize="22" fontFamily="Georgia, serif" fontWeight="bold" textAnchor="middle">C</text>

                    {/* Outer Quadrant Labels */}
                    <text x="80" y="44" fill="#5C7146" fontSize="9" fontFamily="Georgia, serif" fontWeight="bold" textAnchor="end">DRIVE</text>
                    <text x="220" y="44" fill="#DCA543" fontSize="9" fontFamily="Georgia, serif" fontWeight="bold" textAnchor="start">INFLUENCE</text>
                    <text x="220" y="262" fill="#D4856A" fontSize="9" fontFamily="Georgia, serif" fontWeight="bold" textAnchor="start">SUPPORT</text>
                    <text x="80" y="262" fill="#5D7A8C" fontSize="9" fontFamily="Georgia, serif" fontWeight="bold" textAnchor="end">CLARITY</text>

                    {/* Axes lines with arrows */}
                    {/* Vertical Axis (Active - Receptive) */}
                    <line x1="150" y1="20" x2="150" y2="280" stroke="#4A4333" strokeWidth="1.5" strokeOpacity="0.4" />
                    <polygon points="150,15 146,23 154,23" fill="#4A4333" fillOpacity="0.5" />
                    <polygon points="150,285 146,277 154,277" fill="#4A4333" fillOpacity="0.5" />

                    {/* Horizontal Axis (Agreeable - Skeptical) */}
                    <line x1="20" y1="150" x2="280" y2="150" stroke="#4A4333" strokeWidth="1.5" strokeOpacity="0.4" />
                    <polygon points="285,150 277,146 277,154" fill="#4A4333" fillOpacity="0.5" />
                    <polygon points="15,150 23,146 23,154" fill="#4A4333" fillOpacity="0.5" />

                    {/* Axis labels */}
                    <text x="150" y="10" fill="#4A4333" fontSize="8" fontWeight="bold" letterSpacing="1" textAnchor="middle">ACTIVE</text>
                    <text x="150" y="297" fill="#4A4333" fontSize="8" fontWeight="bold" letterSpacing="1" textAnchor="middle">RECEPTIVE</text>
                    <text x="295" y="153" fill="#4A4333" fontSize="8" fontWeight="bold" letterSpacing="1" textAnchor="start">AGREEABLE</text>
                    <text x="5" y="153" fill="#4A4333" fontSize="8" fontWeight="bold" letterSpacing="1" textAnchor="end">SKEPTICAL</text>

                    {/* Central pulse dot */}
                    <circle cx="150" cy="150" r="4" fill="#DCA543" className="animate-pulse" />
                  </svg>
                  
                  {/* Glowing dynamic radar rings absolute overlay */}
                  <span className="absolute h-10 w-10 bg-[#DCA543]/5 rounded-full animate-ping pointer-events-none" />
                </div>

                
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 2: THE DISC PERSONALITY TYPES
      ══════════════════════════════ */}
      <section className="w-full py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12 animate-fade-up">
            <span className="uppercase tracking-[0.14em] text-[11px] font-bold text-[#566544] bg-[#566544]/10 px-3.5 py-1.5 rounded-full inline-block border border-[#566544]/15 select-none">
              Dossier Foundations
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#403011] mt-4 leading-tight">
              The DISC Personality Types
            </h2>
            <p className="text-sm sm:text-base text-[#4A4333] font-serif leading-relaxed mt-3 pl-4 border-l border-[#DCA543]">
              DISC results map where individuals lie across two core axes of behavior: **Active vs. Receptive** and **Skeptical vs. Agreeable**. Together, these dimensions structure a quadrant grid where each quadrant models one of the four essential DISC styles.
            </p>
          </div>

          {/* 2x2 Bento-Grid style display of the Four Quadrants */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 animate-fade-up">
            
            {/* DRIVE */}
            <div className="bg-white p-6.5 sm:p-8 rounded-3xl border border-[#4A4333]/8 shadow-sm hover:shadow-md transition-all flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-16 w-16 bg-[#566544]/3 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-xl bg-[#566544]/10 text-[#566544] font-bold text-center flex items-center justify-center font-serif">D</span>
                <h3 className="font-serif font-bold text-lg text-[#403011]">Drive (Assertive)</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4A4333] font-serif leading-relaxed">
                Drive relates to control, power, and assertiveness. People high in Drive like to get things done and are results-oriented. They tend to be ambitious, competitive, and persuasive. If you have a lot of Drive, you're likely to enjoy taking on new challenges, taking command, and driving executions aggressively.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-[10px] font-bold text-[#566544] bg-[#566544]/5 px-2.5 py-1 rounded">Decisive</span>
                <span className="text-[10px] font-bold text-[#566544] bg-[#566544]/5 px-2.5 py-1 rounded">Results-Oriented</span>
                <span className="text-[10px] font-bold text-[#566544] bg-[#566544]/5 px-2.5 py-1 rounded">High Agency</span>
              </div>
            </div>

            {/* INFLUENCE */}
            <div className="bg-white p-6.5 sm:p-8 rounded-3xl border border-[#4A4333]/8 shadow-sm hover:shadow-md transition-all flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-16 w-16 bg-[#DCA543]/3 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-xl bg-[#DCA543]/10 text-[#DCA543] font-bold text-center flex items-center justify-center font-serif">I</span>
                <h3 className="font-serif font-bold text-lg text-[#403011]">Influence (Hustler)</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4A4333] font-serif leading-relaxed">
                Influence relates to people, social interaction, and communication. People high in Influence are interested in relationships, building networks, and motivational persuasion. If you have a lot of Influence, you're likely to enjoy social situations, presenting ideas, collaborative projects, and inspiring others.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-[10px] font-bold text-[#DCA543] bg-[#DCA543]/5 px-2.5 py-1 rounded">Charismatic</span>
                <span className="text-[10px] font-bold text-[#DCA543] bg-[#DCA543]/5 px-2.5 py-1 rounded">Outgoing</span>
                <span className="text-[10px] font-bold text-[#DCA543] bg-[#DCA543]/5 px-2.5 py-1 rounded">Persuasive</span>
              </div>
            </div>

            {/* SUPPORT */}
            <div className="bg-white p-6.5 sm:p-8 rounded-3xl border border-[#4A4333]/8 shadow-sm hover:shadow-md transition-all flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-16 w-16 bg-[#D4856A]/3 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-xl bg-[#D4856A]/10 text-[#D4856A] font-bold text-center flex items-center justify-center font-serif">S</span>
                <h3 className="font-serif font-bold text-lg text-[#403011]">Support (Helper)</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4A4333] font-serif leading-relaxed">
                Support relates to patience, thoughtfulness, and harmony. People high in Support are warm, patient, accepting of others, and value organizational structure and steady timelines. If you have a lot of Support, you're likely to enjoy working hard behind the scenes, offering coaching, and being a dedicated team player.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-[10px] font-bold text-[#D4856A] bg-[#D4856A]/5 px-2.5 py-1 rounded">Empathetic</span>
                <span className="text-[10px] font-bold text-[#D4856A] bg-[#D4856A]/5 px-2.5 py-1 rounded">Patient</span>
                <span className="text-[10px] font-bold text-[#D4856A] bg-[#D4856A]/5 px-2.5 py-1 rounded">Harmonious</span>
              </div>
            </div>

            {/* CLARITY */}
            <div className="bg-white p-6.5 sm:p-8 rounded-3xl border border-[#4A4333]/8 shadow-sm hover:shadow-md transition-all flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-16 w-16 bg-[#5D7A8C]/3 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-xl bg-[#5D7A8C]/10 text-[#5D7A8C] font-bold text-center flex items-center justify-center font-serif">C</span>
                <h3 className="font-serif font-bold text-lg text-[#403011]">Clarity (Intellectual)</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#4A4333] font-serif leading-relaxed">
                Clarity relates to structure, objective logic, and correctness. People high in Clarity are detail-oriented, analytical, and highly cautious when making decisions and taking action. If you have a lot of Clarity, you're likely to enjoy working intentionally to solve highly challenging intellectual puzzles.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-[10px] font-bold text-[#5D7A8C] bg-[#5D7A8C]/5 px-2.5 py-1 rounded">Analytical</span>
                <span className="text-[10px] font-bold text-[#5D7A8C] bg-[#5D7A8C]/5 px-2.5 py-1 rounded">Precise</span>
                <span className="text-[10px] font-bold text-[#5D7A8C] bg-[#5D7A8C]/5 px-2.5 py-1 rounded">Rigor-Focused</span>
              </div>
            </div>

          </div>

          {/* Subtypes & Combinations Spotlight */}
          <div className="mt-10 bg-[#F6EBD4]/50 border border-[#4A4333]/8 rounded-3xl p-6.5 sm:p-8 animate-fade-up">
            <h3 className="font-serif font-bold text-lg text-[#403011] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#DCA543]" />
              The 12 Style Combinations &amp; Subtypes
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4333] font-serif leading-relaxed mb-4">
              Many people do not fit perfectly into just one single DISC style. For most, one or two predominant styles stand out. This gives us **12 common combinations**: four pure types (D, I, S, and C) and eight combination types which are notated with codes like Di, Cd, and Is, where the second lowercase letter indicates an additional style that exerts secondary influence over an individual's behavior. 
            </p>
            <div className="flex flex-wrap gap-2">
              {["D (Pure Drive)", "I (Pure Influence)", "S (Pure Support)", "C (Pure Clarity)", "Di (Drive + Influence)", "Dc (Drive + Clarity)", "Id (Influence + Drive)", "Is (Influence + Support)", "Si (Support + Influence)", "Sc (Support + Clarity)", "Cs (Clarity + Support)", "Cd (Clarity + Drive)"].map(sub => (
                <span key={sub} className="px-3.5 py-1.5 bg-white border border-[#4A4333]/8 text-[11px] font-serif font-bold text-[#4A4333]/85 rounded-lg shadow-sm">
                  {sub}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 3: VALIDITY, RELIABILITY AND BIOGRAPHY
      ══════════════════════════════ */}
      <section className="w-full py-16 sm:py-24 bg-[#F6EBD4]/30 border-b border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Column 1: Validity and Trust */}
            <div className="flex flex-col gap-5 animate-fade-up">
              <span className="uppercase tracking-[0.14em] text-[10px] font-bold text-[#566544] bg-[#566544]/10 px-3 py-1 rounded w-fit select-none">
                Scientific Standing
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#403011] mt-1 leading-tight">
                Is the DISC a valid, reliable personality test?
              </h2>
              <p className="text-xs sm:text-sm text-[#4A4333] font-serif leading-relaxed">
                DISC has been around for a century, is used by almost three-quarters of Fortune 500 companies, and is the go-to tool of global organizations for team building, leadership diagnostics, communication training, and milestone management. 
              </p>
              <p className="text-xs sm:text-sm text-[#4A4333] font-serif leading-relaxed">
                Various studies of DISC assessment validity and reliability have shown it is on par with other industry-standard psychometric assessments, indicating that it can be highly effectively used in professional, executive, and competitive admissions settings.
              </p>
              <div className="p-5 bg-white rounded-2xl border border-[#4A4333]/6 flex items-start gap-3.5 mt-2">
                <Shield className="w-5 h-5 text-[#566544] shrink-0 mt-0.5" />
                <p className="text-xs text-[#4A4333]/85 font-serif leading-relaxed">
                  While many companies have developed tests based on the DISC theory, standards may vary wildly. EpicQuest's DISC assessment is thoroughly researched, scientifically validated, and developed under rigorous psychometrics standards.
                </p>
              </div>
            </div>

            {/* Column 2: History & Origins */}
            <div className="flex flex-col gap-5 animate-fade-up delay-100">
              <span className="uppercase tracking-[0.14em] text-[10px] font-bold text-[#DCA543] bg-[#DCA543]/10 px-3 py-1 rounded w-fit select-none">
                Origins &amp; History
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#403011] mt-1 leading-tight">
                The Legacy of William Moulton Marston
              </h2>
              <p className="text-xs sm:text-sm text-[#4A4333] font-serif leading-relaxed">
                The father of DISC was American psychologist **William Moulton Marston**, who earned his doctorate from Harvard and is famously credited with inventing the early systolic blood pressure polygraph test (lie detector) as well as creating the iconic character Wonder Woman.
              </p>
              <p className="text-xs sm:text-sm text-[#4A4333] font-serif leading-relaxed">
                In the late 1920s, Marston published his landmark work, *Emotions of Normal People*, in which he used physiological physiology and psychology to develop the core behavior quadrant matrix model that we call DISC.
              </p>
              <p className="text-xs sm:text-sm text-[#4A4333] font-serif leading-relaxed">
                Fast-forward to the 21st century, and Marston's theories have been integrated into billions of professional personality evaluations, including Wiley's Everything DiSC® and EpicQuest's tailored Admissions Diagnostics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SECTION 4: COMPREHENSIVE FAQ ACCORDION & REVIEWER BIO
      ══════════════════════════════ */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col gap-12">
          
          {/* FAQ Header */}
          <div className="text-center animate-fade-up">
            <span className="uppercase tracking-[0.14em] text-[10px] font-bold text-[#566544] bg-[#566544]/10 px-3.5 py-1.5 rounded-full select-none">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#403011] mt-4 leading-tight">
              DISC Assessment FAQ
            </h2>
            <p className="text-xs sm:text-sm text-[#4A4333]/70 font-serif italic mt-2">
              Everything you need to know about the science, timelines, and reporting details
            </p>
          </div>

          {/* ACCORDION ITEMS */}
          <div className="flex flex-col border border-[#4A4333]/8 rounded-3xl overflow-hidden divide-y divide-[#4A4333]/8 shadow-sm animate-fade-up">
            {faqData.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="bg-[#FDFBF7]/40 hover:bg-[#FDFBF7]/70 transition-colors">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 sm:px-8 py-4.5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-serif font-bold text-xs sm:text-sm text-[#403011] pr-4">
                      {item.q}
                    </span>
                    <span className="text-[#4A4333]/45 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[300px] border-t border-[#4A4333]/5 bg-white" : "max-h-0"
                  }`}>
                    <div className="px-5 sm:px-8 py-5 text-xs sm:text-sm text-[#4A4333]/90 font-serif leading-relaxed whitespace-pre-line">
                      {item.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </section>

    </main>
  );
}
