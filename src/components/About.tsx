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
              I&apos;m{" "}
              <span className="font-comic text-blood text-3xl">Yuukisnoob</span>
              , a Roblox scripter with{" "}
              <span className="font-handwritten text-3xl text-tech">
                7 years
              </span>{" "}
              of pressing F to pay respects to my own bugs.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed mt-4">
              I&apos;ve owned <span className="font-comic text-tech">Vision</span>{" "}
              (the Blue Lock game that hit{" "}
              <span className="font-comic text-blood">10K CCU</span>), owned{" "}
              <span className="font-comic">Excore</span> back when it was the
              biggest CC game in the metaverse, head-dev&apos;d the{" "}
              <span className="font-comic text-mint">Attack on Titan</span>{" "}
              project, programmed{" "}
              <span className="font-comic text-blood">One Piece Freedom Awaits</span>
              , and shipped a fistful of other anime games I&apos;ll list when I
              feel like it.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mt-4 text-ink/70">
              If your game has anime in the title and questionable life advice
              in the chat, odds are I touched it.{" "}
              <span className="font-comic text-blood">
                Just don&apos;t ask for gun systems.
              </span>
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
