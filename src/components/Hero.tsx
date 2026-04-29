"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const cats = [
  { emoji: "😼", top: "10%", left: "5%", size: "text-7xl md:text-9xl", rotate: -8, delay: 0.4 },
  { emoji: "😺", top: "18%", left: "85%", size: "text-6xl md:text-8xl", rotate: 8, delay: 0.7 },
  { emoji: "🙀", top: "66%", left: "80%", size: "text-7xl md:text-9xl", rotate: -10, delay: 1.0 },
  { emoji: "😻", top: "72%", left: "6%", size: "text-6xl md:text-8xl", rotate: 5, delay: 1.2 },
  { emoji: "😹", top: "42%", left: "90%", size: "text-5xl md:text-7xl", rotate: -3, delay: 1.5 },
  { emoji: "🐈‍⬛", top: "38%", left: "3%", size: "text-5xl md:text-7xl", rotate: 6, delay: 1.7 },
];

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { damping: 30, stiffness: 100 });
  const sy = useSpring(my, { damping: 30, stiffness: 100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mx.set((e.clientX - cx) / cx);
      my.set((e.clientY - cy) / cy);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center paper-grain"
    >
      <div className="absolute inset-0 speed-lines opacity-25 pointer-events-none z-[0]" />
      <div className="absolute inset-0 halftone opacity-40 pointer-events-none z-[0]" />
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute -right-40 -top-40 w-[700px] h-[700px] rounded-full halftone-red opacity-60 pointer-events-none animate-spin-slow z-[0]"
      />

      <div className="absolute inset-0 z-[1]">
        <HeroScene />
      </div>

      {cats.map((c) => (
        <CatFloat key={c.emoji + c.top} sx={sx} sy={sy} {...c} />
      ))}

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display leading-[0.85] tracking-tight text-[clamp(5rem,22vw,22rem)]"
        >
          YUUKI<span className="text-blood">.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-2 inline-flex items-center gap-3 bg-ink text-paper px-5 py-2 -rotate-1 panel-shadow-sm"
        >
          <span className="font-comic text-2xl md:text-4xl">
            ROBLOX SCRIPTER · SHIPS FAST
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            data-cursor="hover"
            className="inline-flex items-center gap-2 bg-blood text-paper font-comic text-2xl px-8 py-3 panel-shadow hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0_0_3px_var(--color-ink)_inset] transition-all"
          >
            HIRE ME →
          </a>
          <a
            href="#projects"
            data-cursor="hover"
            className="inline-flex items-center gap-2 bg-paper text-ink font-comic text-2xl px-8 py-3 panel-shadow hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0_0_3px_var(--color-ink)_inset] transition-all"
          >
            SEE WORK
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/60"
      >
        <span className="font-handwritten text-lg">scroll ↓</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="w-0.5 h-8 bg-ink"
        />
      </motion.div>
    </section>
  );
}

function CatFloat({
  emoji,
  rotate,
  top,
  left,
  size,
  delay,
  sx,
  sy,
}: {
  emoji: string;
  rotate: number;
  top: string;
  left: string;
  size: string;
  delay: number;
  sx: ReturnType<typeof useSpring>;
  sy: ReturnType<typeof useSpring>;
}) {
  const depth = 30 + Math.abs(rotate) * 2;
  const tx = useTransform(sx, (v) => v * depth);
  const ty = useTransform(sy, (v) => v * depth);
  return (
    <motion.div
      initial={{ scale: 0, rotate: rotate - 30 }}
      animate={{ scale: 1, rotate }}
      transition={{ delay, type: "spring", damping: 12, stiffness: 200 }}
      style={{ top, left, x: tx, y: ty }}
      className={`absolute z-[2] hidden md:block ${size} animate-wobble select-none pointer-events-none [filter:drop-shadow(3px_3px_0_rgba(0,0,0,0.25))]`}
    >
      {emoji}
    </motion.div>
  );
}
