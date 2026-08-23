import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { contacto } from "@/data/site";

const title = "Aviso legal | Sueña y Celebra";
const description =
  "Aviso legal de Sueña y Celebra: datos identificativos, condiciones de uso del sitio web y propiedad intelectual de los contenidos.";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AvisoLegal,
});

function AvisoLegal() {
  return (
    <LegalPage eyebrow="Legal" title="Aviso legal">
      <h2>Datos identificativos</h2>
      <p>
        Titular: Sueña y Celebra. Actividad: diseño y venta de productos personalizados para
        celebraciones. Contacto: {contacto.email} · {contacto.telefono}.
      </p>
      <h2>Condiciones de uso</h2>
      <p>
        El acceso a esta web es gratuito e implica aceptar estas condiciones. El usuario se
        compromete a utilizar los contenidos de forma lícita y respetuosa.
      </p>
      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, diseños, imágenes y fotografías de productos son titularidad de Sueña y
        Celebra o se utilizan con autorización. No está permitida su reproducción sin
        consentimiento.
      </p>
      <h2>Precios y presupuestos</h2>
      <p>
        Los importes indicados se expresan en euros (€). Los presupuestos personalizados
        tienen carácter orientativo hasta su confirmación por escrito.
      </p>
    </LegalPage>
  );
}
