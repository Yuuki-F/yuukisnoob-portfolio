"use client";

import { motion } from "framer-motion";
import { Zap, Calendar } from "lucide-react";

export default function Pricing() {
  return (
    <section
      id="rates"
      className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16 space-y-4">
        <p className="font-handwritten text-2xl text-blood">— chapter 05</p>
        <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
          THE RATES
        </h2>
        <p className="font-comic text-2xl md:text-3xl">
          real numbers. <span className="text-blood">flexible scope.</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          whileHover={{ rotate: 0.5, scale: 1.01 }}
          data-cursor="hover"
          className="bg-paper-dark panel-shadow p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 halftone opacity-15 pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-7 h-7" strokeWidth={2.5} />
              <span className="font-comic text-2xl">SHORT TERM</span>
            </div>
            <div className="font-display text-6xl md:text-7xl leading-none">
              $300
              <span className="text-ink/40"> — </span>
              $1000
            </div>
            <p className="mt-4 text-lg md:text-xl text-ink/80 lowercase">
              one-off systems. scoped jobs. quick turnaround.
            </p>
            <ul className="mt-4 space-y-1.5 text-base md:text-lg lowercase">
              <li>· combat / datastores / ui / vfx</li>
              <li>· fixed scope, fixed price</li>
              <li>· delivered fast</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ rotate: -0.5, scale: 1.01 }}
          data-cursor="hover"
          className="bg-ink text-paper panel-shadow p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 halftone-red opacity-25 pointer-events-none" />
          <div className="absolute top-3 right-3 bg-blood text-paper font-comic text-base px-3 py-1 rotate-3">
            GOATED
          </div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-7 h-7" strokeWidth={2.5} />
              <span className="font-comic text-2xl">LONG TERM</span>
            </div>
            <div className="font-display text-6xl md:text-7xl leading-none">
              $500
              <span className="text-paper/40"> — </span>
              $4500
              <span className="text-paper/60 text-3xl md:text-4xl"> / mo</span>
            </div>
            <p className="font-comic text-xl text-blood mt-2">
              + optional rev share
            </p>
            <p className="mt-4 text-lg md:text-xl text-paper/80 lowercase">
              ongoing dev. lead-dev capacity. retainer-style.
            </p>
            <ul className="mt-4 space-y-1.5 text-base md:text-lg text-paper/90 lowercase">
              <li>· full game builds</li>
              <li>· feature pipelines</li>
              <li>· i&apos;m on your team</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <p className="mt-10 text-center font-handwritten text-2xl">
        scope it in dms — quotes back same day.
      </p>
    </section>
  );
}
