// ToolsSection.jsx
// Drop into src/components/ and import in App.jsx
// Usage: import ToolsSection from "./components/ToolsSection";

import { useState, useEffect, useRef } from "react";

// ── Tool SVG Logos ────────────────────────────────────────────────────────────
// All hand-coded, brand-accurate SVG marks

const logos = [
  {
    id: "xd",
    color: "#F24E1E",
    accent: "#A259FF",
    glow: "#F24E1E",
    svg: (
      <svg viewBox="0 0 256 256" width="48" height="48">
        <rect width="256" height="256" rx="32" fill="#2A001F" />
        <text x="60" y="170" fontSize="110" fill="#FF61F6" fontWeight="bold">
          XD
        </text>
      </svg>
    ),
  },
  {
    id: "illustrator",
    color: "#FF9A00",
    glow: "#FF9A00",
    svg: (
      <svg viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <rect width="256" height="256" rx="32" fill="#2C1200" />
        <text x="60" y="170" fontSize="110" fill="#FF9A00" fontWeight="bold">
          Ai
        </text>
      </svg>
    ),
  },
  // ── Photoshop ────────────────────────
  {
    id: "photoshop",
    color: "#31A8FF",
    glow: "#31A8FF",
    svg: (
      <svg viewBox="0 0 256 256" width="48" height="48">
        <rect width="256" height="256" rx="32" fill="#001E36" />
        <text x="60" y="170" fontSize="110" fill="#31A8FF" fontWeight="bold">
          Ps
        </text>
      </svg>
    ),
  },
  // ── GitHub ───────────────────────────
  {
    id: "github",
    color: "#FFFFFF",
    glow: "#FFFFFF",
    svg: (
      <svg viewBox="0 0 256 256" width="48" height="48">
        <path
          fill="#fff"
          d="M128 20c-60 0-108 48-108 108 0 48 31 89 74 103 5 1 7-2 7-5v-18c-30 7-36-13-36-13-5-12-12-15-12-15-10-7 1-7 1-7 11 1 17 11 17 11 10 17 26 12 32 9 1-8 4-12 7-15-24-3-49-12-49-53 0-12 4-21 11-29-1-3-5-14 1-29 0 0 9-3 30 11 9-3 19-4 29-4s20 1 29 4c21-14 30-11 30-11 6 15 2 26 1 29 7 8 11 17 11 29 0 41-25 50-49 53 4 4 8 11 8 22v32c0 3 2 6 7 5 43-14 74-55 74-103 0-60-48-108-108-108z"
        />
      </svg>
    ),
  },
  {
    id: "tailwind",
    color: "#38BDF8",
    glow: "#38BDF8",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="42" height="42">
        <path d="M25 43C28 31 35 25 46 25C57 25 62 31 60 43L50 75C47 87 40 93 29 93C18 93 14 87 17 75L25 43Z" fill="#38BDF8"/>
        <path d="M60 43C63 31 70 25 81 25C92 25 96 31 93 43L83 75C80 87 73 93 62 93C51 93 47 87 50 75L60 43Z" fill="#0EA5E9"/>
      </svg>
    ),
  },
  {
    id: "python",
    color: "#3776AB",
    glow: "#4B9CD3",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="42" height="42">
        <defs>
          <linearGradient id="pyg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3776AB"/>
            <stop offset="100%" stopColor="#4B9CD3"/>
          </linearGradient>
          <linearGradient id="pyg2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFD43B"/>
            <stop offset="100%" stopColor="#FFE873"/>
          </linearGradient>
        </defs>
        <path d="M50 8C33 8 34 15 34 15L34 25H51V28H24C24 28 14 27 14 50C14 73 22 72 22 72H29V61C29 61 28 53 37 53H63C63 53 70 53 70 46V22C70 22 71 8 50 8ZM38 20C36 20 34 18 34 16C34 14 36 12 38 12C40 12 42 14 42 16C42 18 40 20 38 20Z" fill="url(#pyg1)"/>
        <path d="M50 92C67 92 66 85 66 85L66 75H49V72H76C76 72 86 73 86 50C86 27 78 28 78 28H71V39C71 39 72 47 63 47H37C37 47 30 47 30 54V78C30 78 29 92 50 92ZM62 80C64 80 66 82 66 84C66 86 64 88 62 88C60 88 58 86 58 84C58 82 60 80 62 80Z" fill="url(#pyg2)"/>
      </svg>
    ),
  },
  // ── JavaScript ───────────────────────
  {
    id: "javascript",
    color: "#F7DF1E",
    glow: "#F7DF1E",
    svg: (
      <svg viewBox="0 0 256 256" width="48" height="48">
        <rect width="256" height="256" fill="#F7DF1E" />
        <text x="70" y="170" fontSize="120" fontWeight="bold" fill="#000">
          JS
        </text>
      </svg>
    ),
  },
  // ── React ─────────────────────────────
  {
    id: "react",
    color: "#61DAFB",
    glow: "#61DAFB",
    svg: (
      <svg viewBox="0 0 256 256" width="48" height="48" fill="none">
        <circle cx="128" cy="128" r="18" fill="#61DAFB" />
        <ellipse cx="128" cy="128" rx="100" ry="40" stroke="#61DAFB" strokeWidth="12" />
        <ellipse cx="128" cy="128" rx="100" ry="40" stroke="#61DAFB" strokeWidth="12" transform="rotate(60 128 128)" />
        <ellipse cx="128" cy="128" rx="100" ry="40" stroke="#61DAFB" strokeWidth="12" transform="rotate(120 128 128)" />
      </svg>
    ),
  },
];

