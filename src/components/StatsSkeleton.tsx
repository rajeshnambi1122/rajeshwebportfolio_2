export default function StatsSkeleton() {
  return (
    <div className="stats-section" style={{ minHeight: "200px" }}>
      {/* GitHub calendar skeleton */}
      <div className="github-graph">
        <div className="skeleton-calendar">
          {Array.from({ length: 53 * 7 }).map((_, i) => (
            <div key={i} className="skeleton-block" />
          ))}
        </div>
        <div className="skeleton-label" />
      </div>

      {/* Spotify status skeleton */}
      <div className="spotify-status">
        <div className="skeleton-circle" />
        <div className="skeleton-text-short" />
        <div className="skeleton-text-long" />
      </div>
    </div>
  );
}
