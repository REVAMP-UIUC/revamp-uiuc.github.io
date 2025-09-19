import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className)}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Revamp logo"
    >
      <rect
        x="6"
        y="6"
        width="36"
        height="36"
        rx="8"
        className="fill-primary/10"
      />
      <path
        d="M14 32L24 12l10 20"
        className="stroke-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="32" r="3" className="fill-[hsl(19,100%,50%)]" />
    </svg>
  );
}
