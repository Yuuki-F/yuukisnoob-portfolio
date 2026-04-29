"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const SFX = [
  { text: "EGOIST!", color: "bg-tech text-paper", rotate: -8, top: "12%", left: "6%", delay: 0.4 },
  { text: "ODM!", color: "bg-mint text-ink", rotate: 6, top: "22%", left: "82%", delay: 0.7 },
  { text: "HAKI!", color: "bg-blood text-paper", rotate: -12, top: "68%", left: "78%", delay: 1.0 },
  { text: "GLITCH!", color: "bg-ink text-paper", rotate: 4, top: "70%", left: "8%", delay: 1.2 },
  { text: "SLASH!", color: "bg-sun text-ink", rotate: -3, top: "44%", left: "88%", delay: 1.5 },
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
      {/* speed line burst */}
      <div className="absolute inset-0 speed-lines opacity-30 pointer-events-none" />
      {/* halftone overlay */}
      <div className="absolute inset-0 halftone opacity-60 pointer-events-none" />
      {/* big red ink splat circle */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute -right-40 -top-40 w-[700px] h-[700px] rounded-full halftone-red opacity-70 pointer-events-none animate-spin-slow"
      />

      {/* SFX floaters */}
      {SFX.map((s) => (
        <SfxBadge key={s.text} sx={sx} sy={sy} {...s} />
      ))}

      {/* main text */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-handwritten text-2xl md:text-3xl mb-2 text-ink/70"
        >
          presenting…
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-display leading-[0.85] tracking-tight text-[clamp(4rem,16vw,16rem)]"
        >
          <span className="block">YUUKI</span>
          <span className="block ink-stroke">SNOOB</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 flex flex-col items-center gap-3"
        >
          <div className="inline-flex items-center gap-3 bg-ink text-paper px-5 py-2 -rotate-1 panel-shadow-sm">
            <span className="font-comic text-2xl md:text-4xl">
              SELF-PROCLAIMED LUAU MASTER
            </span>
          </div>
          <p className="font-handwritten text-xl md:text-2xl text-ink/60 max-w-md">
            (and very humble about it)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            data-cursor="hover"
            className="group relative inline-flex items-center gap-2 bg-blood text-paper font-comic text-2xl px-8 py-3 panel-shadow hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0_0_3px_var(--color-ink)_inset] transition-all"
          >
            HIRE ME →
          </a>
          <a
            href="#services"
            data-cursor="hover"
            className="inline-flex items-center gap-2 bg-paper text-ink font-comic text-2xl px-8 py-3 panel-shadow hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0_0_3px_var(--color-ink)_inset] transition-all"
          >
            WHAT I DO
          </a>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/60"
      >
        <span className="font-handwritten text-lg">scroll, weakling</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="w-0.5 h-8 bg-ink"
        />
      </motion.div>
    </section>
  );
}

function SfxBadge({
  text,
  color,
  rotate,
  top,
  left,
  delay,
  sx,
  sy,
}: {
  text: string;
  color: string;
  rotate: number;
  top: string;
  left: string;
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
      className={`absolute z-[1] hidden md:block`}
    >
      <div
        className={`${color} font-comic text-3xl md:text-5xl px-4 py-1.5 panel-shadow-sm select-none animate-wobble`}
      >
        {text}
      </div>
    </motion.div>
  );
}
