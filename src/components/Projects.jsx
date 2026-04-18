import { useState } from "react";
import { PROJECTS } from "../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Projects.css";

// reuse your FadeIn component
import FadeIn from "./FadeIn"; // adjust path if needed

// ── Project Card ─────────────────────────────────────────────

const ProjectCard = ({ project, index, onClick }) => {
  const rotations = [-3, 2, -1, 3];
  const rotation = rotations[index % rotations.length];

  return (
    <FadeIn delay={index * 150} scale={0.9}>
      <div
        onClick={() => onClick(project)}
        className="cursor-pointer group relative"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div
          className="p-3 pb-12 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-0"
          style={{ backgroundColor: "hsl(0,0%,95%)" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition duration-300"
          />

          {/* Title */}
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
            <span
              style={{
                fontFamily: "'Permanent Marker', cursive",
                color: "hsl(0,0%,8%)",
              }}
            >
              {project.title}
            </span>
          </div>
        </div>

        {/* Tags (stickers) */}
        <div className="absolute -top-3 -right-2 flex gap-2 flex-wrap">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs"
              style={{
                background: "hsl(338,100%,55%)",
                color: "#111",
                fontFamily: "'Bebas Neue'",
                transform: `rotate(${i % 2 ? -8 : 6}deg)`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

// ── Modal ────────────────────────────────────────────────────

const ProjectModal = ({ project, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(8px)",
      }}
      onClick={onClose}
    >
      <div
        className="relative p-6 max-w-xl w-full"
        style={{
          background: "hsl(0,0%,95%)",
          transform: "rotate(-1deg)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover mb-4"
        />

        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <h3
            className="text-2xl mb-2"
            style={{ fontFamily: "'Permanent Marker'" }}
          >
            {project.title}
          </h3>
        </a>

        <p className="text-sm text-gray-700 mb-4">
          {project.desc}
        </p>

        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs"
              style={{
                background: "#111",
                color: "#fff",
                fontFamily: "'Bebas Neue'",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-black text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

// ── Main Work Section ────────────────────────────────────────

export default function WorkSection() {
  const [selected, setSelected] = useState(null);

  const [phase, setPhase] = useState("idle"); // idle | shooting | split | open

  const shoot = () => {
    if (phase !== "idle") return;
    setPhase("shooting");

    setTimeout(() => setPhase("split"), 420);
    setTimeout(() => setPhase("open"), 750);
  };

  const reset = () => setPhase("idle");

  return (
    <section id="projects" className="relative min-h-[60vh] md:min-h-[70vh]">

      {/* Title */}
      {/* <FadeIn delay={200}>
        <h2
          className="text-4xl mb-10"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          My Work
        </h2>
      </FadeIn> */}

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onClick={setSelected}
          />
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}

      <br />
      <br />

      <FadeIn delay={200}>
        <div id="contact" className="flex flex-col items-center pb-[120px]">
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
              <a className="chip" href="https://linkedin.com/in/debowale-adegoke/" target="_blank">LINKEDIN</a>
              <a className="chip" href="https://github.com/Pharraoh" target="_blank">GITHUB</a>
              <a className="chip" href="https://instagram.com/pharraoh__" target="_blank">INSTAGRAM</a>
              <a className="chip" href="mailto:josephjay742@gmail.com" target="_blank">EMAIL</a>
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
              X
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
      </FadeIn>
    </section>
    
  );
}