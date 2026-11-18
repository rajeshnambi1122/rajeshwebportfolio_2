"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";


interface PR {
  id: number;
  title: string;
  url: string;
  repo: string;
  repoUrl: string;
  merged: boolean;
  createdAt: string;
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 1) return "today";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

export default function GithubStats() {

  const [prs, setPrs] = useState<PR[]>([]);
  const [prsLoading, setPrsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    fetch("/api/github-prs")
      .then((res) => res.json())
      .then((data) => { setPrs(data.prs ?? []); setPrsLoading(false); })
      .catch(() => setPrsLoading(false));
  }, []);


  if (!isMounted) return <div className="stats-section" style={{ minHeight: "200px" }}></div>;

  return (
    <div className="stats-section">

      <div className="github-graph">
        <GitHubCalendar username="rajeshnambi1122" colorScheme="dark" blockSize={11} blockMargin={2} fontSize={12} />
      </div>

      {/* Open Source Contributions */}
      <div className="oss-section">
        <div className="oss-header">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.7 }}>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="oss-title">Open Source Contributions</span>
        </div>

        {prsLoading ? (
          <div className="oss-list">
            {[1, 2, 3].map((i) => (
              <div key={i} className="oss-item oss-skeleton">
                <div className="skeleton-text-short" style={{ width: "80px" }} />
                <div className="skeleton-text-long" style={{ width: "220px" }} />
              </div>
            ))}
          </div>
        ) : prs.length === 0 ? (
          <p className="oss-empty">No merged PRs to external repos found.</p>
        ) : (
          <div className="oss-list">
            {prs.map((pr) => (
              <a key={pr.id} href={pr.url} target="_blank" rel="noreferrer" className="oss-item">
                <span className="oss-repo">
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z" />
                  </svg>
                  {pr.repo}
                </span>
                <span className="oss-pr-title">{pr.title}</span>
                <span className="oss-date">{timeAgo(pr.createdAt)}</span>
                <span className="oss-badge merged">merged</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
