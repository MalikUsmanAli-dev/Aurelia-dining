import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cx } from "../lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/experiences", label: "Experiences" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cx(
        "fixed top-0 left-0 right-0 z-[900] transition-all duration-500",
        scrolled ? "bg-obsidian/90 backdrop-blur-md py-3 border-b border-gold/10" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link to="/" className="font-display text-xl tracking-widest2 text-ivory">
          AURELIA
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cx(
                  "eyebrow relative py-1 transition-colors",
                  isActive ? "text-gold" : "text-ivory/70 hover:text-gold"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/reservations"
            className="magnetic border border-gold/60 px-6 py-2.5 text-[0.65rem] tracking-widest2 uppercase text-gold hover:bg-gold hover:text-obsidian transition-colors duration-500"
          >
            Reserve
          </Link>
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-ivory eyebrow"
          aria-label="Open menu"
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-obsidian z-[950] flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 eyebrow text-ivory"
            >
              Close
            </button>
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-ivory hover:text-gold"
                >
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
            <Link
              to="/reservations"
              onClick={() => setOpen(false)}
              className="mt-4 border border-gold px-8 py-3 text-xs tracking-widest2 uppercase text-gold"
            >
              Reserve
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
