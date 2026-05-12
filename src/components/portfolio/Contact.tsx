import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import {
  ArrowUpRight,
  Check,
  Mail,
  Phone,
  Code2,
  Briefcase,
  Gamepad2,
} from "lucide-react";

import { SectionLabel } from "./About";

const LINKS = [
  {
    icon: Code2,
    label: "GitHub",
    value: "github.com/TyrantRaj",
    href: "https://github.com/TyrantRaj",
  },

  {
    icon: Briefcase,
    label: "LinkedIn",
    value: "linkedin.com/in/yuvarajdev",
    href: "https://linkedin.com/in/yuvarajdev",
  },

  {
    icon: Mail,
    label: "Email",
    value: "yuvarajdev04@gmail.com",
    href: "mailto:yuvarajdev04@gmail.com",
  },

  {
    icon: Phone,
    label: "+91 6374189347",
    value: "+91 6374189347",
    href: "tel:+916374189347",
  },

  {
    icon: Gamepad2,
    label: "Itch.io",
    value: "tyrantrraj.itch.io",
    href: "https://tyrantrraj.itch.io",
  },
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const [toast, setToast] =
    useState<string | null>(null);

  const onChange = useCallback(
    (k: keyof typeof form) =>
      (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement
        >
      ) => {
        const v = e.target.value;

        setForm((f) => ({
          ...f,
          [k]: v,
        }));
      },
    []
  );

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.message
    ) {
      setToast("Please fill all fields.");

      setTimeout(
        () => setToast(null),
        2400
      );

      return;
    }

    try {
      setSent(true);

      const response = await fetch(
        "https://formsubmit.co/ajax/yuvarajdev04@gmail.com",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Accept:
              "application/json",
          },

          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        }
      );

      if (response.ok) {
        setToast(
          "Message sent successfully."
        );

        setForm({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setSent(false);
        }, 1800);
      } else {
        throw new Error();
      }
    } catch (error) {
      setToast(
        "Failed to send message."
      );

      setSent(false);
    }

    setTimeout(
      () => setToast(null),
      3200
    );
  };

  return (
    <section
      id="contact"
      className="relative py-32 md:py-44 px-6 border-t border-border"
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel
          index="09"
          title="Contact"
          kicker="Let's build"
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-3">
          {/* Left Side */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight">
              Have an idea?{" "}
              <span className="italic text-mist">
                Let's make it real.
              </span>
            </h3>

            <p className="text-muted-foreground max-w-md">
              Open to full-time roles,
              freelance projects, game
              collaborations and creative
              tech experiments.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl glass p-4 hover:bg-foreground/[0.05] transition-colors"
                >
                  <div className="h-9 w-9 rounded-full grid place-items-center border border-foreground/20">
                    <l.icon
                      className="h-4 w-4"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                      {l.label}
                    </div>

                    <div className="text-xs truncate">
                      {l.value}
                    </div>
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-7 relative rounded-3xl glass-strong p-8 md:p-10 overflow-hidden"
          >
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-foreground/40 to-transparent" />

            <div className="space-y-7">
              <Field
                label="Your name"
                value={form.name}
                onChange={onChange("name")}
                type="text"
              />

              <Field
                label="Email address"
                value={form.email}
                onChange={onChange("email")}
                type="email"
              />

              <Field
                label="Tell me about your project"
                value={form.message}
                onChange={onChange(
                  "message"
                )}
                textarea
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Secure · Direct to Email ·
                Reviewed personally
              </div>

              <button
                type="submit"
                className="group relative inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-sm font-medium overflow-hidden disabled:opacity-50"
                disabled={sent}
              >
                <span className="relative z-10">
                  {sent
                    ? "Sent"
                    : "Send message"}
                </span>

                <span className="relative z-10 grid place-items-center h-9 w-9 rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
                  {sent ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4" />
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] rounded-full glass-strong px-5 py-3 text-sm shadow-2xl"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea = false,
}: {
  label: string;

  value: string;

  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => void;

  type?: string;

  textarea?: boolean;
}) {
  const has = value.length > 0;

  return (
    <div className="relative">
      <label
        className={`pointer-events-none absolute left-0 transition-all font-mono uppercase tracking-[0.25em] text-muted-foreground ${
          has
            ? "top-0 text-[9px]"
            : "top-5 text-[11px]"
        }`}
      >
        {label}
      </label>

      {textarea ? (
        <textarea
          value={value}
          onChange={onChange}
          rows={4}
          className="w-full bg-transparent border-0 border-b border-border focus:border-foreground outline-none pt-7 pb-3 text-base resize-none transition-colors"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent border-0 border-b border-border focus:border-foreground outline-none pt-7 pb-3 text-base transition-colors"
        />
      )}
    </div>
  );
}