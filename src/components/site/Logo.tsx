import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl sm:text-5xl",
  } as const;

  return (
    <Link
      to="/"
      aria-label="Sueña y Celebra — inicio"
      className={cn("group inline-flex items-baseline gap-2 leading-none", className)}
    >
      <Sparkles
        aria-hidden="true"
        className="size-4 shrink-0 translate-y-[-2px] text-gold transition-transform duration-500 group-hover:rotate-12"
      />
      <span className={cn("text-primary", sizes[size])}>
        <span className="font-script pr-1 text-[1.35em] leading-[0.8]">Sueña</span>
        <span className="font-serif tracking-wide">y Celebra</span>
      </span>
    </Link>
  );
}
