"use client";

import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Arsenal", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Games", href: "#projects" },
  { label: "Reel", href: "#reel" },
  { label: "Rates", href: "#rates" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-5 mix-blend-difference text-paper"
    >
      <a
        href="#top"
        className="font-display text-3xl tracking-wider"
        data-cursor="hover"
      >
        YUUKI<span className="text-blood">.</span>
      </a>
      <ul className="hidden md:flex items-center gap-8 font-comic text-xl">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              data-cursor="hover"
              className="relative group inline-block"
            >
              <span className="transition-transform inline-block group-hover:-translate-y-1">
                {l.label}
              </span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blood transition-all group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
      <a
        href="https://discord.com/users/yuuk7i"
        target="_blank"
        rel="noreferrer"
        data-cursor="hover"
        className="hidden md:inline-flex items-center gap-2 font-comic text-lg border-2 border-paper px-4 py-1.5 rounded-full hover:bg-paper hover:text-ink transition-colors"
      >
        Hire me →
      </a>
    </motion.nav>
  );
}
