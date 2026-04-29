"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const slots = [
  {
    body: "yours could be here. drop it after we ship.",
    author: "client #01",
    rotate: -1.5,
    bg: "bg-paper-dark text-ink",
  },
  {
    body: "this slot is empty. that's on me, not the work.",
    author: "client #02",
    rotate: 1,
    bg: "bg-blood text-paper",
  },
  {
    body: "swap me out once a real one drops in.",
    author: "client #03",
    rotate: -0.5,
    bg: "bg-paper-dark text-ink",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16 space-y-4">
        <p className="font-handwritten text-2xl text-blood">chapter 06</p>
        <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
          WHAT THEY SAY
        </h2>
        <p className="font-comic text-2xl md:text-3xl">
          real ones drop in <span className="text-blood">after</span> we ship.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {slots.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, rotate: s.rotate - 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: s.rotate }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ rotate: s.rotate + (s.rotate >= 0 ? 1.5 : -1.5), scale: 1.02 }}
            data-cursor="hover"
            className={`${s.bg} panel-shadow p-7 relative overflow-hidden flex flex-col`}
          >
            <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />
            <Quote
              className="relative w-10 h-10 mb-3 opacity-70"
              strokeWidth={2.5}
            />
            <p className="relative text-xl md:text-2xl leading-snug font-comic flex-1">
              {s.body}
            </p>
            <p className="relative font-handwritten text-xl mt-4 opacity-80">
              {s.author}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="mt-12 text-center font-handwritten text-xl text-ink/60">
        worked with me? send a quote, i&apos;ll plug it in.
      </p>
    </section>
  );
}
