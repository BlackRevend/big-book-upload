import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";

export const WHATSAPP_NUMBER = "50683183813";
export const PHONE_DISPLAY = "8318-3813";
export const EMAIL = "info@oliviaatelier.cr";
export const SITE = "www.oliviaatelier.cr";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type Category = "Ramos" | "Cajas" | "Eventos" | "Regalos";

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  details: string[];
};

export const categories: Category[] = ["Ramos", "Cajas", "Eventos", "Regalos"];

export const products: Product[] = [
  {
    id: "ramo-blanco",
    name: "Ramo Blanco Sereno",
    category: "Ramos",
    price: 28000,
    image: p1,
    description:
      "Rosas blancas y eucalipto envueltos en papel arena. Un clásico que dice todo sin decir nada.",
    details: ["12 rosas premium", "Eucalipto y follaje de temporada", "Tarjeta escrita a mano"],
  },
  {
    id: "caja-blush",
    name: "Caja Blush Oliva",
    category: "Cajas",
    price: 35000,
    image: p2,
    description:
      "Cúpula de rosas en tono blush dentro de nuestra caja rígida en verde oliva.",
    details: ["Aprox. 18 rosas", "Caja reutilizable de la casa", "Duración de 7 a 10 días"],
  },
  {
    id: "centro-evento",
    name: "Centro de Mesa Alto",
    category: "Eventos",
    price: 65000,
    image: p3,
    description:
      "Arreglo elevado con hortensias, rosas y follaje para mesas de recepción.",
    details: ["Base metálica en cobre", "Montaje incluido en GAM", "Cotización por cantidad"],
  },
  {
    id: "ramo-novia",
    name: "Ramo de Novia Atelier",
    category: "Eventos",
    price: 78000,
    image: p4,
    description:
      "Peonías y ranúnculos con cinta de seda, diseñado a la medida de tu vestido.",
    details: ["Diseño personalizado", "Prueba previa opcional", "Reserva con 2 semanas"],
  },
  {
    id: "girasoles",
    name: "Girasoles en Vidrio",
    category: "Ramos",
    price: 22000,
    image: p5,
    description:
      "Girasoles frescos con salvia y eucalipto en florero de vidrio listo para colocar.",
    details: ["Florero incluido", "Ideal para oficina o cumpleaños", "Entrega el mismo día"],
  },
  {
    id: "set-regalo",
    name: "Set Dulce Momento",
    category: "Regalos",
    price: 31000,
    image: p6,
    description:
      "Tulipanes, chocolates finos y una tarjeta escrita a mano en papel de algodón.",
    details: ["7 tulipanes de temporada", "Caja de 9 chocolates", "Empaque de regalo"],
  },
  {
    id: "secas",
    name: "Arreglo Eterno",
    category: "Regalos",
    price: 42000,
    image: p7,
    description:
      "Flores secas y preservadas en cerámica artesanal. Un detalle que dura meses.",
    details: ["Pampas y rosas preservadas", "Cerámica hecha a mano", "Sin necesidad de agua"],
  },
  {
    id: "arco",
    name: "Arco Floral Jardín",
    category: "Eventos",
    price: 350000,
    image: p8,
    description:
      "Arco ceremonial con flores blancas y follaje fresco para bodas al aire libre.",
    details: ["Diseño y montaje completo", "Desmontaje incluido", "Visita técnica previa"],
  },
];

export const zones = [
  { zone: "Escazú, Santa Ana, Belén", price: "₡3.000" },
  { zone: "San José centro, Curridabat, Tibás", price: "₡4.000" },
  { zone: "Heredia, Alajuela centro", price: "₡5.500" },
  { zone: "Cartago, Tres Ríos", price: "₡6.500" },
  { zone: "Aeropuerto y hoteles del GAM", price: "₡7.000" },
];

export const faqs = [
  {
    q: "¿Con cuánta anticipación debo pedir?",
    a: "Los diseños del catálogo se entregan el mismo día si el pedido entra antes de las 2pm. Los arreglos personalizados y de evento requieren al menos 2 días de anticipación.",
  },
  {
    q: "¿Puedo personalizar los colores y las flores?",
    a: "Sí. Trabajamos con la flor disponible más fresca del día y ajustamos la paleta a tu intención. Cuéntanos la ocasión y te enviamos una propuesta.",
  },
  {
    q: "¿Cómo se realiza el pago?",
    a: "Aceptamos SINPE Móvil y transferencia bancaria. El pedido se confirma una vez recibido el comprobante.",
  },
  {
    q: "¿Entregan fuera del Gran Área Metropolitana?",
    a: "Coordinamos entregas en otras zonas del país por WhatsApp, con tarifa según distancia.",
  },
  {
    q: "¿Cuál es el horario de atención?",
    a: "Lunes a sábado de 9:00am a 6:00pm. Los mensajes fuera de horario se responden al día siguiente.",
  },
];

export const testimonials = [
  {
    name: "María José R.",
    text: "El ramo llegó impecable y con una tarjeta escrita a mano. Mi mamá lloró. Eso no se compra en un supermercado.",
    occasion: "Cumpleaños",
  },
  {
    name: "Andrés & Lucía",
    text: "Decoraron toda nuestra boda en Santa Ana. La paleta quedó exactamente como la soñamos y el montaje fue puntual.",
    occasion: "Boda",
  },
  {
    name: "Carolina V.",
    text: "Pedí por WhatsApp a las 11am y a las 3pm ya estaba en la oficina de mi cliente. Servicio serio y elegante.",
    occasion: "Corporativo",
  },
];

export function formatPrice(value: number) {
  return `₡${value.toLocaleString("es-CR")}`;
}
