import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function FloatingReserve() {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (location.pathname === "/reservations" || !show) return null;

  return (
    <Link
      to="/reservations"
      className="magnetic fixed bottom-8 right-6 md:right-10 z-[500] bg-gold text-obsidian text-[0.65rem] tracking-widest2 uppercase px-6 py-4 shadow-2xl hover:bg-ivory transition-colors duration-500"
    >
      Reserve a Table
    </Link>
  );
}
