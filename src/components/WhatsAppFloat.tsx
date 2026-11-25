import { whatsappLink } from "@/data/restaurant";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/30 transition hover:scale-105 active:scale-95"
    >
      <WhatsAppIcon className="relative h-8 w-8" />
    </a>
  );
}
