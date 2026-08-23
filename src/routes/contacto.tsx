import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { Faq } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { contacto, whatsappUrl } from "@/data/site";

const title = "Contacto y presupuesto | Sueña y Celebra";
const description =
  "Solicita presupuesto sin compromiso para tus detalles personalizados. Escríbenos por WhatsApp o correo y te responderemos lo antes posible.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        script="Cuéntanos"
        title="tu idea sin compromiso"
        text="Rellena el formulario con los datos de tu celebración y te enviaremos una propuesta personalizada en euros."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={120} className="space-y-4">
          <a
            href={whatsappUrl}
            className="flex items-start gap-4 rounded-3xl bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
              <MessageCircle className="size-5" />
            </span>
            <span>
              <span className="block font-serif text-lg text-primary">WhatsApp</span>
              <span className="text-sm text-muted-foreground">{contacto.telefono}</span>
            </span>
          </a>

          <a
            href={`mailto:${contacto.email}`}
            className="flex items-start gap-4 rounded-3xl bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent text-primary">
              <Mail className="size-5" />
            </span>
            <span>
              <span className="block font-serif text-lg text-primary">
                Correo electrónico
              </span>
              <span className="text-sm text-muted-foreground">{contacto.email}</span>
            </span>
          </a>

          <div className="flex items-start gap-4 rounded-3xl bg-card p-6 shadow-[var(--shadow-soft)]">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
              <MapPin className="size-5" />
            </span>
            <span>
              <span className="block font-serif text-lg text-primary">
                Zona de trabajo y entrega
              </span>
              <span className="text-sm text-muted-foreground">{contacto.zona}</span>
            </span>
          </div>

          <div className="flex items-start gap-4 rounded-3xl bg-card p-6 shadow-[var(--shadow-soft)]">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent text-primary">
              <Clock className="size-5" />
            </span>
            <span>
              <span className="block font-serif text-lg text-primary">
                Horario de atención
              </span>
              <span className="text-sm text-muted-foreground">{contacto.horario}</span>
            </span>
          </div>

          <div className="rounded-3xl bg-cta p-7 text-center shadow-[var(--shadow-soft)]">
            <p className="font-serif text-xl text-primary">Cuéntanos tu idea</p>
            <p className="mt-2 text-sm text-primary/80">
              Sin compromiso. Te responderemos lo antes posible.
            </p>
          </div>
        </Reveal>
      </section>

      <Faq />
    </>
  );
}
