<div className="min-h-[70vh]">

  {activeTab === "about" && (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

      {/* LEFT — Photo & doodles */}
        <div className="relative flex justify-center">
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
            <div style={{ transform: "rotate(-3deg)" }}>
                <RotatingText className="absolute -inset-16 md:-inset-20 z-0 opacity-40" />
                <div
                className="relative z-10 p-3 md:p-4 pb-16 md:pb-20 shadow-2xl"
                style={{ backgroundColor: "hsl(0,0%,95%)" }}
                >
                <img
                    src={potrait}
                    alt="Bruno Grazina"
                    className="w-56 h-56 md:w-72 md:h-72 object-cover block"
                    style={{ filter: "grayscale(1)" }}
                />
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 flex justify-between items-end">
                    <span className="text-lg md:text-xl" style={{ fontFamily: "'Permanent Marker', cursive", color: "hsl(0,0%,8%)" }}>
                    21 Years
                    </span>
                    <div className="text-right">
                    <span className="text-xs tracking-widest block" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "rgba(20,20,20,0.6)" }}>
                        Nationality:
                    </span>
                    <span className="text-lg md:text-xl tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "hsl(0,0%,8%)" }}>
                        PT-PT
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
        <div className="space-y-8 relative">
            <FadeIn delay={300} translateX={40}>
                <h1 className="text-7xl md:text-9xl leading-none tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "hsl(0,0%,95%)" }}>
                HI!!
                </h1>
                <p className="text-sm md:text-base mt-4 max-w-md leading-relaxed" style={{ color: "rgba(242,242,242,0.8)" }}>
                My name is Bruno Grazina, I'm a designer / illustrator / artist based in Portugal.
                </p>
            </FadeIn>

            <FadeIn delay={500} translateX={40}>
                <h2 className="text-xl md:text-2xl" style={{ fontFamily: "'Permanent Marker', cursive", color: "hsl(0,0%,95%)" }}>
                Ever since{" "}
                <span className="text-sm md:text-base font-normal" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(242,242,242,0.8)" }}>
                    I remember I've always had a special interest in visual communication, from the most simple sketch to the most elaborated presentation.
                </span>
                </h2>
            </FadeIn>

            <FadeIn delay={700} translateX={40}>
                <h2 className="text-xl md:text-2xl" style={{ fontFamily: "'Permanent Marker', cursive", color: "hsl(0,0%,95%)" }}>
                I live to{" "}
                <span className="text-sm md:text-base font-normal" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(242,242,242,0.8)" }}>
                    discover and experience creative ways to express myself and do it for others.
                </span>
                </h2>
            </FadeIn>

            <FadeIn delay={1000} className="absolute -right-4 top-0">
                <StarBurst className="w-8 h-8" style={{ color: "hsl(0,0%,95%)" }} />
            </FadeIn>
        </div>
    </div>
  )}

  {activeTab === "work" && (
    <div className="min-h-[70vh] flex items-center justify-center">
      <Experiences />
    </div>
  )}

  {activeTab === "illustration" && (
    <div className="min-h-[70vh] flex items-center justify-center">
      <h1 style={{ fontFamily: "'Bebas Neue'" }}>ILLUSTRATION</h1>
    </div>
  )}

  {activeTab === "contact" && (
    <div className="min-h-[70vh] flex items-center justify-center">
      <h1 style={{ fontFamily: "'Bebas Neue'" }}>CONTACT</h1>
    </div>
  )}

</div>


