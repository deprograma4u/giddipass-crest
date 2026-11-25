"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sunset, Tv, Users, X } from "lucide-react";
import { bookingLink, rooftop } from "@/data/restaurant";
import WhatsAppIcon from "./WhatsAppIcon";
import Reveal from "./Reveal";

const icons = { sunset: Sunset, tv: Tv, users: Users } as const;

export default function Rooftop() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const count = rooftop.gallery.length;

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setOpenIndex((i) => (i === null ? i : (i + dir + count) % count)),
    [count]
  );

  // Keyboard controls + lock page scroll while the lightbox is open
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  return (
    <section id="rooftop" className="relative overflow-hidden bg-night px-5 py-20 text-cream md:py-28">
      {/* soft sunset glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(200,85,61,0.28),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
            <Image src={rooftop.image} alt="Warm lights over the city at dusk" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sunset">The experience</p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">
                {rooftop.title} <em className="text-sunset-gradient">after dark</em>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-cream/75">{rooftop.intro}</p>
            </Reveal>

            <div className="mt-8 space-y-5">
              {rooftop.highlights.map((h, i) => {
                const Icon = icons[h.icon as keyof typeof icons];
                return (
                  <Reveal key={h.title} delay={i * 100}>
                    <div className="flex gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sunset/10 text-sunset ring-1 ring-sunset/30">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-serif text-xl">{h.title}</h3>
                        <p className="text-sm leading-relaxed text-cream/60">{h.text}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal className="mt-9">
              <a
                href={bookingLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sunset-gradient inline-flex min-h-14 w-full items-center justify-center gap-2.5 rounded-full px-8 font-semibold text-night shadow-xl shadow-ember/25 transition hover:brightness-110 sm:w-auto"
              >
                <WhatsAppIcon /> Reserve a table
              </a>
              <p className="mt-3 text-sm text-cream/55">Big match coming up? Book your spot on WhatsApp.</p>
            </Reveal>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-16 grid grid-cols-2 gap-3 md:mt-24 md:grid-cols-3 md:gap-4">
          {rooftop.gallery.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative block aspect-square w-full overflow-hidden rounded-2xl"
                aria-label={`View photo: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-night/10 transition group-hover:bg-transparent" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-night/95 p-4 backdrop-blur"
          onClick={close}
        >
          <button type="button" onClick={close} aria-label="Close" className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cream">
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-cream md:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={rooftop.gallery[openIndex].src} alt={rooftop.gallery[openIndex].alt} className="max-h-[80svh] w-auto rounded-xl object-contain" />
            <figcaption className="mt-3 text-center text-sm text-cream/70">
              {rooftop.gallery[openIndex].alt} · {openIndex + 1}/{count}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-cream md:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
