"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 space-y-6"
        >
          <p className="font-handwritten text-2xl text-blood">— chapter 01</p>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
            WHO IS THIS GUY
          </h2>
          <div className="inline-block bg-sun text-ink px-3 py-1 font-comic text-2xl -rotate-2 panel-shadow-sm">
            (it&apos;s me, hi)
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:col-span-7 relative"
        >
          {/* speech bubble */}
          <div className="relative bg-paper-dark panel-shadow p-8 md:p-10">
            <div className="absolute -top-4 -left-4 bg-blood text-paper font-comic text-2xl px-4 py-1 -rotate-3 panel-shadow-sm">
              BIO
            </div>
            <p className="text-xl md:text-2xl leading-relaxed">
              I&apos;m <span className="font-comic text-blood text-3xl">Yuukisnoob</span>,
              a Roblox scripter who treats Luau the way most people treat their
              caffeine — daily, aggressively, and with{" "}
              <span className="font-handwritten text-3xl text-tech">
                questionable life choices
              </span>
              .
            </p>
            <p className="text-xl md:text-2xl leading-relaxed mt-4">
              I build combat systems that hit harder than your DMs, frameworks
              tighter than your deadlines, and full games that&apos;ll make
              your players forget what touch grass means.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mt-4 text-ink/70">
              Just don&apos;t ask me to script a gun system.{" "}
              <span className="font-comic text-blood">No. Never. Don&apos;t.</span>
            </p>
          </div>

          {/* corner sticker */}
          <div className="absolute -bottom-6 -right-6 hidden md:block">
            <div className="bg-tech text-paper font-comic text-2xl px-4 py-2 rotate-6 panel-shadow-sm">
              CERTIFIED ★
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
