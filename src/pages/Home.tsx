import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MagneticButton from "../components/MagneticButton";
import SectionHeading from "../components/SectionHeading";
import RevealImage from "../components/RevealImage";
import EmberField from "../components/EmberField";
import { dishes } from "../data/dishes";
import { experiences } from "../data/experiences";
import { galleryImages } from "../data/gallery";
import { testimonials } from "../data/testimonials";
import { formatNumber } from "../lib/utils";

import panoramic from "../assets/images/panaromic.png";
import chef from "../assets/images/chef.png";
import gourmet from "../assets/images/gourmet.png";
import luxurious from "../assets/images/luxurious-evening-dining-stockcake.jpg";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setValue(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl text-gold">
      {formatNumber(value)}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((i) => (i + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src={panoramic} alt="Aurelia Dining panoramic view" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/30" />
          <div className="absolute inset-0 bg-obsidian/20" />
        </div>

        <EmberField className="absolute inset-0 pointer-events-none opacity-70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.9 }}
            className="eyebrow mb-6"
          >
            Est. 2006 — Reservations Recommended
          </motion.div>
          <div className="reveal-mask">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 2.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.95] text-ivory"
            >
              Culinary Art.
            </motion.h1>
          </div>
          <div className="reveal-mask">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 2.65, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display italic text-5xl sm:text-6xl md:text-8xl leading-[0.95] text-gold"
            >
              Timeless Atmosphere.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.9 }}
            className="font-accent italic text-xl md:text-2xl text-ivory/70 mt-8 max-w-xl"
          >
            Discover unforgettable dining experiences crafted with elegance and passion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.9 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <MagneticButton to="/reservations" variant="solid">Reserve Table</MagneticButton>
            <MagneticButton to="/menu" variant="outline">Explore Menu</MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6, duration: 1 }}
          className="absolute bottom-8 right-8 md:right-10 hidden sm:flex flex-col items-center gap-3 text-ivory/60"
        >
          <span className="eyebrow rotate-90 origin-center translate-y-4">Scroll</span>
          <span className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* CHEF STORY */}
      <section className="relative py-28 md:py-40 px-6 md:px-10 bg-obsidian">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <SectionHeading numeral="I" eyebrow="The Philosophy" title="A Chef Devoted to Craft" />
            <p className="text-ivory/60 leading-relaxed mt-8 max-w-md">
              For over twenty years, our kitchen has pursued a single idea: that a meal can hold
              the same weight as a piece of art. Every plate at Aurelia begins with restraint —
              fewer ingredients, deeper technique, and a reverence for where each element came from.
            </p>
            <p className="text-ivory/60 leading-relaxed mt-4 max-w-md">
              Our head chef trained across three continents before returning home to build a
              menu that changes with the seasons but never loses its point of view.
            </p>
            <div className="mt-10">
              <MagneticButton to="/experiences" variant="outline">Meet the Experience</MagneticButton>
            </div>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-5 gap-4">
            <RevealImage src={chef} alt="Executive chef plating a dish" className="col-span-3 h-[420px] md:h-[520px]" />
            <RevealImage src={gourmet} alt="Signature plated dish" className="col-span-2 h-[420px] md:h-[520px] mt-12" delay={0.15} />
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="relative py-28 md:py-40 px-6 md:px-10 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <SectionHeading numeral="II" eyebrow="Tasting Notes" title="Signature Dishes" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {dishes.slice(0, 3).map((dish, i) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group cursor-hover"
              >
                <div className="reveal-mask h-80 mb-6">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
                  />
                </div>
                <div className="flex items-baseline justify-between border-b border-gold/15 pb-3">
                  <h3 className="font-display text-xl">{dish.name}</h3>
                  <span className="text-gold font-accent text-lg">{dish.price}</span>
                </div>
                <p className="text-ivory/50 text-sm mt-3 leading-relaxed">{dish.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <MagneticButton to="/menu" variant="outline">View Full Menu</MagneticButton>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="relative py-28 md:py-40 px-6 md:px-10 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <SectionHeading numeral="III" eyebrow="Beyond the Table" title="Experiences" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="relative h-96 overflow-hidden group cursor-hover"
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl text-ivory">{exp.title}</h3>
                  <p className="text-ivory/60 text-sm mt-2 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="relative py-32 px-6 md:px-10">
        <div className="absolute inset-0">
          <img src={luxurious} alt="Aurelia evening ambience" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-obsidian/85" />
        </div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
          <div>
            <Counter target={20} suffix="+" />
            <p className="eyebrow mt-3">Years of Excellence</p>
          </div>
          <div>
            <Counter target={10000} suffix="+" />
            <p className="eyebrow mt-3">Guests Served</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <Counter target={50} suffix="+" />
            <p className="eyebrow mt-3">Signature Dishes</p>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="relative py-28 md:py-40 px-6 md:px-10 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <SectionHeading numeral="IV" eyebrow="A Glimpse Inside" title="Gallery" />
          <div className="columns-2 md:columns-3 gap-4 mt-16 space-y-4">
            {galleryImages.slice(0, 6).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
                className="break-inside-avoid overflow-hidden cursor-hover group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-[1000ms]"
                />
              </motion.div>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <MagneticButton to="/gallery" variant="outline">View Full Gallery</MagneticButton>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-28 md:py-36 px-6 md:px-10 bg-obsidian">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading numeral="V" eyebrow="Guest Words" title="Testimonials" align="center" />
          <div className="mt-16 min-h-[180px] flex items-center justify-center">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-accent italic text-2xl md:text-3xl text-ivory/90 leading-snug">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <p className="eyebrow mt-6">
                {testimonials[activeTestimonial].name} — {testimonials[activeTestimonial].occasion}
              </p>
            </motion.div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === activeTestimonial ? "w-8 bg-gold" : "w-1.5 bg-ivory/20"
                }`}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 md:py-36 px-6 md:px-10 text-center bg-charcoal">
        <SectionHeading numeral="VI" eyebrow="Your Evening Awaits" title="Reserve Your Table" align="center" />
        <p className="text-ivory/50 max-w-lg mx-auto mt-6">
          Availability is limited each evening to preserve the intimacy of the room.
        </p>
        <div className="mt-10">
          <MagneticButton to="/reservations" variant="solid">Reserve Experience</MagneticButton>
        </div>
      </section>
    </main>
  );
}
