import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

import { faqs, whatsappLink } from "@/lib/catalog";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[min(92vw,22rem)] overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
          <div className="bg-olive px-5 py-4 text-cream">
            <p className="font-display text-lg">¿Conversamos?</p>
            <p className="text-xs text-cream/80">Lun–Sáb · 9:00am a 6:00pm</p>
          </div>
          <div className="max-h-72 overflow-y-auto px-5 py-4">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Preguntas frecuentes
            </p>
            <ul className="space-y-2">
              {faqs.slice(0, 4).map((f, i) => (
                <li key={f.q}>
                  <button
                    type="button"
                    onClick={() => setActive(active === i ? null : i)}
                    className="w-full text-left text-sm text-foreground hover:text-copper"
                  >
                    {f.q}
                  </button>
                  {active === i && (
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-border p-4">
            <a
              href={whatsappLink("Hola Olivia Atelier, quisiera una cotización.")}
              target="_blank"
              rel="noreferrer"
              className="block rounded-full bg-copper px-5 py-3 text-center text-xs uppercase tracking-[0.18em] text-cream transition-opacity hover:opacity-90"
            >
              Pedir cotización por WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar chat" : "Abrir chat de cotización"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-olive text-cream shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
