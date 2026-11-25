import { Fish, Sunset, Tv } from "lucide-react";
import { guestThemes } from "@/data/restaurant";
import Reveal from "./Reveal";

const icons = { sunset: Sunset, fish: Fish, tv: Tv } as const;

export default function Testimonials() {
  return (
    <section className="bg-cream px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">What guests say</p>
          <h2 className="mt-3 font-serif text-4xl text-charcoal md:text-5xl">
            Why people <em className="text-ember">keep coming back</em>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-charcoal/55">
            Common themes from public Google reviews.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {guestThemes.map((t, i) => {
            const Icon = icons[t.icon as keyof typeof icons];
            return (
            <Reveal key={t.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-charcoal/5 bg-white p-7 shadow-lg shadow-night/5">
                <div className="flex items-center gap-3" aria-hidden="true">
                  <span className="bg-sunset-gradient flex h-12 w-12 items-center justify-center rounded-full text-night shadow-md shadow-ember/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-sunset/50 to-transparent" />
                </div>
                <h3 className="mt-5 font-serif text-2xl leading-snug text-charcoal">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">{t.text}</p>
              </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
