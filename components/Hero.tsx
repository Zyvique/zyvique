"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PillButton from "./PillButton";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// Small, scattered copies of the particle art — meant to feel like loose
// floating specks behind the headline, not one single graphic.
const PARTICLES = [
  { top: "-10%", left: "8%", size: 56, opacity: 0.16, rotate: -12 },
  { top: "58%", left: "0%", size: 40, opacity: 0.12, rotate: 8 },
  { top: "6%", left: "82%", size: 48, opacity: 0.14, rotate: 20 },
  { top: "70%", left: "88%", size: 36, opacity: 0.1, rotate: -6 },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-24 pt-16 md:pb-32 md:pt-24"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
          Websites for local businesses
        </motion.span>

        {/* Ascii art sits behind the headline, text stays on top */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
          >
            <Image
              src="/walk.png"
              alt=""
              width={399}
              height={625}
              className="w-28 opacity-10 mix-blend-multiply sm:w-36 md:w-44"
            />
          </div>

          {PARTICLES.map((particle, i) => (
            <Image
              key={i}
              src="/particles.png"
              alt=""
              width={500}
              height={500}
              aria-hidden="true"
              className="pointer-events-none absolute -z-10 mix-blend-multiply"
              style={{
                top: particle.top,
                left: particle.left,
                width: particle.size,
                height: "auto",
                opacity: particle.opacity,
                transform: `rotate(${particle.rotate}deg)`,
              }}
            />
          ))}

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 font-display text-4xl uppercase leading-[0.95] tracking-[0.05em] text-ink sm:text-5xl md:text-7xl"
          >
            Build a better
            <br />
            online presence.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-[45ch] text-base leading-relaxed text-muted md:text-lg"
        >
          Your website is often the first thing people see. We make sure
          it&apos;s one they&apos;ll remember.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <PillButton onClick={() => scrollToSection("start")}>
            Start a Project
          </PillButton>
        </motion.div>
      </div>
    </section>
  );
}
