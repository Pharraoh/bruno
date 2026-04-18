import React, { useState, useEffect, useRef } from "react";
import "../CoverflowCarousel.css";

const cardsData = [
  { id: 1, title: "Marketplace Hub", bg: "#fff" },
  { id: 2, title: "Dating App", bg: "#fff" },
  { id: 3, title: "FoodSnap AI", bg: "#fff" },
  { id: 4, title: "Experimental UI", bg: "#fff" },
  { id: 5, title: "Side Quest", bg: "#fff" },
];

const CoverflowCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="carousel-section">

      <h2 className="carousel-title">MY WORK</h2>

      <div className="carousel-container">
        {cardsData.map((card, index) => {
          const offset = index - activeIndex;
          const absOffset = Math.abs(offset);
          const sign = Math.sign(offset);

          const isCenter = offset === 0;

          const baseScale = 1 - absOffset * 0.2;
          const translateX = sign * absOffset * 170;

          // 🔥 RESTORED GROW EFFECT
          const entryScale = isVisible ? baseScale : 0.2;
          const entryOpacity = isVisible ? 1 - absOffset * 0.3 : 0;

          const rotate = offset * 5;

          return (
            <div
              key={card.id}
              className={`carousel-card ${isCenter ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              style={{
                transform: `
                  translateX(calc(-50% + ${translateX}px))
                  scale(${entryScale})
                  rotate(${rotate}deg)
                `,
                opacity: entryOpacity,
                zIndex: 10 - absOffset,
              }}
            >
              {/* polaroid top image block */}
              <div className="polaroid-image" />

              {/* torn paper edge effect */}
              <div className="torn-edge" />

              {/* handwritten title */}
              <h2 className="card-title">{card.title}</h2>

              {/* small scribble note */}
              <p className="card-note">click to open</p>

              {/* nav */}
              {offset === -1 && (
                <button
                  className="nav-arrow left"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((p) => Math.max(p - 1, 0));
                  }}
                >
                  ←
                </button>
              )}

              {offset === 1 && (
                <button
                  className="nav-arrow right"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((p) =>
                      Math.min(p + 1, cardsData.length - 1)
                    );
                  }}
                >
                  →
                </button>
              )}
            </div>
          );
        })}
      </div>

      <button className="spill-btn">ENTER WORK ARCHIVE</button>
    </section>
  );
};

export default CoverflowCarousel;