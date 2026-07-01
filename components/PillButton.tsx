import type { ReactNode } from "react";
import { Grid2x2 } from "lucide-react";

type PillButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  icon?: ReactNode | null;
  className?: string;
};

export default function PillButton({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  className = "",
}: PillButtonProps) {
  // Pass `icon={null}` to render the pill with no badge at all.
  const badge =
    icon === null
      ? null
      : (icon ?? <Grid2x2 className="h-3 w-3" strokeWidth={2} />);

  const base =
    "group inline-flex items-center gap-2.5 rounded-full pl-1.5 pr-5 py-1.5 text-sm font-medium font-sans transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

  const variants = {
    primary: "bg-ink text-bg hover:bg-ink/85",
    outline:
      "bg-transparent text-ink border border-border pl-5 hover:border-ink/40",
  };

  const badgeClasses =
    variant === "primary"
      ? "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent text-bg"
      : "";

  const content = (
    <>
      {badge && variant === "primary" ? (
        <span className={badgeClasses}>{badge}</span>
      ) : null}
      <span>{children}</span>
    </>
  );

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
