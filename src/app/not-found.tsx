import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 paper-grain overflow-hidden">
      <div className="absolute inset-0 halftone opacity-50 pointer-events-none" />
      <div className="absolute inset-0 speed-lines opacity-25 pointer-events-none" />

      <div className="relative text-center max-w-2xl">
        <div className="text-7xl md:text-9xl mb-2">🙀</div>
        <h1 className="font-display text-[10rem] md:text-[14rem] leading-none tracking-tight">
          4<span className="text-blood">0</span>4
        </h1>
        <p className="font-comic text-3xl md:text-5xl mt-2">
          CHAPTER NOT FOUND
        </p>
        <p className="font-handwritten text-2xl md:text-3xl mt-4 text-ink/70">
          looks like u took a wrong panel
        </p>
        <Link
          href="/"
          data-cursor="hover"
          className="mt-10 inline-flex items-center gap-2 bg-blood text-paper font-comic text-2xl px-7 py-3 panel-shadow hover:translate-x-1 hover:translate-y-1 hover:[box-shadow:0_0_0_3px_var(--color-ink)_inset] transition-all"
        >
          ← BACK TO PAGE 1
        </Link>
      </div>
    </div>
  );
}
