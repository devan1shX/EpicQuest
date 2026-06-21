"use client";

import WavyUnderline from "@/components/ui/WavyUnderline";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight, BookOpen, Clock, Tag, Calendar, User } from "lucide-react";

// 5 Blog Posts Data
const blogPosts = [
  {
    id: "admissions-guide",
    title: "How to Get Into an Ivy League University: The Complete Guide for 2026–27",
    slug: "/blog/admissions-guide",
    image: "/images/blogs/Blog_Post_1_AdmissionGuide.png",
    category: "Admissions",
    date: "May 24, 2026",
    author: "Tilak Mishra (UPenn Alum & CEO)",
    readTime: "8 min read",
    excerpt: "Securing admission to an Ivy League university is no longer just about perfect grades and SAT scores. In 2026–27, top-tier admissions officers are looking for singular excellence, genuine intellectual curiosity, and real-world impact. Here is your definitive blueprint to stand out.",
    featured: true,
  },
  {
    id: "research-portfolio",
    title: "Building a World-Class Research Portfolio for Ivy League Admissions",
    slug: "/blog/research-portfolio",
    image: "/images/blogs/Blog_Post_2_ResearchPortfolio.png",
    category: "Research & Inventions",
    date: "May 18, 2026",
    author: "Dr. Aris (IIT & EQ Research Mentor)",
    readTime: "10 min read",
    excerpt: "Conducting original academic research is one of the single most powerful spikes a high schooler can build. Learn how to identify publishable topics, gather empirical data, write professional LaTeX manuscripts, and target reputable peer-reviewed journals.",
    featured: false,
  },
  {
    id: "success-stories",
    title: "Success Stories: How EpicQuest Students Conquered the Ivy League",
    slug: "/blog/success-stories",
    image: "/images/blogs/Blog_Post_3_SuccessStories.png",
    category: "Student Success",
    date: "May 10, 2026",
    author: "EpicQuest Advisory Team",
    readTime: "7 min read",
    excerpt: "Go inside the portfolios of students who secured admission to Harvard, Berkeley, and Harvey Mudd. Discover the exact timeline of their research publications, provisional patent filings, and local policy proposals that made their applications undeniable.",
    featured: false,
  },
  {
    id: "portfolio-strategy",
    title: "Portfolio Strategy: Designing Inventions, Patents, and Policy Drafts",
    slug: "/blog/portfolio-strategy",
    image: "/images/blogs/Blog_Post_4_PortfolioStrategy.png",
    category: "Strategy",
    date: "May 02, 2026",
    author: "Tilak Mishra (UPenn Alum)",
    readTime: "9 min read",
    excerpt: "Admissions committees review tens of thousands of applicants with perfect transcripts. To separate yourself, you must showcase tangible outputs. This guide breaks down our strategic framework for designing, prototyping, and filing provisional patents and policy briefs.",
    featured: false,
  },
  {
    id: "program-deep-dive",
    title: "Bespoke Mentorship: A Deep Dive into EpicQuest Programs",
    slug: "/blog/program-deep-dive",
    image: "/images/blogs/Blog_Post_5_ProgramDeepDive.png",
    category: "Bespoke Programs",
    date: "April 25, 2026",
    author: "EpicQuest Academic Committee",
    readTime: "12 min read",
    excerpt: "Explore the precise mechanics of EpicQuest's multi-stage mentorship. Learn how our psychometric assessments map to your academic trajectory and how our global mentor network guides you through deep technical skill development and prestige placements.",
    featured: false,
  },
];

