"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1B+", label: "TOTAL VISITS" },
  { value: "80K", label: "PEAK CCU" },
  { value: "9+", label: "SHIPPED GAMES" },
  { value: "7", label: "YEARS DEEP" },
];

export default function Stats() {
  return (
    <section className="relative px-6 md:px-12 py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-paper-dark panel-shadow-sm py-5 px-4 text-center"
          >
            <div className="font-display text-5xl md:text-6xl leading-none">
              {s.value}
            </div>
            <div className="font-comic text-lg md:text-xl mt-2 text-ink/70 tracking-wide">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
