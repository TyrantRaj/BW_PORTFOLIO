import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Index" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "dsa", label: "DSA" },
  { id: "projects", label: "Work" },
  { id: "lab", label: "Lab" },
  { id: "journey", label: "Journey" },
  { id: "achievements", label: "Wins" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <button
  onClick={() => go("hero")}
  className="group flex items-center gap-3"
>
  <div className="relative h-9 w-9 rounded-full border border-white/20 overflow-hidden bg-black flex items-center justify-center">
    <img
      src="/logo.png"
      alt="yuvaraj.dev"
      className="h-5 w-5 object-contain"
    />

    <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>

  <span className="font-mono text-xs tracking-[0.35em] uppercase text-white/75 group-hover:text-white transition-colors">
    yuvaraj.dev
  </span>
</button>

          <nav
            className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all ${
              scrolled ? "glass-strong" : "glass"
            }`}
          >
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={`relative px-3.5 py-1.5 text-[11px] tracking-[0.2em] uppercase font-medium transition-colors ${
                  active === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-foreground/10 border border-foreground/20"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{s.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-foreground opacity-60 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
              </span>
              Available '26
            </div>
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden h-9 w-9 grid place-items-center rounded-full glass"
              aria-label="menu"
            >
              <div className="space-y-1.5">
                <span className={`block h-px w-4 bg-foreground transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
                <span className={`block h-px w-4 bg-foreground transition ${open ? "opacity-0" : ""}`} />
                <span className={`block h-px w-4 bg-foreground transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-2xl pt-24 px-8"
          >
            <nav className="flex flex-col gap-1">
              {SECTIONS.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => go(s.id)}
                  className="text-left py-3 border-b border-border flex items-baseline justify-between"
                >
                  <span className="font-display text-3xl">{s.label}</span>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
