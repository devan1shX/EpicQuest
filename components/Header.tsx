"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

// Individual program details with custom icons and subtexts
const programsList = [
  {
    name: "Applied Research",
    href: "/programs/applied-research",
    desc: "Structured academic research & journal publications",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    name: "Prototype Development",
    href: "/programs/prototype-development",
    desc: "Software coding, hardware conceptualization & physical builds",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.99l1.004.831a1.125 1.125 0 01.26 1.43l-1.297 2.247a1.125 1.125 0 01-1.37.491l-1.216-.456c-.356-.133-.752-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.214-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.83c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.831a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "Policy Drafts",
    href: "/programs/policy-drafts",
    desc: "Societal research, legislative frameworks & policy proposals",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    name: "Patent Filing",
    href: "/programs/patent-filing",
    desc: "Protecting original inventions & official registration navigation",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    name: "Apprenticeships",
    href: "/programs/apprenticeships",
    desc: "Hands-on corporate internships & elite research labs network",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.4V14.15m16.5 0c0-1.2-.83-2.25-2.002-2.477-3.086-.597-6.27-.597-9.356 0-1.173.227-2.002 1.277-2.002 2.477m16.5 0v-2.25C20.25 8.585 16.165 4.5 11.25 4.5S2.25 8.585 2.25 13.5v2.25m9 3.375h1.5" />
      </svg>
    ),
  },
  {
    name: "Psychometric Profiling",
    href: "/programs/psychometric-profiling",
    desc: "Rigorous personal analysis mapping to Ivy League expectations",
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const generalLinks = [
  { label: "About", href: "/about" },
];

const rightLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Team", href: "/team" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileProgramsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileProgramsOpen(false);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="header">
        <div className="header__inner">
          {/* Logo */}
          <Link href="/" className="header__logo">
            <Image 
              src="/logo.png" 
              alt="EpicQuest" 
              width={160} 
              height={65} 
              className="header__logo-img" 
              priority 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="header__nav" aria-label="Main navigation">
            {generalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`header__link ${isActive(link.href) ? "header__link--active" : ""}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Programs Link with Premium Dropdown Trigger */}
            <div className="header__nav-item--has-dropdown">
              <Link 
                href="/programs" 
                className={`header__link header__link--dropdown-trigger ${isActive("/programs") ? "header__link--active" : ""}`}
              >
                <span>Programs</span>
                <svg className="w-3.5 h-3.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>

              {/* Mega-Dropdown Panel */}
              <div className="header__dropdown">
                <div className="header__dropdown-title">
                  Our Bespoke Admission Portfolios
                </div>
                <div className="header__dropdown-grid">
                  {programsList.map((prog) => (
                    <Link 
                      key={prog.href} 
                      href={prog.href} 
                      className={`header__dropdown-card ${pathname === prog.href ? "header__dropdown-card--active" : ""}`}
                    >
                      <div className="header__dropdown-card-icon">
                        {prog.icon}
                      </div>
                      <div className="header__dropdown-card-content">
                        <div className="header__dropdown-card-name">{prog.name}</div>
                        <div className="header__dropdown-card-desc">{prog.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="header__dropdown-footer">
                  <Link href="/programs" className="header__dropdown-footer-link">
                    Explore all 6 bespoke programs in detail →
                  </Link>
                </div>
              </div>
            </div>

            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`header__link ${isActive(link.href) ? "header__link--active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA — desktop */}
          <Link href="/contact" className="header__cta">
            Book a Free Session
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`header__hamburger ${mobileOpen ? "header__hamburger--open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="header__overlay" onClick={closeMobile} />
      )}

      {/* Mobile drawer */}
      <nav
        className={`header__drawer ${mobileOpen ? "header__drawer--open" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="header__drawer-links">
          {/* General links */}
          {generalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`header__drawer-link ${isActive(link.href) ? "header__drawer-link--active" : ""}`}
              onClick={closeMobile}
            >
              {link.label}
            </Link>
          ))}

          {/* Collapsible Mobile Accordion for Programs */}
          <div className="header__drawer-accordion">
            <button
              type="button"
              className={`header__drawer-accordion-trigger ${isActive("/programs") ? "header__drawer-accordion-trigger--active" : ""}`}
              onClick={() => setMobileProgramsOpen((prev) => !prev)}
            >
              <span>Programs</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${mobileProgramsOpen ? "rotate-180" : ""}`} 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <div className={`header__drawer-accordion-content ${mobileProgramsOpen ? "header__drawer-accordion-content--open" : ""}`}>
              <Link 
                href="/programs" 
                className="header__drawer-sublink header__drawer-sublink--all font-semibold"
                onClick={closeMobile}
              >
                Explore All Programs →
              </Link>
              {programsList.map((prog) => (
                <Link
                  key={prog.href}
                  href={prog.href}
                  className={`header__drawer-sublink ${pathname === prog.href ? "header__drawer-sublink--active" : ""}`}
                  onClick={closeMobile}
                >
                  <span className="header__drawer-sublink-icon">{prog.icon}</span>
                  <div className="flex flex-col">
                    <span className="font-medium text-[#403011]">{prog.name}</span>
                    <span className="text-[11px] text-[#8A8373] leading-tight font-serif mt-0.5">{prog.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Remaining links */}
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`header__drawer-link ${isActive(link.href) ? "header__drawer-link--active" : ""}`}
              onClick={closeMobile}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="/contact" className="header__drawer-cta" onClick={closeMobile}>
          Book a Free Session
        </Link>
      </nav>
    </>
  );
}
