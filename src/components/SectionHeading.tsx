import { motion } from "framer-motion";

interface Props {
  numeral: string;
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({ numeral, eyebrow, title, align = "left", light }: Props) {
  return (
    <div className={align === "center" ? "text-center" : "thread pl-6"}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3 justify-start"
        style={{ justifyContent: align === "center" ? "center" : "flex-start" }}
      >
        <span className="font-accent italic text-gold text-lg">{numeral}</span>
        <span className={light ? "eyebrow text-ivory/70" : "eyebrow"}>{eyebrow}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-display text-4xl md:text-6xl mt-4 leading-[1.05]"
      >
        {title}
      </motion.h2>
    </div>
  );
}
