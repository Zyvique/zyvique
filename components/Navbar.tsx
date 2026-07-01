"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import PillButton from "./PillButton";

const NAV_LINKS = [
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "Company", id: "company" },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => scrollToSection("top")}
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-md"
        >
          <Image
            src="/logo.png"
            alt="Zyvique logo"
            width={28}
            height={28}
            className="h-7 w-7"
          />
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-sm"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 md:flex">
          <PillButton onClick={() => scrollToSection("start")} icon={null}>
            Start a Project
          </PillButton>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X className="h-4 w-4" strokeWidth={1.5} />
          ) : (
            <Menu className="h-4 w-4" strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {menuOpen ? (
        <div className="border-t border-border bg-bg px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    scrollToSection(link.id);
                  }}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <PillButton
              onClick={() => {
                setMenuOpen(false);
                scrollToSection("start");
              }}
              icon={null}
              className="w-full justify-center flex items-center"
            >
              Start a Project
            </PillButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
