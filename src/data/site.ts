import hero from "@/assets/hero.jpg";
import catLaser from "@/assets/cat-laser.jpg";
import catSublimacion from "@/assets/cat-sublimacion.jpg";
import catBolsas from "@/assets/cat-bolsas.jpg";
import catComunion from "@/assets/cat-comunion.jpg";
import catBautizo from "@/assets/cat-bautizo.jpg";
import catCumple from "@/assets/cat-cumple.jpg";
import catBoda from "@/assets/cat-boda.jpg";
import catRegalos from "@/assets/cat-regalos.jpg";
import taller from "@/assets/taller.jpg";
import galBabyshower from "@/assets/gal-babyshower.jpg";
import galDecoracion from "@/assets/gal-decoracion.jpg";
import galGlobos from "@/assets/gal-globos.jpg";
import galChuches from "@/assets/gal-chuches.jpg";

export const images = {
  hero,
  catLaser,
  catSublimacion,
  catBolsas,
  catComunion,
  catBautizo,
  catCumple,
  catBoda,
  catRegalos,
  taller,
  galBabyshower,
  galDecoracion,
  galGlobos,
  galChuches,
};

export const contacto = {
  telefono: "+34 600 123 456",
  whatsapp: "34600123456",
  email: "hola@suenaycelebra.es",
  zona: "Envíos a toda España · Entrega en mano en Madrid y alrededores",
  horario: "Lunes a viernes de 10:00 a 19:00 · Sábados de 10:00 a 14:00",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  tiktok: "https://tiktok.com",
};

export const whatsappUrl = `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(
  "¡Hola! Me gustaría pedir información sobre detalles personalizados.",
)}`;

/** Categorías de producto. Textos e imágenes de ejemplo: editables. */
export const categorias = [
  {
    slug: "grabado-laser",
    titulo: "Grabado y corte láser",
    descripcion:
      "Nombres, frases y diseños únicos en madera, metacrilato y otros materiales.",
    imagen: catLaser,
    alt: "Cartel de madera con un nombre grabado con láser sobre fondo cálido",
  },
  {
    slug: "sublimacion",
    titulo: "Sublimación",
    descripcion: "Tazas, botellas, camisetas, cojines y regalos personalizados.",
    imagen: catSublimacion,
    alt: "Tazas, botella, cojín y camiseta personalizados con nombres",
  },
  {
    slug: "bolsas-de-chuches",
    titulo: "Bolsas de chuches",
    descripcion:
      "Bolsitas personalizadas para cumpleaños, comuniones, bautizos y eventos.",
    imagen: catBolsas,
    alt: "Bolsas de chuches personalizadas en tonos rosa y lila",
  },
  {
    slug: "comuniones",
    titulo: "Detalles para comuniones",
    descripcion: "Regalos y recuerdos personalizados para un día muy especial.",
    imagen: catComunion,
    alt: "Detalles de comunión con cajita blanca, lazo y colgante de madera grabado",
  },
  {
    slug: "bautizos",
    titulo: "Detalles para bautizos",
    descripcion:
      "Pequeños detalles llenos de ternura para celebrar la llegada de un bebé.",
    imagen: catBautizo,
    alt: "Etiquetas de madera grabadas con lazos azul y rosa para bautizo",
  },
  {
    slug: "cumpleanos",
    titulo: "Cumpleaños y fiestas",
    descripcion: "Decoración, regalos y accesorios personalizados para sorprender.",
    imagen: catCumple,
    alt: "Mesa de cumpleaños con tarta, globos pastel y vasos personalizados",
  },
  {
    slug: "bodas",
    titulo: "Bodas y eventos",
    descripcion: "Detalles únicos para invitados, mesas, regalos y celebraciones.",
    imagen: catBoda,
    alt: "Mesa de boda con marcasitios personalizados y pequeños regalos dorados",
  },
  {
    slug: "regalos",
    titulo: "Regalos personalizados",
    descripcion: "Ideas originales para regalar en cualquier ocasión.",
    imagen: catRegalos,
    alt: "Cajas de regalo en rosa y lila con lazos dorados y etiquetas de madera",
  },
];

