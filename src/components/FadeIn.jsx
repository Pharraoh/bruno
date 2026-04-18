import { useState, useEffect } from "react";

// hook
const useVisible = (delay = 0) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return visible;
};

// component
export default function FadeIn({
  children,
  delay = 0,
  className = "",
  translateX = 0,
  translateY = 0,
  scale = 1,
}) {
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
}