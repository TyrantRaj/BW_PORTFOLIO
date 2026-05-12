import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./About";

const GROUPS = [
  { name: "Languages", items: [["C#", 92], ["Python", 88], ["JavaScript", 90], ["C++", 70], ["SQL", 75]] },
  { name: "Game Dev", items: [["Unity", 93], ["Unreal", 55], ["Multiplayer / Netcode", 78], ["Gameplay AI", 80]] },
  { name: "AI / ML", items: [["PyTorch", 80], ["TensorFlow", 72], ["OpenCV", 85], ["Langraph", 70]] },
  { name: "Web", items: [["HTML / CSS", 92], ["React", 65], ["TailwindCSS", 72], ["Vite", 70]] },
  { name: "App Dev", items: [["Android Studio", 75], ["Kotlin", 72], ["Firebase", 80], ["XML", 70]] },
  { name: "Backend", items: [["Node.js", 85], ["Express", 82], ["Flask", 70], ["WebSockets", 78]] },
  { name: "Databases", items: [["MongoDB", 82], ["PostgreSQL", 78], ["Firebase", 80], ["SQL", 85]] },
  { name: "Cloud & Tools", items: [["Docker", 72], ["Git", 92], ["GitHub Actions", 70]] },
  { name: "3D & Creative", items: [["Blender", 86], ["Inkscape", 60], ["Figma", 88], ["Photoshop", 65]] },
] as const;

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-44 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="03" title="Skillset" kicker="Stack & Tools" />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {GROUPS.map((g, i) => (
            <SkillCard key={g.name} group={g} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ group, delay }: { group: typeof GROUPS[number]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl glass p-6 hover:bg-foreground/[0.04] transition-colors"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-2xl">{group.name}</h3>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {group.items.length} skills
        </span>
      </div>

      <ul className="space-y-4">
        {group.items.map(([label, val], i) => (
          <li key={label as string}>
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-sm">{label}</span>
              <span className="font-mono text-[10px] text-muted-foreground tabular-nums">{val}</span>
            </div>
            <div className="relative h-px w-full bg-foreground/10 overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: (val as number) / 100 } : {}}
                transition={{ duration: 1.1, delay: delay + 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
                className="absolute inset-0 bg-foreground"
              />
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
