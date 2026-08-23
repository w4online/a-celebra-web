import { createFileRoute } from "@tanstack/react-router";
import { Categorias, CtaBanner, Proceso } from "@/components/site/Sections";
import { PageHero } from "@/components/site/PageHero";

const title = "Nuestros productos personalizados | Sueña y Celebra";
const description =
  "Grabado y corte láser, sublimación, bolsas de chuches y detalles para comuniones, bautizos, cumpleaños y bodas. Todo personalizado a tu medida.";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Productos,
});

function Productos() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros productos"
        script="Encuentra"
        title="el detalle perfecto"
        text="Trabajamos cada familia de productos de forma artesanal y totalmente personalizable: nombres, colores, materiales y acabados."
      />
      <Categorias />
      <Proceso />
      <CtaBanner />
    </>
  );
}
