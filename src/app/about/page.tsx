export default function About() {
  return (
    <main className="main-content">
      <section className="experience-section" style={{ marginTop: '0' }}>
        <h2 className="section-title">About Me</h2>

        <div style={{ marginBottom: '3.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Education</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot active"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-title" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <img src="https://images.seeklogo.com/logo-png/38/1/srm-institute-of-science-and-technology-logo-png_seeklogo-381994.png" alt="SRM" width="48" height="48" style={{ objectFit: 'contain', background: 'white', borderRadius: '6px', padding: '2px', flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <strong style={{ lineHeight: '1.2' }}>Masters in Computer Applications (MCA)</strong>
                      <span className="timeline-company" style={{ marginLeft: 0 }}>SRM Institute of Science and Technology</span>
                      <div className="timeline-date">Jan 2025 — Present</div>
                      <div className="timeline-location">Chennai</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-title" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <img src="https://www.aditanarcollege.com/fav_icon.png" alt="Aditanar" width="48" height="48" style={{ objectFit: 'contain', background: 'white', borderRadius: '6px', padding: '2px', flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <strong style={{ lineHeight: '1.2' }}>Bachelors in Economics</strong>
                      <span className="timeline-company" style={{ marginLeft: 0 }}>Aditanar College of Arts & Science</span>
                      <div className="timeline-date">June 2020 — June 2023</div>
                      <div className="timeline-location">Tiruchendur</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>Learning Resources</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            I am a self-taught developer and have actively learned from various online platforms and amazing instructors. Here are some of my primary resources:
          </p>
          <div className="tech-stack" style={{ gap: '1rem', flexWrap: 'wrap' }}>
            <span className="tech-icon" title="Angela Yu (Udemy)" style={{ width: 'auto', padding: '0 1rem', borderRadius: '20px', gap: '8px' }}>
              <img src="https://cdn.simpleicons.org/udemy" alt="Udemy" width="16" height="16" />
              Angela Yu (Udemy)
            </span>
            <span className="tech-icon" title="YouTube" style={{ width: 'auto', padding: '0 1rem', borderRadius: '20px', gap: '8px' }}>
              <img src="https://cdn.simpleicons.org/youtube/ff0000" alt="YouTube" width="16" height="16" />
              Dave Gray (Youtube)
            </span>
            <span className="tech-icon" title="Scrimba" style={{ width: 'auto', padding: '0 1rem', borderRadius: '20px', gap: '8px' }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSEopIcanqlIol-X2h2QztG4f4sMnlezTzcrrNt2pZA&s=10" alt="Scrimba" width="16" height="16" style={{ borderRadius: '50%' }} />
              Scrimba
            </span>
            <span className="tech-icon" title="Boot.dev" style={{ width: 'auto', padding: '0 1rem', borderRadius: '20px', gap: '8px' }}>
              <img src="https://github.com/bootdotdev.png" alt="Boot.dev" width="16" height="16" style={{ borderRadius: '50%' }} />
              Boot.dev
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
