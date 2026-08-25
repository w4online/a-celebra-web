import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  Presentacion,
  Categorias,
  Proceso,
  Eventos,
  CtaBanner,
  SobreNosotros,
  Testimonios,
  Faq,
} from "@/components/site/Sections";
import { Gallery } from "@/components/site/Gallery";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/Decor";

const title = "Sueña y Celebra | Productos personalizados para eventos";
const description =
  "Descubre productos personalizados para cumpleaños, comuniones, bautizos, bodas y eventos. Grabado láser, sublimación, bolsas de chuches y detalles únicos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Presentacion />
      <Categorias />
      <section id="galeria" className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionTitle
            eyebrow="Galería"
            script="Una pequeña"
            title="muestra de todo lo que podemos crear"
            text="Cada producto nace de una idea y se convierte en un detalle pensado especialmente para ti."
          />
        </Reveal>
        <div className="mt-10 sm:mt-14">
          <Gallery />
        </div>
      </section>
      <Proceso />
      <Eventos />
      <CtaBanner />
      <SobreNosotros />
      <Testimonios />
      <Faq />
    </>
  );
}