export const galeriaCategorias = [
  "Todos",
  "Cumpleaños",
  "Comuniones",
  "Bautizos",
  "Bodas",
  "Chuches personalizadas",
  "Grabado láser",
  "Sublimación",
  "Regalos",
  "Decoración",
] as const;

export type GaleriaCategoria = (typeof galeriaCategorias)[number];

export type GaleriaItem = {
  id: string;
  titulo: string;
  categoria: Exclude<GaleriaCategoria, "Todos">;
  imagen: string;
  alt: string;
  /** alto de la tarjeta en el mosaico */
  span: "tall" | "wide" | "square";
};

/**
 * Galería de ejemplo. Para usar fotografías propias basta con sustituir
 * `imagen` (import desde src/assets) y actualizar `titulo`, `alt` y `categoria`.
 */
export const galeria: GaleriaItem[] = [
  {
    id: "g1",
    titulo: "Mesa de cumpleaños en rosa empolvado",
    categoria: "Cumpleaños",
    imagen: catCumple,
    alt: "Mesa de cumpleaños con tarta rosa, topper dorado y globos pastel",
    span: "wide",
  },
  {
    id: "g2",
    titulo: "Globos y confeti dorado",
    categoria: "Decoración",
    imagen: galGlobos,
    alt: "Racimo de globos pastel con confeti dorado",
    span: "tall",
  },
  {
    id: "g3",
    titulo: "Recuerdos de primera comunión",
    categoria: "Comuniones",
    imagen: catComunion,
    alt: "Detalle de comunión con lazo blanco y colgante grabado",
    span: "square",
  },
  {
    id: "g4",
    titulo: "Etiquetas grabadas para bautizo",
    categoria: "Bautizos",
    imagen: catBautizo,
    alt: "Etiquetas de madera grabadas con lazos pastel para bautizo",
    span: "square",
  },
  {
    id: "g5",
    titulo: "Marcasitios y detalles de boda",
    categoria: "Bodas",
    imagen: catBoda,
    alt: "Marcasitios personalizados y cajita de regalo en mesa de boda",
    span: "wide",
  },
  {
    id: "g6",
    titulo: "Bolsitas de chuches personalizadas",
    categoria: "Chuches personalizadas",
    imagen: catBolsas,
    alt: "Tres bolsas de chuches personalizadas con nombres",
    span: "square",
  },
  {
    id: "g7",
    titulo: "Saquitos de dulces para invitados",
    categoria: "Chuches personalizadas",
    imagen: galChuches,
    alt: "Saquitos de tela con dulces y lazos rosas sobre lino",
    span: "wide",
  },
  {
    id: "g8",
    titulo: "Cartel de madera grabado a láser",
    categoria: "Grabado láser",
    imagen: catLaser,
    alt: "Nombre grabado y cortado en madera con luz cálida",
    span: "square",
  },
  {
    id: "g9",
    titulo: "Tazas y textiles sublimados",
    categoria: "Sublimación",
    imagen: catSublimacion,
    alt: "Tazas, cojín y camiseta personalizados con nombres",
    span: "square",
  },
  {
    id: "g10",
    titulo: "Cajas de regalo con etiqueta grabada",
    categoria: "Regalos",
    imagen: catRegalos,
    alt: "Cajas de regalo rosa y lila con lazos dorados",
    span: "wide",
  },
  {
    id: "g11",
    titulo: "Mesa dulce en tonos rosados",
    categoria: "Decoración",
    imagen: galDecoracion,
    alt: "Mesa dulce con tarta, macarons y telas rosas",
    span: "wide",
  },
  {
    id: "g12",
    titulo: "Baby shower en crema y lila",
    categoria: "Decoración",
    imagen: galBabyshower,
    alt: "Mesa de baby shower con globos pastel y pequeños detalles",
    span: "tall",
  },
];

