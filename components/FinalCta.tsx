"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PillButton from "./PillButton";
import DotGrid from "./DotGrid";

export default function FinalCta() {
  return (
    <section
      id="start"
      className="relative overflow-hidden bg-bg-alt px-6 py-24 md:py-32"
    >
      <DotGrid
        rows={10}
        cols={20}
        fade="radial"
        className="pointer-events-none absolute inset-0 h-full w-full text-ink/20"
      />

      {/* Extra ascii art flourish in the vacant corner, purely visual */}
      <Image
        src="/cellular.png"
        alt=""
        width={464}
        height={538}
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 right-6 hidden w-32 opacity-10 mix-blend-multiply sm:block md:right-16 md:w-40"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto flex max-w-2xl flex-col items-center text-center"
      >
        <h2 className="font-display text-3xl uppercase leading-[0.95] tracking-[0.05em] text-ink sm:text-4xl md:text-5xl">
          Ready when you are.
        </h2>
        <p className="mx-auto mt-5 max-w-[45ch] text-base leading-relaxed text-muted md:text-lg">
          Let&apos;s build something your customers will remember.
        </p>
        <div className="mt-8">
          {/* TODO: wire this up to a real contact/project-intake flow once it exists */}
          <PillButton onClick={() => {}}>Start a Project</PillButton>
        </div>
      </motion.div>
    </section>
  );
}
