"use client";

import { useState } from "react";
import { PRICE_PLACEHOLDER, menu, whatsappLink } from "@/data/restaurant";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section id="menu" className="bg-night-soft px-5 py-20 text-cream md:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sunset">The menu</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Something for <em className="text-sunset-gradient">every appetite</em>
          </h2>
        </Reveal>

        {/* Category tabs: scroll sideways on small phones */}
        <div className="no-scrollbar -mx-5 mt-10 overflow-x-auto px-5">
          <div role="tablist" aria-label="Menu categories" className="mx-auto flex w-max gap-1 rounded-full bg-night p-1 sm:gap-2 sm:p-1.5">
            {menu.map((c) => (
              <button
                key={c.id}
                role="tab"
                type="button"
                aria-selected={c.id === active}
                onClick={() => setActive(c.id)}
                className={`min-h-12 whitespace-nowrap rounded-full px-3 text-[13px] font-semibold sm:px-5 sm:text-sm transition ${
                  c.id === active ? "bg-sunset-gradient text-night shadow-md" : "text-cream/70 hover:text-cream"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div role="tabpanel" aria-label={category.label}>
        <ul key={category.id} className="animate-rise mt-8 divide-y divide-cream/10">
          {category.items.map((item) => (
            <li key={item.name} className="flex items-center gap-4 py-5">
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-serif text-xl md:text-2xl">{item.name}</h3>
                  <span className="hidden flex-1 border-b border-dotted border-cream/20 sm:block" />
                  <span className={`shrink-0 font-serif text-lg ${item.price === PRICE_PLACEHOLDER ? "text-cream/35" : "text-sunset"}`}>{item.price}</span>
                </div>
                {item.description && <p className="mt-1 text-sm text-cream/55">{item.description}</p>}
              </div>
              <a
                href={whatsappLink(item.name)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Order ${item.name} on WhatsApp`}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cream/15 text-[#25D366] transition hover:border-[#25D366] hover:bg-[#25D366]/10"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
        </div>

        <p className="mt-8 text-center text-sm text-cream/60">
          Sample menu for preview. Final dishes and prices to be confirmed by Giddipass Crest.
        </p>
      </div>
    </section>
  );
}