const logos = [
  {
    id: "adobe xd",
    color: "#FF61F6",
    accent: "#FF61F6",
    glow: "#FF61F6",
    svg: (
      <svg viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg" width="42" height="42">
        <rect width="240" height="234" rx="42" fill="#470137"/>
        <path d="M60 170L96 64H128L98 148H134L102 170H60Z" fill="#FF61F6"/>
        <path d="M140 170V64H172C200 64 216 82 216 117C216 152 200 170 170 170H140ZM164 86V148H170C184 148 192 136 192 117C192 98 184 86 170 86H164Z" fill="#FF61F6"/>
      </svg>
    ),
  },
  {
    id: "illustrator",
    color: "#FF9A00",
    glow: "#FF9A00",
    svg: (
      <svg viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg" width="42" height="42">
        <rect width="240" height="234" rx="42" fill="#300"/>
        <path d="M64 170H96L103 148H137L144 170H176L142 64H98L64 170ZM120 86L131 124H109L120 86Z" fill="#FF9A00"/>
        <path d="M186 170V100H162V170H186ZM174 88C182 88 188 82 188 74C188 66 182 60 174 60C166 60 160 66 160 74C160 82 166 88 174 88Z" fill="#FF9A00"/>
      </svg>
    ),
  },
  {
    id: "react",
    color: "#61DAFB",
    glow: "#61DAFB",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="42" height="42">
        <circle cx="50" cy="50" r="8" fill="#61DAFB"/>
        <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#61DAFB" strokeWidth="4"/>
        <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#61DAFB" strokeWidth="4" transform="rotate(60 50 50)"/>
        <ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#61DAFB" strokeWidth="4" transform="rotate(120 50 50)"/>
      </svg>
    ),
  },
  {
    id: "django",
    color: "#44B78B",
    glow: "#44B78B",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="42" height="42">
        <rect width="100" height="100" rx="18" fill="#0C3B2E"/>
        <text x="50" y="68" textAnchor="middle" fontFamily="Georgia,serif" fontSize="44" fontWeight="bold" fill="#44B78B">d</text>
      </svg>
    ),
  },
  {
    id: "javascript",
    color: "#F7DF1E",
    glow: "#F7DF1E",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="42" height="42">
        <rect width="100" height="100" rx="12" fill="#F7DF1E"/>
        <path d="M28 72L36 67C37.5 70 38.5 72.5 42 72.5C45.3 72.5 47 71 47 66V40H57V66.5C57 76.5 51 81 42.5 81C34.5 81 30 77 28 72Z" fill="#323330"/>
        <path d="M62 71L70 66C72 69.5 74.5 72 79 72C83 72 85.5 70 85.5 67.2C85.5 63.8 83 62.5 78.5 60.5L76 59.5C69.5 56.7 65 53.2 65 46C65 39.5 70 34.5 78 34.5C83.8 34.5 87.8 36.5 90.5 41.5L83 46C81.5 43.2 79.5 42 77 42C74.5 42 72.8 43.8 72.8 46C72.8 49 74.5 50.2 78.5 52L81 53C88.5 56.2 93 59.5 93 67C93 75 86.5 80 78.5 80C70.5 80 66 76.2 62 71Z" fill="#323330"/>
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
    id: "github",
    color: "#FFFFFF",
    glow: "#AAAAAA",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" width="42" height="42">
        <circle cx="50" cy="50" r="50" fill="#1B1F24"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M50 14C30.1 14 14 30.1 14 50C14 65.9 23.9 79.4 37.8 84.2C39.6 84.5 40.2 83.4 40.2 82.4C40.2 81.5 40.2 78.8 40.2 75.2C31.1 77.3 29 71.2 29 71.2C27.4 67.1 25 66 25 66C21.9 63.9 25.2 63.9 25.2 63.9C28.6 64.2 30.4 67.4 30.4 67.4C33.4 72.7 38.4 71.1 40.4 70.2C40.7 68 41.6 66.5 42.6 65.6C34.9 64.7 26.8 61.7 26.8 48.3C26.8 44.3 28.2 41.1 30.4 38.6C30.1 37.7 28.8 34 31 29C31 29 33.9 28 40.2 32.2C43 31.4 46 31 49 31C52 31 55 31.4 57.8 32.2C64.1 28 67 29 67 29C69.2 34 67.9 37.7 67.6 38.6C69.9 41.1 71.2 44.3 71.2 48.3C71.2 61.8 63.1 64.7 55.3 65.6C56.6 66.7 57.8 68.9 57.8 72.2C57.8 77 57.7 80.8 57.7 82.4C57.7 83.4 58.3 84.6 60.2 84.2C74.1 79.4 84 65.9 84 50C84 30.1 67.9 14 50 14Z" fill="white"/>
      </svg>
    ),
  },
  {
    id: "photoshop",
    color: "#31A8FF",
    glow: "#31A8FF",
    svg: (
      <svg viewBox="0 0 240 234" fill="none" xmlns="http://www.w3.org/2000/svg" width="42" height="42">
        <rect width="240" height="234" rx="42" fill="#001E36"/>
        <path d="M54 170V64H96C120 64 138 78 138 102C138 126 120 140 96 140H78V170H54ZM78 86V118H96C106 118 114 112 114 102C114 92 106 86 96 86H78Z" fill="#31A8FF"/>
        <path d="M152 144C152 156 160 166 178 166C190 166 198 160 202 152L182 148C180 152 178 154 174 154C170 154 166 150 166 144V142H204V134C204 114 192 100 174 100C156 100 152 116 152 132V144ZM166 130C166 124 170 118 174 118C178 118 182 124 182 130H166Z" fill="#31A8FF"/>
      </svg>
    ),
  },
];

