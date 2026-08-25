import { Link } from "@tanstack/react-router";
import {
  PenTool,
  Heart,
  MessageCircleHeart,
  Star,
  ArrowRight,
  Sparkles,
  Truck,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { categorias, eventos, faqs, images, proceso, testimonios } from "@/data/site";
import { Reveal } from "./Reveal";
import { Decor, SectionTitle } from "./Decor";

/* ---------------------------------- Hero ---------------------------------- */

const heroTrust = [
  { icon: Heart, texto: "Hecho a mano" },
  { icon: Truck, texto: "Envíos a toda España" },
  { icon: Clock, texto: "Respuesta en 24 h" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dream">
      <Decor />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div className="animate-rise text-center lg:text-left">
          <p className="eyebrow">Detalles personalizados · Celebraciones únicas</p>
          <h1 className="mt-5 text-[2.1rem] leading-[1.04] sm:text-5xl md:text-6xl lg:text-[4rem]">
            <span className="font-script block text-[1.2em] leading-[0.85] text-primary">
              Haz realidad
            </span>
            <span className="mt-1 block">una celebración única</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[1.02rem] leading-relaxed text-muted-foreground lg:mx-0">
            Diseñamos y elaboramos a mano detalles personalizados para cumpleaños, comuniones,
            bautizos y bodas. Tú imaginas, nosotros lo creamos.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button asChild size="xl" className="w-full sm:w-auto">
              <Link to="/productos">
                Ver productos <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="w-full sm:w-auto">
              <Link to="/contacto">Solicitar presupuesto</Link>
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[0.82rem] text-muted-foreground lg:justify-start">
            {heroTrust.map((t) => (
              <li key={t.texto} className="inline-flex items-center gap-2">
                <t.icon className="size-4 text-gold" />
                {t.texto}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-rise relative [animation-delay:120ms]">
          <img
            src={images.hero}
            alt="Conjunto de detalles personalizados para una celebración: carteles de madera grabados, taza, bolsitas y globos en tonos rosa empolvado"
            width={1600}
            height={1200}
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)] sm:aspect-[5/4] sm:rounded-[2.5rem]"
          />
          <div className="absolute -bottom-5 left-4 rounded-2xl border border-border/60 bg-card/95 px-5 py-3.5 shadow-[var(--shadow-card)] backdrop-blur sm:left-6">
            <p className="font-serif text-lg leading-none text-primary">+500 celebraciones</p>
            <p className="mt-1.5 text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
              acompañadas con mimo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Presentación ------------------------------ */

const valores = [
  {
    icon: PenTool,
    titulo: "Diseños personalizados",
    texto: "Cada detalle se adapta a tus nombres, colores y temática.",
  },
  {
    icon: Heart,
    titulo: "Elaboración cuidada",
    texto: "Materiales de calidad y acabados revisados uno a uno.",
  },
  {
    icon: MessageCircleHeart,
    titulo: "Atención cercana",
    texto: "Te acompañamos desde la idea hasta el día de la celebración.",
  },
];

export function Presentacion() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionTitle
          eyebrow="Sueña y Celebra"
          script="Creamos"
          title="detalles con alma"
          text="Damos forma a tus ideas para crear productos personalizados que emocionan. Cada diseño se prepara con mimo y se adapta a la personalidad de cada celebración."
        />
      </Reveal>
      <ul className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">
        {valores.map((v, i) => (
          <Reveal as="li" key={v.titulo} delay={i * 90}>
            <div className="h-full rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] sm:p-8">
              <span className="grid size-11 place-items-center rounded-2xl bg-secondary/70 text-primary">
                <v.icon className="size-5" />
              </span>
              <h3 className="mt-6 text-xl">{v.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.texto}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------- Categorías ------------------------------- */

export function Categorias() {
  return (
    <section className="relative border-y border-border/50 bg-crema py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Nuestros productos"
            script="Encuentra"
            title="el detalle perfecto"
            text="Familias de productos totalmente personalizables para cualquier celebración."
          />
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {categorias.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={(i % 3) * 80} className="h-full">
              <article
                id={c.slug}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-[var(--shadow-lift)]"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={c.imagen}
                    alt={c.alt}
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={768}
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-veil opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-[1.35rem] leading-snug">{c.titulo}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.descripcion}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.18em] text-primary/70 transition-colors group-hover:text-primary">
                    Ver detalles
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
                <Link
                  to="/contacto"
                  className="absolute inset-0"
                  aria-label={`Más información sobre ${c.titulo}`}
                />
              </article>
            </Reveal>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="soft">
            <Link to="/contacto">Solicitar presupuesto</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Proceso -------------------------------- */

export function Proceso() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionTitle eyebrow="Cómo trabajamos" script="Así" title="hacemos realidad tu idea" />
      </Reveal>
      <ol className="relative mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2 md:grid-cols-4">
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-7 hidden h-px bg-[linear-gradient(to_right,transparent,var(--rose),var(--lila),transparent)] md:block"
        />
        {proceso.map((p, i) => (
          <Reveal as="li" key={p.paso} delay={i * 90} className="relative">
            <span className="relative grid size-14 place-items-center rounded-full border border-border/70 bg-card font-serif text-lg text-primary shadow-[var(--shadow-soft)]">
              {p.paso}
            </span>
            <h3 className="mt-5 text-lg">{p.titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

/* --------------------------------- Eventos -------------------------------- */

export function Eventos() {
  return (
    <section className="border-y border-border/50 bg-crema py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Eventos"
            script="Diseñado"
            title="para celebrar"
            text="Elige tu tipo de celebración y te mostramos ideas pensadas para ella."
          />
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {eventos.map((e, i) => (
            <Reveal as="li" key={e.slug} delay={(i % 3) * 80}>
              <article
                id={e.slug}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <img
                  src={e.imagen}
                  alt={e.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-veil" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-[1.6rem] text-primary-foreground">{e.titulo}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/85">
                    {e.texto}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[0.74rem] uppercase tracking-[0.2em] text-primary-foreground/90">
                    Ver ideas
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
                <Link
                  to="/contacto"
                  className="absolute inset-0"
                  aria-label={`Ideas para ${e.titulo}`}
                />
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------- CTA banner ------------------------------- */

export function CtaBanner() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-cta px-6 py-14 text-center shadow-[var(--shadow-card)] sm:rounded-[2.5rem] sm:px-16 sm:py-20">
          <Star
            aria-hidden="true"
            className="animate-twinkle absolute left-8 top-8 size-5 text-gold"
          />
          <Sparkles
            aria-hidden="true"
            className="animate-float absolute bottom-8 right-10 size-7 text-card/70"
          />
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
            <span className="font-script pr-2 text-[1.35em]">¿Tienes</span>
            una idea en mente?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-relaxed text-primary/80">
            Cuéntanos qué estás imaginando y te enviaremos un presupuesto sin compromiso.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="xl" className="w-full sm:w-auto">
              <Link to="/contacto">Solicitar presupuesto</Link>
            </Button>
            <Button asChild size="xl" variant="soft" className="w-full sm:w-auto">
              <Link to="/galeria">Ver galería</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ----------------------------- Sobre nosotros ----------------------------- */

export function SobreNosotros() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <img
            src={images.taller}
            alt="Mesa de taller con cintas de raso, etiquetas de madera y muestras de color"
            loading="lazy"
            decoding="async"
            width={1200}
            height={1000}
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[var(--shadow-card)] sm:rounded-[2.5rem]"
          />
        </Reveal>
        <Reveal delay={90}>
          <p className="eyebrow">Sobre nosotros</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
            <span className="font-script pr-2 text-[1.4em]">Detrás</span>
            de cada detalle hay una ilusión
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Somos un pequeño taller creativo especializado en productos personalizados para
            celebraciones. Transformamos nombres, colores, ideas y emociones en detalles únicos
            que hacen especial cada evento.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Trabajamos de forma artesanal y en cantidades cuidadas, para poder mimar cada pedido
            y responderte siempre de tú a tú.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contacto">Cuéntanos tu idea</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Testimonios ------------------------------- */

export function Testimonios() {
  return (
    <section className="border-y border-border/50 bg-crema py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle eyebrow="Opiniones" script="Lo que" title="dicen de nosotros" />
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">
          {testimonios.map((t, i) => (
            <Reveal as="li" key={t.autor} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-3xl border border-border/50 bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] sm:p-8">
                <div aria-hidden="true" className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-xl leading-snug text-primary">
                  “{t.texto}”
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  <span className="text-primary">{t.autor}</span> · {t.evento}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ----------------------------------- FAQ ---------------------------------- */

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionTitle eyebrow="Dudas" script="Preguntas" title="frecuentes" />
      </Reveal>
      <Reveal delay={80}>
        <Accordion type="single" collapsible className="mt-10 sm:mt-12">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`faq-${i}`}
              className="mb-3 overflow-hidden rounded-2xl border border-border/60 bg-card px-5 shadow-[var(--shadow-soft)]"
            >
              <AccordionTrigger className="text-left font-serif text-lg text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
