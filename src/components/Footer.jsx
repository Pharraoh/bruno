import React from "react";

const ArrowCurved = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 100 40" fill="none">
    <path d="M5 30C20 30 40 10 60 15C80 20 90 25 95 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M88 15L95 20L88 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Footer = () => {
  return (
    <div className="mt-16 md:mt-24">
      <div className="flex justify-center mb-10">
        <div className="flex items-center gap-3">
          <div className="grid grid-cols-2 gap-0.5">
            {[0,1,2,3].map(i => (
              <div key={i} className="w-3 h-3" style={{ backgroundColor: "hsl(0,0%,95%)" }} />
            ))}
          </div>
          <div>
            <div className="text-lg leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.3em" }}>
              BRUNO
            </div>
            <div className="text-lg leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.3em" }}>
              GRAZINA
            </div>
          </div>
        </div>
      </div>

      <div
        className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        style={{ borderColor: "rgba(242,242,242,0.2)", color: "rgba(242,242,242,0.7)" }}
      >
        <a
          href="mailto:brugrazina@gmail.com"
          style={{ color: "inherit", textDecoration: "none" }}
          onMouseEnter={e => e.currentTarget.style.color = "hsl(338,100%,55%)"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(242,242,242,0.7)"}
        >
          <span className="underline">brugrazina@gmail.com</span>
        </a>

        <span>+351 936 562 723</span>

        <a
          href="https://www.behance.net/brunoluden"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
          style={{ color: "inherit", textDecoration: "none" }}
          onMouseEnter={e => e.currentTarget.style.color = "hsl(338,100%,55%)"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(242,242,242,0.7)"}
        >
          <span className="underline">www.behance.net/brunoluden</span>
          <ArrowCurved className="w-12 h-5" style={{ color: "rgba(242,242,242,0.5)" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;