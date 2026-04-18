import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../Preloader.css";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState("INITIALIZING OPIUM OS");

  // ✅ SCROLL LOCK (correct place)
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
  
    const originalHtmlOverflow = html.style.overflow;
    const originalBodyOverflow = body.style.overflow;
  
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
  
    return () => {
      html.style.overflow = originalHtmlOverflow;
      body.style.overflow = originalBodyOverflow;
    };
  }, []);

  // ✅ LOADING LOGIC
  useEffect(() => {
    const logs = [
      "MOUNTING ERA ASSETS",
      "SYNCING DIE LIT",
      "INJECTING WLR",
      "FINALIZING I AM MUSIC",
      "BYPASSING SECURITY",
      "SYSTEM STABLE",
    ];

    const timer = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 12, 100);
        setLog(logs[Math.floor(Math.random() * logs.length)]);

        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 600);
        }

        return next;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-black text-white font-mono overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="h-full w-full flex flex-col justify-between p-8 relative">
        {/* TOP */}
        <div className="flex justify-between text-xs uppercase opacity-60 tracking-widest">
          <span>PHARRAOH OS</span>
          <span>v0.01</span>
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 id="count" className="text-[22vw] leading-none font-black">
            {Math.floor(progress)}%
          </h1>

          <p className="mt-4 tracking-widest uppercase text-xs opacity-70">
            {log}
          </p>

          {/* <p className="mt-6 text-2xl font-serif tracking-wide">
            KingVamp
          </p> */}
        </div>

        {/* BOTTOM */}
        <div>
          <div className="h-[2px] w-full bg-white/20 overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-2 flex justify-between text-[10px] uppercase opacity-50 tracking-widest">
            <span>ACCESSING ARCHIVE</span>
            <span>{Math.floor(progress * 1337)} KB</span>
          </div>
        </div>

        {/* NOISE */}
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
      </div>
    </motion.div>
  );
}