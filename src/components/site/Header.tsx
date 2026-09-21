import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Logo } from "./Logo";
import { whatsappLink } from "@/lib/catalog";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#nosotros", label: "Sobre nosotros" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-cream/95 py-3 backdrop-blur"
          : "bg-gradient-to-b from-ink/40 to-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a
          href="#inicio"
          className={`transition-colors ${scrolled ? "text-olive" : "text-cream"}`}
          aria-label="Olivia Atelier, inicio"
        >
          <Logo compact={scrolled} />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs uppercase tracking-[0.18em] transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-copper"
                  : "text-cream/85 hover:text-cream"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink("Hola Olivia Atelier, quisiera cotizar las flores de mi evento.")}
            target="_blank"
            rel="noreferrer"
            className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.18em] transition-colors ${
              scrolled
                ? "border-copper text-copper hover:bg-copper hover:text-cream"
                : "border-cream/70 text-cream hover:bg-cream hover:text-ink"
            }`}
          >
            Cotiza tu evento
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          className={`md:hidden ${scrolled ? "text-olive" : "text-cream"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="mt-3 border-t border-border bg-cream px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.18em] text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink("Hola Olivia Atelier, quisiera cotizar las flores de mi evento.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-copper px-5 py-2 text-center text-xs uppercase tracking-[0.18em] text-cream"
            >
              Cotiza tu evento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
