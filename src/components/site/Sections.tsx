import { Link } from "@tanstack/react-router";
import {
  PenTool,
  Heart,
  MessageCircleHeart,
  Star,
  ArrowRight,
  Sparkles,
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

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dream pb-20 pt-10 sm:pb-28 sm:pt-16">
      <Decor />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-rise">
          <p className="eyebrow">Detalles personalizados para momentos inolvidables</p>
          <h1 className="mt-5 text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
            <span className="font-script block text-[1.35em] leading-[0.9] text-primary">
              Haz realidad
            </span>
            una celebración única
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Diseñamos detalles personalizados para que cada cumpleaños, comunión, bautizo y
            evento sea un recuerdo inolvidable.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="xl">
              <Link to="/productos">Ver nuestros productos</Link>
            </Button>
            <Button asChild size="xl" variant="soft">
              <Link to="/contacto">Solicitar presupuesto</Link>
            </Button>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="size-4 text-gold" />
            Hecho a mano, pensado para ti
          </p>
        </div>

        <div className="relative animate-rise [animation-delay:150ms]">
          <div className="absolute -left-6 -top-6 hidden size-24 rounded-full bg-lila/50 blur-2xl sm:block" />
          <img
            src={images.hero}
            alt="Conjunto de detalles personalizados para una celebración: carteles de madera grabados, taza, bolsitas y globos en tonos rosa empolvado"
            width={1600}
            height={1200}
            className="relative w-full rounded-[2.5rem] object-cover shadow-[var(--shadow-lift)]"
          />
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-card/95 px-5 py-4 shadow-[var(--shadow-card)] backdrop-blur">
            <p className="font-serif text-lg text-primary">+500 celebraciones</p>
            <p className="text-xs text-muted-foreground">acompañadas con mimo</p>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionTitle
          eyebrow="Sueña y Celebra"
          script="Creamos"
          title="detalles con alma"
          text="En Sueña y Celebra damos forma a tus ideas para crear productos personalizados que emocionan. Cada diseño se prepara con mimo y se adapta a la personalidad de cada celebración."
        />
      </Reveal>
      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {valores.map((v, i) => (
          <Reveal as="li" key={v.titulo} delay={i * 120}>
            <div className="h-full rounded-3xl border border-border/70 bg-card p-8 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary">
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

export function Categorias() {
  return (
    <section className="relative bg-beige/50 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Nuestros productos"
            script="Encuentra"
            title="el detalle perfecto"
            text="Ocho familias de productos personalizables para cualquier celebración."
          />
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categorias.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={(i % 3) * 110} className="h-full">
              <article
                id={c.slug}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={c.imagen}
                    alt={c.alt}
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={768}
                    className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl">{c.titulo}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {c.descripcion}
                  </p>
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="mt-5 self-start px-0 opacity-70 transition-opacity group-hover:opacity-100"
                  >
                    <Link to="/contacto">
                      Ver más <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Proceso() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionTitle
          eyebrow="Cómo trabajamos"
          script="Así"
          title="hacemos realidad tu idea"
        />
      </Reveal>
      <ol className="relative mt-14 grid gap-8 md:grid-cols-4">
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-7 hidden h-px bg-[linear-gradient(to_right,transparent,var(--rose),var(--lila),transparent)] md:block"
        />
        {proceso.map((p, i) => (
          <Reveal as="li" key={p.paso} delay={i * 130} className="relative">
            <span className="relative grid size-14 place-items-center rounded-full border border-border bg-card font-serif text-lg text-primary shadow-[var(--shadow-soft)]">
              {p.paso}
            </span>
            <h3 className="mt-6 text-lg">{p.titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export function Eventos() {
  return (
    <section className="bg-beige/50 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Eventos"
            script="Diseñado"
            title="para celebrar"
            text="Elige tu tipo de celebración y te mostramos ideas pensadas para ella."
          />
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventos.map((e, i) => (
            <Reveal as="li" key={e.slug} delay={(i % 3) * 110}>
              <article
                id={e.slug}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
              >
                <img
                  src={e.imagen}
                  alt={e.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.33_0.062_340_/_0.72),transparent_60%)]"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl text-primary-foreground">{e.titulo}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/85">{e.texto}</p>
                  <Button asChild size="sm" variant="soft" className="mt-4">
                    <Link to="/contacto">Ver ideas</Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-cta px-8 py-16 text-center shadow-[var(--shadow-card)] sm:px-16">
          <Star
            aria-hidden="true"
            className="animate-twinkle absolute left-10 top-10 size-5 text-gold"
          />
          <Sparkles
            aria-hidden="true"
            className="animate-float absolute right-12 bottom-10 size-7 text-card/70"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl">
            <span className="font-script pr-2 text-[1.4em]">¿Tienes</span>
            una idea en mente?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-relaxed text-primary/80">
            Cuéntanos qué estás imaginando y te ayudaremos a convertirlo en un detalle único.
          </p>
          <Button asChild size="xl" className="mt-9">
            <Link to="/contacto">Quiero mi presupuesto</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

export function SobreNosotros() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <img
            src={images.taller}
            alt="Mesa de taller con cintas de raso, etiquetas de madera y muestras de color"
            loading="lazy"
            decoding="async"
            width={1200}
            height={1000}
            className="w-full rounded-[2.5rem] object-cover shadow-[var(--shadow-card)]"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Sobre nosotros</p>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
            <span className="font-script pr-2 text-[1.45em]">Detrás</span>
            de cada detalle hay una ilusión
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Somos un pequeño proyecto creativo especializado en productos personalizados para
            celebraciones. Nos encanta transformar nombres, colores, ideas y emociones en
            detalles únicos que hacen especial cada evento.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Trabajamos de forma artesanal y en cantidades cuidadas, para poder mimar cada
            pedido y responderte siempre de tú a tú.
          </p>
          <Button asChild size="lg" variant="soft" className="mt-8">
            <Link to="/contacto">Cuéntanos tu idea</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonios() {
  return (
    <section className="bg-beige/50 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTitle eyebrow="Opiniones" script="Lo que" title="dicen de nosotros" />
        </Reveal>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonios.map((t, i) => (
            <Reveal as="li" key={t.autor} delay={i * 120}>
              <figure className="flex h-full flex-col rounded-3xl bg-card p-8 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
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
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Opiniones de ejemplo, editables para sustituirlas por testimonios reales.
        </p>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionTitle eyebrow="Dudas" script="Preguntas" title="frecuentes" />
      </Reveal>
      <Reveal delay={100}>
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`faq-${i}`}
              className="mb-3 overflow-hidden rounded-2xl border border-border/70 bg-card px-5 shadow-[var(--shadow-soft)]"
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
