import Image from "next/image";
import { Trophy } from "lucide-react";
import { bookingLink, matchNights } from "@/data/restaurant";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

export default function MatchNights() {
  return (
    <section aria-label={matchNights.eyebrow} className="relative overflow-hidden bg-night text-cream">
      {/* Photo: full-bleed on phones (faces at the top), right 60% on desktop */}
      <div className="absolute inset-0 md:left-auto md:w-3/5">
        <Image
          src={matchNights.image}
          alt="Friends cheering while watching a football match"
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover object-[center_25%]"
        />
      </div>
      {/* Phones: fade to dark at the bottom where the text sits. Desktop: fade from the left. */}
      <div className="absolute inset-0 bg-gradient-to-t from-night from-45% via-night/70 to-night/5 md:bg-gradient-to-r md:from-night md:from-40% md:via-night/60 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tr from-ember/20 via-transparent to-transparent" />

      <Reveal className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 pb-12 pt-56 md:pb-20 md:pt-20">
        <div className="max-w-md lg:max-w-lg">
          <p className="inline-flex items-center gap-2 rounded-full bg-sunset/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sunset ring-1 ring-sunset/30">
            <span className="h-2 w-2 animate-pulse rounded-full bg-ember" />
            <Trophy className="h-3.5 w-3.5" />
            {matchNights.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">{matchNights.title}</h2>
          <p className="mt-2 text-cream/75">{matchNights.text}</p>
        </div>
        <a
          href={bookingLink(matchNights.bookingMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sunset-gradient inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-2.5 rounded-full px-8 sm:w-auto font-semibold text-night shadow-xl shadow-ember/30 transition hover:brightness-110 active:scale-[0.98]"
        >
          <WhatsAppIcon /> {matchNights.cta}
        </a>
      </Reveal>
    </section>
  );
}
