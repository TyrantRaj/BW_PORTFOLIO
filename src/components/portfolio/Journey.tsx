import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const ITEMS = [
  [
    "2018",
    "First Introduction to Programming",
    "While watching my brother and cousin struggle with a C++ error, I searched online and fixed it myself. That moment sparked my curiosity about programming and became the beginning of my journey into tech.",
  ],

  [
    "2020",
    "Learning Python & C++ During COVID",
    "During the COVID lockdown period in 10th grade, I started learning Python and C++ through online resources and experimentation. This became my first serious step into software development.",
  ],

  [
    "2021",
    "Game Development Dream Begins",
    "After spending countless hours playing Free Fire, I became fascinated by how games were created. That curiosity pushed me to explore Unity and game development for the first time.",
  ],

  [
    "2021",
    "Android Developer Journey",
    "Without owning a PC capable of running game engines, I borrowed a government laptop from my brother’s friend and started learning Android Studio to build apps and earn money for my dream gaming PC.",
  ],

  [
    "2022",
    "Published First Play Store App",
    "Built and released Speed Math on the Google Play Store using Android Studio, Java and XML. Although it did not generate income, it gave me real-world experience in app development and publishing.",
  ],

  [
    "2023",
    "Dream PC & Full Game Development",
    "After joining college, I finally got my dream PC and fully entered the world of game development. I built multiple Unity projects, released games and explored advanced gameplay systems.",
  ],

  [
    "2024",
    "Freelance Web Development",
    "Developed a professional dental clinic website with responsive UI, SEO optimization and modern design. What started as a simple client project became a polished production website.",
  ],

  [
    "2024",
    "Hackathons & AI/ML Projects",
    "Built AI and computer vision systems including Sign Language Recognition, Fraud Detection and Fake News Detection projects while participating in hackathons and innovation events.",
  ],

  [
    "2025",
    "Building My Dream Multiplayer Game",
    "Currently developing my dream multiplayer game featuring proximity voice chat, multiplayer systems and large-scale gameplay mechanics while continuing to explore AI and software engineering.",
  ],

  [
    "2025",
    "Aspiring Software Engineer",
    "Now actively seeking opportunities in software engineering, AI/ML and game development while continuing to build ambitious products independently.",
  ],
] as const;

export function Journey() {
  return (
    <section id="journey" className="relative py-32 md:py-44 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="07" title="Journey" kicker="2018 → 2026" />

        <div className="mt-16 relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-foreground/15" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-foreground"
          />

          <div className="space-y-12 md:space-y-16">
            {ITEMS.map(([year, title, body], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.05 * i }}
                className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-16 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
              >
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 z-10">
                  <div className="relative h-3 w-3">
                    <span className="absolute inset-0 rounded-full bg-foreground" />
                    <span className="absolute -inset-2 rounded-full border border-foreground/30" />
                    <span className="absolute -inset-4 rounded-full border border-foreground/10" />
                  </div>
                </div>

                <div className={`md:[direction:ltr] ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12 md:col-start-2"}`}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">{year}</div>
                  <h3 className="font-display text-2xl md:text-3xl leading-tight">{title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md md:inline-block">
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
