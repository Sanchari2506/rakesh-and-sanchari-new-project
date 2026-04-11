import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SEO from "../components/SEO";
import Footer from "../components/Footer";

const FILTER_OPTIONS = [
  { value: "all", label: "All" },
  { value: "article", label: "Articles" },
  { value: "video", label: "Videos" },
  { value: "report", label: "Research Notes" },
  { value: "podcast", label: "Podcast" },
];

const FEATURED_MAIN = {
  type: "article",
  badgeLabel: "Featured Article",
  badgeClass: "badge-article",
  iconType: "article",
  iconSize: 48,
  category: "Market Analysis",
  date: "April 2026",
  read: "",
  title: "The Market Is Giving You a Gift. Most Will Refuse It.",
  excerpt:
    "When fear rules the street and screens turn red, the seeds of the next bull market are being quietly planted. History keeps saying this. The question is — are you listening this time?",
  linkLabel: "Read Full Article",
  linkURL: "/article-one",
  showOverlay: true,
};

const FEATURED_ASIDE = [
  {
    type: "video",
    badgeLabel: "Video",
    badgeClass: "badge-video",
    iconType: "video",
    iconSize: 36,
    category: "Portfolio Strategy",
    read: "18 min",
    title: "Concentrated vs. Diversified: How We Think About Position Sizing",
    linkLabel: "Watch Now",
    linkURL: "#",
    showOverlay: true,
    showPlayButton: true,
  },
  {
    type: "report",
    badgeLabel: "Research Note",
    badgeClass: "badge-report",
    iconType: "report",
    iconSize: 36,
    category: "Sector Watch",
    read: "Q1 2026",
    title: "Capital Goods Renaissance: 3 Structural Themes Driving the Sector",
    linkLabel: "Read Note",
    linkURL: "#",
    showOverlay: true,
  },
];

const ARTICLE_RESOURCES = [
  {
    type: "article",
    badgeLabel: "Article",
    badgeClass: "badge-article",
    iconType: "article",
    iconSize: 32,
    category: "Forensic Accounting",
    date: "Feb 2026",
    title: "5 Balance Sheet Red Flags Every Retail Investor Must Know",
    excerpt:
      "How to read between the lines of an annual report — and spot the warning signs before a company blows up.",
    linkLabel: "Read More",
    linkURL: "/article-one",
    showOverlay: true,
  },
  {
    type: "article",
    badgeLabel: "Article",
    badgeClass: "badge-article",
    iconType: "article",
    iconSize: 32,
    category: "Investment Philosophy",
    date: "Jan 2026",
    title: "The Compounding Paradox: Why Patience Outperforms Prediction",
    excerpt:
      "A study of India's top wealth creators over 15 years — and what they all had in common besides a rising stock price.",
    linkLabel: "Read More",
    linkURL: "/article-two",
    showOverlay: true,
  },
  {
    type: "article",
    badgeLabel: "Article",
    badgeClass: "badge-article",
    iconType: "article",
    iconSize: 32,
    category: "SME IPOs",
    date: "Dec 2025",
    title: "SME IPO Checklist: Separating Diamonds from Debris",
    excerpt:
      "Not every SME listing deserves your capital. Here's a rigorous framework to evaluate SME IPOs like a professional analyst.",
    linkLabel: "Read More",
    linkURL: "/article-three",
    showOverlay: true,
  },
];

