import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 900px)").matches) return;
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, .magnetic, .cursor-hover"));
    };

    const raf = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(raf);
    };

    window.addEventListener("mousemove", move);
    requestAnimationFrame(raf);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div
        ref={ringRef}
        className="cursor-ring hidden md:block"
        style={{
          width: hovering ? "64px" : "38px",
          height: hovering ? "64px" : "38px",
          opacity: hovering ? 1 : 0.6,
        }}
      />
    </>
  );
}
