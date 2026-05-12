import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

const STATS = [
  { v: "13+", l: "Projects" },
  { v: "5", l: "Hackathons" },
  { v: "6", l: "Games Shipped" },
  { v: "300+", l: "DSA Solved" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden grain"
    >
      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-foreground/[0.04] blur-3xl animate-float-orb" />
        <div className="absolute top-1/2 -right-40 w-[36rem] h-[36rem] rounded-full bg-foreground/[0.05] blur-3xl animate-float-orb" style={{ animationDelay: "-7s" }} />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Side meta */}
      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        <span className="rotate-180 [writing-mode:vertical-rl]">Portfolio · MMXXVI</span>
        <span className="h-16 w-px bg-foreground/20" />
        <span>01 / 09</span>
      </div>
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        <span>N 13.08° E 80.27°</span>
        <span className="h-16 w-px bg-foreground/20" />
        <span className="[writing-mode:vertical-rl]">Chennai, India</span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 min-h-screen flex flex-col justify-center">
        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-10"
        >
          <span className="h-px w-10 bg-foreground/40" />
          Software · Games · Intelligent systems
        </motion.div>

        {/* Headline */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-mono text-sm text-muted-foreground"
          >
            <span className="font-display italic text-2xl text-foreground">Hi, I'm</span>
          </motion.div>

          <h1 className="font-display text-[clamp(4rem,14vw,12rem)] leading-[0.85] tracking-tight">
            <Reveal delay={0.5}>
              <span className="block">Yuvaraj</span>
            </Reveal>
          </h1>

          <h2 className="font-display text-[clamp(2rem,6vw,5.5rem)] leading-[0.95] tracking-tight max-w-5xl mt-6">
            <Reveal delay={0.7}>
              <span className="block italic text-bone/90">Crafting Software,</span>
            </Reveal>
            <Reveal delay={0.85}>
              <span className="block">Games &amp; <span className="italic text-mist">Intelligent Worlds.</span></span>
            </Reveal>
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-12 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed text-pretty"
        >
          Building games, intelligent systems, and interactive digital experiences.
          I design and engineer products at the intersection of creativity and code —
          from multiplayer game worlds to AI-powered tools and full-stack platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.25 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="group relative inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-sm font-medium overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <span className="relative z-10 grid place-items-center h-9 w-9 rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
          <a
  href="/Yuvaraj_Resume.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm hover:bg-foreground/5 transition-colors"
>
  <ArrowDownToLine className="h-4 w-4" />
  Download CV
</a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden glass"
        >
          {STATS.map((s) => (
            <div key={s.l} className="p-6 md:p-8 bg-background/50 backdrop-blur-xl">
              <div className="font-display text-4xl md:text-5xl">{s.v}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-foreground/40"
        />
      </motion.div>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
