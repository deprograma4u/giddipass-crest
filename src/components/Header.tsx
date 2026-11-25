"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, restaurant, whatsappLink } from "@/data/restaurant";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-night/95 shadow-lg shadow-black/20 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-18">
        <a href="#top" className="flex items-baseline gap-2 text-cream" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl font-semibold tracking-tight">Giddipass</span>
          <span className="text-xs font-semibold tracking-[0.3em] text-sunset">CREST</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-cream/80 transition hover:text-sunset">
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sunset-gradient inline-flex min-h-12 items-center gap-2 rounded-full px-5 text-sm font-semibold text-night shadow-lg shadow-ember/30 transition hover:brightness-110"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Order on WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="-mr-2 flex h-12 w-12 items-center justify-center rounded-full text-cream md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <nav className="flex flex-col gap-1 border-t border-white/10 px-5 pb-6 pt-3">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center font-serif text-2xl text-cream"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sunset-gradient mt-3 inline-flex min-h-13 items-center justify-center gap-2 rounded-full font-semibold text-night"
          >
            <WhatsAppIcon />
            Order on WhatsApp
          </a>
          <a href={`tel:${restaurant.phone.tel}`} className="mt-2 text-center text-sm text-cream/60">
            or call {restaurant.phone.display}
          </a>
        </nav>
      </div>
    </header>
  );
}
