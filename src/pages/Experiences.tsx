import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import MagneticButton from "../components/MagneticButton";
import { experiences } from "../data/experiences";
import lounge from "../assets/images/lounge.png";

export default function Experiences() {
  return (
    <main className="pt-32 pb-28">
      <section className="relative h-[50vh] flex items-end px-6 md:px-10 mb-24">
        <div className="absolute inset-0 -z-10">
          <img src={lounge} alt="Lounge seating" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-obsidian/70" />
        </div>
        <div className="max-w-7xl mx-auto w-full pb-14">
          <SectionHeading numeral="Experiences" eyebrow="Beyond the Table" title="Curated Evenings" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-32">
        {experiences.map((exp, i) => (
          <div
            key={exp.id}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.08 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="reveal-mask h-[420px] md:h-[520px]"
            >
              <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
            </motion.div>
            <div>
              <span className="font-accent italic text-gold text-lg">
                0{i + 1}
              </span>
              <h3 className="font-display text-4xl md:text-5xl mt-3 mb-6">{exp.title}</h3>
              <p className="text-ivory/60 leading-relaxed max-w-md mb-8">{exp.description}</p>
              <MagneticButton to="/reservations" variant="outline">Reserve This Experience</MagneticButton>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
