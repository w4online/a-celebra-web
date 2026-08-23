import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/site/Gallery";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/Sections";

const title = "Galería de detalles personalizados | Sueña y Celebra";
const description =
  "Portfolio de productos personalizados para cumpleaños, comuniones, bautizos, bodas y eventos: grabado láser, sublimación, bolsas de chuches y decoración.";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Galeria,
});

function Galeria() {
  return (
    <>
      <PageHero
        eyebrow="Galería"
        script="Una pequeña"
        title="muestra de todo lo que podemos crear"
        text="Cada producto nace de una idea y se convierte en un detalle pensado especialmente para ti."
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Gallery />
        <p className="mt-10 text-center text-xs text-muted-foreground">
          Fotografías de ejemplo, preparadas para sustituirse por imágenes propias.
        </p>
      </section>
      <CtaBanner />
    </>
  );
}
