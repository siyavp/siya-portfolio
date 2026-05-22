
"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Custom cursor
    const cur = document.getElementById("cur");
    const ring = document.getElementById("cur-ring");
    const onMouseMove = (e: MouseEvent) => {
      if (cur) { cur.style.left = e.clientX + "px"; cur.style.top = e.clientY + "px"; }
      if (ring) { ring.style.left = e.clientX + "px"; ring.style.top = e.clientY + "px"; }
    };
    document.addEventListener("mousemove", onMouseMove);

    // Scroll-in for project rows
    const rows = document.querySelectorAll(".proj-row");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    rows.forEach((r) => io.observe(r));

    // Nav active on scroll
    const sections = ["hero", "projects", "about", "contact"];
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
          const active = document.querySelector(`.nav-item[href="#${e.target.id}"]`);
          if (active) active.classList.add("active");
        }
      });
    }, { threshold: 0.4 });
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) navObserver.observe(el);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      io.disconnect();
      navObserver.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Cursor */}
      <div id="cur" />
      <div id="cur-ring" />

      {/* NAV */}
      <nav>
        <a className="nav-item active" href="#hero">Home</a>
        <a className="nav-item" href="#about">About</a>
        <a className="nav-item" href="#projects">Projects</a>
        <a className="nav-item" href="#contact">Contact</a>
      </nav>

      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero-blob blob1" />
        <div className="hero-blob blob2" />

        <div className="hero-left">
          <div className="hero-eyebrow">Software Engineer · Open to Work</div>

          <div className="hero-name">
            <div className="hero-name-mask" data-text="SIYA">SIYA</div>
            <br />
            <div className="hero-name-mask" style={{ color: "var(--rose-mid)" }} data-text="PATIL">PATIL</div>
          </div>

          <p className="hero-bio">
            <strong>Computer Science and Engineering major</strong> with a <strong>Fashion and Retail Studies minor</strong> — I build systems that are clean, scalable, and thoughtfully designed.
          </p>

          <div className="hero-btns">
            <a href="/resume.pdf" className="btn btn-fill">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v9M4 8l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Resume
            </a>

            <a href="https://www.linkedin.com/in/siya-patil-b01639261/" target="_blank" rel="noreferrer" className="btn btn-outline">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>

            <a href="https://github.com/siyavp" target="_blank" rel="noreferrer" className="btn btn-outline">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="/siya.jpg"
            alt="Siya Patil"
            style={{
              width: "480px",
              height: "480px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "top",
              border: "2px solid rgba(122,16,32,0.15)",
              display: "block",
            }}
          />

          <div className="photo-deco">SP</div>
        </div>

        <button
          className="scroll-hint"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <div className="arrow-bounce">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v12M3 9l5 5 5-5" stroke="var(--rose)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span>Scroll</span>
        </button>
      </section>

      {/* ── ABOUT + SKILLS ── */}
      <section id="about">
      <div className="about-grid">
        <div>
          <div className="sec-eyebrow">About Me</div>
          <h2 className="about-head">Experience.</h2>
          <div className="about-body">
            <div className="timeline-item">
              <div className="timeline-date">June 2025 — Present</div>
              <div className="timeline-role">Student Luxe — CRM Intern</div>
              <p>Developed dynamic PDF automation templates integrated with Monday.com workflows to automatically generate client-facing documents. Built systems using conditional logic and dynamic CRM data mapping to streamline operational processes and reduce repetitive manual work.</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">August 2024 — Present</div>
              <div className="timeline-role">Physics Research Building — Office Assistant</div>
              <p>Support daily administrative operations at The Ohio State University&apos;s Physics Research Building by coordinating logistics, organizing operational data, and maintaining efficient communication workflows in a fast-paced research environment.</p>
            </div>
          </div>
        </div>

          <div id="skills-section">
            <div className="sec-eyebrow">Skills</div>
            <div className="skill-section-title">Languages &amp; Frameworks</div>
            <div className="skill-divider" />
            <div className="icons-grid">
              {[
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: "HTML5" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS3" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", label: "Next.js" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TypeScript" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", label: "Java" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", label: "C" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", label: "Bootstrap" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", label: "Tailwind" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", label: "Node.js" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", label: "PyTorch" },
              ].map(({ src, label }) => (
                <div className="skill-icon" key={label}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={label} />
                  <span className="skill-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="skill-section-title">Tools</div>
            <div className="skill-divider" />
            <div className="icons-grid">
              {[
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", label: "VS Code" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", label: "Figma" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", label: "Docker" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", label: "PostgreSQL" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", label: "AWS" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", label: "Supabase" },
              ].map(({ src, label }) => (
                <div className="skill-icon" key={label}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={label} />
                  <span className="skill-label">{label}</span>
                </div>
              ))}

               {/* Monday.com */}
              <div className="skill-icon">
                <img src="/monday.png" alt="Monday.com"
                  style={{ width: "28px", height: "28px", objectFit: "contain", borderRadius: "6px" }} />
                <span className="skill-label">Monday.com</span>
              </div>

              {/* Power BI */}
              <div className="skill-icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI"
                  style={{ width: "28px", height: "28px", objectFit: "contain" }} />
                <span className="skill-label">Power BI</span>
              </div>

              {/* Eledo */}
              <div className="skill-icon">
                <img src="/eledo.jpg" alt="Eledo"
                  style={{ width: "28px", height: "28px", objectFit: "contain", borderRadius: "6px" }} />
                <span className="skill-label">Eledo</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <div id="projects">
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 3.5rem 1.5rem" }}>
          <div className="sec-label">Selected Work</div>
          <h2>Projects.</h2>
        </div>

        <div className="projects-list">
          {/* Project 1 — AI Closet */}
          <div className="proj-row">
            <div className="proj-info">
              <div className="proj-cat">Full-Stack · AI · 2024</div>
              <div className="proj-title">AI Closet<span>&amp; Outfit Recommender.</span></div>
              <p className="proj-desc">Full-stack outfit recommendation app using Next.js, Supabase, and Groq API — generates AI-powered outfits based on user wardrobe data and real-time weather.</p>
              <div className="proj-tags">
                <span className="tag" title="Next.js"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" style={{ filter: "invert(1)" }} /></span>
                <span className="tag" title="Supabase"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" /></span>
                <span className="tag" title="TypeScript"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /></span>
              </div>
              <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.25rem" }}>
                <a href="https://github.com/siyavp/closet-ai" target="_blank" rel="noreferrer" className="proj-link" style={{ fontSize: "11px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--rose-mid)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: ".4rem", transition: "color .2s" }}>
                  ↗ View on GitHub
                </a>
                <a href="https://closet-ai-pi.vercel.app" target="_blank" rel="noreferrer" className="proj-link" style={{ fontSize: "11px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--rose-mid)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: ".4rem", transition: "color .2s" }}>
                  ↗ View Live
                </a>
              </div>
            </div>
            <div className="proj-visual">
              <div className="proj-mock">
                <div className="mock-bar">
                  <div className="mock-dot" style={{ background: "#c4354a" }} />
                  <div className="mock-dot" style={{ background: "#e8a0aa" }} />
                  <div className="mock-dot" style={{ background: "#8b1a2a" }} />
                </div>
                <div className="mock-body">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(122,16,32,.2)", border: "1px solid rgba(196,53,74,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "#e8a0aa" }}>☀</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <div className="mock-line w45" />
                      <div className="mock-line" style={{ width: "35%", height: "6px" }} />
                    </div>
                  </div>
                  <div className="mock-grid">
                    <div className="mock-card" />
                    <div className="mock-card" style={{ background: "rgba(200,80,100,0.18)" }} />
                    <div className="mock-card" />
                    <div className="mock-card" style={{ background: "rgba(200,80,100,0.08)" }} />
                  </div>
                  <div className="mock-line w80" style={{ marginTop: ".4rem" }} />
                  <div className="mock-accent" />
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 — Portfolio */}
          <div className="proj-row">
            <div className="proj-info">
              <div className="proj-cat">Frontend · Design · 2025</div>
              <div className="proj-title">Portfolio<span>Website.</span></div>
              <p className="proj-desc">This site — designed and built from scratch with Next.js and CSS. Custom cursor, scroll-reveal animations, and a refined editorial aesthetic.</p>
              <div className="proj-tags">
                <span className="tag" title="Next.js"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" style={{ filter: "invert(1)" }} /></span>
                <span className="tag" title="CSS"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /></span>
                <span className="tag" title="TypeScript"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /></span>
              </div>
              <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.25rem" }}>
                <a href="https://github.com/siyavp/siya-portfolio" target="_blank" rel="noreferrer" className="proj-link" style={{ fontSize: "11px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--rose-mid)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: ".4rem", transition: "color .2s" }}>
                  ↗ View on GitHub
                </a>
                <a href="https://siyapatil.vercel.app/" target="_blank" rel="noreferrer" className="proj-link" style={{ fontSize: "11px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--rose-mid)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: ".4rem", transition: "color .2s" }}>
                  ↗ View Live
                </a>
              </div>
            </div>
            <div className="proj-visual">
              <div className="proj-mock">
                <div className="mock-bar">
                  <div className="mock-dot" style={{ background: "#c4354a" }} />
                  <div className="mock-dot" style={{ background: "#e8a0aa" }} />
                  <div className="mock-dot" style={{ background: "#8b1a2a" }} />
                </div>
                <div className="mock-body">
                  <div style={{ display: "flex", gap: "4px", marginBottom: "8px" }}>
                    {[48, 36, 44, 44].map((w, i) => (
                      <div key={i} style={{ width: w, height: "16px", borderRadius: "20px", background: "rgba(200,80,100,.15)", border: "1px solid rgba(200,80,100,.1)" }} />
                    ))}
                  </div>
                  <div className="mock-line w80" style={{ height: "28px", borderRadius: "3px", background: "rgba(122,16,32,.35)" }} />
                  <div className="mock-line w60" style={{ height: "18px", borderRadius: "3px", background: "rgba(122,16,32,.2)", marginTop: "4px" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "10px" }}>
                    {[1, 2, 3].map((i) => (
                      <div key={i} style={{ display: "flex", gap: "8px", alignItems: "center", height: "20px" }}>
                        <div style={{ width: "4px", height: "100%", background: "rgba(200,80,100,.3)", borderRadius: "2px" }} />
                        <div className="mock-line" style={{ flex: 1, height: "8px" }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 — LSTM */}
          <div className="proj-row">
            <div className="proj-info">
              <div className="proj-cat">ML · Deep Learning · 2024</div>
              <div className="proj-title">ANN &amp; LSTM<span>Time-Series Models.</span></div>
              <p className="proj-desc">TensorFlow &amp; Keras models for classification, regression, and sequential prediction. LSTM architecture for wireless channel forecasting — evaluated on MSE and accuracy metrics.</p>
              <div className="proj-tags">
                <span className="tag" title="Python"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" /></span>
                <span className="tag" title="TensorFlow"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" /></span>
                <span className="tag" title="Keras"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" /></span>
              </div>
            </div>
            <div className="proj-visual">
              <div className="proj-mock">
                <div className="mock-bar">
                  <div className="mock-dot" style={{ background: "#c4354a" }} />
                  <div className="mock-dot" style={{ background: "#e8a0aa" }} />
                  <div className="mock-dot" style={{ background: "#8b1a2a" }} />
                </div>
                <div className="mock-body" style={{ fontFamily: "monospace" }}>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "80px", paddingBottom: "8px" }}>
                    {[95, 80, 68, 57, 48, 41, 36, 32, 29, 27, 25, 24].map((h, i) => (
                      <div key={i} style={{ flex: 1, borderRadius: "2px 2px 0 0", height: `${h}%`, background: `rgba(196,53,74,${.15 + i * .06})` }} />
                    ))}
                  </div>
                  <div style={{ fontSize: "9px", color: "rgba(200,80,100,0.7)", lineHeight: 1.8 }}>
                    <div>Epoch 50/50 — loss: 0.024</div>
                    <div style={{ color: "rgba(200,80,100,0.4)" }}>val_loss: 0.031</div>
                    <div>MSE: <span style={{ color: "#e8a0aa" }}>0.0187</span></div>
                    <div style={{ color: "rgba(200,80,100,0.4)" }}>accuracy: 94.2%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* CONTACT */}
      <section id="contact">
        <div className="contact-inner">
          <div className="contact-big">Let&apos;s make<br />something <em>great.</em></div>
          <p className="contact-sub">I&apos;m actively seeking SWE internships and new grad roles. Open to any location — let&apos;s connect.</p>
          <div className="contact-row">
            <a href="mailto:siyavp27@gmail.com" className="btn btn-fill">Email Me</a>
            <a href="/resume.pdf" className="btn btn-outline">Download Resume</a>
          </div>
          <div className="contact-links">
            <a className="c-link" href="https://www.linkedin.com/in/siya-patil-b01639261/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="c-link" href="https://github.com/siyavp" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Siya Patil</p>
      </footer>
    </>
  );
}
