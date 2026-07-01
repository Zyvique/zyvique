"use client";

import { motion } from "framer-motion";
import {
  Building2,
  LayoutTemplate,
  ShoppingBag,
  RefreshCw,
} from "lucide-react";

const ITEMS = [
  { label: "Business websites", Icon: Building2 },
  { label: "Landing pages", Icon: LayoutTemplate },
  { label: "Online stores", Icon: ShoppingBag },
  { label: "Website refreshes", Icon: RefreshCw },
];

export default function WhatWeBuild() {
  return (
    <section id="services" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-3xl uppercase leading-[0.95] tracking-[0.05em] text-ink sm:text-4xl md:text-5xl"
        >
          What we build.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
