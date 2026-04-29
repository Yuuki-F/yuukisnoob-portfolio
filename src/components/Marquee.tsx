"use client";

import { motion } from "framer-motion";

const items = [
  "ROBLOX SCRIPTER",
  "★",
  "COMBAT SYSTEMS",
  "★",
  "DATASTORES",
  "★",
  "FRAMEWORKS",
  "★",
  "FULL GAMES",
  "★",
  "404 BUGS NOT FOUND",
  "★",
  "BUILT DIFFERENT",
  "★",
  "while true do code() end",
  "★",
];

export default function Marquee() {
  return (
    <div className="relative bg-ink text-paper border-y-4 border-ink overflow-hidden py-4 -rotate-1 -mx-8">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className={
              t === "★"
                ? "font-comic text-3xl text-blood"
                : "font-display text-3xl tracking-wider"
            }
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
