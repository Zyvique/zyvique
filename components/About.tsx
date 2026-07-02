"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Placeholder metrics — swap for real numbers once we have client data to cite.
const STATS = [
  { value: "2x", label: "More inquiries" },
  { value: "48hr", label: "Avg. turnaround" },
  { value: "100%", label: "Mobile-ready" },
];

export default function About() {
  return (
    <section
      id="company"
      className="relative overflow-hidden px-6 py-24 md:py-32"
    >
      {/* Extra ascii art flourish in the vacant corner, purely visual */}
      <Image
        src="/particles.png"
        alt=""
        width={500}
        height={500}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -left-8 hidden w-32 opacity-15 mix-blend-multiply sm:block md:w-40"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Ascii art sits behind the headline, text stays on top */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
          >
            <Image
              src="/cellular.png"
              alt=""
              width={464}
              height={538}
              className="w-48 opacity-15 mix-blend-multiply sm:w-56 md:w-64"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 font-display text-3xl uppercase leading-[0.95] tracking-[0.05em] text-ink sm:text-4xl md:text-5xl"
          >
            Built for businesses
            <br />
            that want to grow.
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-[60ch] text-base leading-relaxed text-muted md:text-lg"
        >
          From local shops to growing companies, we create websites that help
          people understand what you do and make it easy to get in touch.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-16 grid max-w-3xl grid-cols-1 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0"
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="px-6 py-8 text-center first:pt-0 sm:py-0"
          >
            <p className="font-display text-3xl text-ink md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