const VIDEO_RESOURCES = [
  {
    type: "video",
    badgeLabel: "Video",
    badgeClass: "badge-video",
    iconType: "video",
    iconSize: 28,
    category: "Macro",
    read: "22 min",
    title: "India's Capex Supercycle: Still Early Innings?",
    excerpt:
      "A breakdown of government spending trends and what they mean for infrastructure plays.",
    showPlayButton: true,
  },
  {
    type: "video",
    badgeLabel: "Video",
    badgeClass: "badge-video",
    iconType: "video",
    iconSize: 28,
    category: "Stock Picking",
    read: "31 min",
    title: "How We Build a Research Thesis: Step by Step Walkthrough",
    excerpt:
      "From idea generation to conviction — our live research process demystified.",
    showPlayButton: true,
  },
  {
    type: "video",
    badgeLabel: "Video",
    badgeClass: "badge-video",
    iconType: "video",
    iconSize: 28,
    category: "Valuation",
    read: "26 min",
    title: "PEG, EV/EBITDA, or P/FCF? Choosing the Right Valuation Metric",
    excerpt:
      "Why context determines which multiple matters — and when you should ignore them all.",
    showPlayButton: true,
  },
  {
    type: "podcast",
    badgeLabel: "Podcast",
    badgeClass: "badge-podcast",
    iconType: "podcast",
    iconSize: 28,
    category: "Mindset",
    read: "44 min",
    title: "Skin in the Game: Why Analysts Must Invest in Their Own Ideas",
    excerpt:
      "Nassim Taleb's framework applied to equity research — a candid conversation.",
    showPlayButton: true,
  },
];

const REPORT_RESOURCES = [
  {
    type: "report",
    badgeLabel: "Research Note",
    badgeClass: "badge-report",
    iconType: "report",
    iconSize: 32,
    category: "Sector Outlook",
    date: "Q1 2026",
    title: "Specialty Chemicals: Post-China+1 Reality Check",
    excerpt:
      "Has the China+1 tailwind already been priced in? An honest sector-level assessment for 2026.",
    linkLabel: "Read Note",
    showOverlay: true,
  },
  {
    type: "report",
    badgeLabel: "Research Note",
    badgeClass: "badge-report",
    iconType: "report",
    iconSize: 32,
    category: "Thematic",
    date: "Feb 2026",
    title: "Defence Manufacturing: Indigenisation at Inflection Point",
    excerpt:
      "India's defence offset policy is creating a new class of listed manufacturers worth watching closely.",
    linkLabel: "Read Note",
    showOverlay: true,
  },
  {
    type: "report",
    badgeLabel: "Research Note",
    badgeClass: "badge-report",
    iconType: "report",
    iconSize: 32,
    category: "SME Watch",
    date: "Jan 2026",
    title: "BSE SME Platform: FY26 Mid-Year Review & Listings Analysis",
    excerpt:
      "A quantitative look at FY26 SME listings: quality distribution, pricing, and post-listing performance patterns.",
    linkLabel: "Read Note",
    showOverlay: true,
  },
];

const preventPlaceholderNavigation = (event) => {
  const href = event.currentTarget.getAttribute("href");

  if (!href || href === "#") {
    event.preventDefault();
  }
};

