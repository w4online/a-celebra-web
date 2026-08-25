import { useMemo, useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { galeria, galeriaCategorias, type GaleriaCategoria } from "@/data/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const spanClass = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
} as const;

export function Gallery() {
  const [filtro, setFiltro] = useState<GaleriaCategoria>("Todos");
  const [abierto, setAbierto] = useState<number | null>(null);

  const items = useMemo(
    () => (filtro === "Todos" ? galeria : galeria.filter((g) => g.categoria === filtro)),
    [filtro],
  );

  const cerrar = useCallback(() => setAbierto(null), []);
  const mover = useCallback(
    (delta: number) =>
      setAbierto((i) => (i === null ? i : (i + delta + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (abierto === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [abierto, cerrar, mover]);

  const actual = abierto === null ? null : items[abierto];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filtrar galería por categoría"
        className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
      >
        {galeriaCategorias.map((cat) => {
          const activo = cat === filtro;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={activo}
              onClick={() => {
                setFiltro(cat);
                setAbierto(null);
              }}
              className={cn(
                "shrink-0 cursor-pointer snap-start rounded-full border px-4 py-2 text-[0.76rem] uppercase tracking-[0.14em] transition-all duration-300",
                activo
                  ? "border-transparent bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "border-border/70 bg-card text-muted-foreground hover:-translate-y-0.5 hover:border-border hover:text-primary",
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="mt-8 gap-3 [column-fill:balance] sm:mt-10 sm:gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <Reveal key={item.id} delay={(i % 6) * 50}
            className={cn("mb-3 break-inside-avoid sm:mb-4", spanClass[item.span])}
          >
            <button
              onClick={() => setAbierto(i)}
              className="group relative size-full cursor-pointer overflow-hidden rounded-[1.5rem] bg-secondary/30 text-left shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-[var(--shadow-lift)] sm:rounded-3xl"
              aria-label={`Ampliar fotografía: ${item.titulo}`}
            >
              <img
                src={item.imagen}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
              />
              <span
                aria-hidden="true"
                className="bg-veil absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-card/90 text-primary opacity-0 shadow-[var(--shadow-soft)] transition-all duration-300 group-hover:opacity-100">
                <Expand className="size-4" />
              </span>
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block font-serif text-lg text-primary-foreground">
                  {item.titulo}
                </span>
                <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.22em] text-primary-foreground/80">
                  {item.categoria}
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {actual ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={actual.titulo}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[oklch(0.3_0.055_340_/_0.82)] p-4 backdrop-blur-md"
          onClick={cerrar}
        >
          <div
            className="animate-rise relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-lift)]">
              <img
                src={actual.imagen}
                alt={actual.alt}
                className="max-h-[68vh] w-full bg-secondary/30 object-contain"
              />
              <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5">
                <div>
                  <p className="font-serif text-xl text-primary">{actual.titulo}</p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground">
                    {actual.categoria}
                  </p>
                </div>
                <p className="shrink-0 text-xs text-muted-foreground">
                  {(abierto ?? 0) + 1} / {items.length}
                </p>
              </div>
            </div>

            <button
              onClick={cerrar}
              aria-label="Cerrar imagen"
              className="absolute -top-4 right-0 grid size-11 cursor-pointer place-items-center rounded-full bg-card text-primary shadow-[var(--shadow-card)] transition-transform duration-200 hover:scale-105 sm:-right-4"
            >
              <X className="size-5" />
            </button>
            <button
              onClick={() => mover(-1)}
              aria-label="Imagen anterior"
              className="absolute left-2 top-1/2 grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-card/90 text-primary shadow-[var(--shadow-card)] transition-transform duration-200 hover:scale-105 sm:-left-16"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={() => mover(1)}
              aria-label="Imagen siguiente"
              className="absolute right-2 top-1/2 grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-card/90 text-primary shadow-[var(--shadow-card)] transition-transform duration-200 hover:scale-105 sm:-right-16"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