// ── Orbit ring config ─────────────────────────────────────────────────────────

const ORBIT_RADII  = [130, 190, 240];
const ORBIT_SPEEDS = [22, 34, 20]; // seconds per revolution
const ORBIT_DIRS   = [1, -1, 1];

// Assign each logo to an orbit
const orbitAssign = [0, 0, 1, 1, 2, 2, 1, 2];
// Starting angle offset per logo so they don't clump
const angleOffsets = [0, 180, 60, 240, 20, 200, 120, 300];

// ── Animated orbit logo ───────────────────────────────────────────────────────

const OrbitLogo = ({ logo, orbitIdx, angleOffset, paused }) => {
  const r     = ORBIT_RADII[orbitIdx];
  const speed = ORBIT_SPEEDS[orbitIdx];
  const dir   = ORBIT_DIRS[orbitIdx];

  const [angle, setAngle] = useState(angleOffset);
  const rafRef = useRef(null);
  const lastRef = useRef(null);

  useEffect(() => {
    const tick = (now) => {
      if (!paused) {
        const dt = lastRef.current ? (now - lastRef.current) / 1000 : 0;
        setAngle(a => a + dir * (360 / speed) * dt);
      }
      lastRef.current = now;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused, dir, speed]);

  const rad = (angle * Math.PI) / 180;
  const x   = Math.cos(rad) * r;
  const y   = Math.sin(rad) * r;

  // Counter-rotate logo so it stays upright
  const counterRotate = -angle;

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: 0,
        height: 0,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
          pointerEvents: "all",
        }}
      >
        <LogoChip logo={logo} counterRotate={counterRotate} />
      </div>
    </div>
  );
};

// ── Logo chip with hover ──────────────────────────────────────────────────────

