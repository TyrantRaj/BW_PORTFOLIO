import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star, Code, Zap } from "lucide-react";
import { SectionLabel } from "./About";

const ITEMS = [
  { icon: Trophy, title: "1st Prize", sub: "SRM Hackathon", note: "Built and shipped a working product within 24h, judged across innovation and execution.", year: "2024" },
  { icon: Medal, title: "1st Prize", sub: "IEEE Day Technical Quiz", note: "Top performance across CS fundamentals, systems and current tech.", year: "2023" },
  { icon: Award, title: "Released Game", sub: "Live on Play Store", note: "Authored, packaged and published a real game to a real audience.", year: "2022" },
  { icon: Star, title: "Top 7", sub: "National Game Jam", note: "Atmospheric puzzle-platformer 'Fragile Relic' selected nationally.", year: "2024" },
  { icon: Code, title: "100+ Problems", sub: "LeetCode", note: "Across arrays, DP, graphs, greedy and contest problems.", year: "Ongoing" },
  { icon: Zap, title: "700+ Problems", sub: "Skillrack", note: "Daily-discipline algorithm grind across categories.", year: "Ongoing" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32 md:py-44 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="08" title="Achievements" kicker="Selected wins" />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.title + it.sub}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl glass p-7 overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-full grid place-items-center border border-foreground/20">
                  <it.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{it.year}</span>
              </div>
              <div className="mt-8">
                <div className="font-display text-3xl">{it.title}</div>
                <div className="mt-1 text-sm font-medium">{it.sub}</div>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{it.note}</p>
              </div>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-foreground/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
