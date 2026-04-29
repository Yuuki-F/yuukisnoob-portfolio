"use client";

import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const DISCORD = "yuuk7i";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 halftone-dense opacity-50 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-handwritten text-2xl text-blood mb-3"
        >
          — final chapter
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-6xl md:text-9xl leading-[0.9]"
        >
          LET&apos;S
          <br />
          <span className="ink-stroke">COOK.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-comic text-2xl md:text-3xl mt-6 max-w-2xl mx-auto"
        >
          got a brief? slide in.{" "}
          <span className="text-blood">no gun systems though.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <button
            onClick={copy}
            data-cursor="hover"
            className="group inline-flex items-center gap-3 bg-ink text-paper font-comic text-3xl md:text-4xl px-8 py-4 panel-shadow hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0_0_3px_var(--color-ink)_inset] transition-all"
          >
            <span className="text-blood">DISCORD:</span>
            <span>{DISCORD}</span>
            {copied ? (
              <Check className="w-7 h-7 text-mint" strokeWidth={3} />
            ) : (
              <Copy className="w-6 h-6 opacity-70 group-hover:opacity-100" strokeWidth={2.5} />
            )}
          </button>
          <p className="font-handwritten text-xl text-ink/60 h-6">
            {copied ? "copied! now go DM me" : "click to copy"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
