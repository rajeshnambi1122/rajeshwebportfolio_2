"use client";
import React, { useState } from "react";

interface BookData {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  isbn: string;
  height: number; // realistic book height variation (px)
  spineWidth: number; // realistic spine thickness (px)
  quote: string;
  wittyReview: string;
  // Specific spine styling matching the authentic physical editions
  spineStyle: {
    bg: string;
    lighting: string;
    titleColor: string;
    authorColor: string;
    accentColor: string;
    fontFamily: string;
    letterSpacing: string;
    titleFontSize?: string;
    authorFontSize?: string;
    publisherName: string;
    publisherColor: string;
    publisherBg?: string;
    topDecoration?: "dots" | "line" | "double-line" | "star" | "box";
    bottomDecoration?: "line" | "double-line" | "box";
    customTitle?: React.ReactNode;
  };
}

const BOOKS: BookData[] = [
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    isbn: "9781847941831",
    height: 218,
    spineWidth: 44,
    quote: "You do not rise to the level of your goals. You fall to the level of your systems.",
    wittyReview: "1% better every day — also how I slowly eliminate bugs from production.",
    spineStyle: {
      bg: "#F7F4EC",
      lighting: "linear-gradient(90deg, rgba(0,0,0,0.32) 0%, rgba(255,255,255,0.6) 24%, rgba(255,255,255,0.05) 60%, rgba(0,0,0,0.28) 100%)",
      titleColor: "#1A1A1A",
      authorColor: "#5A554E",
      accentColor: "#E45A1E",
      fontFamily: "'Inter', -apple-system, sans-serif",
      letterSpacing: "0.08em",
      titleFontSize: "0.66rem",
      authorFontSize: "0.48rem",
      publisherName: "RH",
      publisherColor: "#FFFFFF",
      publisherBg: "#E45A1E",
      topDecoration: "dots",
      bottomDecoration: "box",
    },
  },
  {
    id: "monk-ferrari",
    title: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    isbn: "9788179921623",
    height: 210,
    spineWidth: 38,
    quote: "The mind is a wonderful servant, but a terrible master.",
    wittyReview: "Still working on acquiring the Ferrari before I can embrace ascetic monkhood.",
    spineStyle: {
      bg: "#75131A",
      lighting: "linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(255,255,255,0.2) 26%, rgba(255,255,255,0.02) 65%, rgba(0,0,0,0.4) 100%)",
      titleColor: "#F5D061",
      authorColor: "#E0BD5D",
      accentColor: "#E5BE53",
      fontFamily: "Georgia, 'Times New Roman', serif",
      letterSpacing: "0.03em",
      titleFontSize: "0.45rem",
      authorFontSize: "0.42rem",
      publisherName: "HarperCollins",
      publisherColor: "#F5D061",
      topDecoration: "double-line",
      bottomDecoration: "double-line",
    },
  },
  {
    id: "subconscious-mind",
    title: "The Power of Your Subconscious Mind",
    author: "Dr. Joseph Murphy",
    isbn: "9781604592016",
    height: 220,
    spineWidth: 42,
    quote: "Busy your mind with the concepts of harmony, health, peace, and good will.",
    wittyReview: "Currently convincing my subconscious that the build will succeed on the first try.",
    spineStyle: {
      bg: "#0B1D3A",
      lighting: "linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(255,255,255,0.22) 25%, rgba(255,255,255,0.03) 60%, rgba(0,0,0,0.38) 100%)",
      titleColor: "#F7CA38",
      authorColor: "#B5CBEC",
      accentColor: "#F7CA38",
      fontFamily: "'Inter', Arial, sans-serif",
      letterSpacing: "0.02em",
      titleFontSize: "0.42rem",
      authorFontSize: "0.40rem",
      publisherName: "FP",
      publisherColor: "#F7CA38",
      topDecoration: "line",
      bottomDecoration: "line",
    },
  },
  {
    id: "the-prophet",
    title: "The Prophet",
    author: "Kahlil Gibran",
    isbn: "9780394404288",
    height: 198,
    spineWidth: 34,
    quote: "Work is love made visible.",
    wittyReview: "Timeless poetic wisdom to keep my sanity intact when CSS grid refuses to cooperate.",
    spineStyle: {
      bg: "#163122",
      lighting: "linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(255,255,255,0.18) 28%, rgba(255,255,255,0.02) 65%, rgba(0,0,0,0.38) 100%)",
      titleColor: "#E2CF8E",
      authorColor: "#D0BE7C",
      accentColor: "#E2CF8E",
      fontFamily: "Georgia, 'Times New Roman', serif",
      letterSpacing: "0.08em",
      titleFontSize: "0.58rem",
      authorFontSize: "0.46rem",
      publisherName: "KNOPF",
      publisherColor: "#E2CF8E",
      topDecoration: "star",
      bottomDecoration: "line",
    },
  },
  {
    id: "verity",
    title: "Verity",
    author: "Colleen Hoover",
    isbn: "9781538724736",
    height: 214,
    spineWidth: 40,
    quote: "Some families are lucky enough to never experience a tragedy. We weren't one of them.",
    wittyReview: "Twists darker and more unpredictable than JavaScript type coercion (`[] + {} = [object Object]`).",
    spineStyle: {
      bg: "#0B0B0E",
      lighting: "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0.15) 22%, rgba(255,255,255,0.02) 60%, rgba(0,0,0,0.45) 100%)",
      titleColor: "#FFFFFF",
      authorColor: "#A69E90",
      accentColor: "#FF4D4D",
      fontFamily: "'Arial Black', 'Impact', sans-serif",
      letterSpacing: "0.12em",
      titleFontSize: "0.76rem",
      authorFontSize: "0.45rem",
      publisherName: "GCP",
      publisherColor: "#FFFFFF",
      publisherBg: "#FF4D4D",
      topDecoration: "box",
      bottomDecoration: "box",
    },
  },
];

