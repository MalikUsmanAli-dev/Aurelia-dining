import { useRef } from "react";
import { Link } from "react-router-dom";
import { cx } from "../lib/utils";

interface Props {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function MagneticButton({ to, href, children, variant = "solid", className, onClick, type = "button", disabled }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const base =
    "magnetic inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs tracking-widest2 uppercase transition-colors duration-500";
  const styles =
    variant === "solid"
      ? "bg-gold text-obsidian hover:bg-ivory"
      : "border border-gold/60 text-ivory hover:border-gold hover:bg-gold/10";

  const content = (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cx(base, styles, className)}
      style={{ transition: "transform 0.3s ease, background-color 0.5s, border-color 0.5s" }}
    >
      {children}
    </div>
  );

  if (to) return <Link to={to} onClick={onClick}>{content}</Link>;
  if (href) return <a href={href} onClick={onClick}>{content}</a>;
  return (
    <button type={type} disabled={disabled} onClick={onClick} className="w-full">
      {content}
    </button>
  );
}
