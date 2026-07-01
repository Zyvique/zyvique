type DotGridProps = {
  rows?: number;
  cols?: number;
  gap?: number;
  dotSize?: number;
  fade?: "none" | "radial" | "diagonal" | "horizontal";
  className?: string;
};

// Round to a fixed precision so the value serialized during SSR always
// matches what the client computes. Math.hypot's internal overflow-safe
// scaling can return results that differ in their last bit between engine
// builds (server-side Node vs. browser), which was causing hydration
// mismatches on the `opacity` attribute.
function distance(dx: number, dy: number) {
  return Math.sqrt(dx * dx + dy * dy);
}

function round(value: number) {
  return Math.round(value * 10000) / 10000;
}

// Decorative dot-matrix / halftone texture, purely visual (aria-hidden).
// Density fades outward depending on `fade`, echoing the reference site's
// dot-grid backgrounds.
export default function DotGrid({
  rows = 12,
  cols = 16,
  gap = 14,
  dotSize = 2,
  fade = "radial",
  className = "",
}: DotGridProps) {
  const width = cols * gap;
  const height = rows * gap;
  const centerX = width / 2;
  const centerY = height / 2;
  const maxDist = distance(centerX, centerY);

  const dots = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = col * gap + gap / 2;
      const cy = row * gap + gap / 2;

      let opacity = 0.5;
      if (fade === "radial") {
        const dist = distance(cx - centerX, cy - centerY);
        opacity = Math.max(0.04, 0.55 * (1 - dist / maxDist));
      } else if (fade === "diagonal") {
        const dist = (cx / width + cy / height) / 2;
        opacity = Math.max(0.04, 0.5 * (1 - dist));
      } else if (fade === "horizontal") {
        opacity = Math.max(0.04, 0.5 * (1 - cx / width));
      }

      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={cx}
          cy={cy}
          r={dotSize / 2}
          fill="currentColor"
          opacity={round(opacity)}
        />,
      );
    }
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className={`text-ink/60 ${className}`}
      aria-hidden="true"
    >
      {dots}
    </svg>
  );
}
