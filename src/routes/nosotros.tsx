import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner, SobreNosotros, Testimonios } from "@/components/site/Sections";

const title = "Sobre nosotros | Sueña y Celebra";
const description =
  "Somos un pequeño proyecto creativo especializado en productos personalizados para celebraciones. Diseño artesanal, atención cercana y detalles con alma.";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Nosotros,
});

function Nosotros() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nosotros"
        script="Detrás"
        title="de cada detalle hay una ilusión"
        text="Nos encanta transformar nombres, colores, ideas y emociones en detalles únicos que hacen especial cada evento."
      />
      <SobreNosotros />
      <Testimonios />
      <CtaBanner />
    </>
  );
}