const categories = ["All", "Research & Inventions", "Student Success", "Strategy", "Bespoke Programs"];

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured post remains permanently at the top
  const featuredPost = useMemo(() => {
    return blogPosts.find((p) => p.featured) || null;
  }, []);

  // Regular posts grid (excluding the featured one)
  const gridPosts = useMemo(() => {
    return filteredPosts.filter((post) => post.id !== featuredPost?.id);
  }, [filteredPosts, featuredPost]);

  return (
    <main className="flex flex-col w-full bg-[#F6EBD4] min-h-screen overflow-x-hidden">
      {/* ── HERO BANNER ── */}
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
              <div>
                <span className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[13px] sm:text-[14px] font-serif uppercase tracking-widest w-fit border border-[#403011]/15">
                  EpicQuest Intellect Hub
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem]
                             font-serif font-medium text-[#403011] tracking-tight
                             leading-[1.08] mb-5">
                The Ivy League{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Insight Hub</span>
                  <svg className="absolute -bottom-1.5 left-0 w-full" height="8"
                    viewBox="0 0 120 8" preserveAspectRatio="none" fill="none">
                    <path d="M2 6 Q30 2 60 5 Q90 8 118 3"
                      stroke="#DCA543" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#4A4333] font-serif leading-relaxed
                            border-l-2 border-[#DCA543] pl-5 mb-8">
                Curated strategic analysis, successful student portfolios, research advice, and deep program guides for top-tier university placement.
              </p>

            </div>

            {/* Stats — 2×2 on all screens */}
            <div className="grid grid-cols-2 gap-4 animate-fade-up delay-150">
              {[
                { value: "94%", label: "Ivy Admission Rate" },
                { value: "50+", label: "Research Publications" },
                { value: "12", label: "Patents Registered" },
                { value: "5", label: "Core Spikes Guides" },
              ].map((s) => (
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

      {/* ── BLOG CONTENT SECTION ── */}
      <section className="w-full bg-[#F6EBD4] pb-24 border-t border-[#4A4333]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20">

          {/* ── FEATURED ARTICLE ── */}
          {featuredPost && (
            <div className="mb-16 animate-fade-up">
              <div className="bg-[#FDFBF7]/90 rounded-[2.5rem] p-6 sm:p-8 lg:p-12 border border-[#4A4333]/10 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 xl:gap-16 items-center">

                  {/* Image Column */}
                  <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-md border border-white/60 group">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      priority
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/20 to-transparent pointer-events-none" />

                    {/* Floating category tag */}
                    <span className="absolute top-5 left-5 inline-flex items-center gap-1 bg-[#5C7146] text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm">
                      <Tag className="w-3 h-3" />
                      {featuredPost.category}
                    </span>
                  </div>

                  {/* Content Column */}
                  <div className="space-y-5 sm:space-y-6">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#EAEDDE] text-[#403011] text-[11px] sm:text-[12px] font-serif uppercase tracking-widest w-fit border border-[#403011]/15">
                      ★ Featured Publication
                    </span>

                    <h2 className="text-3xl sm:text-4xl xl:text-[2.6rem] font-serif font-medium text-[#403011] leading-tight tracking-tight hover:text-[#5C7146] transition-colors">
                      <Link href={featuredPost.slug}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-base text-[#4A4333] font-serif leading-relaxed line-clamp-4">
                      {featuredPost.excerpt}
                    </p>

                    {/* Metadata row */}
                    <div className="pt-2 border-t border-[#4A4333]/8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#8A8373] font-serif">
                      <span className="flex items-center gap-1.5 font-medium text-[#403011]">
                        <User className="w-3.5 h-3.5 text-olive" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1.5 bg-olive/5 px-2 py-0.5 rounded text-olive font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <div className="pt-4">
                      <Link
                        href={featuredPost.slug}
                        className="w-full sm:w-auto inline-flex items-center justify-center text-center gap-2 sm:gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-[#5C7146] hover:bg-[#4A5C38] text-white rounded-full font-bold text-[13px] sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group shrink-0"
                      >
                        Read Guide
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          )}

          {/* ── FILTER TABS ── */}
          <div className="mb-10">
            <div className="flex items-center justify-between border-b border-[#4A4333]/8 pb-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${selectedCategory === cat
                        ? "bg-[#5C7146] text-white shadow-sm"
                        : "bg-[#FDFBF7]/50 text-[#8A8373] hover:bg-[#FDFBF7] hover:text-[#403011]"
                      }`}
                    suppressHydrationWarning
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="hidden sm:block text-xs text-[#8A8373] font-serif">
                Showing {filteredPosts.length} articles
              </div>
            </div>
          </div>

          {/* ── ARTICLES GRID ── */}
          <div className="mb-20">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-[#FDFBF7]/50 rounded-3xl border border-[#4A4333]/8">
                <BookOpen className="w-12 h-12 text-[#8A8373] mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-serif text-[#403011] font-medium">No Articles Found</h3>
                <p className="text-sm text-[#8A8373] font-serif mt-1">Try resetting your filters or search query.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-4 inline-flex items-center gap-1 text-[#5C7146] text-sm font-semibold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {(featuredPost ? gridPosts : filteredPosts).map((post) => (
                  <article
                    key={post.id}
                    className="group flex flex-col bg-[#FDFBF7] rounded-[2rem] border border-[#4A4333]/10 shadow-sm hover:shadow-md hover:border-[#5C7146]/25 transition-all duration-300 overflow-hidden"
                  >
                    {/* Image header */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/35 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Category */}
                      <span className="absolute top-4 left-4 bg-[#5C7146] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between p-6 sm:p-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-[11px] text-[#8A8373] font-serif">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#403011] leading-snug group-hover:text-[#5C7146] transition-colors">
                          <Link href={post.slug}>{post.title}</Link>
                        </h3>

                        <p className="text-[#5A5A5A] font-serif text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-[#4A4333]/8 flex flex-col sm:flex-row sm:items-center justify-between mt-6 gap-4">
                        <span className="text-[11px] text-[#403011] font-semibold flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-olive" />
                          {post.author}
                        </span>
                        <Link
                          href={post.slug}
                          className="w-full sm:w-auto inline-flex items-center justify-center text-center gap-2 sm:gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 border-2 border-[#5C7146]/80 text-[#5C7146] hover:bg-[#5C7146]/5 rounded-full font-bold text-[13px] sm:text-sm tracking-wide transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group shrink-0"
                        >
                          Read full article
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>


    </main>
  );
}
