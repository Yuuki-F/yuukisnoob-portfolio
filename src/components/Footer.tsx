export default function Footer() {
  return (
    <footer className="relative bg-ink text-paper py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-2xl tracking-wider">
          YUUKI<span className="text-blood">.</span>
        </p>
        <p className="font-handwritten text-lg text-paper/70">
          scripting since 2019 · still going
        </p>
        <p className="font-comic text-lg">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
