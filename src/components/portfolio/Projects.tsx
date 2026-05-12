import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, X, ExternalLink, Code2 as Github } from "lucide-react";
import { SectionLabel } from "./About";

type Project = {
  title: string;
  category: "Game" | "Web" | "Mobile" | "AI / ML";
  description: string;
  tags?: string[];
  tech: string[];
  year: string;
  demo?: string;
  github?: string;
  image?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Missile Run",
    category: "Game",
    year: "2024",
    description:
      "High-speed evasive arcade shooter with reactive enemy waves.",
    tags: ["Unity · 2D"],
    tech: ["Unity", "C#", "Shader Graph", "Inkscape"],
    github: "https://github.com/TyrantRaj/Missile-Run",
    demo: "https://tyrantrraj.itch.io/missilerun-2d",
    image: "/projectimages/missile.png",
  },

  {
    title: "Fragile Relic",
    category: "Game",
    year: "2024",
    description:
      "Atmospheric puzzle-platformer about preserving a dying artifact.",
    tags: ["India Game Jam · Top 7"],
    tech: ["Unity", "C#", "Photoshop", "FMOD"],
    github: "https://github.com/TyrantRaj",
    demo: "https://tyrantrraj.itch.io/the-fragile-relic",
    image: "/projectimages/fragilerelic.png",
  },

  {
    title: "2D Chaos Platformer",
    category: "Game",
    year: "2023",
    description:
      "A chaotic rage platformer where random events constantly try to ruin your run.",
    tags: ["Play Store"],
    tech: [
      "Unity",
      "C#",
      "2D Physics",
      "Mobile",
      "Play Store",
    ],
    github: "https://github.com/TyrantRaj/Circle-Chaos",
    demo:
      "https://play.google.com/store/apps/details?id=com.tyrantgames.circlechaos&hl=en_IN",
    image: "/projectimages/CircleChaos.png",
  },

  {
    title: "Dental Website",
    category: "Web",
    year: "2024",
    description:
      "Modern dental clinic website focused on appointments, services and patient trust.",
    tags: ["Client Website"],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
    github:
      "https://github.com/TyrantRaj/dental-web-project",
    demo: "https://olivedentistry.in/",
    image: "/projectimages/dental-website.png",
  },

  {
    title: "Speed Math App",
    category: "Mobile",
    year: "2022",
    description:
      "Fast-paced mental math training app designed to improve calculation speed and accuracy.",
    tags: ["Play Store"],
    tech: [
      "Android Studio",
      "Java",
      "XML",
      "Google Play",
    ],
    demo:
      "https://play.google.com/store/apps/details?id=com.yuvaraj.speedmath",
    image: "/projectimages/speedmath.png",
  },

  {
    title: "Sign Language Recognition",
    category: "AI / ML",
    year: "2024",
    description:
      "AI-powered system that converts hand gestures into readable English text in real time.",
    tags: ["Hackathon Winner"],
    tech: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "TensorFlow",
    ],
    github:
      "https://github.com/TyrantRaj/Sign-Language-Learner",
    demo:
      "https://github.com/TyrantRaj/Sign-Language-Learner",
    image: "/projectimages/signlanguage.jpg",
  },

  {
    title: "Fraud Detection System",
    category: "AI / ML",
    year: "2024",
    description:
      "AI-powered fraud detection system that identifies suspicious financial transactions in real time.",
    tags: ["Machine Learning"],
    tech: [
      "Python",
      "Machine Learning",
      "Pandas",
      "Scikit-learn",
      "Streamlit",
    ],
    github:
      "https://github.com/TyrantRaj/FraudDetection-System",
    demo: "https://fraud-detector-ai.streamlit.app/",
    image: "/projectimages/FraudDetection.png",
  },

  {
    title: "Fake News Detection",
    category: "AI / ML",
    year: "2023",
    description:
      "Natural language processing system that predicts whether news content is real or fake.",
    tags: ["NLP"],
    tech: [
      "Python",
      "NLP",
      "Scikit-learn",
      "Pandas",
      "Streamlit",
    ],
    github:
      "https://github.com/TyrantRaj/FakeNewsPrediction",
    demo: "https://truthnewsai.streamlit.app/",
    image: "/projectimages/FakeNews.png",
  },
];

const FILTERS = ["All", "Game", "Web", "Mobile", "AI / ML"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const items = PROJECTS.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="relative py-28 md:py-40 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="05" title="Selected Work" kicker={`${PROJECTS.length} projects`} />

        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative px-4 py-2 rounded-full text-xs font-mono uppercase tracking-[0.2em] transition-colors border ${
                filter === f
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid md:grid-cols-2 gap-3">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} onOpen={() => setActive(p)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      whileHover={{ y: -4 }}
      className="group relative text-left rounded-2xl glass overflow-hidden hover:bg-foreground/[0.04] transition-colors"
    >
      <button onClick={onOpen} className="block w-full text-left">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
          <ProjectVisual project={project} />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] px-2.5 py-1 rounded-full glass">
              {project.category}
            </span>
          </div>
          <div className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {project.year}
          </div>
          <div className="absolute bottom-4 right-4 grid place-items-center h-10 w-10 rounded-full bg-foreground text-background opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </button>

      <div className="p-6">
        <h3 className="font-display text-2xl md:text-3xl">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
        {project.tags && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span key={t} className="text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-1 rounded border border-foreground/30">
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] px-2 py-1 rounded bg-foreground/[0.06] text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background text-xs font-mono uppercase tracking-[0.18em] px-4 py-2 hover:opacity-90 transition"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/25 text-xs font-mono uppercase tracking-[0.18em] px-4 py-2 hover:bg-foreground/5 transition"
            >
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectVisual({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="absolute bottom-6 left-6">
        <h3 className="font-display text-4xl md:text-5xl text-white">
          {project.title}
        </h3>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] grid place-items-center bg-background/80 backdrop-blur-2xl p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl glass-strong rounded-3xl overflow-hidden"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full glass grid place-items-center hover:bg-foreground/10">
          <X className="h-4 w-4" />
        </button>
        <div className="relative aspect-[16/9] border-b border-border overflow-hidden">
          <ProjectVisual project={project} />
        </div>
        <div className="p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {project.category} · {project.year}
            </span>
            {project.tags?.map((t) => (
              <span key={t} className="text-[10px] font-mono uppercase tracking-[0.2em] px-2 py-1 rounded border border-foreground/30">{t}</span>
            ))}
          </div>
          <h3 className="font-display text-4xl md:text-5xl">{project.title}</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-foreground/[0.08] text-foreground/90">{t}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background text-sm font-medium px-5 py-2.5 hover:opacity-90 transition">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-foreground/25 text-sm font-medium px-5 py-2.5 hover:bg-foreground/5 transition">
                <Github className="h-4 w-4" /> View on GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
