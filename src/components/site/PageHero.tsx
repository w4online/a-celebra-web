import { Decor } from "./Decor";

export function PageHero({
  eyebrow,
  script,
  title,
  text,
}: {
  eyebrow: string;
  script?: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-dream py-16 sm:py-24">
      <Decor />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="animate-rise mt-4 text-[2.4rem] leading-[1.05] sm:text-5xl">
          {script ? (
            <span className="font-script block text-[1.3em] leading-[0.9] text-primary">
              {script}
            </span>
          ) : null}
          {title}
        </h1>
        {text ? (
          <p className="animate-rise mt-6 text-[1rem] leading-relaxed text-muted-foreground [animation-delay:100ms]">
            {text}
          </p>
        ) : null}
      </div>
    </section>
  );
}
