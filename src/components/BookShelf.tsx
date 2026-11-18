"use client";
import React, { useState } from "react";

interface BookData {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  quote: string;
  wittyReview: string;
  accentColor: string;
}

const BOOKS: BookData[] = [
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    coverImage: "/books/covers/atomic-habits.jpg",
    quote: "You do not rise to the level of your goals. You fall to the level of your systems.",
    wittyReview: "1% better every day — also how I slowly eliminate bugs from production.",
    accentColor: "#E8450A",
  },
  {
    id: "monk-ferrari",
    title: "The Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    coverImage: "/books/covers/monk-ferrari.jpg",
    quote: "The mind is a wonderful servant, but a terrible master.",
    wittyReview: "Still working on acquiring the Ferrari before I can embrace ascetic monkhood.",
    accentColor: "#D4AF37",
  },
  {
    id: "subconscious-mind",
    title: "The Power of Your Subconscious Mind",
    author: "Dr. Joseph Murphy",
    coverImage: "/books/covers/subconscious-mind.jpg",
    quote: "Busy your mind with the concepts of harmony, health, peace, and good will.",
    wittyReview: "Currently convincing my subconscious that the build will succeed on the first try.",
    accentColor: "#F5C518",
  },
  {
    id: "the-prophet",
    title: "The Prophet",
    author: "Kahlil Gibran",
    coverImage: "/books/covers/the-prophet.jpg",
    quote: "Work is love made visible.",
    wittyReview: "Timeless poetic wisdom to keep my sanity intact when CSS grid refuses to cooperate.",
    accentColor: "#C9A84C",
  },
  {
    id: "verity",
    title: "Verity",
    author: "Colleen Hoover",
    coverImage: "/books/covers/verity.jpg",
    quote: "Some families are lucky enough to never experience a tragedy. We weren't one of them.",
    wittyReview: "Twists darker and more unpredictable than JavaScript type coercion (`[] + {} = [object Object]`).",
    accentColor: "#E8192C",
  },
];

export default function BookShelf() {
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const activeBook = BOOKS.find((b) => b.id === selectedBookId) || null;

  return (
    <div className="bookshelf-container">
      <div className="bookshelf-header">
        <div className="bookshelf-title-group">
          <h3 className="bookshelf-title">Books I&apos;ve Read</h3>
        </div>
        <span className="bookshelf-subtitle">
          Click any book to read key takeaways &amp; my personal review
        </span>
      </div>

      {/* Realistic Wooden Shelf Showcase */}
      <div className="bookshelf-cabinet">
        <div className="bookshelf-row covers-row">
          {BOOKS.map((book) => {
            const isSelected = selectedBookId === book.id;

            return (
              <div
                key={book.id}
                className={`shelf-book-cover-card ${isSelected ? "is-selected" : ""}`}
                onClick={() => setSelectedBookId(isSelected ? null : book.id)}
                role="button"
                tabIndex={0}
                aria-label={`${book.title} by ${book.author}`}
              >
                {/* 3D Book Object */}
                <div className="book-3d-wrapper">
                  {/* Spine Crease / Hinge Shadow along the left edge */}
                  <div className="book-left-crease" />

                  {/* Real Book Front Cover Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={book.coverImage}
                    alt={`${book.title} cover`}
                    className="book-front-cover-img"
                    draggable={false}
                  />

                  {/* Book Thickness & Edge Lighting */}
                  <div className="book-page-trim" />
                  <div className="book-cover-glare" />
                </div>

                {/* Subtle Book Title & Author Tag below the cover */}
                <div className="book-cover-label">
                  <span className="book-label-title">{book.title}</span>
                  <span className="book-label-author">{book.author}</span>
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
              onClick={() => setSelectedBookId(null)}
              aria-label="Close book"
            >
              ✕ Close
            </button>
          </div>

          <blockquote
            className="drawer-quote"
            style={{ borderLeftColor: activeBook.accentColor }}
          >
            &ldquo;{activeBook.quote}&rdquo;
          </blockquote>

          <div className="drawer-review">
            <span className="drawer-review-label">💡 Personal Take:</span>
            <span className="drawer-review-text">{activeBook.wittyReview}</span>
          </div>
        </div>
      ) : (
        <div className="bookshelf-empty-hint">
          <span>👆 Click any book cover on the shelf to view details &amp; notes</span>
        </div>
      )}
    </div>
  );
}
