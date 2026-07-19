import { motion } from "framer-motion";
import { cx } from "../lib/utils";

interface Props {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export default function RevealImage({ src, alt, className, delay = 0 }: Props) {
  return (
    <div className={cx("reveal-mask relative", className)}>
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.25, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
