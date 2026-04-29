"use client";

import { motion } from "framer-motion";

const clips = [
  {
    id: "l32sg5",
    title: "VISION · Flow Cutscene",
    blurb: "Cinematic flow state for the Blue Lock crowd.",
    rotate: -0.5,
    span: "md:col-span-2",
  },
  {
    id: "4mdu2d",
    title: "Sandevistan",
    blurb: "Cyberpunk-style time slow. Done for fun.",
    rotate: 1,
    span: "",
  },
  {
    id: "hvijko",
    title: "Mob AI (w/ woapa)",
    blurb: "group hoarding mobs",
    rotate: -1,
    span: "",
  },
  {
    id: "tyqkul",
    title: "VISION · Emote System",
    blurb: "Smooth emote system for in-match expression.",
    rotate: 0.5,
    span: "",
  },
  {
    id: "iepeyx",
    title: "SAO · Mining",
    blurb: "MMO-grade resource gathering loop.",
    rotate: -0.5,
    span: "",
  },
  {
    id: "om1sod",
    title: "VFX Plugin (w/ woapa)",
    blurb: "Studio plugin for spawning and tweaking VFX.",
    rotate: 1,
    span: "md:col-span-2",
  },
];

export default function Reel() {
  return (
    <section
      id="reel"
      className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16 space-y-4">
        <p className="font-handwritten text-2xl text-blood">interlude</p>
        <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
          THE SHOWREEL
        </h2>
        <p className="font-comic text-2xl md:text-3xl">
          1% of my <span className="text-blood">true power</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {clips.map((c, i) => (
          <ClipCard key={c.id} {...c} index={i} />
        ))}
      </div>

      <p className="mt-12 text-center font-handwritten text-xl text-ink/60 max-w-2xl mx-auto">
        and more, but i lost the files or something. dm me if you want
        something specific.
      </p>
    </section>
  );
}

function ClipCard({
  id,
  title,
  blurb,
  rotate,
  span,
  index,
}: {
  id: string;
  title: string;
  blurb: string;
  rotate: number;
  span: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotate - 3 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className={`bg-paper-dark panel-shadow p-3 ${span}`}
    >
      <div className="relative aspect-video overflow-hidden border-2 border-ink bg-ink">
        <iframe
          src={`https://streamable.com/e/${id}?loop=0`}
          allow="fullscreen"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="flex items-baseline justify-between mt-3 px-1">
        <h3 className="font-display text-2xl md:text-3xl">{title}</h3>
        <span className="font-comic text-base text-blood">
          #{String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className="px-1 mt-1 text-base md:text-lg text-ink/70">{blurb}</p>
    </motion.div>
  );
}
