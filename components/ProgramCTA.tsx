import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WavyUnderline from "./ui/WavyUnderline";

interface ProgramCTAProps {
  title: string;
  description: string;
}

export default function ProgramCTA({ title, description }: ProgramCTAProps) {
  const words = title.split(" ");
  const numWordsToWrap = words.length >= 3 ? 2 : 1;
  const wrapIndex = words.length - numWordsToWrap;
  const prefix = words.slice(0, wrapIndex).join(" ");
  const wrapped = words.slice(wrapIndex).join(" ");

  return (
    <section className="w-full bg-[#F6EBD4] py-20 sm:py-28 relative overflow-hidden">
      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(#4A4333_1px,transparent_1px)]
                   [background-size:24px_24px] opacity-[0.03] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative">
        <div
          className="relative overflow-hidden bg-gradient-to-br
                     from-[#2D3E1C] via-[#374D23] to-[#455434]
                     rounded-[2.5rem] px-8 py-16 sm:px-16 sm:py-20
                     shadow-2xl border border-[#5C7146]/20"
        >
          {/* Decorative corner arcs */}
          <div
            aria-hidden
            className="absolute top-0 right-0 w-64 h-64 rounded-full
                       border border-[#DCA543]/10 -translate-y-1/2 translate-x-1/2"
          />
          <div
            aria-hidden
            className="absolute top-0 right-0 w-44 h-44 rounded-full
                       border border-[#DCA543]/8 -translate-y-1/3 translate-x-1/3"
          />
          <div
            aria-hidden
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full
                       bg-[#F6EBD4]/4 blur-3xl translate-y-1/2 -translate-x-1/4"
          />

          <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
            <span
              className="uppercase tracking-[0.18em] text-[9px] font-bold text-[#DCA543]
                         bg-[#DCA543]/12 px-4 py-1.5 rounded-full mb-6 inline-block
                         border border-[#DCA543]/20"
            >
              The Ultimate Outcome
            </span>

            <h2
              className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-medium
                         text-[#F6EBD4] tracking-tight leading-[1.15] mb-5"
            >
              {prefix} <WavyUnderline>{wrapped}</WavyUnderline>
            </h2>

            <p
              className="text-base sm:text-lg text-[#F6EBD4]/80 font-serif leading-relaxed
                         italic max-w-xl mb-10"
            >
              {description}
            </p>

            {/* Two CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center text-center gap-2 sm:gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-[#DCA543] hover:bg-[#E8B555] text-[#2D3E1C] rounded-full font-bold text-[13px] sm:text-base transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(220,165,67,0.35)] hover:-translate-y-0.5 group shrink-0"
              >
                Schedule a Diagnostic Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center text-center gap-2 px-6 py-3.5 sm:py-4 text-[#F6EBD4]/80 hover:text-[#F6EBD4] text-[13px] sm:text-sm font-bold uppercase tracking-wider transition-colors duration-300 group shrink-0"
              >
                Explore all programmes
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