// ── Orbit ring config ─────────────────────────────────────────────────────────

const ORBIT_RADII  = [130, 190, 240];
const ORBIT_SPEEDS = [22, 34, 20]; // seconds per revolution
const ORBIT_DIRS   = [1, -1, 1];

// Assign each logo to an orbit (9 logos across 3 rings)
const orbitAssign  = [0, 1, 0, 1, 2, 2, 1, 2, 0];
// Starting angle offset per logo so they don't clump
const angleOffsets = [0, 40, 180, 220, 20, 200, 130, 310, 100];





// ---------------------


const logoss = [
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

  // ── Django ───────────────────────────
  {
    id: "django",
    color: "#092E20",
    glow: "#44B78B",
    svg: (
      <svg viewBox="0 0 256 256" width="48" height="48" fill="none">
        <rect width="256" height="256" rx="32" fill="#092E20" />
        <path
          d="M96 60v120c0 18 10 28 28 28 10 0 18-2 26-6v-28c-6 4-12 6-18 6-8 0-10-4-10-12V60H96z"
          fill="#44B78B"
        />
        <text x="140" y="170" fontSize="64" fill="#44B78B" fontFamily="Arial">D</text>
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

  // ── Python ───────────────────────────
  {
    id: "python",
    color: "#3776AB",
    glow: "#3776AB",
    svg: (
      <svg viewBox="0 0 256 256" width="48" height="48">
        <path
          d="M128 20c-40 0-44 18-44 18v32h88V56s-4-36-44-36z"
          fill="#3776AB"
        />
        <path
          d="M128 236c40 0 44-18 44-18v-32H84v16s4 34 44 34z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },

  // ── Tailwind ─────────────────────────
  {
    id: "tailwind",
    color: "#38BDF8",
    glow: "#38BDF8",
    svg: (
      <svg viewBox="0 0 256 256" width="48" height="48">
        <path
          d="M64 128c16-48 48-64 96-48 32 10 48 32 64 64-16 48-48 64-96 48-32-10-48-32-64-64z"
          fill="#38BDF8"
        />
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

  // ── Adobe Illustrator ───────────────
  {
    id: "illustrator",
    color: "#FF9A00",
    glow: "#FF9A00",
    svg: (
      <svg viewBox="0 0 256 256" width="48" height="48">
        <rect width="256" height="256" rx="32" fill="#2C1200" />
        <text x="60" y="170" fontSize="110" fill="#FF9A00" fontWeight="bold">
          Ai
        </text>
      </svg>
    ),
  },

  // ── Adobe XD ────────────────────────
  {
    id: "xd",
    color: "#FF61F6",
    glow: "#FF61F6",
    svg: (
      <svg viewBox="0 0 256 256" width="48" height="48">
        <rect width="256" height="256" rx="32" fill="#2A001F" />
        <text x="60" y="170" fontSize="110" fill="#FF61F6" fontWeight="bold">
          XD
        </text>
      </svg>
    ),
  },
];
