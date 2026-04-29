"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function Projects() {
  const slots = [
    { rotate: -1.5, label: "REDACTED", color: "bg-paper-dark" },
    { rotate: 1, label: "REDACTED", color: "bg-paper-dark" },
    { rotate: -0.5, label: "REDACTED", color: "bg-paper-dark" },
    { rotate: 1.5, label: "REDACTED", color: "bg-paper-dark" },
  ];

  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16 space-y-4">
        <p className="font-handwritten text-2xl text-blood">— chapter 03</p>
        <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
          THE PORTFOLIO
        </h2>
        <div className="inline-block bg-blood text-paper px-4 py-1.5 -rotate-1 panel-shadow-sm">
          <p className="font-comic text-2xl md:text-3xl">
            UNDER CONSTRUCTION
          </p>
        </div>
        <p className="font-handwritten text-xl md:text-2xl text-ink/60 max-w-xl mx-auto">
          patience, padawan — open links drop here once published
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {slots.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, rotate: s.rotate - 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: s.rotate }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`${s.color} aspect-[4/5] panel-shadow flex flex-col items-center justify-center gap-3 relative overflow-hidden halftone`}
          >
            <Lock className="w-12 h-12" strokeWidth={2.5} />
            <p className="font-display text-3xl tracking-wider">
              {s.label}
            </p>
            <p className="font-handwritten text-xl text-ink/60">
              soon™
            </p>
            <div className="absolute top-3 left-3 bg-ink text-paper font-comic text-sm px-2 py-0.5">
              SLOT {i + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
