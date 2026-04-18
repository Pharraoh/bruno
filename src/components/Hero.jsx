import { useState, useEffect } from "react";
import potrait from "../assets/potrait.png";
import "../Hero.css";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';


// ── SVG Doodles ───────────────────────────────────────────────────────────────

const FireIcon = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 64 64" fill="none">
    <path d="M32 4C32 4 20 20 20 36C20 44 25 52 32 56C39 52 44 44 44 36C44 20 32 4 32 4Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 28C32 28 26 36 26 42C26 46 29 50 32 52C35 50 38 46 38 42C38 36 32 28 32 28Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const StarBurst = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 48 48" fill="none">
    <path d="M24 4L28 18L42 14L32 24L42 34L28 30L24 44L20 30L6 34L16 24L6 14L20 18L24 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const CrossMark = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 32 32" fill="none">
    <path d="M6 6L26 26M26 6L6 26" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);
const PlusSign = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 32 32" fill="none">
    <path d="M16 4V28M4 16H28" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);
const AtSign = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="3"/>
    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="3"/>
    <path d="M32 24V30C32 34 36 36 40 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);
const SkullDoodle = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="26" r="20" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="22" cy="22" r="5" fill="currentColor"/>
    <circle cx="38" cy="22" r="5" fill="currentColor"/>
    <path d="M24 36L26 42L28 36L30 42L32 36L34 42L36 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 46V54M30 46V54M38 46V54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
const ArrowCurved = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 100 40" fill="none">
    <path d="M5 30C20 30 40 10 60 15C80 20 90 25 95 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M88 15L95 20L88 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Tab Bar Icons ─────────────────────────────────────────────────────────────

const IconHome = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
    <path d="M9 21V12h6v9"/>
  </svg>
);
const IconGrid = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.6} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/>
    <rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
);
const IconSkills = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor"
    strokeWidth={active ? 2.2 : 1.6}
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M12 3a7 7 0 00-7 7c0 2.5 1.5 4.5 3 5.5V18a2 2 0 002 2h4a2 2 0 002-2v-2.5c1.5-1 3-3 3-5.5a7 7 0 00-7-7z"/>
    <path d="M9 21h6"/>
  </svg>
);
const IconTools = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor"
    strokeWidth={active ? 2.2 : 1.6}
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a7.97 7.97 0 000-6"/>
    <path d="M4.6 9a7.97 7.97 0 000 6"/>
  </svg>
);
const IconProjects = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
    stroke="currentColor"
    strokeWidth={active ? 2.2 : 1.6}
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M3 7h6l2 2h10v10a2 2 0 01-2 2H3z"/>
    <path d="M3 7v-2a2 2 0 012-2h4l2 2"/>
  </svg>
);
const IconMail = ({ active }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.6} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
);

const TABS = [
  { id: "about",        label: "About",        Icon: IconHome  },
  { id: "work",         label: "Work",         Icon: IconGrid  },
  { id: "skills",       label: "skills",       Icon: IconSkills },
  { id: "tools",        label: "tools",        Icon: IconTools },
  { id: "projects",     label: "projects",     Icon: IconProjects },
  { id: "contact",      label: "Contact",      Icon: IconMail  },
];

// ── Bottom Tab Bar ────────────────────────────────────────────────────────────

