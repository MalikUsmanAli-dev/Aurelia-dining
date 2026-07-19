import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[9999] bg-obsidian flex flex-col items-center justify-center"
    >
      <motion.span
        initial={{ letterSpacing: "0.1em", opacity: 0 }}
        animate={{ letterSpacing: "0.5em", opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="font-display text-3xl md:text-5xl text-ivory"
      >
        AURELIA
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="eyebrow mt-4"
      >
        Dining
      </motion.span>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 1.4, ease: "easeInOut" }}
        className="h-px w-40 bg-gold mt-8 origin-left"
      />
    </motion.div>
  );
}
