"use client";

import { motion } from "framer-motion";
import {
  Swords,
  Database,
  Layers,
  Gamepad2,
  Monitor,
  Settings,
  Sparkles,
  Bot,
  Crosshair,
} from "lucide-react";

const services = [
  {
    title: "Combat Systems",
    blurb: "hit-stop, parries, m1 chains, ult cinematics. the works.",
    icon: Swords,
    bg: "bg-blood text-paper",
    rotate: -1.5,
  },
  {
    title: "Datastores",
    blurb: "profile-safe, leak-free, zero data loss.",
    icon: Database,
    bg: "bg-paper-dark text-ink",
    rotate: 1,
  },
  {
    title: "Frameworks",
    blurb: "OOP, modular, scalable. your future self will thank me.",
    icon: Layers,
    bg: "bg-tech text-paper",
    rotate: -0.5,
  },
  {
    title: "Full Games",
    blurb: "empty baseplate to playable demo. let's cook.",
    icon: Gamepad2,
    bg: "bg-sun text-ink",
    rotate: 1.5,
  },
  {
    title: "UI / UX",
    blurb: "smooth, responsive, animated.",
    icon: Monitor,
    bg: "bg-paper-dark text-ink",
    rotate: -1,
  },
  {
    title: "VFX & Effects",
    blurb: "client-side, performant, anime-grade impact frames.",
    icon: Sparkles,
    bg: "bg-mint text-ink",
    rotate: 1,
  },
  {
    title: "Optimization",
    blurb: "server lag? memory leaks? fixed.",
    icon: Settings,
    bg: "bg-ink text-paper",
    rotate: -1.5,
  },
  {
    title: "AI / NPCs",
    blurb: "pathfinding, behavior trees, enemies that actually fight back.",
    icon: Bot,
    bg: "bg-paper-dark text-ink",
    rotate: 0.5,
  },
  {
    title: "Gun Systems",
    blurb: "i'll do it if i have to. i'd rather not.",
    icon: Crosshair,
    bg: "bg-blood-dark text-paper",
    rotate: 1,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16 space-y-4">
        <p className="font-handwritten text-2xl text-blood">chapter 02</p>
        <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
          THE ARSENAL
        </h2>
        <p className="font-comic text-2xl md:text-3xl">
          everything i offer{" "}
          <span className="text-blood">- some more reluctantly than others</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ServiceCard key={s.title} {...s} index={i} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  blurb,
  icon: Icon,
  bg,
  rotate,
  index,
}: {
  title: string;
  blurb: string;
  icon: typeof Swords;
  bg: string;
  rotate: number;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotate - 5 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ rotate: rotate + (rotate > 0 ? 1.5 : -1.5), scale: 1.02 }}
      data-cursor="hover"
      className={`${bg} panel-shadow p-6 md:p-7 cursor-pointer relative overflow-hidden`}
    >
      <div className="flex items-start justify-between mb-4">
        <Icon className="w-9 h-9" strokeWidth={2.5} />
        <span className="font-comic text-2xl opacity-60">
          #{String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="font-display text-3xl md:text-4xl leading-tight mb-2">
        {title}
      </h3>
      <p className="text-base md:text-lg leading-snug">{blurb}</p>
    </motion.div>
  );
}
