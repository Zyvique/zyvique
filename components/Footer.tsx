import Image from "next/image";
import { Mail, Globe, MessageCircle } from "lucide-react";

const LINK_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "Services", href: "#services" },
      { label: "About", href: "#company" },
    ],
  },
  {
    title: "Work",
    links: [{ label: "Our Work", href: "#work" }],
  },
  {
    title: "Contact",
    links: [
      // TODO: replace with real contact details
      { label: "hello@zyvique.com", href: "mailto:hello@zyvique.com" },
      { label: "Start a Project", href: "#start" },
    ],
  },
];

// TODO: swap `href: "#"` for real social/contact links once they exist.
const SOCIALS = [
  { label: "Email", href: "mailto:hello@zyvique.com", Icon: Mail },
  { label: "Website", href: "#", Icon: Globe },
  { label: "Chat", href: "#", Icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <a href="#top" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Zyvique logo"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="font-sans text-base font-semibold tracking-tight text-ink">
              Zyvique
            </span>
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            We build websites for local businesses that want to grow.
          </p>
          <div className="mt-6 flex items-center gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-ink hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <social.Icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {LINK_COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-medium text-ink">{column.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-border pt-6">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Zyvique. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
