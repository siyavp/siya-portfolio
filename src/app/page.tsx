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

    // Cursor grow on hover
    const interactives = document.querySelectorAll("a, button, .scroll-cta");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (cur) { cur.style.width = "18px"; cur.style.height = "18px"; }
        if (ring) { ring.style.width = "50px"; ring.style.height = "50px"; ring.style.opacity = "0.15"; }
      });
      el.addEventListener("mouseleave", () => {
        if (cur) { cur.style.width = "10px"; cur.style.height = "10px"; }
        if (ring) { ring.style.width = "36px"; ring.style.height = "36px"; ring.style.opacity = "0.45"; }
      });
    });

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

      {/* HERO */}
      <section id="hero">
        <div className="hero-blob blob1" />
        <div className="hero-blob blob2" />
        <div className="hero-blob blob3" />

        <div className="hero-name" style={{ zIndex: 2 }}>
          <div className="hero-name-mask" data-text="SIYA">SIYA</div>
          <br />
          <div className="hero-name-mask" data-text="PATIL" style={{ color: "var(--rose-mid)" }}>PATIL</div>
        </div>

        <p className="hero-sub">
          Software Engineer &nbsp;<em>·</em>&nbsp; CS + Fashion <em>·</em>&nbsp; Builder
        </p>

        <button className="scroll-cta" onClick={() => scrollTo("projects")}>
          <span className="scroll-label">Scroll</span>
          <div className="arrow-wrap">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v12M3 9l5 5 5-5" stroke="var(--rose)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>
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
                <span className="tag">Next.js</span><span className="tag">Supabase</span>
                <span className="tag">Groq API</span><span className="tag">TypeScript</span>
              </div>
              <a href="https://github.com/siyavp/closet-ai" target="_blank" rel="noreferrer" className="proj-link" style={{ marginTop: "1.25rem", fontSize: "11px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--rose-mid)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: ".4rem", transition: "color .2s" }}>
                ↗ View on GitHub
              </a>
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
                <span className="tag">Next.js</span><span className="tag">CSS</span>
                <span className="tag">TypeScript</span>
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
                <span className="tag">Python</span><span className="tag">TensorFlow</span>
                <span className="tag">Keras</span><span className="tag">LSTM</span>
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

      {/* ABOUT */}
      <section id="about">
        <div className="about-inner">
          <div>
            <div className="about-tag">About Me</div>
            <h2 className="about-head">Engineer with an<br /><em>eye for beauty.</em></h2>
            <p className="about-body">
              I&apos;m Siya — a CSE major with a Fashion Retail minor, which means I think about systems
              the way a designer thinks about a collection: every detail matters, every decision is intentional.
              <br /><br />
              I&apos;m targeting SWE roles at companies building things people actually love. I care about
              code that&apos;s clean, products that feel right, and teams that hold each other to a high standard.
            </p>
          </div>
          <div className="about-stats">
            <div className="a-stat"><span className="a-num">4</span><span className="a-label">Projects shipped</span></div>
            <div className="a-stat"><span className="a-num">CSE</span><span className="a-label">+ Fashion Retail Minor</span></div>
            <div className="a-stat"><span className="a-num">3+</span><span className="a-label">Years coding experience</span></div>
            <div className="a-stat"><span className="a-num">↗</span><span className="a-label">FAANG &amp; top eng orgs</span></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-inner">
          <div className="contact-big">Let&apos;s make<br />something <em>great.</em></div>
          <p className="contact-sub">I&apos;m actively seeking SWE internships and new grad roles. Open to any location — let&apos;s connect.</p>
          <div className="contact-row">
            <a href="mailto:siya@email.com" className="btn btn-fill">Email Me</a>
            <a href="/resume.pdf" className="btn btn-outline">Download Resume</a>
          </div>
          <div className="contact-links">
            <a className="c-link" href="https://linkedin.com/in/siyapatil" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="c-link" href="https://github.com/siyapatil" target="_blank" rel="noreferrer">GitHub</a>
            <a className="c-link" href="mailto:siya@email.com">siya@email.com</a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 Siya Patil</p>
        <p>Made with ✦ and strong opinions</p>
      </footer>
    </>
  );
}
