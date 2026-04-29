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
          <p className="font-handwritten text-2xl text-blood">chapter 01</p>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
            ABOUT
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:col-span-7 relative"
        >
          <div className="relative bg-paper-dark panel-shadow p-8 md:p-10">
            <p className="text-xl md:text-2xl leading-relaxed lowercase">
              i&apos;m{" "}
              <span className="font-comic text-blood text-3xl normal-case">
                yuuki
              </span>
              .{" "}
              <span className="font-comic text-tech text-2xl normal-case">
                7 years
              </span>{" "}
              scripting luau. fast turnaround. mainly working on anime games
              and combat games, can do anything though.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed mt-5 lowercase">
              owned{" "}
              <span className="font-comic text-tech normal-case">vision</span>{" "}
              (blue lock, 10k peak), worked on{" "}
              <span className="font-comic text-blood normal-case">
                squid game
              </span>{" "}
              (80k peak), commissioned for{" "}
              <span className="font-comic normal-case">king legacy</span>,
              head-dev&apos;d{" "}
              <span className="font-comic text-mint normal-case">
                attack on titan project
              </span>
              , programmed{" "}
              <span className="font-comic text-blood normal-case">
                aot freedom awaits
              </span>
              , plus a long list more.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mt-5 text-ink/80 lowercase">
              over <span className="font-comic text-2xl text-ink normal-case">1B+</span>{" "}
              visits across the lineup. if your game needs to actually ship,
              hit me up.
            </p>
          </div>

          <div className="absolute -bottom-6 -right-6 hidden md:block">
            <div className="bg-tech text-paper font-comic text-lg md:text-xl px-3 py-1.5 rotate-6 panel-shadow-sm">
              im ultra fast promise
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