const matchesResource = (resource, activeFilter, normalizedQuery) => {
  const matchesFilter =
    activeFilter === "all" || resource.type === activeFilter;

  if (!matchesFilter) {
    return false;
  }

  if (!normalizedQuery) {
    return true;
  }

  const searchableText = [
    resource.badgeLabel,
    resource.category,
    resource.date,
    resource.read,
    resource.title,
    resource.excerpt,
    resource.linkLabel,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return searchableText.includes(normalizedQuery);
};

function ArrowIcon({ size = 12 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function PlaceholderIcon({ type, size }) {
  if (type === "video") {
    return (
      <svg
        className="placeholder-icon"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    );
  }

  if (type === "report") {
    return (
      <svg
        className="placeholder-icon"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    );
  }

  if (type === "podcast") {
    return (
      <svg
        className="placeholder-icon"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    );
  }

  return (
    <svg
      className="placeholder-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function PlayIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function CardMeta({ category, date, read }) {
  return (
    <div className="card-meta">
      <span className="card-cat">{category}</span>
      {date ? (
        <>
          <span className="card-dot">·</span>
          <span className="card-date">{date}</span>
        </>
      ) : null}
      {read ? (
        <>
          <span className="card-dot">·</span>
          <span className="card-read">{read}</span>
        </>
      ) : null}
    </div>
  );
}

export default function Resources() {
  const pageRef = useRef(null);
  const observerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const featuredMainVisible = matchesResource(
    FEATURED_MAIN,
    activeFilter,
    normalizedQuery,
  );
  const featuredAsideVisible = FEATURED_ASIDE.filter((resource) =>
    matchesResource(resource, activeFilter, normalizedQuery),
  );
  const visibleArticles = ARTICLE_RESOURCES.filter((resource) =>
    matchesResource(resource, activeFilter, normalizedQuery),
  );
  const visibleVideos = VIDEO_RESOURCES.filter((resource) =>
    matchesResource(resource, activeFilter, normalizedQuery),
  );
  const visibleReports = REPORT_RESOURCES.filter((resource) =>
    matchesResource(resource, activeFilter, normalizedQuery),
  );

  const showFeatured = featuredMainVisible || featuredAsideVisible.length > 0;
  const showArticles = visibleArticles.length > 0;
  const showVideos = visibleVideos.length > 0;
  const showReports = visibleReports.length > 0;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, []);

  useEffect(() => {
    const observer = observerRef.current;
    const page = pageRef.current;

    if (!observer || !page) {
      return;
    }

    page.querySelectorAll(".scroll-anim").forEach((element) => {
      if (!element.classList.contains("visible")) {
        observer.observe(element);
      }
    });
  }, [showArticles, showVideos, showReports]);

  const renderCardImage = (resource) => (
    <div className="card-img-wrap">
      <div className="card-img-placeholder">
        {/* <PlaceholderIcon type={resource.iconType} size={resource.iconSize} /> */}
        <Image
          src={`/images/article-one-image.png`}
          alt={resource.title}
          width={900}
          height={500}
        />
      </div>
      <div className={`card-type-badge ${resource.badgeClass}`}>
        {resource.badgeLabel}
      </div>
      {resource.showPlayButton ? (
        <div className="play-btn">
          <PlayIcon size={resource.iconSize === 36 ? 16 : 14} />
        </div>
      ) : null}
      {resource.showOverlay ? <div className="card-overlay"></div> : null}
    </div>
  );

  const renderFeaturedAsideCard = (resource) => (
    <div key={resource.title} className="aside-card" data-type={resource.type}>
      {renderCardImage(resource)}
      <div className="card-body">
        <CardMeta
          category={resource.category}
          date={resource.date}
          read={resource.read}
        />
        <h3 className="card-title-sm">{resource.title}</h3>
        <a
          href={resource.linkURL}
          className="card-link card-link-sm"
          onClick={preventPlaceholderNavigation}
        >
          {resource.linkLabel} <ArrowIcon size={10} />
        </a>
      </div>
    </div>
  );

  const renderArticleCard = (resource) => (
    <div
      key={resource.title}
      className="article-card"
      data-type={resource.type}
    >
      {renderCardImage(resource)}
      <div className="card-body">
        <CardMeta
          category={resource.category}
          date={resource.date}
          read={resource.read}
        />
        <h3 className="card-title-sm">{resource.title}</h3>
        <p className="card-excerpt">{resource.excerpt}</p>
        <a
          href={resource.linkURL}
          className="card-link"
          onClick={preventPlaceholderNavigation}
        >
          {resource.linkLabel} <ArrowIcon size={10} />
        </a>
      </div>
    </div>
  );

  const renderVideoCard = (resource) => (
    <div key={resource.title} className="video-card" data-type={resource.type}>
      {renderCardImage(resource)}
      <div className="card-body">
        <CardMeta
          category={resource.category}
          date={resource.date}
          read={resource.read}
        />
        <h3 className="card-title-sm">{resource.title}</h3>
        <p className="card-excerpt">{resource.excerpt}</p>
      </div>
    </div>
  );

  return (
    <div ref={pageRef} className="resources-page">
      <SEO
        title={`LNPR Capital | Research & Insights on Indian Small & Micro-Cap Investing`}
        image={`https://www.lnprcapital.com/images/article-one-image-updated.jpg`}
        description={`Articles, deep dives, and video conversations on Indian small & micro-cap investing — curated for the serious, long-term investor.`}
        url={`https://www.lnprcapital.com/resources`}
        contentType="website"
      />

      {/* PAGE HERO */}
      <section className="page-hero fade-up">
        <div className="section-label">Knowledge Centre</div>
        <h1>
          Research &amp; <em>Insights</em>
        </h1>
        <p>
          Articles, deep dives, and video conversations on Indian small &amp;
          micro-cap investing — curated for the serious, long-term investor.
        </p>
      </section>

      {/* FILTER BAR */}
      <div className="filter-bar-wrapper">
        <div className="inner-filter-wrapper">
          <span className="filter-label">Filter by</span>
          <div className="filter-bar">
            {FILTER_OPTIONS.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={`filter-btn${
                  activeFilter === filter.value ? " active" : ""
                }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
            {/* <div className="filter-sep"></div> */}
          </div>
          <div className="search-wrap">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search resources…"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content-wrap">
        <div className="resources-wrap">
          {/* FEATURED */}
          {showFeatured ? (
            <div className="featured-grid" id="featured-section">
              {featuredMainVisible ? (
                <div className="featured-main" data-type={FEATURED_MAIN.type}>
                  {renderCardImage(FEATURED_MAIN)}
                  <div className="card-body">
                    <CardMeta
                      category={FEATURED_MAIN.category}
                      date={FEATURED_MAIN.date}
                      read={FEATURED_MAIN.read}
                    />
                    <h2 className="card-title">{FEATURED_MAIN.title}</h2>
                    <p className="card-excerpt">{FEATURED_MAIN.excerpt}</p>
                    <a
                      href={FEATURED_MAIN.linkURL}
                      className="card-link"
                      onClick={preventPlaceholderNavigation}
                    >
                      {FEATURED_MAIN.linkLabel} <ArrowIcon size={12} />
                    </a>
                  </div>
                </div>
              ) : null}

              {/* {featuredAsideVisible.length ? (
                <div className="featured-aside">
                  {featuredAsideVisible.map(renderFeaturedAsideCard)}
                </div>
              ) : null} */}
            </div>
          ) : null}

          {/* LATEST ARTICLES */}
          {/* {showArticles ? (
            <>
              <div className="section-header scroll-anim" id="articles-header">
                <h2>
                  Latest <span>Articles</span>
                </h2>
                <a
                  href="#"
                  className="view-all"
                  onClick={preventPlaceholderNavigation}
                >
                  All Articles <ArrowIcon size={12} />
                </a>
              </div>

              <div className="article-grid scroll-anim" id="articles-grid">
                {visibleArticles.map(renderArticleCard)}
              </div>
            </>
          ) : null} */}

          {/* {showVideos && (showFeatured || showArticles) ? (
            <div className="gold-divider"></div>
          ) : null} */}

          {/* VIDEOS */}
          {/* {showVideos ? (
            <>
              <div className="section-header scroll-anim" id="videos-header">
                <h2>
                  Video <span>Conversations</span>
                </h2>
                <a
                  href="#"
                  className="view-all"
                  onClick={preventPlaceholderNavigation}
                >
                  All Videos <ArrowIcon size={12} />
                </a>
              </div>

              <div className="video-grid scroll-anim" id="videos-grid">
                {visibleVideos.map(renderVideoCard)}
              </div>
            </>
          ) : null} */}

          {/* {showReports && (showFeatured || showArticles || showVideos) ? (
            <div className="gold-divider"></div>
          ) : null} */}

          {/* RESEARCH NOTES */}
          {/* {showReports ? (
            <>
              <div className="section-header scroll-anim" id="reports-header">
                <h2>
                  Research <span>Notes</span>
                </h2>
                <a
                  href="#"
                  className="view-all"
                  onClick={preventPlaceholderNavigation}
                >
                  All Notes <ArrowIcon size={12} />
                </a>
              </div>

              <div className="article-grid scroll-anim" id="reports-grid">
                {visibleReports.map(renderArticleCard)}
              </div>
            </>
          ) : null} */}
        </div>
      </div>

      <style jsx global>{`
        @keyframes resourcesFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .resources-page .fade-up {
          animation: resourcesFadeUp 0.6s ease forwards;
        }

        .resources-page .scroll-anim {
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 0.55s ease,
            transform 0.55s ease;
        }

        .resources-page .scroll-anim.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .resources-page .card-link-sm {
          font-size: 11px;
        }
      `}</style>
    </div>
  );
}
