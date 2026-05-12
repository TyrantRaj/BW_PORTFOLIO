import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const dur = 1600;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      setProgress(Math.floor(t * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[300] bg-background grid place-items-center grain"
        >
          <div className="w-full max-w-md px-8">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
              <span>Yuvaraj.dev</span>
              <span>MMXXVI</span>
            </div>

            <div className="font-display text-5xl md:text-6xl leading-none mb-8 tabular-nums">
              {String(progress).padStart(3, "0")}
              <span className="text-mist text-3xl">%</span>
            </div>

            <div className="h-px w-full bg-foreground/15 overflow-hidden">
              <motion.div
                className="h-full bg-foreground origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>

            <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
              {progress < 30 ? "Initializing systems" : progress < 70 ? "Compiling shaders" : progress < 95 ? "Polishing pixels" : "Ready"}
              <span className="animate-blink">_</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
