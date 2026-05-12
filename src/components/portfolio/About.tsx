import { motion } from "framer-motion";
import { Code2, Gamepad2, Brain, Layers, Sparkles, Rocket } from "lucide-react";

const METRICS = [
  { v: "13+", l: "Projects Built" },
  { v: "5", l: "Hackathons" },
  { v: "6", l: "Games Published" },
  { v: "3+", l: "Freelance Clients" },
  { v: "300+", l: "DSA Problems" },
  { v: "25+", l: "Technologies" },
];

const FACETS = [
  { icon: Code2, label: "Engineer", note: "Systems thinker" },
  { icon: Gamepad2, label: "Game Dev", note: "Unity · Multiplayer" },
  { icon: Brain, label: "AI / ML", note: "Vision · NLP · LLMs" },
  { icon: Layers, label: "Full Stack", note: "Web · Mobile · Backend" },
  { icon: Sparkles, label: "Creative Tech", note: "3D · Shaders · UX" },
  { icon: Rocket, label: "Indie Mindset", note: "Ship. Iterate. Repeat." },
];

const PARAS = [
  "I'm a software developer driven by a deep curiosity for how systems, people, and creativity intersect. My work spans game development, AI/ML, full-stack engineering and experimental creative tech — building things that feel alive.",
  "From shipping multiplayer game worlds and AI-driven tools to crafting client websites and automation systems, I love the entire cycle: designing the architecture, writing the engine, polishing the experience, and pushing it into the wild.",
  "I care about craft, performance, and the small details that make a product feel premium. Whether it's a Unity prototype at a 48-hour game jam or a production-grade ML pipeline, I bring the same builder mindset.",
];

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-44 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="02" title="About" />

        <div className="mt-16 grid lg:grid-cols-12 gap-10">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight text-balance"
          >
            I build games, intelligent systems,{" "}
            <span className="italic text-mist">and the products that connect them.</span>
          </motion.h3>

          <div className="lg:col-span-5 space-y-5 text-muted-foreground leading-relaxed">
            {PARAS.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 * i }}
                className="text-pretty"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Metrics strip */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.l}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background p-6 group hover:bg-foreground/5 transition-colors"
            >
              <div className="font-display text-3xl md:text-4xl">{m.v}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{m.l}</div>
            </motion.div>
          ))}
        </div>

        {/* Facets */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {FACETS.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl glass p-5"
            >
              <f.icon className="h-5 w-5 mb-6 text-foreground/80" strokeWidth={1.5} />
              <div className="font-display text-xl">{f.label}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{f.note}</div>
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-foreground/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ index, title, kicker }: { index: string; title: string; kicker?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-border pb-6">
      <div className="flex items-baseline gap-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">/ {index}</span>
        <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
      </div>
      {kicker && (
        <span className="hidden md:block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{kicker}</span>
      )}
    </div>
  );
}
