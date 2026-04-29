"use client";

import { motion } from "framer-motion";
import { MessageSquare, Ruler, Hammer, Rocket } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "BRIEF",
    icon: MessageSquare,
    blurb: "slide in dms. tell me what you want, what you're working with.",
    bg: "bg-paper-dark text-ink",
    accent: "text-blood",
    rotate: -1,
  },
  {
    n: "02",
    title: "SCOPE",
    icon: Ruler,
    blurb: "i scope it, give you a quote. fixed price, or retainer.",
    bg: "bg-tech text-paper",
    accent: "text-sun",
    rotate: 1,
  },
  {
    n: "03",
    title: "BUILD",
    icon: Hammer,
    blurb: "i build it. fast. updates as i go. you don't ghost-wait.",
    bg: "bg-blood text-paper",
    accent: "text-sun",
    rotate: -0.5,
  },
  {
    n: "04",
    title: "SHIP",
    icon: Rocket,
    blurb: "delivered. polished. yours. i don't bail post-launch.",
    bg: "bg-ink text-paper",
    accent: "text-mint",
    rotate: 0.5,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16 space-y-4">
        <p className="font-handwritten text-2xl text-blood">— chapter 03</p>
        <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
          THE PROCESS
        </h2>
        <p className="font-comic text-2xl md:text-3xl">
          how it goes <span className="text-blood">down</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 30, rotate: s.rotate - 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: s.rotate }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ rotate: s.rotate + (s.rotate >= 0 ? 1.5 : -1.5), scale: 1.02 }}
            data-cursor="hover"
            className={`${s.bg} panel-shadow p-6 md:p-7 relative overflow-hidden flex flex-col`}
          >
            <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />
            <div className="relative flex items-center justify-between mb-5">
              <span className={`font-display text-5xl md:text-6xl ${s.accent}`}>
                {s.n}
              </span>
              <s.icon className="w-8 h-8 opacity-80" strokeWidth={2.5} />
            </div>
            <h3 className="relative font-display text-3xl md:text-4xl mb-3">
              {s.title}
            </h3>
            <p className="relative text-base md:text-lg leading-snug">
              {s.blurb}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
