const SKILLS = [
    { name: "Frontend Development",       level: 95, color: "hsl(338,100%,55%)" },
    { name: "Illustration",   level: 90, color: "hsl(0,0%,95%)"     },
    { name: "Backend Development",     level: 88, color: "hsl(338,100%,55%)" },
    { name: "UI Design",      level: 80, color: "hsl(0,0%,95%)"     },
    { name: "Responsive web design",  level: 92, color: "hsl(338,100%,55%)" },
    { name: "Problem Solving",         level: 90, color: "hsl(0,0%,95%)"     },
    { name: "API Integration",      level: 95, color: "hsl(338,100%,55%)" },
    { name: "Database Design",    level: 82, color: "hsl(0,0%,95%)"     },
    { name: "Collaboration",   level: 97, color: "hsl(338,100%,55%)" },
    { name: "Attention to Detail",   level: 95, color: "hsl(0,0%,95%)"     },
  ];
  
  // Pseudo-random but stable transforms per index
  const ROTATIONS   = [-4, 2, -2, 5, -3, 3, -5, 1, -1, 4];
  const TRANSLATE_Y = [0, 6, -4, 8, -6, 4, -2, 10, -8, 2];
  
  // ── Spray Paint filter (SVG turbulence) ──────────────────────────────────────
  
  const SprayFilters = () => (
    <svg width="0" height="0" style={{ position: "absolute", pointerEvents: "none" }}>
      <defs>
        {/* rough edge / overspray effect */}
        <filter id="spray" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="turbulence" baseFrequency="0.065" numOctaves="3" seed="8" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" result="displaced"/>
          <feComposite in="displaced" in2="displaced" operator="in"/>
        </filter>
  
        {/* heavier overspray for the glow halo */}
        <filter id="sprayGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="2" seed="3" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" result="displaced"/>
          <feGaussianBlur in="displaced" stdDeviation="3" result="blur"/>
          <feComposite in="blur" in2="blur" operator="in"/>
        </filter>
  
        {/* stencil-cut roughness */}
        <filter id="stencil" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="15" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>
    </svg>
  );
  
  // ── Wall texture ──────────────────────────────────────────────────────────────
  
  const WallTexture = () => (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.015) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.01) 0%, transparent 50%),
          url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")
        `,
        opacity: 0.07,
        mixBlendMode: "overlay",
      }}
    />
  );
  
  // ── Drip ─────────────────────────────────────────────────────────────────────
  
  const Drip = ({ x, height, color, opacity = 0.6 }) => (
    <div style={{
      position: "absolute",
      top: 0,
      left: `${x}%`,
      width: "3px",
      height: `${height}px`,
      background: `linear-gradient(to bottom, ${color}, transparent)`,
      opacity,
      borderRadius: "0 0 3px 3px",
      filter: "url(#spray)",
    }} />
  );
  
  // ── Single Skill Tag ──────────────────────────────────────────────────────────
  
  const SkillTag = ({ skill, index }) => {
    const rotation  = ROTATIONS[index % ROTATIONS.length];
    const translateY = TRANSLATE_Y[index % TRANSLATE_Y.length];
    const isHot     = index % 2 === 0;
    const color     = skill.color;
  
    return (
      <div
        className="group relative flex flex-col items-center"
        style={{
          transform: `rotate(${rotation}deg) translateY(${translateY}px)`,
          transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          cursor: "default",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = `rotate(0deg) translateY(-8px) scale(1.08)`;
          e.currentTarget.style.zIndex = "10";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = `rotate(${rotation}deg) translateY(${translateY}px) scale(1)`;
          e.currentTarget.style.zIndex = "1";
        }}
      >
        {/* Spray halo glow behind the tag */}
        <div style={{
          position: "absolute",
          inset: "-12px",
          backgroundColor: color,
          opacity: 0.07,
          borderRadius: "4px",
          filter: "url(#sprayGlow)",
          pointerEvents: "none",
        }} />
  
        {/* Stencil tag */}
        <div
          style={{
            position: "relative",
            padding: "10px 20px 8px",
            border: `2px solid ${color}`,
            filter: "url(#stencil)",
          }}
        >
          {/* Spray fill behind text */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundColor: color,
            opacity: 0.08,
            filter: "url(#spray)",
          }} />
  
          {/* Skill name */}
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              letterSpacing: "0.18em",
              color: color,
              position: "relative",
              zIndex: 1,
              textShadow: `0 0 12px ${color}80, 0 0 24px ${color}30`,
              filter: "url(#stencil)",
              display: "block",
              lineHeight: 1,
            }}
          >
            {skill.name}
          </span>
        </div>
  
        {/* Level bar — hand-drawn tally style */}
        <div style={{ marginTop: "8px", display: "flex", gap: "3px", alignItems: "center" }}>
          {Array.from({ length: 10 }).map((_, i) => {
            const filled = i < Math.round(skill.level / 10);
            return (
              <div
                key={i}
                style={{
                  width: "6px",
                  height: filled ? "14px" : "10px",
                  backgroundColor: filled ? color : "rgba(255,255,255,0.1)",
                  opacity: filled ? (0.5 + i * 0.05) : 0.25,
                  transform: `rotate(${(i % 3 - 1) * 3}deg)`,
                  borderRadius: "1px",
                  transition: "all 0.2s",
                }}
              />
            );
          })}
          <span style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "0.6rem",
            color: `${color}80`,
            marginLeft: "4px",
            letterSpacing: "0.05em",
          }}>
            {skill.level}%
          </span>
        </div>
      </div>
    );
  };
  
  // ── SkillsSection ─────────────────────────────────────────────────────────────
  
  export default function SkillsSection() {
    return (
      <section
        id="skills" className="relative overflow-hidden pb-16"
        style={{ backgroundColor: "hsl(0,0%,6%)" }}
      >
        <SprayFilters />
        <WallTexture />
  
        {/* Paint drips down the wall */}
        <Drip x={8}  height={120} color="hsl(338,100%,55%)" opacity={0.4} />
        <Drip x={12} height={60}  color="hsl(338,100%,55%)" opacity={0.25}/>
        <Drip x={72} height={90}  color="hsl(0,0%,85%)"     opacity={0.15}/>
        <Drip x={88} height={140} color="hsl(338,100%,55%)" opacity={0.3} />
        <Drip x={92} height={50}  color="hsl(338,100%,55%)" opacity={0.2} />
  
        {/* Faint horizontal wall lines */}
        {[15, 35, 55, 75].map((pct, i) => (
          <div key={i} style={{
            position: "absolute",
            top: `${pct}%`,
            left: 0, right: 0,
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.025)",
            pointerEvents: "none",
          }} />
        ))}
  
        {/* Section heading — big spray tag */}
        <div className="relative pt-16 pb-4 px-6 md:px-16 flex items-end gap-6">
          {/* Heading spray blob */}
          <div style={{ position: "relative", display: "inline-block" }}>
            <div style={{
              position: "absolute",
              inset: "-20px -30px",
              background: "radial-gradient(ellipse, hsl(338,100%,55%) 0%, transparent 70%)",
              opacity: 0.08,
              filter: "url(#sprayGlow)",
              pointerEvents: "none",
            }} />
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              letterSpacing: "0.15em",
              color: "hsl(0,0%,95%)",
              lineHeight: 1,
              textShadow: "0 0 40px rgba(255,255,255,0.08)",
              filter: "url(#stencil)",
              margin: 0,
            }}>
              SKILLS
            </h2>
          </div>
  
          {/* Underline squiggle */}
          <svg
            style={{ marginBottom: "10px", opacity: 0.5 }}
            width="120" height="20" viewBox="0 0 120 20" fill="none"
          >
            <path
              d="M2 14 C15 4 30 18 45 10 C60 2 75 16 90 9 C105 2 115 12 118 10"
              stroke="hsl(338,100%,55%)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              style={{ filter: "url(#spray)" }}
            />
          </svg>
  
          {/* Small "est." tag */}
          <span style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.2)",
            marginBottom: "14px",
            letterSpacing: "0.1em",
          }}>
            est. 2019
          </span>
        </div>
  
        {/* Tags grid */}
        <div
          className="px-6 md:px-16 pt-8"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(20px, 4vw, 40px)",
            alignItems: "flex-start",
            position: "relative",
            zIndex: 1,
          }}
        >
          {SKILLS.map((skill, i) => (
            <SkillTag key={skill.name} skill={skill} index={i} />
          ))}
        </div>
  
        {/* Bottom corner tag signature */}
        <div style={{
          position: "absolute",
          bottom: "90px",
          right: "24px",
          transform: "rotate(-8deg)",
          opacity: 0.2,
        }}>
          <span style={{
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "0.7rem",
            color: "hsl(338,100%,55%)",
            letterSpacing: "0.1em",
          }}>
            BG ©
          </span>
        </div>
  
      </section>
    );
  }