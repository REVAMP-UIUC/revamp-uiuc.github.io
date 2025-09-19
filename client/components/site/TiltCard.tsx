import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function TiltCard({
  children,
  className,
  maxTilt = 8,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = (+py * maxTilt).toFixed(2);
    const ry = (-px * maxTilt).toFixed(2);
    setStyle({ transform: `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)` });
  }
  function onLeave() {
    setStyle({ transform: "rotateX(0deg) rotateY(0deg)" });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("transition-transform will-change-transform", className)}
      style={style}
    >
      {children}
    </div>
  );
}