export default function BookShelf() {
  const [openBookId, setOpenBookId] = useState<string | null>(null);
  const activeBook = BOOKS.find((b) => b.id === openBookId) || null;

  return (
    <div className="bookshelf-container">
      <div className="bookshelf-header">
        <div className="bookshelf-title-group">
          <span className="bookshelf-icon">📚</span>
          <h3 className="bookshelf-title">Books I&apos;ve Read</h3>
        </div>
        <span className="bookshelf-subtitle">
          Click any book to pull it off the shelf & open the cover
        </span>
      </div>

      {/* Realistic Wooden Shelf */}
      <div className="bookshelf-cabinet">
        <div className="bookshelf-row">
          {BOOKS.map((book) => {
            const isOpen = openBookId === book.id;
            const { spineStyle } = book;

            return (
              <div
                key={book.id}
                className={`shelf-book-item ${isOpen ? "is-open" : ""}`}
                style={
                  {
                    "--book-height": `${book.height}px`,
                    "--spine-width": `${book.spineWidth}px`,
                  } as React.CSSProperties
                }
                onClick={() => setOpenBookId(isOpen ? null : book.id)}
                role="button"
                tabIndex={0}
                aria-label={`${book.title} by ${book.author}`}
              >
                {/* 3D Realistic Spine */}
                <div
                  className="book-spine"
                  style={{
                    backgroundColor: spineStyle.bg,
                    fontFamily: spineStyle.fontFamily,
                  }}
                >
                  {/* Spine curvature 3D highlight overlay */}
                  <div
                    className="spine-lighting"
                    style={{ background: spineStyle.lighting }}
                  />

                  {/* Top Headband / Ridge */}
                  <div className="spine-headband">
                    {spineStyle.topDecoration === "dots" && (
                      <div className="spine-dots">
                        <span style={{ background: spineStyle.accentColor }} />
                        <span style={{ background: spineStyle.accentColor }} />
                        <span style={{ background: spineStyle.accentColor }} />
                      </div>
                    )}
                    {spineStyle.topDecoration === "double-line" && (
                      <div
                        className="spine-double-line"
                        style={{ borderColor: spineStyle.accentColor }}
                      />
                    )}
                    {spineStyle.topDecoration === "line" && (
                      <div
                        className="spine-single-line"
                        style={{ background: spineStyle.accentColor }}
                      />
                    )}
                    {spineStyle.topDecoration === "star" && (
                      <span
                        className="spine-star"
                        style={{ color: spineStyle.accentColor }}
                      >
                        ✦
                      </span>
                    )}
                    {spineStyle.topDecoration === "box" && (
                      <div
                        className="spine-color-bar"
                        style={{ background: spineStyle.accentColor }}
                      />
                    )}
                  </div>

                  {/* Main Spine Body (Vertical Text) */}
                  <div className="spine-body">
                    {book.id === "atomic-habits" ? (
                      <div
                        className="spine-title-custom"
                        style={{ fontSize: spineStyle.titleFontSize }}
                      >
                        <span className="ah-atomic">ATOMIC</span>
                        <span className="ah-habits">HABITS</span>
                      </div>
                    ) : (
                      <div
                        className="spine-title-text"
                        style={{
                          color: spineStyle.titleColor,
                          letterSpacing: spineStyle.letterSpacing,
                          fontSize: spineStyle.titleFontSize,
                        }}
                      >
                        {book.title.toUpperCase()}
                      </div>
                    )}

                    <div
                      className="spine-author-text"
                      style={{
                        color: spineStyle.authorColor,
                        fontSize: spineStyle.authorFontSize,
                      }}
                    >
                      {book.author.toUpperCase()}
                    </div>
                  </div>

                  {/* Bottom Publisher / Colophon */}
                  <div className="spine-foot">
                    {spineStyle.bottomDecoration === "double-line" && (
                      <div
                        className="spine-double-line"
                        style={{ borderColor: spineStyle.accentColor }}
                      />
                    )}
                    {spineStyle.bottomDecoration === "line" && (
                      <div
                        className="spine-single-line"
                        style={{ background: spineStyle.accentColor }}
                      />
                    )}
                    {spineStyle.publisherName && (
                      <div
                        className="spine-publisher-badge"
                        style={{
                          color: spineStyle.publisherColor,
                          backgroundColor: spineStyle.publisherBg || "transparent",
                          borderColor: spineStyle.publisherBg
                            ? "transparent"
                            : spineStyle.accentColor,
                        }}
                      >
                        {spineStyle.publisherName}
                      </div>
                    )}
                  </div>
                </div>

                {/* Opened Book View: Real Front Cover + 3D Page Layers */}
                <div className="book-opened-cover">
                  {/* Book spine curve shadow */}
                  <div className="cover-spine-crease" />

                  {/* Real Book Front Cover Image */}
                  <img
                    src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
                    alt={`${book.title} front cover`}
                    className="book-front-img"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback stylized cover if network fails
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />

                  {/* Fallback designed cover */}
                  <div
                    className="book-front-fallback"
                    style={{
                      backgroundColor: spineStyle.bg,
                      color: spineStyle.titleColor,
                      display: "none",
                    }}
                  >
                    <div className="fallback-inner">
                      <span className="fallback-tag">BESTSELLER</span>
                      <h4 className="fallback-title">{book.title}</h4>
                      <div
                        className="fallback-line"
                        style={{ background: spineStyle.accentColor }}
                      />
                      <p
                        className="fallback-author"
                        style={{ color: spineStyle.authorColor }}
                      >
                        {book.author}
                      </p>
                    </div>
                  </div>

                  {/* Page stack along the edge */}
                  <div className="book-page-edges" />
                  {/* Bookmark ribbon */}
                  <div
                    className="book-ribbon"
                    style={{ background: spineStyle.accentColor }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Thick Wood Shelf Plank */}
        <div className="shelf-plank">
          <div className="shelf-wood-highlight" />
          <div className="shelf-plank-edge" />
        </div>
      </div>

      {/* Interactive Book Details Drawer */}
      {activeBook ? (
        <div className="book-active-drawer" key={activeBook.id}>
          <div className="drawer-header">
            <div>
              <h4 className="drawer-title">{activeBook.title}</h4>
              <p className="drawer-author">by {activeBook.author}</p>
            </div>
            <button
              className="drawer-close-btn"
              onClick={() => setOpenBookId(null)}
              aria-label="Close book"
            >
              ✕ Close cover
            </button>
          </div>

          <blockquote className="drawer-quote">
            &ldquo;{activeBook.quote}&rdquo;
          </blockquote>

          <div className="drawer-review">
            <span className="drawer-review-label">💡 Personal Take:</span>
            <span className="drawer-review-text">{activeBook.wittyReview}</span>
          </div>
        </div>
      ) : (
        <div className="bookshelf-empty-hint">
          <span>👆 Select a book on the shelf to inspect the cover & takeaways</span>
        </div>
      )}
    </div>
  );
}
