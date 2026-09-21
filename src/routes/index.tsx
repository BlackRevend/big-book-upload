import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Clock,
  Flower2,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Minus,
  Phone,
  Plus,
  Sparkles,
  Truck,
  X,
} from "lucide-react";

import heroImage from "@/assets/hero-floral.jpg";
import { Header } from "@/components/site/Header";
import { ChatWidget } from "@/components/site/ChatWidget";
import { Ginkgo } from "@/components/site/Logo";
import {
  EMAIL,
  PHONE_DISPLAY,
  SITE,
  categories,
  faqs,
  formatPrice,
  products,
  testimonials,
  whatsappLink,
  zones,
  type Category,
  type Product,
} from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Olivia Atelier — Flower Experience | Floristería en Costa Rica" },
      {
        name: "description",
        content:
          "Ramos, cajas de flores y decoración floral para eventos en Costa Rica. Diseño de autor, entregas en el GAM y cotizaciones por WhatsApp.",
      },
      {
        property: "og:title",
        content: "Olivia Atelier — Flower Experience",
      },
      {
        property: "og:description",
        content:
          "Floristería de autor: ramos, cajas de flores y decoración de eventos con entrega en el Gran Área Metropolitana.",
      },
    ],
  }),
  component: Index,
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[0.7rem] uppercase tracking-brand text-copper">{children}</p>
  );
}