const LogoChip = ({ logo, counterRotate }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "72px",
        height: "72px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "hsl(0,0%,10%)",
        border: `1.5px solid ${hovered ? logo.glow : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered
          ? `0 0 24px ${logo.glow}66, 0 0 48px ${logo.glow}22, inset 0 0 12px ${logo.glow}11`
          : "0 4px 24px rgba(0,0,0,0.5)",
        transform: `rotate(${counterRotate}deg) scale(${hovered ? 1.18 : 1})`,
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s",
        cursor: "pointer",
        backgroundColor: hovered ? `${logo.glow}18` : "hsl(0,0%,10%)",
        zIndex: hovered ? 10 : 1,
        position: "relative",
      }}
    >
      <div style={{
        width: "42px",
        height: "42px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        filter: hovered ? `drop-shadow(0 0 8px ${logo.glow}cc)` : "none",
        transition: "filter 0.3s",
      }}>
        {logo.svg}
      </div>

      {/* Hover label */}
      <div style={{
        position: "absolute",
        bottom: "-28px",
        left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "0.65rem",
        letterSpacing: "0.15em",
        color: logo.glow,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.2s",
        whiteSpace: "nowrap",
        textShadow: `0 0 8px ${logo.glow}`,
        pointerEvents: "none",
      }}>
        {logo.id.toUpperCase()}
      </div>
    </div>
  );
};

// ── Orbit rings (decorative) ──────────────────────────────────────────────────

const OrbitRings = ({ paused }) => (
  <svg
    style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }}
    width="560" height="560" viewBox="-280 -280 560 560"
  >
    {ORBIT_RADII.map((r, i) => (
      <circle
        key={i}
        cx="0" cy="0" r={r}
        fill="none"
        stroke="rgba(255,255,255,0.04)"
        strokeWidth="1"
        strokeDasharray={i === 1 ? "6 8" : "none"}
      />
    ))}
    {/* Rotating glow arc on innermost ring */}
    <g style={{ animation: paused ? "none" : `spin ${ORBIT_SPEEDS[0]}s linear infinite` }}>
      <path
        d={`M ${ORBIT_RADII[0]} 0 A ${ORBIT_RADII[0]} ${ORBIT_RADII[0]} 0 0 1 ${Math.cos(Math.PI * 0.4) * ORBIT_RADII[0]} ${Math.sin(Math.PI * 0.4) * ORBIT_RADII[0]}`}
        fill="none"
        stroke="hsl(338,100%,55%)"
        strokeWidth="2"
        strokeOpacity="0.4"
        strokeLinecap="round"
      />
    </g>
    {/* Rotating glow arc on outermost ring */}
    <g style={{ animation: paused ? "none" : `spin ${ORBIT_SPEEDS[2]}s linear infinite reverse` }}>
      <path
        d={`M ${ORBIT_RADII[2]} 0 A ${ORBIT_RADII[2]} ${ORBIT_RADII[2]} 0 0 1 ${Math.cos(Math.PI * 0.3) * ORBIT_RADII[2]} ${Math.sin(Math.PI * 0.3) * ORBIT_RADII[2]}`}
        fill="none"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.5"
        strokeOpacity="0.3"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

// ── Centre piece ──────────────────────────────────────────────────────────────

const CentrePiece = ({ paused, setPaused }) => (
  <div
    onClick={() => setPaused(p => !p)}
    style={{
      position: "absolute",
      top: "50%", left: "50%",
      transform: "translate(-50%,-50%)",
      width: "80px", height: "80px",
      borderRadius: "50%",
      backgroundColor: "hsl(0,0%,8%)",
      border: "2px solid rgba(255,255,255,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      zIndex: 20,
      transition: "border-color 0.3s, box-shadow 0.3s",
      boxShadow: paused
        ? "0 0 0 8px rgba(255,255,255,0.03), 0 0 32px hsl(338,100%,55%)44"
        : "0 0 0 8px rgba(255,255,255,0.03), 0 0 16px rgba(0,0,0,0.5)",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = "hsl(338,100%,55%)";
      e.currentTarget.style.boxShadow = "0 0 0 8px rgba(255,255,255,0.03), 0 0 32px hsl(338,100%,55%)66";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
      e.currentTarget.style.boxShadow = "0 0 0 8px rgba(255,255,255,0.03), 0 0 16px rgba(0,0,0,0.5)";
    }}
  >
    {/* BG initials */}
    <div style={{
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: "1.1rem",
      letterSpacing: "0.1em",
      color: paused ? "hsl(338,100%,55%)" : "hsl(0,0%,60%)",
      transition: "color 0.3s",
      userSelect: "none",
    }}>
      {paused ? (
        "▶"
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h7l-1 8 12-14h-7l-1-6z" />
        </svg>
      )}
    </div>
  </div>
);

// ── Floating particles ────────────────────────────────────────────────────────

const Particles = () => {
  const count = 18;
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {Array.from({ length: count }).map((_, i) => {
        const size   = 1.5 + (i % 3) * 1.5;
        const left   = (i * 37 + 11) % 100;
        const delay  = (i * 0.7) % 6;
        const dur    = 6 + (i % 4) * 2;
        const color  = i % 3 === 0 ? "hsl(338,100%,55%)" : "rgba(255,255,255,0.4)";
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: "-10px",
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              backgroundColor: color,
              opacity: 0.5,
              animation: `floatUp ${dur}s ${delay}s ease-in infinite`,
            }}
          />
        );
      })}
    </div>
  );
};

// ── ToolsSection ──────────────────────────────────────────────────────────────

export default function ToolsSection() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="tools" className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center pb-32"
      style={{ backgroundColor: "hsl(0,0%,5%)" }}
    >
      {/* Radial dark bg glow */}
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "600px", height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <Particles />

      {/* Orbit system */}
      <div style={{ position: "relative", width: "560px", height: "560px", maxWidth: "95vw", maxHeight: "95vw" }}>
        <OrbitRings paused={paused} />

        {logos.map((logo, i) => (
          <OrbitLogo
            key={logo.id}
            logo={logo}
            orbitIdx={orbitAssign[i]}
            angleOffset={angleOffsets[i]}
            paused={paused}
          />
        ))}

        <CentrePiece paused={paused} setPaused={setPaused} />
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes floatUp {
          0%   { transform: translateY(0)    scale(1);   opacity: 0.5; }
          80%  { transform: translateY(-80vh) scale(1.5); opacity: 0.1; }
          100% { transform: translateY(-90vh) scale(0);   opacity: 0; }
        }
      `}</style>
    </section>
  );
}