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
    <section className="relative overflow-hidden bg-dream py-20 sm:py-24">
      <Decor />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="animate-rise mt-4 text-4xl leading-[1.08] sm:text-5xl">
          {script ? (
            <span className="font-script block text-[1.3em] leading-[0.9] text-primary">
              {script}
            </span>
          ) : null}
          {title}
        </h1>
        {text ? (
          <p className="animate-rise mt-6 text-[1.02rem] leading-relaxed text-muted-foreground [animation-delay:120ms]">
            {text}
          </p>
        ) : null}
      </div>
    </section>
  );
}
