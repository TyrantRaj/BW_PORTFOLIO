import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "./About";

const username = "YuvarajX";

function useCount(
  end: number,
  run: boolean,
  duration = 1600
) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!run) return;

    let raf: number;

    const start = performance.now();

    const step = (now: number) => {
      const t = Math.min(
        1,
        (now - start) / duration
      );

      const eased = 1 - Math.pow(1 - t, 3);

      setVal(Math.floor(eased * end));

      if (t < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);

    return () => cancelAnimationFrame(raf);
  }, [end, run, duration]);

  return val;
}

export function DSA() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [stats, setStats] = useState({
    total: 312,
    easy: 140,
    medium: 135,
    hard: 37,
    streak: 64,
  });

  useEffect(() => {
    async function fetchLeetCodeData() {
      try {
        const query = `
query userProfile($username: String!) {
  matchedUser(username: $username) {
    submitStats {
      acSubmissionNum {
        difficulty
        count
      }
    }

    userCalendar {
      streak
    }
  }
}
`;

        const response = await fetch(
          "https://corsproxy.io/?https://leetcode.com/graphql",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              query,
              variables: {
                username,
              },
            }),
          }
        );

        const result = await response.json();

        if (
          !result.data ||
          !result.data.matchedUser
        ) {
          return;
        }

        const data =
          result.data.matchedUser.submitStats
            .acSubmissionNum;

        setStats({
          total: data[0].count,
          easy: data[1].count,
          medium: data[2].count,
          hard: data[3].count,
          streak:
            result.data.matchedUser
              .userCalendar.streak,
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetchLeetCodeData();
  }, []);

  const total = useCount(
    stats.total,
    inView
  );

  const easy = useCount(
    stats.easy,
    inView
  );

  const medium = useCount(
    stats.medium,
    inView
  );

  const hard = useCount(
    stats.hard,
    inView
  );

  const streak = useCount(
    stats.streak,
    inView
  );

  return (
    <section
      id="dsa"
      ref={ref}
      className="relative py-28 md:py-40 px-6 border-t border-border"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel
          index="04"
          title="DSA / Coding"
          kicker="Algorithm Atelier"
        />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-6 gap-3">
          <BigStat
            className="col-span-2 lg:col-span-2 lg:row-span-2"
            v={total}
            suffix="+"
            label="Total Solved"
            sub="Real-time LeetCode statistics"
            big
          />

          <Stat
            v={easy}
            label="Easy"
            tone="oklch(0.85 0 0)"
          />

          <Stat
            v={medium}
            label="Medium"
            tone="oklch(0.6 0 0)"
          />

          <Stat
            v={hard}
            label="Hard"
            tone="oklch(0.32 0 0)"
          />

          <Stat
            v={streak}
            label="Day Streak"
            sub="Current daily-solve streak"
          />
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-3 grid grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden"
        >
        </motion.div>
      </div>
    </section>
  );
}

function BigStat({
  v,
  suffix = "",
  label,
  sub,
  className = "",
  big = false,
}: {
  v: number;
  suffix?: string;
  label: string;
  sub?: string;
  className?: string;
  big?: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      className={`rounded-2xl glass p-7 md:p-9 flex flex-col justify-between ${className}`}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </div>

      <div
        className={`font-display tabular-nums leading-none mt-6 ${
          big
            ? "text-7xl md:text-8xl"
            : "text-5xl"
        }`}
      >
        {v}

        <span className="text-3xl text-mist">
          {suffix}
        </span>
      </div>

      {sub && (
        <div className="mt-4 text-xs text-muted-foreground">
          {sub}
        </div>
      )}
    </motion.div>
  );
}

function Stat({
  v,
  suffix = "",
  label,
  sub,
  tone,
}: {
  v: number;
  suffix?: string;
  label: string;
  sub?: string;
  tone?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="rounded-2xl glass p-5 md:p-6 relative overflow-hidden"
    >
      {tone && (
        <span
          className="absolute top-5 right-5 h-2 w-2 rounded-full"
          style={{
            background: tone,
          }}
        />
      )}

      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </div>

      <div className="font-display text-4xl md:text-5xl tabular-nums leading-none mt-3">
        {v}

        <span className="text-2xl text-mist">
          {suffix}
        </span>
      </div>

      {sub && (
        <div className="mt-3 text-[11px] text-muted-foreground leading-relaxed">
          {sub}
        </div>
      )}
    </motion.div>
  );
}