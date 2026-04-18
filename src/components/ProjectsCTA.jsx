import { useState } from "react";
import "../Projects.css"

export default function ProjectsCTA() {
  const [phase, setPhase] = useState("idle"); // idle | shooting | split | open

  const shoot = () => {
    if (phase !== "idle") return;
    setPhase("shooting");

    setTimeout(() => setPhase("split"), 420);
    setTimeout(() => setPhase("open"), 750);
  };

  const reset = () => setPhase("idle");

  return (
    <div className="flex flex-col items-center pb-[120px]">

      {/* ── Button Area ── */}
      <div
        className="archive-wrap"
        style={{ position: "relative", height: "52px" }}
      >
        <div className="lightning-scribble" />

        {/* Bullet */}
        {phase === "shooting" && (
          <div
            style={{
              position: "absolute",
              width: 10,
              height: 10,
              background: "hsl(45,100%,70%)",
              borderRadius: "50%",
              top: "50%",
              left: "-20px",
              transform: "translateY(-50%)",
              animation: "bulletFly 0.45s ease-in forwards",
              zIndex: 3,
            }}
          />
        )}

        {/* ORIGINAL BUTTON (UNCHANGED DESIGN) */}
        {phase === "idle" && (
          <button className="spill-btn" onClick={shoot}>
            CONTACT ME
          </button>
        )}

        {/* SPLIT OVERLAY */}
        {(phase === "split" || phase === "open") && (
          <>
            {/* LEFT HALF */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "50%",
                background: "inherit",
                borderRadius: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingRight: "20px",
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.14em",
                transform:
                  phase === "open"
                    ? "translateX(-60px) rotate(-8deg)"
                    : "translateX(0)",
                opacity: phase === "open" ? 0 : 1,
                transition:
                  "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
                zIndex: 2,
              }}
            >
              CONTACT
            </div>

            {/* RIGHT HALF */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                height: "100%",
                width: "50%",
                background: "inherit",
                borderRadius: "inherit",
                display: "flex",
                alignItems: "center",
                paddingLeft: "20px",
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.14em",
                transform:
                  phase === "open"
                    ? "translateX(60px) rotate(8deg)"
                    : "translateX(0)",
                opacity: phase === "open" ? 0 : 1,
                transition:
                  "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
                zIndex: 2,
              }}
            >
              ME
            </div>
          </>
        )}

        <div className="button-glitch-line" />
      </div>

      {/* ── AFTER OPEN (links / content) ── */}
      {phase === "open" && (
        <div
          className="flex flex-wrap justify-center gap-3"
          style={{ marginTop: 24 }}
        >
          <a className="chip" href="https://linkedin.com/in/debowale-adegoke/">LINKEDIN</a>
          <a className="chip" href="https://github.com/Pharraoh">GITHUB</a>
          <a className="chip" href="https://instagram.com/pharraoh__">INSTAGRAM</a>
          <a className="chip" href="mailto:josephjay742@gmail.com">EMAIL</a>
        </div>
      )}

      {/* RESET */}
      {phase === "open" && (
        <button
          onClick={reset}
          style={{
            marginTop: 14,
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.3)",
            fontSize: "0.75rem",
            cursor: "pointer",
          }}
        >
          ↺ reset
        </button>
      )}

      {/* Animations */}
      <style>{`
        @keyframes bulletFly {
          0%   { left: -20px; opacity: 0; }
          10%  { opacity: 1; }
          80%  { left: 50%; opacity: 1; }
          100% { left: 50%; opacity: 0; transform: scale(2); }
        }
      `}</style>
    </div>
  );
}