"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, LayoutTemplate, RefreshCw } from "lucide-react";

const ITEMS = [
  { label: "Business websites", Icon: Building2 },
  { label: "Landing pages", Icon: LayoutTemplate },
  { label: "Website refreshes", Icon: RefreshCw },
];

export default function WhatWeBuild() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-24 md:py-32"
    >
      {/* Extra ascii art flourish in the vacant corner, purely visual */}
      <Image
        src="/walk.png"
        alt=""
        width={399}
        height={625}
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-4 hidden w-24 opacity-10 mix-blend-multiply sm:block md:right-10 md:w-32"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="relative mx-auto flex max-w-md justify-center">
          {/* Ascii art sits behind the headline, text stays on top */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
          >
            <Image
              src="/stars.png"
              alt=""
              width={500}
              height={500}
              className="w-44 opacity-15 mix-blend-multiply sm:w-52 md:w-60"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center font-display text-3xl uppercase leading-[0.95] tracking-[0.05em] text-ink sm:text-4xl md:text-5xl"
          >
            What we build.
          </motion.h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-start gap-5 rounded-2xl border border-border bg-bg-alt p-8 transition-transform hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-bg text-ink">
                <item.Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <p className="font-sans text-base font-medium text-ink">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