const TabBar = ({ active, setActive }) => {
  const activeIdx = TABS.findIndex(t => t.id === active);
  
  return (
    <div
      className="fixed bottom-6 left-1/2 z-[100]"
      style={{ transform: "translateX(-50%)" }}
    >
      <div
        className="relative flex items-center"
        style={{
          backgroundColor: "hsl(0,0%,12%)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "100px",
          padding: "6px",
          gap: "2px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        {/* Sliding pill background */}
        <div
          style={{
            position: "absolute",
            top: "6px",
            left: `calc(6px + ${activeIdx} * (100% - 12px) / ${TABS.length})`,
            width: `calc((100% - 12px) / ${TABS.length})`,
            height: "calc(100% - 12px)",
            backgroundColor: "hsl(338,100%,55%)",
            borderRadius: "100px",
            transition: "left 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
            zIndex: 0,
          }}
        />

        {TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                const el = document.getElementById(tab.id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
                setActive(tab.id); // optional, just for UI highlight
              }}
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: isActive ? "10px 20px" : "10px 16px",
                borderRadius: "100px",
                border: "none",
                background: "none",
                cursor: "pointer",
                color: isActive ? "hsl(0,0%,8%)" : "hsl(0,0%,55%)",
                transition: "color 0.2s, padding 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                whiteSpace: "nowrap",
              }}
            >
              <tab.Icon active={isActive} />
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.12em",
                  fontSize: "0.78rem",
                  maxWidth: isActive ? "80px" : "0px",
                  overflow: "hidden",
                  opacity: isActive ? 1 : 0,
                  transition: "max-width 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s",
                  display: "inline-block",
                }}
              >
            
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ── Rotating Text Ring ────────────────────────────────────────────────────────

const RotatingText = ({ className }) => {
  const text = " BUILDER • DESIGNER • DEVELOPER • ";
  return (
    <div className={className}>
      <svg viewBox="0 0 300 300" className="w-full h-full animate-[spin_20s_linear_infinite]">
        <defs>
          <path id="circlePath" d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"/>
        </defs>
        <text fill="hsl(0,0%,95%)" fontSize="18" fontFamily="'Bebas Neue', sans-serif" letterSpacing="6">
          <textPath href="#circlePath">{text}{text}</textPath>
        </text>
      </svg>
    </div>
  );
};

// ── Animation helper ──────────────────────────────────────────────────────────

const useVisible = (delay = 0) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return visible;
};

