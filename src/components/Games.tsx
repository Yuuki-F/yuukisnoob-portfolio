"use client";

import { motion } from "framer-motion";
import { Crown, Code2, Briefcase, Wrench } from "lucide-react";

type Role = "OWNER" | "HEAD DEV" | "PROGRAMMER" | "MANAGER" | "CONTRIBUTOR";

const RoleIcon = ({ role }: { role: Role }) => {
  switch (role) {
    case "OWNER":
      return <Crown className="w-5 h-5" strokeWidth={2.5} />;
    case "HEAD DEV":
      return <Wrench className="w-5 h-5" strokeWidth={2.5} />;
    case "PROGRAMMER":
    case "CONTRIBUTOR":
      return <Code2 className="w-5 h-5" strokeWidth={2.5} />;
    case "MANAGER":
      return <Briefcase className="w-5 h-5" strokeWidth={2.5} />;
  }
};

const games = [
  {
    name: "VISION",
    series: "Blue Lock",
    role: "OWNER" as Role,
    stat: "10K PEAK CCU",
    blurb:
      "Owned and shipped a full Blue Lock football game. Flow cutscenes, emote system, the whole package.",
    bg: "bg-tech text-paper",
    accent: "text-sun",
    rotate: -1,
    featured: true,
  },
  {
    name: "EXCORE",
    series: "CC GAME",
    role: "OWNER" as Role,
    stat: "BIGGEST CC GAME 2020-21",
    blurb: "Reigned over the CC scene. Original. Big. Influential.",
    bg: "bg-ink text-paper",
    accent: "text-blood",
    rotate: 1,
    featured: true,
  },
  {
    name: "ATTACK ON TITAN PROJECT",
    series: "AoT",
    role: "HEAD DEV" as Role,
    stat: "ROLEPLAY",
    blurb: "Head dev on a full-on AoT roleplay game. ODM gear and all.",
    bg: "bg-mint text-ink",
    accent: "text-ink",
    rotate: -0.5,
  },
  {
    name: "OP FREEDOM AWAITS",
    series: "One Piece",
    role: "PROGRAMMER" as Role,
    stat: "PUBLIC · HIGH CCU",
    blurb: "Programmer on a public One Piece game pulling serious numbers.",
    bg: "bg-blood text-paper",
    accent: "text-sun",
    rotate: 1,
  },
  {
    name: "OP SECOND DREAM",
    series: "One Piece",
    role: "CONTRIBUTOR" as Role,
    stat: "CC GAME",
    blurb: "Scripting work on the One Piece CC fan favorite.",
    bg: "bg-sun text-ink",
    accent: "text-blood",
    rotate: -1,
  },
  {
    name: "OP FINAL CHAPTER",
    series: "One Piece",
    role: "MANAGER" as Role,
    stat: "SHIPPED",
    blurb: "Project manager — kept the ship sailing on time.",
    bg: "bg-paper-dark text-ink",
    accent: "text-tech",
    rotate: 0.5,
  },
  {
    name: "SAO",
    series: "Sword Art Online",
    role: "CONTRIBUTOR" as Role,
    stat: "MMO SYSTEMS",
    blurb: "Mining + MMO mechanics on a full SAO experience.",
    bg: "bg-ink text-paper",
    accent: "text-mint",
    rotate: -0.5,
  },
];

export default function Games() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16 space-y-4">
        <p className="font-handwritten text-2xl text-blood">— chapter 03</p>
        <h2 className="font-display text-6xl md:text-8xl leading-[0.9]">
          THE TRACK RECORD
        </h2>
        <p className="font-comic text-2xl md:text-3xl">
          games i&apos;ve actually <span className="text-blood">shipped</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        {games.map((g, i) => (
          <GameCard key={g.name} {...g} index={i} />
        ))}
      </div>

      <p className="mt-12 text-center font-handwritten text-xl text-ink/60">
        + a bunch of closed-source contracts. ask me about them in DMs.
      </p>
    </section>
  );
}

function GameCard({
  name,
  series,
  role,
  stat,
  blurb,
  bg,
  accent,
  rotate,
  featured,
  index,
}: {
  name: string;
  series: string;
  role: Role;
  stat: string;
  blurb: string;
  bg: string;
  accent: string;
  rotate: number;
  featured?: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotate - 4 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      whileHover={{ rotate: rotate + (rotate >= 0 ? 1.5 : -1.5), scale: 1.02 }}
      data-cursor="hover"
      className={`${bg} panel-shadow p-6 md:p-8 relative overflow-hidden flex flex-col ${
        featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      {/* halftone bg */}
      <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />

      <div className="relative flex items-center justify-between mb-3">
        <span className={`font-handwritten text-xl ${accent}`}>
          / {series}
        </span>
        <span className="font-comic text-lg opacity-60">
          #{String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3
        className={`relative font-display leading-[0.9] tracking-tight ${
          featured ? "text-5xl md:text-7xl" : "text-3xl md:text-5xl"
        } mb-4`}
      >
        {name}
      </h3>

      <p
        className={`relative ${
          featured ? "text-lg md:text-xl" : "text-base md:text-lg"
        } leading-snug mb-5 flex-1`}
      >
        {blurb}
      </p>

      <div className="relative flex items-center gap-3 flex-wrap">
        <span className="inline-flex items-center gap-1.5 bg-paper text-ink font-comic text-base px-3 py-1 panel-shadow-sm">
          <RoleIcon role={role} />
          {role}
        </span>
        <span className="font-comic text-base md:text-lg opacity-90">
          {stat}
        </span>
      </div>
    </motion.div>
  );
}
