import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import MagneticButton from "../components/MagneticButton";
import bar from "../assets/images/bar.jpg";

export default function Contact() {
  return (
    <main className="pt-32 pb-28">
      <section className="relative h-[45vh] flex items-end px-6 md:px-10 mb-20">
        <div className="absolute inset-0 -z-10">
          <img src={bar} alt="Aurelia bar" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-obsidian/70" />
        </div>
        <div className="max-w-7xl mx-auto w-full pb-14">
          <SectionHeading numeral="Contact" eyebrow="Find Us" title="Visit Aurelia" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-display text-3xl mb-8">Location & Hours</h3>
          <div className="space-y-6 text-ivory/60">
            <div>
              <p className="eyebrow mb-1">Address</p>
              <p>18 Marbrook Lane, Uptown District</p>
            </div>
            <div>
              <p className="eyebrow mb-1">Dinner Service</p>
              <p>Tuesday – Sunday, 6:00 PM – 11:30 PM</p>
              <p>Closed Mondays</p>
            </div>
            <div>
              <p className="eyebrow mb-1">Phone</p>
              <p>+1 (212) 555-0148</p>
            </div>
            <div>
              <p className="eyebrow mb-1">Email</p>
              <p>reservations@aureliadining.com</p>
            </div>
            <div className="pt-4">
              <MagneticButton to="/reservations" variant="solid">Reserve a Table</MagneticButton>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="h-[420px] border border-gold/15 flex items-center justify-center text-ivory/30 eyebrow"
        >
          Map Placeholder — Embed Your Location
        </motion.div>
      </div>
    </main>
  );
}
