"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X, ExternalLink } from "lucide-react";

type Project = {
  name: string;
  tag: string;
  image: string;
  video: string;
  description: string;
  href?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Xentea Cafe",
    tag: "Café Website",
    image: "/projects/xentea-cafe.png",
    video: "/projects/xentea-cafe.mp4",
    description:
      "A milk tea café in Mabini, Batangas, serving hand-crafted drinks since 2019. The site shares their menu, story, and hours so local tea lovers always know where to find them.",
    href: "https://xentea-cafe.vercel.app",
  },
  {
    name: "Pharmacy POS",
    tag: "Point-of-Sale System",
    image: "/projects/pharmacy-pos.png",
    video: "/projects/pharmacy-pos.mp4",
    description:
      "A point-of-sale system built for pharmacies, designed to speed up checkout and keep inventory and sales organized in one place.",
  },
  {
    name: "Persona 3",
    tag: "Personal Portfolio",
    image: "/projects/persona-3.png",
    video: "/projects/persona-3.mp4",
    description:
      "A personal portfolio built for Persona 3 fans — a passion project blending the game's moody aesthetic with a personal showcase.",
  },
  {
    name: "Noovo Life",
    tag: "Business Website",
    image: "/projects/noovo-life.png",
    video: "/projects/noovo-life.mp4",
    description:
      "A business website for a company selling high-quality RVs with fully-equipped living setups, built to showcase their fleet and drive inquiries.",
  },
];

export default function Work() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject]);

  return (
    <section id="work" className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Extra ascii art flourish in the vacant corner, purely visual */}
      <Image
        src="/stars.png"
        alt=""
        width={500}
        height={500}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-10 hidden w-40 opacity-10 mix-blend-multiply sm:block md:w-52"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="relative mx-auto flex max-w-md justify-center">
            {/* Ascii art sits behind the headline, text stays on top */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
            >
              <Image
                src="/tattoo.png"
                alt=""
                width={503}
                height={496}
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
              Our work speaks for itself.
            </motion.h2>
          </div>
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
            <motion.button
              key={project.name}
              type="button"
              onClick={() => setActiveProject(project)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-border bg-bg-alt text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
            >
              <div className="relative h-56 overflow-hidden bg-bg-alt">
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/10 transition-colors group-hover:bg-ink/20">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-bg transition-transform group-hover:scale-110">
                    <Play
                      className="h-5 w-5 translate-x-0.5"
                      fill="currentColor"
                    />
                  </span>
                </span>
              </div>
              <div className="border-t border-border p-6">
                <p className="font-sans text-base font-medium text-ink">
                  {project.name}
                </p>
                <p className="mt-1 text-sm text-muted">{project.tag}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-bg"
            >
              <div className="relative aspect-video w-full bg-ink">
                <video
                  key={activeProject.video}
                  src={activeProject.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close"
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 text-bg backdrop-blur transition-colors hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bg"
                >
                  <X className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-sans text-lg font-medium text-ink">
                      {activeProject.name}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      {activeProject.tag}
                    </p>
                  </div>
                  {activeProject.href ? (
                    <a
                      href={activeProject.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-sm"
                    >
                      Visit site
                      <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </a>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                  {activeProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
