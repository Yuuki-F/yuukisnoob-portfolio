"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 28, stiffness: 380, mass: 0.4 });
  const sy = useSpring(y, { damping: 28, stiffness: 380, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [isPointer, setIsPointer] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsPointer(false);
      return;
    }
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [data-cursor='hover'], input, textarea, [role='button']"
      );
      setHover(!!interactive);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!isPointer) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          className="rounded-full bg-ink"
          animate={{
            width: hover ? 56 : 12,
            height: hover ? 56 : 12,
            opacity: hover ? 0.85 : 1,
          }}
          transition={{ type: "spring", damping: 22, stiffness: 320 }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2"
        style={{ x, y }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-blood" />
      </motion.div>
    </>
  );
}
