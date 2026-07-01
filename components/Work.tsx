"use client";

import { motion } from "framer-motion";
import DotGrid from "./DotGrid";

const PROJECTS = [
  { name: "Project One", tag: "Local Business Website" },
  { name: "Project Two", tag: "Landing Page" },
  { name: "Project Three", tag: "Online Store" },
  { name: "Project Four", tag: "Website Refresh" },
];

export default function Work() {
  return (
    <section id="work" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl uppercase leading-[0.95] tracking-[0.05em] text-ink sm:text-4xl md:text-5xl"
          >
            Our work speaks for itself.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-5 max-w-[55ch] text-base leading-relaxed text-muted md:text-lg"
          >
            A selection of websites we&apos;ve designed and built for growing
            businesses.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-border bg-bg-alt"
            >
              {/* TODO: replace with real project screenshot */}
              <div className="relative h-56 overflow-hidden bg-bg-alt text-ink/40">
                <DotGrid
                  rows={8}
                  cols={14}
                  fade="diagonal"
                  className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-border p-6">
                <p className="font-sans text-base font-medium text-ink">
                  {project.name}
                </p>
                <p className="mt-1 text-sm text-muted">{project.tag}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
