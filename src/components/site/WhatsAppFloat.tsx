import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-1"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
