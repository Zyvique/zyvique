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
  // Pass `icon={null}` to render the pill with no icon at all.
  const badge =
    icon === null
      ? null
      : (icon ?? <Grid2x2 className="h-3.5 w-3.5" strokeWidth={2} />);

  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium font-sans transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

  const variants = {
    primary: "bg-ink text-bg hover:bg-ink/85",
    outline: "bg-transparent text-ink border border-border hover:border-ink/40",
  };

  const content = (
    <>
      {badge}
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
