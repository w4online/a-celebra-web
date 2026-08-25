import { Star, Sparkles, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

/** Estrellas, lunas y destellos sutiles de fondo. Decorativo, sin semántica. */
export function Decor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-10 size-72 rounded-full bg-rose/40 blur-3xl" />
      <div className="absolute -right-20 top-40 size-80 rounded-full bg-lila/40 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 size-64 rounded-full bg-beige/70 blur-3xl" />
      <Star className="animate-twinkle absolute left-[12%] top-[18%] size-4 text-gold" />
      <Sparkles className="animate-float absolute right-[16%] top-[26%] size-6 text-rose" />
      <Moon className="animate-float absolute left-[8%] bottom-[22%] size-5 text-lila [animation-delay:1.5s]" />
      <Star className="animate-twinkle absolute right-[9%] bottom-[16%] size-3 text-gold [animation-delay:2s]" />
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  script,
  title,
  text,
  align = "center",
}: {
  eyebrow?: string;
  script?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-[2rem] leading-tight sm:text-4xl md:text-[2.7rem]">
        {script ? <span className="font-script pr-2 text-[1.45em]">{script}</span> : null}
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={cn(
          "mt-5 block h-px w-16 bg-[linear-gradient(to_right,transparent,var(--gold),transparent)]",
          align === "center" && "mx-auto",
        )}
      />
      {text ? (
        <p className="mt-5 text-[0.98rem] leading-relaxed text-muted-foreground">{text}</p>
      ) : null}
    </div>
  );
}
