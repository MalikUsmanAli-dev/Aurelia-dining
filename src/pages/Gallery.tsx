import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { galleryImages } from "../data/gallery";
import interior from "../assets/images/interior.jpg";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <main className="pt-32 pb-28">
      <section className="relative h-[50vh] flex items-end px-6 md:px-10 mb-20">
        <div className="absolute inset-0 -z-10">
          <img src={interior} alt="Dining room interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-obsidian/70" />
        </div>
        <div className="max-w-7xl mx-auto w-full pb-14">
          <SectionHeading numeral="Gallery" eyebrow="A Glimpse Inside" title="The Aurelia Gallery" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              className="break-inside-avoid overflow-hidden block w-full cursor-hover group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-[1000ms]"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-obsidian/95 flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 eyebrow text-ivory cursor-hover"
            >
              Close
            </button>
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              src={galleryImages[active].src}
              alt={galleryImages[active].alt}
              className="max-h-[85vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
