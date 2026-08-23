import type { ReactNode } from "react";
import { PageHero } from "./PageHero";

export function LegalPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <section className="mx-auto max-w-3xl space-y-6 px-5 py-20 text-sm leading-relaxed text-muted-foreground sm:px-8 [&_h2]:pt-4 [&_h2]:text-xl">
        {children}
        <p className="pt-6 text-xs">
          Texto de ejemplo orientativo. Debe revisarse y completarse con los datos fiscales y
          legales definitivos antes de publicar la web.
        </p>
      </section>
    </>
  );
}
