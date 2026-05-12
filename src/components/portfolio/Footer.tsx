import { motion } from "framer-motion";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border overflow-hidden">
      <div className="px-6 mx-auto max-w-7xl pt-24 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <h2 className="font-display text-[clamp(4rem,18vw,16rem)] leading-[0.85] tracking-tighter shimmer-text">
            yuvaraj.dev
          </h2>
          <p className="mt-6 font-display italic text-2xl md:text-3xl text-mist">
            "Build it like it matters."
          </p>
        </motion.div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <div>© {year} Yuvaraj — Crafted by hand</div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-foreground opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
            </span>
            All systems online
          </div>
          <div>v1.0 · Monochrome edition</div>
        </div>
      </div>
    </footer>
  );
}