function Index() {
  const [filter, setFilter] = useState<Category | "Todos">("Todos");
  const [selected, setSelected] = useState<Product | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filtered = useMemo(
    () => (filter === "Todos" ? products : products.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section id="inicio" className="relative flex min-h-[92vh] items-center justify-center">
        <img
          src={heroImage}
          alt="Ramo de rosas blancas sobre la mesa de trabajo del taller floral"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="relative mx-auto max-w-3xl px-6 py-32 text-center text-cream">
          <p className="text-[0.7rem] uppercase tracking-brand text-cream/80">
            Flower Experience · Costa Rica
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] md:text-7xl">
            Flores que dicen
            <span className="mt-2 block font-script text-6xl text-sand drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] md:text-7xl">
              lo que no se dice
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-cream/90 italic drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
            Diseño floral de autor para celebrar, agradecer, pedir perdón y acompañar. Cada flor,
            color y detalle se elige con una intención.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#catalogo"
              className="rounded-full bg-cream px-8 py-3.5 text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:bg-sand"
            >
              Ver el catálogo
            </a>
            <a
              href={whatsappLink("Hola Olivia Atelier, quiero cotizar las flores de mi evento.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cream/70 px-8 py-3.5 text-xs uppercase tracking-[0.18em] text-cream transition-colors hover:bg-cream/10"
            >
              Cotiza tu evento
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="nosotros" className="bg-cream py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
          <div>
            <SectionLabel>Sobre nosotros</SectionLabel>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Un atelier, no una floristería más
            </h2>
            <div className="mt-6 space-y-4 text-[0.98rem] leading-relaxed text-muted-foreground">
              <p>
                Olivia Atelier nació del deseo de devolverle sentido al gesto de regalar flores. No
                armamos ramos en serie: escuchamos la historia detrás del pedido y la traducimos en
                color, textura y forma.
              </p>
              <p>
                Trabajamos con flor fresca seleccionada cada semana, follaje nacional y empaques
                propios en tonos salvia, arena y cobre. Lo que sale de nuestra mesa lleva nombre y
                cuidado.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4 text-olive">
              <Ginkgo className="h-10 w-10" />
              <p className="font-script text-2xl">Emoción · Conexión · Intención</p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: Flower2,
                title: "Flor fresca seleccionada",
                text: "Compra semanal y control de calidad tallo por tallo antes de cada entrega.",
              },
              {
                icon: Sparkles,
                title: "Diseño personalizado",
                text: "Adaptamos paleta, tamaño y empaque a tu ocasión y presupuesto.",
              },
              {
                icon: Truck,
                title: "Entrega puntual",
                text: "Rutas propias en el GAM con ventanas de entrega confirmadas por WhatsApp.",
              },
              {
                icon: Heart,
                title: "Detalle humano",
                text: "Tarjeta escrita a mano y foto del arreglo antes de salir del taller.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-sm border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-soft)]"
              >
                <item.icon className="h-6 w-6 text-copper" strokeWidth={1.4} />
                <h3 className="mt-4 font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOGO */}
      <section id="catalogo" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <SectionLabel>Catálogo</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl">Diseños destacados</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Toca cualquier diseño para ver los detalles. Todos se pueden personalizar en color y
              tamaño.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {(["Todos", ...categories] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.16em] transition-colors ${
                  filter === c
                    ? "border-olive bg-olive text-cream"
                    : "border-border text-muted-foreground hover:border-olive hover:text-olive"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelected(p)}
                className="group text-left"
              >
                <div className="overflow-hidden rounded-sm bg-muted">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={912}
                    height={912}
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl leading-snug">{p.name}</h3>
                    <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {p.category}
                    </p>
                  </div>
                  <p className="whitespace-nowrap font-display text-lg text-copper">
                    {formatPrice(p.price)}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <SectionLabel>Galería completa</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl">Nuestro trabajo</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {products.map((p, i) => (
              <button
                key={`g-${p.id}`}
                type="button"
                onClick={() => setSelected(p)}
                className={`group overflow-hidden rounded-sm bg-muted ${
                  i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={912}
                  height={912}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <SectionLabel>Cómo funciona</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl">Cuatro pasos</h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {[
              { n: "01", t: "Elegí", d: "Escoge un diseño del catálogo o cuéntanos tu idea." },
              { n: "02", t: "Cotizá", d: "Te confirmamos disponibilidad, precio y hora de entrega." },
              { n: "03", t: "Pagá", d: "SINPE Móvil o transferencia. Envías el comprobante." },
              { n: "04", t: "Recibí", d: "Entregamos y te enviamos la foto del arreglo final." },
            ].map((s) => (
              <div key={s.n} className="border-t border-border pt-6">
                <p className="font-display text-4xl text-sage">{s.n}</p>
                <h3 className="mt-3 font-display text-2xl">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONAS Y PAGOS */}
      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
          <div>
            <SectionLabel>Zonas de entrega</SectionLabel>
            <h2 className="font-display text-4xl">Tarifas por zona</h2>
            <ul className="mt-8 divide-y divide-border">
              {zones.map((z) => (
                <li key={z.zone} className="flex items-center justify-between gap-6 py-4">
                  <span className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0 text-sage" strokeWidth={1.5} />
                    {z.zone}
                  </span>
                  <span className="font-display text-lg text-copper">{z.price}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm italic text-muted-foreground">
              Otras zonas del país se coordinan por WhatsApp según distancia.
            </p>
          </div>

          <div>
            <SectionLabel>Métodos de pago</SectionLabel>
            <h2 className="font-display text-4xl">Fácil y seguro</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { t: "SINPE Móvil", d: `Al número ${PHONE_DISPLAY}` },
                { t: "Transferencia", d: "Cuenta BAC en colones" },
              ].map((m) => (
                <div key={m.t} className="rounded-sm border border-border bg-card p-6">
                  <p className="font-display text-xl">{m.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-sm border border-sage/50 bg-sage/10 p-6">
              <p className="text-sm leading-relaxed text-foreground">
                Los pedidos personalizados y de evento requieren <strong>2 días de anticipación</strong>{" "}
                y se confirman con el comprobante de pago.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <SectionLabel>Testimonios</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl">Lo que nos cuentan</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-sm border border-border bg-card p-8">
                <Ginkgo className="h-7 w-7 text-sage" />
                <blockquote className="mt-5 text-[0.98rem] leading-relaxed italic text-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {t.name} · {t.occasion}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <SectionLabel>Preguntas frecuentes</SectionLabel>
            <h2 className="font-display text-4xl">Antes de pedir</h2>
          </div>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-display text-xl">{f.q}</span>
                  {openFaq === i ? (
                    <Minus className="h-4 w-4 shrink-0 text-copper" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-copper" />
                  )}
                </button>
                {openFaq === i && (
                  <p className="pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO / FOOTER */}
      <footer id="contacto" className="bg-olive text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="font-display text-2xl uppercase tracking-brand">Olivia</p>
              <p className="font-script text-3xl text-sand">Atelier</p>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/75 italic">
                Flower Experience. Diseño floral con emoción, conexión e intención.
              </p>
            </div>

            <div className="space-y-3 text-sm text-cream/85">
              <p className="mb-4 text-[0.7rem] uppercase tracking-brand text-sand">Contacto</p>
              <a
                href={whatsappLink("Hola Olivia Atelier, tengo una consulta.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-sand"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} /> {PHONE_DISPLAY} · WhatsApp
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-sand">
                <Mail className="h-4 w-4" strokeWidth={1.5} /> {EMAIL}
              </a>
              <p className="flex items-center gap-3">
                <Clock className="h-4 w-4" strokeWidth={1.5} /> Lun–Sáb · 9:00am a 6:00pm
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4" strokeWidth={1.5} /> Gran Área Metropolitana, Costa Rica
              </p>
            </div>

            <div>
              <p className="mb-4 text-[0.7rem] uppercase tracking-brand text-sand">Síguenos</p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-cream/85 hover:text-sand"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} /> @oliviaatelier
              </a>
              <a
                href={whatsappLink("Hola Olivia Atelier, quiero cotizar mi evento.")}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-full bg-sand px-7 py-3 text-xs uppercase tracking-[0.18em] text-ink transition-opacity hover:opacity-90"
              >
                Cotiza tu evento
              </a>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream/20 pt-6 text-xs text-cream/60 sm:flex-row">
            <p>© {new Date().getFullYear()} Olivia Atelier. Todos los derechos reservados.</p>
            <p>{SITE}</p>
          </div>
        </div>
      </footer>

      {/* MODAL DE PRODUCTO */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-sm bg-card shadow-[var(--shadow-soft)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
              className="absolute right-4 top-4 z-10 rounded-full bg-cream/90 p-2 text-ink"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid md:grid-cols-2">
              <img
                src={selected.image}
                alt={selected.name}
                width={912}
                height={912}
                className="aspect-square w-full object-cover"
              />
              <div className="p-8">
                <p className="text-[0.7rem] uppercase tracking-brand text-copper">
                  {selected.category}
                </p>
                <h3 className="mt-3 font-display text-3xl leading-tight">{selected.name}</h3>
                <p className="mt-2 font-display text-2xl text-copper">
                  {formatPrice(selected.price)}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {selected.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {selected.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-foreground">
                      <Flower2 className="mt-0.5 h-4 w-4 shrink-0 text-sage" strokeWidth={1.4} />
                      {d}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(
                    `Hola Olivia Atelier, me interesa "${selected.name}" (${formatPrice(selected.price)}). ¿Tienen disponibilidad?`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 block rounded-full bg-copper px-6 py-3.5 text-center text-xs uppercase tracking-[0.18em] text-cream transition-opacity hover:opacity-90"
                >
                  Pedir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <ChatWidget />
    </div>
  );
}
