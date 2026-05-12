import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { Maximize2, X } from "lucide-react";
import { SectionLabel } from "./About";

const ITEMS = [
  {
    title: "Stylized Burger Render",
    image: "/blenderimages/burger.png",
  },
  {
    title: "Streetwear Cap",
    image: "/blenderimages/cap.png",
  },
  {
    title: "Minimal Chair Study",
    image: "/blenderimages/chair.png",
  },
  {
    title: "3D Character Design",
    image: "/blenderimages/character.png",
  },
  {
    title: "Raze Grenade Final",
    image: "/blenderimages/finalrazegrenade.png",
  },
  {
    title: "Gaming Headset",
    image: "/blenderimages/headset.png",
  },
  {
    title: "Sci-Fi Helmet",
    image: "/blenderimages/helmet.png",
  },
  {
    title: "Industrial Machine",
    image: "/blenderimages/machine.png",
  },
  {
    title: "Fantasy Mushroom",
    image: "/blenderimages/Mushroom.png",
  },
  {
    title: "Low Poly Pig",
    image: "/blenderimages/Pig.png",
  },
  {
    title: "Raze Grenade Prototype",
    image: "/blenderimages/raze grenade.png",
  },
  {
    title: "Robot Concept",
    image: "/blenderimages/robot.png",
  },
  {
    title: "Scientific Storage Box",
    image: "/blenderimages/scientificbox.png",
  },
  {
    title: "Tyrant Spark Plug",
    image: "/blenderimages/sparkplug.png",
  },
  {
    title: "Fantasy Sword",
    image: "/blenderimages/sword.png",
  },
  {
    title: "Tea Cup Render",
    image: "/blenderimages/tea.png",
  },
  {
    title: "Creature Tentacle Study",
    image: "/blenderimages/tentacle.png",
  },
  {
    title: "Decorative Vase",
    image: "/blenderimages/vase.png",
  },
];

export function CreativeLab() {
  const [active, setActive] = useState<number | null>(
    null
  );

  const columns = useMemo(() => {
    const cols: number[][] = [[], [], [], []];

    ITEMS.forEach((_, i) =>
      cols[i % 4].push(i)
    );

    return cols.map((c) => [...c, ...c]);
  }, []);

  return (
    <section
      id="lab"
      className="relative py-32 md:py-44 border-t border-border overflow-hidden"
    >
      <div className="px-6 mx-auto max-w-7xl">
        <SectionLabel
          index="06"
          title="Creative Lab"
          kicker="Blender Studio"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 max-w-2xl text-muted-foreground"
        >
          A monochrome archive of 3D
          explorations — products,
          characters, weapons and concept
          studies crafted in Blender.
        </motion.p>
      </div>

      <div className="mt-16 relative h-[80vh] overflow-hidden marquee-mask">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-6 h-full">
          {columns.map((col, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden h-full"
            >
              <div
                className={
                  idx % 2 === 0
                    ? "animate-scroll-y"
                    : "animate-scroll-y-rev"
                }
                style={{
                  animationDuration: `${
                    36 + idx * 6
                  }s`,
                }}
              >
                {col.map((itemIdx, k) => (
                  <RenderTile
                    key={`${idx}-${k}`}
                    item={ITEMS[itemIdx]}
                    index={itemIdx}
                    onOpen={() =>
                      setActive(itemIdx)
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
  {active !== null && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setActive(null)}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl grid place-items-center p-4 md:p-8"
    >
      <motion.div
        initial={{
          scale: 0.92,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.96,
          opacity: 0,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={(e) =>
          e.stopPropagation()
        }
        className="relative w-full max-w-7xl rounded-3xl overflow-hidden border border-white/10 bg-black"
      >
        {/* Top Actions */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <a
            href={ITEMS[active].image}
            download
            className="h-11 px-5 rounded-full glass flex items-center justify-center text-sm hover:bg-white/10 transition-colors"
          >
            Download
          </a>

          <a
            href={ITEMS[active].image}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 px-5 rounded-full glass flex items-center justify-center text-sm hover:bg-white/10 transition-colors"
          >
            Open
          </a>

          <button
            onClick={() =>
              setActive(null)
            }
            className="h-11 w-11 rounded-full glass grid place-items-center hover:bg-white/10 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Full Image */}
        <div className="relative flex items-center justify-center bg-black max-h-[92vh] overflow-auto">
          <img
            src={ITEMS[active].image}
            alt={ITEMS[active].title}
            className="w-auto h-auto max-w-full max-h-[92vh] object-contain"
          />
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Blender Render ·{" "}
            {String(active + 1).padStart(
              2,
              "0"
            )}{" "}
            / {ITEMS.length}
          </div>

          <div className="font-display text-3xl md:text-5xl mt-2 text-white">
            {ITEMS[active].title}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
}

function RenderTile({
  item,
  index,
  onOpen,
}: {
  item: {
    title: string;
    image: string;
  };
  index: number;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="group relative block w-full aspect-[3/4] mb-3 overflow-hidden rounded-xl border border-border bg-black"
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />

      <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="h-12 w-12 rounded-full glass grid place-items-center">
          <Maximize2 className="h-4 w-4" />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-background/90 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform">
        <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="font-display text-lg leading-tight">
          {item.title}
        </div>
      </div>
    </button>
  );
}