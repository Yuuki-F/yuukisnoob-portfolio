"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[9999] bg-paper flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 halftone opacity-50" />
          <div className="absolute inset-0 speed-lines opacity-25" />

          <div className="relative text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="font-display text-7xl md:text-9xl leading-none"
            >
              YUUKI<span className="text-blood">.</span>
            </motion.h1>
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="font-comic text-2xl md:text-3xl">LOADING</span>
              {[0, 0.15, 0.3].map((d, i) => (
                <motion.span
                  key={i}
                  className="font-comic text-2xl md:text-3xl text-blood"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    delay: d,
                    ease: "easeInOut",
                  }}
                >
                  .
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
