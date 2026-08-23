import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { contacto } from "@/data/site";

const title = "Política de privacidad | Sueña y Celebra";
const description =
  "Información sobre el tratamiento de datos personales en Sueña y Celebra: finalidad, base legal, conservación y derechos de los usuarios.";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <LegalPage eyebrow="Legal" title="Política de privacidad">
      <h2>Responsable</h2>
      <p>
        Sueña y Celebra es la responsable del tratamiento de los datos facilitados a través de
        esta web. Puedes contactarnos en {contacto.email}.
      </p>
      <h2>Finalidad</h2>
      <p>
        Utilizamos los datos del formulario únicamente para responder a tu solicitud de
        presupuesto o consulta y para gestionar el pedido si decides continuar.
      </p>
      <h2>Base legal y conservación</h2>
      <p>
        La base legal es tu consentimiento al enviar el formulario. Conservamos los datos el
        tiempo necesario para atender tu solicitud y cumplir las obligaciones legales
        aplicables.
      </p>
      <h2>Cesiones</h2>
      <p>
        No cedemos tus datos a terceros salvo obligación legal o cuando sea imprescindible
        para el envío del pedido mediante empresas de mensajería.
      </p>
      <h2>Derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación
        y portabilidad escribiendo a {contacto.email}.
      </p>
    </LegalPage>
  );
}
