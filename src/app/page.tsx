import { Suspense } from "react";
import Image from "next/image";
import Stats from "@/components/Stats";
import StatsSkeleton from "@/components/StatsSkeleton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="portfolio-container">
      {/* Background patterns */}
      <div className="bg-pattern" aria-hidden="true"></div>

      {/* Main Content */}
      <main className="main-content">
        <section className="hero-section">
          <div className="profile-header">
            <div className="profile-img-placeholder"></div>
            <div className="profile-info">
              <h1>Rajesh Nambi</h1>
              <div className="typing-roles">
                <span className="role">Full Stack Developer</span>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Chennai, India
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Email</span>
              <a href="mailto:siddz.dev@gmail.com" className="info-value hover-link">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                rajehnambi2016@gmail.com
              </a>
            </div>
          </div>

          <p className="bio">
            I turn coffee ☕ and late nights into full-stack web apps. I obsess over the 2px that nobody notices but everybody feels and I&apos;m convinced that good UX is just empathy compiled into code. Currently shipping things with{" "}
            <a href="#">TypeScript</a>, <a href="#">React</a>, <a href="#">Next.js</a>, and <a href="#">Node.js</a>{" "}
            and yes, I do read the docs.
          </p>

          <div className="social-links" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            <div className="social-item">
              <a href="#" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
            <div className="social-item">
              <a href="#" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
              </a>
            </div>
            <div className="social-item">
              <a href="mailto:rajehnambi2016@gmail.com" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </a>
            </div>
          </div>



          {/* Tech Stack Section */}
          <section className="tech-stack-section">
            <h2 className="section-title">TECH STACK</h2>
            <div className="tech-grid">
              <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" className="tech-icon-img" />
              <img src="https://cdn.simpleicons.org/javascript" alt="JavaScript" className="tech-icon-img" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="tech-icon-img" />
              <img src="https://cdn.simpleicons.org/python" alt="Python" className="tech-icon-img" />
              <img src="https://cdn.simpleicons.org/nodedotjs" alt="Node.js" className="tech-icon-img" />
              <img src="https://cdn.simpleicons.org/express/white" alt="Express" className="tech-icon-img dark-invert" />
              <img src="https://cdn.simpleicons.org/react" alt="React" className="tech-icon-img" />
              <img src="https://cdn.simpleicons.org/nextdotjs/white" alt="Next.js" className="tech-icon-img dark-invert" />
              <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" className="tech-icon-img" />
              <img src="https://cdn.simpleicons.org/mongodb" alt="MongoDB" className="tech-icon-img" />
              <img src="https://cdn.simpleicons.org/mysql" alt="MySQL" className="tech-icon-img" />
              <img src="https://cdn.simpleicons.org/git" alt="Git" className="tech-icon-img" />
              <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" className="tech-icon-img dark-invert" />
              <img src="https://cdn.simpleicons.org/docker" alt="Docker" className="tech-icon-img" />
              <img src="https://cdn.simpleicons.org/apachekafka/white" alt="Apache Kafka" className="tech-icon-img dark-invert" />
              <img src="https://cdn.simpleicons.org/figma" alt="Figma" className="tech-icon-img" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="tech-icon-img dark-invert" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" alt="Azure" className="tech-icon-img" />

              <img src="https://cdn.simpleicons.org/postman" alt="Postman" className="tech-icon-img" />
              <img src="https://cdn.simpleicons.org/nginx" alt="NGINX" className="tech-icon-img" />
              <img src="https://cdn.simpleicons.org/cursor/white" alt="Cursor" className="tech-icon-img dark-invert" />
              <img src="https://cdn.simpleicons.org/claude" alt="Claude" className="tech-icon-img" />
              <img src="https://cdn.simpleicons.org/socketdotio/white" alt="Socket.io" className="tech-icon-img dark-invert" />
            </div>
          </section>

          <Suspense fallback={<StatsSkeleton />}>
            <Stats />
          </Suspense>
        </section>

        {/* Projects Section */}
        <section className="projects-section">
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image sandys-design-bg" style={{ position: 'relative', overflow: 'hidden' }}>
                <img src="/Sandy.png" alt="Sandy's Market" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="project-content">
                <div className="project-title-row">
                  <h3>Sandy's Market</h3>
                </div>
                <p>Developed a production-ready web platform for a US-based gas station & food store. Built with React + TypeScript + Tailwind (frontend), Node.js/Express + MongoDB (backend) and integrated mobile admin app in React Native. Features include live gas pricing updates, real-time order management with push notifications, secure JWT auth, and automated email confirmations. Deployed on cloud with monitoring and analytics implemented.</p>
                <div className="tech-stack">
                  <span className="tech-icon" title="React"><img src="https://cdn.simpleicons.org/react" alt="React" width="14" height="14" /></span>
                  <span className="tech-icon" title="Tailwind CSS"><img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind" width="14" height="14" /></span>
                  <span className="tech-icon" title="Node.js"><img src="https://cdn.simpleicons.org/nodedotjs" alt="Node.js" width="14" height="14" /></span>
                  <span className="tech-icon" title="Express"><img src="https://cdn.simpleicons.org/express/white" alt="express" width="14" height="14" /></span>
                  <span className="tech-icon" title="Mongo DB"><img src="https://cdn.simpleicons.org/mongodb" alt="MongoDB" width="14" height="14" /></span>
                  <span className="tech-icon" title="Node.js"><img src="https://cdn.simpleicons.org/railway/white" alt="Node.js" width="14" height="14" /></span>
                  <span className="tech-icon" title="Node.js"><img src="https://cdn.simpleicons.org/stripe" alt="Node.js" width="14" height="14" /></span>
                  <span className="tech-icon" title="Node.js"><img src="https://cdn.simpleicons.org/googleanalytics" alt="Node.js" width="14" height="14" /></span>

                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image safari-bg"></div>
              <div className="project-content">
                <div className="project-title-row">
                  <h3>Safari Packaging</h3>
                </div>
                <p>An beautiful website for a Packaging business in US.</p>
                <div className="tech-stack">
                  <span className="tech-icon" title="Next.js"><img src="https://cdn.simpleicons.org/nextdotjs/white" alt="Next.js" width="14" height="14" className="dark-invert" /></span>
                  <span className="tech-icon" title="React"><img src="https://cdn.simpleicons.org/react" alt="React" width="14" height="14" /></span>
                  <span className="tech-icon" title="Tailwind CSS"><img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind" width="14" height="14" /></span>
                  <span className="tech-icon" title="Express"><img src="https://cdn.simpleicons.org/express/white" alt="Express" width="14" height="14" className="dark-invert" /></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="experience-section">
          <h2 className="section-title">Experience</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot active"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-title">
                    <strong>Software Engineer Trainee</strong> <span className="timeline-company">Bijlipay</span>
                  </div>
                  <div className="timeline-date">Aug 2024 — Dec 2024</div>
                </div>
                <div className="timeline-location">Chennai, Full-Time</div>
                <p className="timeline-desc">
                  This is my first company
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
