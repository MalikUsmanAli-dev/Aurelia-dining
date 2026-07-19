import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { dishes, categories } from "../data/dishes";
import { cx } from "../lib/utils";
import panoramic from "../assets/images/panaromic.png";

export default function Menu() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? dishes : dishes.filter((d) => d.category === active);

  return (
    <main className="pt-32 pb-28">
      <section className="relative h-[50vh] flex items-end px-6 md:px-10 mb-20">
        <div className="absolute inset-0 -z-10">
          <img src={panoramic} alt="Dining room" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-obsidian/70" />
        </div>
        <div className="max-w-7xl mx-auto w-full pb-14">
          <SectionHeading numeral="Menu" eyebrow="Seasonal Selections" title="The Aurelia Menu" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cx(
                "px-6 py-2.5 text-xs tracking-widest2 uppercase border transition-colors duration-400 cursor-hover",
                active === c
                  ? "border-gold bg-gold text-obsidian"
                  : "border-gold/30 text-ivory/60 hover:border-gold/70 hover:text-ivory"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            {filtered.map((dish) => (
              <div key={dish.id} className="group cursor-hover">
                <div className="reveal-mask h-72 mb-6">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                  />
                </div>
                <div className="flex items-baseline justify-between border-b border-gold/15 pb-3">
                  <h3 className="font-display text-xl">{dish.name}</h3>
                  <span className="text-gold font-accent text-lg whitespace-nowrap ml-4">{dish.price}</span>
                </div>
                <p className="text-ivory/50 text-sm mt-3 leading-relaxed">{dish.description}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
