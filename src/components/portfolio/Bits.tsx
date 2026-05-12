import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX: x, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-px bg-foreground z-[60]"
    />
  );
}

export function Marquee() {
  const items = [
    "Software Developer",
    "Game Designer",
    "AI / ML Engineer",
    "Creative Technologist",
    "3D Artist",
    "Available '26",
  ];
  const row = [...items, ...items, ...items];
  return (
    <div className="relative border-y border-border py-6 overflow-hidden marquee-mask-x bg-background">
      <div className="flex gap-12 whitespace-nowrap animate-[scroll-x_40s_linear_infinite]">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-12 font-display text-4xl md:text-5xl">
            <span className="italic text-mist">{t}</span>
            <span className="text-foreground/40">✦</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes scroll-x { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}
