// ContactSection.jsx
import { useState } from "react";

const LINKS = [
  {
    label: "LINKEDIN",
    href: "https://linkedin.com/in/debowale-adegoke/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "GITHUB",
    href: "https://github.com/Pharraoh",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
  },
  {
    label: "INSTAGRAM",
    href: "https://instagram.com/pharraoh__",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "EMAIL",
    href: "mailto:josephjay742@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  // {
  //   label: "BEHANCE",
  //   href: "https://behance.net/yourhandle",
  //   icon: (
  //     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  //       <path d="M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M15 11V7"/>
  //     </svg>
  //   ),
  // },
];

export default function ContactSection() {
  const [phase, setPhase] = useState("idle"); // idle | shooting | split | open

  const shoot = () => {
    if (phase !== "idle") return;
    setPhase("shooting");

    setTimeout(() => setPhase("split"),   420);
    setTimeout(() => setPhase("open"),    750);
  };

  const reset = () => setPhase("idle");

  return (
    <div className="flex flex-col items-center gap-0">

      {/* ── Button / Split halves ── */}
      <div
        className="flex flex-col items-center gap-0"
        style={{
          transform: phase === "open" ? "translateY(-40px)" : "translateY(0)",
          transition: "transform 0.4s ease",
          marginTop: "-200px",
          paddingBottom: "120px"
        }}
      >

        {/* Bullet */}
        {phase === "shooting" && (
          <div
            className="absolute"
            style={{
              width: 10, height: 10,
              background: "hsl(45,100%,70%)",
              borderRadius: "50%",
              top: "50%",
              animation: "bulletFly 0.45s ease-in forwards",
            }}
          />
        )}

        {/* Main button */}
        {phase === "idle" && (
          <button
            onClick={shoot}
            style={{
              background: "hsl(338,100%,55%)",
              color: "hsl(0,0%,8%)",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.14em",
              fontSize: "1.1rem",
              padding: "14px 40px",
              borderRadius: "100px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              transition: "transform 0.15s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 5.18a2 2 0 012-2.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.91 10.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            CONTACT ME
          </button>
        )}

        {/* Split left */}
        {(phase === "split" || phase === "open") && (
          <div
            style={{
              position: "absolute", left: 0,
              height: "100%", width: "50%",
              background: "hsl(338,100%,55%)",
              borderRadius: "100px",
              display: "flex", alignItems: "center",
              overflow: "hidden",
              transform: phase === "open" ? "translateX(-60px) rotate(-8deg)" : "translateX(0)",
              opacity: phase === "open" ? 0 : 1,
              transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease 0.1s",
            }}
          >
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.14em",
              fontSize: "1.1rem",
              color: "hsl(0,0%,8%)",
              padding: "14px 24px",
              width: "100%",
              textAlign: "right",
            }}>CONTACT</span>
          </div>
        )}

        {/* Split right */}
        {(phase === "split" || phase === "open") && (
          <div
            style={{
              position: "absolute", right: 0,
              height: "100%", width: "50%",
              background: "hsl(338,100%,55%)",
              borderRadius: "100px",
              display: "flex", alignItems: "center",
              overflow: "hidden",
              transform: phase === "open" ? "translateX(60px) rotate(8deg)" : "translateX(0)",
              opacity: phase === "open" ? 0 : 1,
              transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease 0.1s",
            }}
          >
            <span style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.14em",
              fontSize: "1.1rem",
              color: "hsl(0,0%,8%)",
              padding: "14px 24px",
            }}>ME</span>
          </div>
        )}
      </div>

      {/* ── Link chips ── */}
      {phase === "open" && (
        <div className="flex flex-wrap justify-center gap-3" style={{ marginTop: 20 }}>
          {LINKS.map((link, i) => (
            <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: "100px",
                border: "1.5px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.06)",
                color: "hsl(0,0%,95%)",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                textDecoration: "none",
                opacity: 0,
                transform: "translateY(16px) scale(0.9)",
                animation: `chipIn 0.35s cubic-bezier(0.34,1.56,0.64,1) ${i * 80}ms forwards`,
                }}
            >
                {link.icon}
                {link.label}
            </a>
            ))}
        </div>
      )}

      {/* ── Reset ── */}
      {phase === "open" && (
        <button
          onClick={reset}
          style={{
            marginTop: 14,
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.3)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.72rem",
            cursor: "pointer",
            letterSpacing: "0.08em",
            animation: "fadeIn 0.4s ease 0.6s both",
          }}
        >
          ↺ reset
        </button>
      )}

      <style>{`
        @keyframes bulletFly {
          0%   { left: -20px; top: 50%; transform: translateY(-50%); opacity: 0; }
          10%  { opacity: 1; }
          80%  { left: 50%; opacity: 1; }
          100% { left: 50%; opacity: 0; transform: translateY(-50%) scale(2); }
        }
        @keyframes chipIn {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}