import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner, Eventos as EventosSection, Proceso } from "@/components/site/Sections";

const title = "Detalles para cada evento | Sueña y Celebra";
const description =
  "Ideas y detalles personalizados para cumpleaños, comuniones, bautizos, bodas, baby showers y eventos especiales o de empresa.";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: EventosPage,
});

function EventosPage() {
  return (
    <>
      <PageHero
        eyebrow="Eventos"
        script="Diseñado"
        title="para celebrar"
        text="Elige tu tipo de celebración y te proponemos detalles pensados especialmente para ella."
      />
      <EventosSection />
      <Proceso />
      <CtaBanner />
    </>
  );
}
