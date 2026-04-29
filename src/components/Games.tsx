"use client";

import { motion } from "framer-motion";
import { Crown, Code2, Briefcase, Wrench, Sparkles } from "lucide-react";

type Role =
  | "OWNER"
  | "HEAD DEV"
  | "PROGRAMMER"
  | "MANAGER"
  | "CONTRIBUTOR"
  | "COMMISSION";

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
    case "COMMISSION":
      return <Sparkles className="w-5 h-5" strokeWidth={2.5} />;
  }
};

const games = [
  {
    name: "SQUID GAME",
    series: "Squid Game",
    role: "PROGRAMMER" as Role,
    stat: "80K PEAK CCU",
    blurb: "Worked on the squid game game. peaked 80k. ridiculous numbers.",
    bg: "bg-blood text-paper",
    accent: "text-sun",
    rotate: -1,
    span: "md:col-span-2",
  },
  {
    name: "VISION",
    series: "Blue Lock",
    role: "OWNER" as Role,
    stat: "10K PEAK CCU",
    blurb: "owned the blue lock game. flow cutscenes, emotes, full ship.",
    bg: "bg-tech text-paper",
    accent: "text-sun",
    rotate: 1,
    span: "",
  },
  {
    name: "EXCORE",
    series: "CC GAME",
    role: "OWNER" as Role,
    stat: "BIGGEST CC 2020-21",
    blurb: "ran the cc scene back when it ran roblox.",
    bg: "bg-ink text-paper",
    accent: "text-blood",
    rotate: -0.5,
    span: "",
  },
  {
    name: "KING LEGACY",
    series: "One Piece",
    role: "COMMISSION" as Role,
    stat: "MASSIVE FANBASE",
    blurb: "commissioned scripting work for one of roblox's biggest op games.",
    bg: "bg-sun text-ink",
    accent: "text-blood",
    rotate: 0.5,
    span: "md:col-span-2",
  },
  {
    name: "AOT PROJECT",
    series: "Attack on Titan",
    role: "HEAD DEV" as Role,
    stat: "ROLEPLAY",
    blurb: "head dev. odm gear, titans, the whole thing.",
    bg: "bg-mint text-ink",
    accent: "text-ink",
    rotate: -0.5,
    span: "",
  },
  {
    name: "OP FREEDOM AWAITS",
    series: "One Piece",
    role: "PROGRAMMER" as Role,
    stat: "PUBLIC · HIGH CCU",
    blurb: "programmer on a public op game pulling real numbers.",
    bg: "bg-paper-dark text-ink",
    accent: "text-blood",
    rotate: 0.5,
    span: "",
  },
  {
    name: "UNTITLED GYM",
    series: "Gym",
    role: "PROGRAMMER" as Role,
    stat: "11K PEAK CCU",
    blurb: "11k peak on the gym game.",
    bg: "bg-paper-dark text-ink",
    accent: "text-tech",
    rotate: -1,
    span: "",
  },
  {
    name: "OP SECOND DREAM",
    series: "One Piece",
    role: "CONTRIBUTOR" as Role,
    stat: "CC GAME",
    blurb: "scripting on the one piece cc favorite.",
    bg: "bg-blood text-paper",
    accent: "text-sun",
    rotate: 1,
    span: "",
  },
  {
    name: "OP FINAL CHAPTER",
    series: "One Piece",
    role: "MANAGER" as Role,
    stat: "SHIPPED",
    blurb: "managed the project. kept the ship sailing.",
    bg: "bg-ink text-paper",
    accent: "text-mint",
    rotate: -0.5,
    span: "",
  },
  {
    name: "SAO",
    series: "Sword Art Online",
    role: "CONTRIBUTOR" as Role,
    stat: "MMO SYSTEMS",
    blurb: "mining + mmo systems on a full sao build.",
    bg: "bg-tech text-paper",
    accent: "text-mint",
    rotate: 0.5,
    span: "",
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
        + a stack of closed-source contracts. ask in dms.
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
  span,
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
  span: string;
  index: number;
}) {
  const featured = !!span;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotate - 4 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      whileHover={{ rotate: rotate + (rotate >= 0 ? 1.5 : -1.5), scale: 1.02 }}
      data-cursor="hover"
      className={`${bg} panel-shadow p-6 md:p-8 relative overflow-hidden flex flex-col ${span}`}
    >
      <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />

      <div className="relative flex items-center justify-between mb-3">
        <span className={`font-handwritten text-xl ${accent}`}>/ {series}</span>
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