const FadeIn = ({ children, delay = 0, className = "", translateX = 0, translateY = 0, scale = 1 }) => {
  const visible = useVisible(delay);
  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate(0,0) scale(1)"
          : `translate(${translateX}px, ${translateY}px) scale(${scale})`,
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ── Main App ──────────────────────────────────────────────────────────────────

export default function App() {
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, { threshold: 0.55 });

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen overflow-hidden relative"
      style={{
        backgroundColor: "hsl(0,0%,8%)",
        color: "hsl(0,0%,95%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Inter:wght@300;400;500;600;700;900&family=Bebas Neue&display=swap"
        rel="stylesheet"
      />

      {/* Noise overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          opacity: 0.03,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Page */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20 pb-40 relative">

        {/* Main content grid */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[60vh] md:min-h-[70vh]">

          {/* Left — Photo & doodles */}
          <div id="photo" className="relative flex justify-center">

            <FadeIn delay={300} scale={0} className="absolute -top-8 left-4 md:left-8 z-10">
              <FireIcon className="w-12 h-12" style={{ color: "hsl(0,0%,95%)", animation: "scribble 3s ease-in-out infinite" }} />
            </FadeIn>

            <FadeIn delay={500} className="absolute -top-4 left-20 md:left-28 z-10">
              <CrossMark className="w-6 h-6" style={{ color: "hsl(338,100%,55%)" }} />
            </FadeIn>

            <FadeIn delay={600} className="absolute top-2 left-24 md:left-36 z-10">
              <PlusSign className="w-5 h-5" style={{ color: "hsl(338,100%,55%)" }} />
            </FadeIn>

            <FadeIn delay={400} translateY={-20} className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
              <span
                className="text-2xl md:text-3xl italic block"
                style={{ fontFamily: "'Permanent Marker', cursive", color: "hsl(0,0%,95%)", transform: "rotate(-5deg)" }}
              >
                About Me
              </span>
            </FadeIn>

            <FadeIn delay={700} scale={0} className="absolute -top-6 right-4 md:right-12 z-10">
              <SkullDoodle className="w-16 h-16" style={{ color: "hsl(0,0%,95%)", animation: "float 4s ease-in-out infinite" }} />
            </FadeIn>

            <FadeIn delay={800} className="absolute top-1/2 -left-2 md:left-0 z-10">
              <AtSign className="w-10 h-10" style={{ color: "hsl(338,100%,55%)" }} />
            </FadeIn>

            {/* Polaroid */}
            <FadeIn delay={100} scale={0.8} className="relative z-0">
              <div id="polaroid" style={{ transform: "rotate(-3deg)" }}>
                <RotatingText className="absolute -inset-16 md:-inset-20 z-0 opacity-40" />
                <div
                  className="relative z-10 p-3 md:p-4 pb-16 md:pb-20 shadow-2xl"
                  style={{ backgroundColor: "hsl(0,0%,95%)" }}
                >
                  <img
                    src={potrait}
                    alt="Bruno Grazina"
                    className="w-44 h-44 sm:w-52 sm:h-52 md:w-72 md:h-72 object-cover block object-cover block"
                    style={{ filter: "grayscale(1)" }}
                  />
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 flex justify-between items-end">
                    <span className="text-lg md:text-xl" style={{ fontFamily: "'Permanent Marker', cursive", color: "hsl(0,0%,8%)" }}>
                      !
                    </span>
                    <div className="text-right">
                      <span className="text-xs tracking-widest block" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(20,20,20,0.6)" }}>
                        Nationality:
                      </span>
                      <span className="text-lg md:text-xl tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "hsl(0,0%,8%)" }}>
                        NG
                      </span>
                    </div>
                  </div>
                </div>
                <svg className="absolute -bottom-8 -right-8 w-32 h-32 z-20" viewBox="0 0 120 120" fill="none">
                  <path d="M10 110C30 90 50 60 60 40C70 20 90 10 110 30" stroke="hsl(338,100%,55%)" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
            </FadeIn>
          </div>

          {/* <DotLottieReact
            src="https://lottie.host/587222fc-15d9-42cd-9233-e216006523b2/92PCMOUJHV.lottie"
            loop
            autoplay
          /> */}

          {/* Right — Text */}
          <div id="bio" className="space-y-8 relative">
            <FadeIn delay={300} translateX={40}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl leading-none tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "hsl(0,0%,95%)" }}>
                HI!!
              </h1>
              <p className="text-sm md:text-base mt-4 max-w-md md:max-w-lg lg:max-w-xl leading-relaxed leading-relaxed" style={{ color: "rgba(242,242,242,0.8)" }}>
                My name is Debowale, I’m a full-stack developer and digital creative based in Lagos, Nigeria.
              </p>
            </FadeIn>

            <FadeIn delay={500} translateX={40}>
              <h2 className="text-xl md:text-2xl" style={{ fontFamily: "'Permanent Marker', cursive", color: "hsl(0,0%,95%)" }}>
                Ever since{" "}
                <span className="text-sm md:text-base font-normal" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(242,242,242,0.8)" }}>
                  I started exploring technology, I’ve been drawn to building things — from simple interfaces to fully realized web applications
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={700} translateX={40}>
              <h2 className="text-xl md:text-2xl" style={{ fontFamily: "'Permanent Marker', cursive", color: "hsl(0,0%,95%)" }}>
                I enjoy{" "}
                <span className="text-sm md:text-base font-normal" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(242,242,242,0.8)" }}>
                  finding creative ways to merge code, design, and problem-solving to create experiences that feel both purposeful and human.
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={1000} className="absolute -right-4 top-0">
              <StarBurst className="w-8 h-8" style={{ color: "hsl(0,0%,95%)" }} />
            </FadeIn>
          </div>
        </section>

        {/* Footer */}
        {/* <FadeIn delay={1000} translateY={30} className="mt-16 md:mt-24">
          <Footer />
        </FadeIn> */}
      </div>

      {/* Bottom Tab Bar */}
      <TabBar active={activeTab} setActive={setActiveTab} />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes scribble {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
      `}</style>
    </div>
  );
}