"use client";

import WavyUnderline from "@/components/ui/WavyUnderline";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "15b94e8e-36e4-4df2-8ef6-c09a496c7c2a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        form.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong. Please try again later.");
    }
    
    setIsSubmitting(false);
  };

  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen overflow-x-hidden">

      <div className="lg:min-h-[calc(100vh-64px)] flex flex-col">

        {/* ══ HERO SECTION ══ */}
        <section className="relative w-full overflow-hidden flex-1">
          {/* Ambient blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full
                          bg-[#566544]/5 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full
                          bg-[#DCA543]/8 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          {/* Dot grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#566544_1px,transparent_1px)]
                          [background-size:28px_28px] opacity-[0.06] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 sm:pt-28 pb-16 sm:pb-20">

            {/* Headline + Reach Out two-column */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-end">

              <div className="animate-fade-up">
                {/* Pill */}
                <div className="mb-7">
                  <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit mb-6 border border-[#403011]/15">
                    YOUR EPICQUEST BEGINS HERE
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem]
                               font-serif font-medium text-[#403011] tracking-tight
                               leading-[1.08] mb-5">
                  Let's Build Your{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">Ivy League</span>
                    <svg className="absolute -bottom-1.5 left-0 w-full" height="8"
                      viewBox="0 0 120 8" preserveAspectRatio="none" fill="none">
                      <path d="M2 6 Q30 2 60 5 Q90 8 118 3"
                        stroke="#DCA543" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </span>{" "}
                  Story
                </h1>
                <p className="text-base sm:text-lg text-[#4A4333] font-serif leading-relaxed
                              border-l-2 border-[#DCA543] pl-5">
                  Tell us about yourself — we'll design a personalised roadmap to your dream university. A comprehensive strategy mapping your academic record, co-curriculars, and personal interests.
                </p>
              </div>

              {/* Stats — 2×2 on all screens */}
              <div className="grid grid-cols-2 gap-4 animate-fade-up delay-150">
                <div className="flex flex-col p-5 sm:p-6 bg-[#FDFBF7] rounded-2xl
                               border border-[#4A4333]/8 shadow-sm">
                  <span className="text-3xl sm:text-4xl font-serif font-semibold
                                   text-[#403011] leading-none mb-1.5">
                    700+
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#8A8373] font-serif
                                   uppercase tracking-wider leading-snug">
                    Students Mentored
                  </span>
                </div>
                <div className="flex flex-col p-5 sm:p-6 bg-[#FDFBF7] rounded-2xl
                               border border-[#4A4333]/8 shadow-sm">
                  <span className="text-3xl sm:text-4xl font-serif font-semibold
                                   text-[#403011] leading-none mb-1.5">
                    45 <span className="text-xl">min</span>
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#8A8373] font-serif
                                   uppercase tracking-wider leading-snug">
                    Free Consultation
                  </span>
                </div>
                <div className="flex flex-col p-5 sm:p-6 bg-[#FDFBF7] rounded-2xl
                               border border-[#4A4333]/8 shadow-sm">
                  <span className="text-3xl sm:text-4xl font-serif font-semibold
                                   text-[#403011] leading-none mb-1.5">
                    20+
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#8A8373] font-serif
                                   uppercase tracking-wider leading-snug">
                    Countries Reached
                  </span>
                </div>
                <div className="flex flex-col p-5 sm:p-6 bg-[#FDFBF7] rounded-2xl
                               border border-[#4A4333]/8 shadow-sm">
                  <span className="text-3xl sm:text-4xl font-serif font-semibold
                                   text-[#403011] leading-none mb-1.5">
                    100%
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#8A8373] font-serif
                                   uppercase tracking-wider leading-snug">
                    Free, No Obligation
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══ QUICK STATS DIVIDER ══ */}
        <section className="w-full bg-[#403011] py-6 relative z-20 shrink-0">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row justify-between sm:justify-around items-center gap-6 sm:gap-4">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-serif font-medium text-white mb-1.5">40</div>
                <div className="text-[10px] sm:text-xs text-[#DCA543] font-bold uppercase tracking-widest">Students per cohort</div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/15"></div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-serif font-medium text-white mb-1.5">45 <span className="text-xl">min</span></div>
                <div className="text-[10px] sm:text-xs text-[#DCA543] font-bold uppercase tracking-widest">Consultation duration</div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/15"></div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-serif font-medium text-white mb-1.5">100%</div>
                <div className="text-[10px] sm:text-xs text-[#DCA543] font-bold uppercase tracking-widest">Free, no obligation</div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ══ CONSULTATION EXPECTATIONS SECTION ══ */}
      <section className="w-full bg-[#EAE2CE] py-20 lg:py-28 relative z-10 border-t border-b border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left: What We Will Cover */}
            <div>
              <span className="uppercase tracking-[0.14em] text-[11px] font-bold text-[#DCA543] mb-4 inline-block">THE 45-MIN SESSION</span>
              <h3 className="text-3xl sm:text-4xl font-serif font-medium text-[#403011] mb-10 leading-tight">
                What We Will Cover
              </h3>

              <ul className="space-y-6">
                {[
                  { title: "Profile Review", desc: "A deep dive into your academic record, co-curriculars, and personal interests." },
                  { title: "University Expectations", desc: "Discover exactly what top-tier universities want to see in successful applicants." },
                  { title: "Open Q&A", desc: "Answers to all your questions on program structure, timelines, and outcomes." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <svg className="w-6 h-6 text-[#5C7146] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-[#403011] text-base mb-1">{item.title}</h4>
                      <p className="text-sm text-[#4A4333] font-serif leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Paid Services Note */}
              <div className="mt-10 p-6 bg-white/40 rounded-2xl border border-[#4A4333]/10">
                <h4 className="text-sm font-bold text-[#403011] mb-2 uppercase tracking-wide">Premium Services</h4>
                <p className="text-sm text-[#4A4333] font-serif leading-relaxed">
                  Following your consultation, you may opt for our <strong className="font-semibold text-[#5C7146]">Psychometric Diagnostic Report</strong> or our <strong className="font-semibold text-[#5C7146]">12–24 Month Portfolio Roadmap</strong> as paid engagements.
                </p>
              </div>
            </div>

            {/* Right: What We Need From You */}
            <div>
              <span className="uppercase tracking-[0.14em] text-[11px] font-bold text-[#566544] mb-4 inline-block">YOUR PREPARATION</span>
              <h3 className="text-3xl sm:text-4xl font-serif font-medium text-[#403011] mb-10 leading-tight">
                What We'll Need From You
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />,
                    text: "Student's Name & Age"
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />,
                    text: "Current School & Grade"
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316v.192" />,
                    text: "Academic Interests"
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />,
                    text: "Target Universities"
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />,
                    text: "Parent/Guardian Details"
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />,
                    text: "Preferred Date & Time"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-[#4A4333]/10 hover:border-[#5C7146]/30 transition-colors">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#5C7146] shadow-sm">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                        {item.icon}
                      </svg>
                    </div>
                    <p className="text-sm text-[#4A4333] font-serif font-medium leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* ══ BOOKING FORM SECTION ══ */}
      <section id="booking-form" className="w-full py-20 sm:py-28 relative">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">

          <div className="text-center mb-14 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#403011] tracking-tight mb-5">
              Secure <WavyUnderline>Your Slot</WavyUnderline>
            </h2>
            <p className="text-base sm:text-lg text-[#4A4333] font-serif max-w-xl mx-auto">
              Please complete the form below. Our team typically responds within 24 hours to confirm your session.
            </p>
          </div>

          <div className="bg-[#FDFBF7] rounded-[2rem] p-6 sm:p-10 lg:p-14 shadow-xl border border-[#4A4333]/15">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-10 sm:py-20 text-center animate-fade-up is-visible">
                <div className="w-24 h-24 bg-[#5C7146]/10 rounded-full flex items-center justify-center mb-8 shadow-inner">
                  <svg className="w-12 h-12 text-[#5C7146]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif font-medium text-[#403011] mb-5">Request Sent Successfully!</h3>
                <p className="text-[#4A4333] font-serif text-lg mb-10 max-w-md mx-auto">
                  We have received your details and will get back to you shortly to confirm your session.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="inline-flex items-center justify-center gap-3 px-10 py-3.5 bg-white border-2 border-[#5C7146] text-[#5C7146] hover:bg-[#5C7146] hover:text-white rounded-full font-bold text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  Send Another Query
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </button>
              </div>
            ) : (
            <form onSubmit={onSubmit} className="space-y-12">

              {/* Group 1: Student Details */}
              <div>
                <h3 className="text-lg font-serif font-bold text-[#403011] mb-6 pb-4 border-b border-[#4A4333]/10">Student Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#8A8373] uppercase tracking-wider mb-2">First Name *</label>
                    <input type="text" name="First Name" className="w-full bg-white border border-[#4A4333]/15 rounded-xl px-4 py-3.5 text-sm text-[#403011] focus:outline-none focus:border-[#5C7146] focus:ring-1 focus:ring-[#5C7146] transition-colors placeholder:text-[#4A4333]/30 shadow-sm" placeholder="e.g. Advika" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#8A8373] uppercase tracking-wider mb-2">Last Name *</label>
                    <input type="text" name="Last Name" className="w-full bg-white border border-[#4A4333]/15 rounded-xl px-4 py-3.5 text-sm text-[#403011] focus:outline-none focus:border-[#5C7146] focus:ring-1 focus:ring-[#5C7146] transition-colors placeholder:text-[#4A4333]/30 shadow-sm" placeholder="e.g. Patel" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#8A8373] uppercase tracking-wider mb-2">Email Address *</label>
                    <input type="email" name="Email" className="w-full bg-white border border-[#4A4333]/15 rounded-xl px-4 py-3.5 text-sm text-[#403011] focus:outline-none focus:border-[#5C7146] focus:ring-1 focus:ring-[#5C7146] transition-colors placeholder:text-[#4A4333]/30 shadow-sm" placeholder="you@example.com" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#8A8373] uppercase tracking-wider mb-2">Phone Number *</label>
                    <input type="tel" name="Phone Number" className="w-full bg-white border border-[#4A4333]/15 rounded-xl px-4 py-3.5 text-sm text-[#403011] focus:outline-none focus:border-[#5C7146] focus:ring-1 focus:ring-[#5C7146] transition-colors placeholder:text-[#4A4333]/30 shadow-sm" placeholder="+91 99999 99999" required />
                  </div>
                </div>
              </div>

              {/* Group 2: Academic Details */}
              <div>
                <h3 className="text-lg font-serif font-bold text-[#403011] mb-6 pb-4 border-b border-[#4A4333]/10">Academic Profile</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-[#8A8373] uppercase tracking-wider mb-2">Current School *</label>
                    <input type="text" name="Current School" className="w-full bg-white border border-[#4A4333]/15 rounded-xl px-4 py-3.5 text-sm text-[#403011] focus:outline-none focus:border-[#5C7146] focus:ring-1 focus:ring-[#5C7146] transition-colors placeholder:text-[#4A4333]/30 shadow-sm" placeholder="Name of your school" required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#8A8373] uppercase tracking-wider mb-2">Current Grade *</label>
                      <select name="Current Grade" className="w-full bg-white border border-[#4A4333]/15 rounded-xl px-4 py-3.5 text-sm text-[#403011] focus:outline-none focus:border-[#5C7146] focus:ring-1 focus:ring-[#5C7146] transition-colors appearance-none shadow-sm cursor-pointer" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%238A8373\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em 1.2em' }} required defaultValue="">
                        <option value="" disabled className="text-[#4A4333]/30">Select Grade</option>
                        <option value="9">Grade 9</option>
                        <option value="10">Grade 10</option>
                        <option value="11">Grade 11</option>
                        <option value="12">Grade 12</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#8A8373] uppercase tracking-wider mb-2">Age</label>
                      <input type="number" name="Age" className="w-full bg-white border border-[#4A4333]/15 rounded-xl px-4 py-3.5 text-sm text-[#403011] focus:outline-none focus:border-[#5C7146] focus:ring-1 focus:ring-[#5C7146] transition-colors placeholder:text-[#4A4333]/30 shadow-sm" placeholder="e.g. 16" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#8A8373] uppercase tracking-wider mb-2">Academic Interests & Strengths</label>
                    <textarea name="Academic Interests" rows={3} className="w-full bg-white border border-[#4A4333]/15 rounded-xl px-4 py-3.5 text-sm text-[#403011] focus:outline-none focus:border-[#5C7146] focus:ring-1 focus:ring-[#5C7146] transition-colors placeholder:text-[#4A4333]/30 shadow-sm resize-none" placeholder="What subjects or topics are you most passionate about?"></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#8A8373] uppercase tracking-wider mb-2">Target Universities (Optional)</label>
                    <input type="text" name="Target Universities" className="w-full bg-white border border-[#4A4333]/15 rounded-xl px-4 py-3.5 text-sm text-[#403011] focus:outline-none focus:border-[#5C7146] focus:ring-1 focus:ring-[#5C7146] transition-colors placeholder:text-[#4A4333]/30 shadow-sm" placeholder="e.g. Harvard, Stanford, Oxford" />
                  </div>
                </div>
              </div>

              {/* Group 3: Consultation Details */}
              <div>
                <h3 className="text-lg font-serif font-bold text-[#403011] mb-6 pb-4 border-b border-[#4A4333]/10">Session Preferences</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#8A8373] uppercase tracking-wider mb-2">Preferred Date *</label>
                      <input type="date" name="Preferred Date" className="w-full bg-white border border-[#4A4333]/15 rounded-xl px-4 py-3.5 text-sm text-[#403011] focus:outline-none focus:border-[#5C7146] focus:ring-1 focus:ring-[#5C7146] transition-colors shadow-sm" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#8A8373] uppercase tracking-wider mb-2">Preferred Time *</label>
                      <input type="time" name="Preferred Time" className="w-full bg-white border border-[#4A4333]/15 rounded-xl px-4 py-3.5 text-sm text-[#403011] focus:outline-none focus:border-[#5C7146] focus:ring-1 focus:ring-[#5C7146] transition-colors shadow-sm" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#8A8373] uppercase tracking-wider mb-2">Additional Notes (Optional)</label>
                    <textarea name="Additional Notes" rows={2} className="w-full bg-white border border-[#4A4333]/15 rounded-xl px-4 py-3.5 text-sm text-[#403011] focus:outline-none focus:border-[#5C7146] focus:ring-1 focus:ring-[#5C7146] transition-colors placeholder:text-[#4A4333]/30 shadow-sm resize-none" placeholder="Anything else you'd like us to know before the session?"></textarea>
                  </div>
                </div>
              </div>

              {result && !isSuccess && (
                <div className={`p-4 rounded-xl text-sm font-medium bg-red-50 text-red-800 border border-red-200`}>
                  {result}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4 border-t border-[#4A4333]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-4 bg-[#5C7146] hover:bg-[#4a5a38] disabled:opacity-70 text-white rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  {isSubmitting ? "Submitting..." : "Request Free Consultation"}
                  {!isSubmitting && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
                <div className="flex items-center gap-2 text-xs text-[#8A8373] font-serif">
                  <svg className="w-4 h-4 text-[#5C7146]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <span>Your information is 100% secure.</span>
                </div>
              </div>

            </form>
            )}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          FOOTER QUICK LINKS
      ══════════════════════════════ */}
      <section className="w-full py-10 bg-[#EAE2CE] border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[#4A4333]/70 text-xs font-serif">© {new Date().getFullYear()} EpicQuest Learning. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:contact@epicquestlearning.com" className="text-xs font-bold text-[#4A4333] hover:text-[#566544] uppercase tracking-widest transition-colors">Email Us</a>
            <Link href="/" className="text-xs font-bold text-[#DCA543] hover:text-[#A37B31] uppercase tracking-widest transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