export const eventos = [
  {
    slug: "cumpleanos",
    titulo: "Cumpleaños",
    texto: "Toppers, bolsas de chuches, vasos y decoración a juego.",
    imagen: catCumple,
    alt: "Decoración de cumpleaños con globos pastel",
  },
  {
    slug: "comuniones",
    titulo: "Comuniones",
    texto: "Recuerdos, libros de firmas y detalles para invitados.",
    imagen: catComunion,
    alt: "Detalles de comunión en blanco y dorado",
  },
  {
    slug: "bautizos",
    titulo: "Bautizos",
    texto: "Etiquetas grabadas, cajitas y detalles llenos de ternura.",
    imagen: catBautizo,
    alt: "Etiquetas de madera para bautizo con lazos",
  },
  {
    slug: "bodas",
    titulo: "Bodas",
    texto: "Marcasitios, seating, regalos de invitados y rincones especiales.",
    imagen: catBoda,
    alt: "Mesa de boda con detalles personalizados",
  },
  {
    slug: "baby-showers",
    titulo: "Baby showers",
    texto: "Detalles dulces para dar la bienvenida al bebé.",
    imagen: galBabyshower,
    alt: "Mesa de baby shower decorada en tonos pastel",
  },
  {
    slug: "eventos-especiales",
    titulo: "Eventos especiales",
    texto: "Aniversarios, fiestas temáticas y regalos para empresas.",
    imagen: galDecoracion,
    alt: "Mesa dulce decorada para un evento especial",
  },
];

export const proceso = [
  {
    paso: "01",
    titulo: "Cuéntanos tu idea",
    texto: "Nos dices qué celebras, cuántos invitados y qué te imaginas.",
  },
  {
    paso: "02",
    titulo: "Diseñamos tu propuesta",
    texto: "Te enviamos una propuesta con colores, materiales y presupuesto en euros.",
  },
  {
    paso: "03",
    titulo: "La personalizamos para ti",
    texto: "Ajustamos nombres, frases y acabados hasta que sea exactamente tuyo.",
  },
  {
    paso: "04",
    titulo: "La preparamos con mimo",
    texto: "Producimos, revisamos una a una y embalamos con cuidado.",
  },
];

/** Testimonios de ejemplo: se pueden editar o sustituir por opiniones reales. */
export const testimonios = [
  {
    texto: "Todo quedó precioso y cuidado hasta el último detalle.",
    autor: "Marta G.",
    evento: "Comunión de Lucía",
  },
  {
    texto: "Las bolsas de chuches fueron un éxito entre los niños.",
    autor: "Alberto R.",
    evento: "Cumpleaños infantil",
  },
  {
    texto: "Nos ayudaron a convertir nuestra idea en un recuerdo precioso.",
    autor: "Sara y Diego",
    evento: "Boda",
  },
];

export const faqs = [
  {
    q: "¿Con cuánto tiempo debo realizar el pedido?",
    a: "Recomendamos avisarnos con 3 o 4 semanas de antelación. En pedidos pequeños podemos trabajar en plazos más cortos: escríbenos y lo valoramos.",
  },
  {
    q: "¿Puedo solicitar un diseño personalizado?",
    a: "Sí. Todos nuestros detalles se diseñan a medida: nombres, frases, colores, temática y acabados.",
  },
  {
    q: "¿Puedo enviar mis propios colores o imágenes?",
    a: "Por supuesto. Puedes enviarnos tu paleta, una invitación o una foto de referencia y trabajamos a partir de ahí.",
  },
  {
    q: "¿Cuál es la cantidad mínima?",
    a: "En bolsas de chuches y detalles para invitados el mínimo suele ser de 10 unidades. Los regalos individuales no tienen mínimo.",
  },
  {
    q: "¿Realizáis envíos?",
    a: "Enviamos a toda España mediante mensajería con seguimiento. El coste se calcula según peso y destino y se indica en el presupuesto.",
  },
  {
    q: "¿Se puede recoger el pedido?",
    a: "Sí, puedes recogerlo con cita previa o coordinar entrega en mano en Madrid y alrededores.",
  },
  {
    q: "¿Cómo se solicita un presupuesto?",
    a: "Rellena el formulario de presupuesto o escríbenos por WhatsApp. Te responderemos con una propuesta detallada y sin compromiso.",
  },
  {
    q: "¿Qué materiales utilizáis?",
    a: "Madera de calidad, metacrilato, cerámica, textil, papelería y cintas seleccionadas para que el resultado sea bonito y duradero.",
  },
  {
    q: "¿Puedo ver una muestra antes de producir el pedido?",
    a: "Sí. Antes de producir enviamos una prueba digital y, en pedidos grandes, podemos preparar una muestra física.",
  },
];
