import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Music2, MessageCircle, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { categorias, contacto, whatsappUrl } from "@/data/site";

const rapidos = [
  { to: "/", label: "Inicio" },
  { to: "/productos", label: "Nuestros productos" },
  { to: "/galeria", label: "Galería" },
  { to: "/eventos", label: "Eventos" },
  { to: "/nosotros", label: "Sobre nosotros" },
  { to: "/contacto", label: "Contacto y presupuesto" },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-dream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Detalles personalizados para momentos inolvidables.
          </p>
          <div className="mt-6 flex gap-2">
            <a
              href={contacto.instagram}
              aria-label="Instagram de Sueña y Celebra"
              className="grid size-10 place-items-center rounded-full bg-card text-primary shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={contacto.facebook}
              aria-label="Facebook de Sueña y Celebra"
              className="grid size-10 place-items-center rounded-full bg-card text-primary shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={contacto.tiktok}
              aria-label="TikTok de Sueña y Celebra"
              className="grid size-10 place-items-center rounded-full bg-card text-primary shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              <Music2 className="size-4" />
            </a>
            <a
              href={whatsappUrl}
              aria-label="Escríbenos por WhatsApp"
              className="grid size-10 place-items-center rounded-full bg-card text-primary shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="eyebrow">Enlaces</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {rapidos.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Categorías</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categorias.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/productos"
                  hash={c.slug}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {c.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Contacto</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={whatsappUrl}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <MessageCircle className="size-4" /> WhatsApp {contacto.telefono}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contacto.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="size-4" /> {contacto.email}
              </a>
            </li>
            <li>{contacto.zona}</li>
            <li>{contacto.horario}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Sueña y Celebra. Todos los derechos reservados.</p>
          <nav aria-label="Enlaces legales" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacidad" className="hover:text-primary">
              Política de privacidad
            </Link>
            <Link to="/aviso-legal" className="hover:text-primary">
              Aviso legal
            </Link>
            <Link to="/cookies" className="hover:text-primary">
              Política de cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
