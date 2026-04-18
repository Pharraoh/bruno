// WorkSection.jsx
// Drop this into src/components/ and import it in your App.jsx
// Usage: import WorkSection from "./components/WorkSection";
import "../Experiences.css";

const EXPERIENCES = [
  {
    role: "Founder, Developer",
    company: "Pharraoh Inc.",
    period: "2019 — Present",
    desc: "Founded and manage a freelance web design company, building responsive websites and full-stack web applications with a focus on performance, usability, and clean design.",
  },
  {
    role: "Web Developer (Contract)",
    company: "Highray Technologies",
    period: "2024 — 2025",
    desc: "Designed and developed responsive websites, including a corporate landing page and talent hunt platform with authentication, payments, dashboards, and interactive UI.",
  },
  {
    role: "Full Stack Developer",
    company: "allG Entertainment",
    period: "2022 — 2026",
    desc: "Developed the label’s official website and collaborated on a feature-rich dating platform with authentication, real-time chat, matching, and media management.",
  },
];
  
  // ── Paperclip ─────────────────────────────────────────────────────────────────
  
  const Paperclip = () => (
    <svg width="54" height="120" viewBox="0 0 54 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27 8 C10 8 6 20 6 30 L6 90 C6 108 16 116 27 116 C38 116 48 108 48 90 L48 34"
        stroke="#b0b4b8"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M27 22 C18 22 16 30 16 38 L16 88 C16 100 20 106 27 106 C34 106 38 100 38 88 L38 34"
        stroke="#c8cdd1"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M27 8 C38 8 48 16 48 28 L48 34"
        stroke="#b0b4b8"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M27 22 C32 22 38 26 38 34"
        stroke="#c8cdd1"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
  
  // ── Torn Paper wrapper ────────────────────────────────────────────────────────
  
  const TornPaperBg = ({ children }) => (
    <div className="relative w-full" style={{ filter: "drop-shadow(0px 8px 24px rgba(0,0,0,0.45))" }}>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="tornClip" clipPathUnits="objectBoundingBox">
            <path d="
              M0,0 L1,0 L1,0.88
              C0.97,0.875 0.94,0.895 0.91,0.882
              C0.88,0.868 0.85,0.9  0.82,0.887
              C0.79,0.873 0.76,0.905 0.73,0.892
              C0.70,0.878 0.67,0.91  0.64,0.896
              C0.61,0.882 0.58,0.915 0.55,0.9
              C0.52,0.885 0.49,0.918 0.46,0.903
              C0.43,0.888 0.40,0.92  0.37,0.905
              C0.34,0.89  0.31,0.922 0.28,0.907
              C0.25,0.892 0.22,0.925 0.19,0.91
              C0.16,0.895 0.13,0.928 0.10,0.913
              C0.07,0.898 0.04,0.93  0.01,0.915
              L0,0.91 Z
            " />
          </clipPath>
        </defs>
      </svg>
  
      <div
        style={{
          clipPath: "url(#tornClip)",
          backgroundColor: "#f5f0e8",
          backgroundImage: `
            repeating-linear-gradient(
              transparent,
              transparent 27px,
              rgba(180,200,220,0.35) 27px,
              rgba(180,200,220,0.35) 28px
            )
          `,
          backgroundSize: "100% 28px",
          backgroundPositionY: "40px",
          position: "relative",
          paddingBottom: "80px",
        }}
      >
        {/* red margin line */}
        <div style={{
          position: "absolute",
          top: 0, bottom: 0,
          left: "72px",
          width: "1.5px",
          backgroundColor: "rgba(220,80,80,0.35)",
          pointerEvents: "none",
        }} />
  
        {/* hole punches */}
        <div style={{ position: "absolute", top: "18px", left: "26px", width: "14px", height: "14px", borderRadius: "50%", backgroundColor: "hsl(0,0%,8%)", opacity: 0.12 }} />
        <div style={{ position: "absolute", top: "18px", left: "50px", width: "14px", height: "14px", borderRadius: "50%", backgroundColor: "hsl(0,0%,8%)", opacity: 0.07 }} />
  
        {children}
      </div>
    </div>
  );
  
  // ── WorkSection ───────────────────────────────────────────────────────────────
  
  export default function WorkSection() {
    return (
      <section id="work" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-16 pb-32">
        <div className="w-full max-w-2xl">
  
          {/* Paperclip above the paper top-left */}
          <div className="paper-clip">
            {/* <Paperclip /> */}
          </div>
  
          <TornPaperBg>
            <div className="px-8 md:px-12 pt-10 pb-6" style={{ marginLeft: "72px" }}>
  
              {/* Heading */}
              <h2 style={{
                fontFamily: "'Permanent Marker', cursive",
                fontSize: "2rem",
                color: "#1a1a2e",
                marginBottom: "2rem",
                lineHeight: 1.2,
                transform: "rotate(-0.5deg)",
              }}>
                Work Experience
              </h2>
  
              {/* Experience entries */}
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {EXPERIENCES.map((exp, i) => (
                  <div
                    key={i}
                    style={{
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      transform: `rotate(${i % 2 === 0 ? "-0.3deg" : "0.2deg"})`,
                    }}
                  >
                    {/* Role + period */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "4px" }}>
                      <span style={{
                        fontFamily: "'Permanent Marker', cursive",
                        fontSize: "1.05rem",
                        color: "#1a1a2e",
                        lineHeight: "28px",
                      }}>
                        {exp.role}
                      </span>
                      <span style={{
                        fontFamily: "'Permanent Marker', cursive",
                        fontSize: "0.72rem",
                        color: "rgba(80,60,50,0.65)",
                        lineHeight: "28px",
                        whiteSpace: "nowrap",
                      }}>
                        {exp.period}
                      </span>
                    </div>
  
                    {/* Company */}
                    <div style={{
                      fontFamily: "'Permanent Marker', cursive",
                      fontSize: "0.82rem",
                      color: "hsl(338,100%,45%)",
                      lineHeight: "28px",
                    }}>
                      @ {exp.company}
                    </div>
  
                    {/* Description */}
                    <div style={{
                      fontFamily: "'Permanent Marker', cursive",
                      fontSize: "0.72rem",
                      color: "rgba(40,30,20,0.55)",
                      lineHeight: "28px",
                    }}>
                      {exp.desc}
                    </div>
                  </div>
                ))}
              </div>
  
              {/* Bottom scribble */}
              <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="60" height="18" viewBox="0 0 60 18" fill="none">
                  <path d="M2 14 C10 4 20 16 30 8 C40 0 50 14 58 10" stroke="hsl(338,100%,45%)" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
                <a href="https://linkedin.com/in/debowale-adegoke/" target="_blank">
                  <span style={{
                    fontFamily: "cursive",
                    fontSize: "0.65rem",
                    color: "rgba(40,30,20,0.35)",
                  }}>
                    more on linkedin ↗
                  </span>
                </a>
              </div>
  
            </div>
          </TornPaperBg>
  
          {/* Tape strip across top */}
          <div className="tape1"></div>
          <div className="tape2"></div>
        </div>
      </section>
    );
  }