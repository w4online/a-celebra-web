import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Política de cookies | Sueña y Celebra";
const description =
  "Información sobre el uso de cookies en la web de Sueña y Celebra y cómo gestionarlas desde tu navegador.";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <LegalPage eyebrow="Legal" title="Política de cookies">
      <h2>¿Qué son las cookies?</h2>
      <p>
        Son pequeños archivos que se guardan en tu dispositivo al visitar una web y permiten
        recordar información sobre tu navegación.
      </p>
      <h2>Cookies que utilizamos</h2>
      <p>
        Esta web utiliza únicamente cookies técnicas necesarias para su funcionamiento. No
        empleamos cookies publicitarias ni de perfilado.
      </p>
      <h2>Gestión de cookies</h2>
      <p>
        Puedes bloquear o eliminar las cookies desde la configuración de tu navegador. Si en
        el futuro incorporamos cookies analíticas, se solicitará tu consentimiento previo.
      </p>
    </LegalPage>
  );
}
