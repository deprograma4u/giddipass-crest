import Image from "next/image";
import { ArrowDown, Clock, MapPin, Wallet } from "lucide-react";
import { restaurant, signatureDishes, whatsappLink } from "@/data/restaurant";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Hero() {
  const { hero } = restaurant;
  const favourite = signatureDishes[0];

  return (
    <section id="top" className="relative flex min-h-svh items-end overflow-hidden bg-night text-cream">
      {/* Background photo: portrait crop on phones, wide crop on desktop */}
      <picture>
        <source media="(min-width: 768px)" srcSet={hero.image} />
        <img
          src={hero.imageMobile}
          alt="Sunset over the rooftops of the city"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>

      {/* Overlays: dark at the bottom for legibility, warm glow on top */}
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-night/10" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-10 pt-24 md:pb-20 md:pt-32">
        {/* Food in the first five seconds: house favourite card */}
        <a
          href="#dishes"
          className="animate-rise group mb-7 inline-flex items-center gap-3 rounded-full bg-night/60 p-1.5 pr-5 ring-1 ring-cream/15 transition hover:ring-sunset/60 md:absolute md:bottom-24 md:right-5 md:mb-0 md:p-2 md:pr-7"
        >
          <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-sunset/70 md:h-20 md:w-20">
            <Image src={favourite.image} alt={favourite.name} fill sizes="80px" className="object-cover" />
          </span>
          <span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-sunset">House favourite</span>
            <span className="block font-serif text-lg leading-tight md:text-2xl">{favourite.name}</span>
          </span>
          <ArrowDown className="h-4 w-4 text-cream/60 transition group-hover:translate-y-0.5 group-hover:text-sunset" />
        </a>

        <p className="animate-rise mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-sunset">
          {hero.eyebrow}
        </p>
        <h1
          className="max-w-3xl font-serif text-[2.9rem] font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {hero.titleStart}{" "}
          <em className="text-sunset-gradient block pb-2 font-normal">{hero.titleAccent}</em>
        </h1>
        <p
          className="mt-5 max-w-xl text-lg leading-relaxed text-cream/80 md:text-xl"
        >
          {hero.subtitle}
        </p>

        <div className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sunset-gradient inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full px-8 text-base font-semibold text-night shadow-xl shadow-ember/30 transition hover:brightness-110 active:scale-[0.98]"
          >
            <WhatsAppIcon />
            Order on WhatsApp
          </a>
          <a
            href="#menu"
            className="inline-flex min-h-14 items-center justify-center rounded-full border border-cream/30 bg-night/30 px-8 text-base font-semibold text-cream transition hover:border-sunset hover:text-sunset"
          >
            View Menu
          </a>
        </div>

        <div
          className="animate-rise mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-cream/15 pt-5 text-sm text-cream/75"
          style={{ animationDelay: "320ms" }}
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-sunset" /> Central Tamale
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-sunset" /> {restaurant.hours.summary}
          </span>
          <span className="inline-flex items-center gap-2">
            <Wallet className="h-4 w-4 text-sunset" /> {restaurant.priceNote}
          </span>
        </div>
      </div>
    </section>
  );
}
