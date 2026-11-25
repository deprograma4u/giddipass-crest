import { restaurant } from "@/data/restaurant";

export default function Footer() {
  return (
    <footer className="bg-night px-5 pb-28 pt-14 text-cream md:pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-semibold">Giddipass</span>
              <span className="text-xs font-semibold tracking-[0.3em] text-sunset">CREST</span>
            </p>
            <p className="mt-2 text-sm text-cream/55">{restaurant.tagline}.</p>
          </div>
          <div className="text-sm text-cream/70">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sunset">Hours</p>
            <p>{restaurant.hours.summary}</p>
          </div>
          <div className="text-sm text-cream/70">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sunset">Find us</p>
            <p>{restaurant.address.line1}</p>
            <p>{restaurant.address.line2}</p>
            <a href={`tel:${restaurant.phone.tel}`} className="mt-1 inline-block hover:text-sunset">
              {restaurant.phone.display}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {restaurant.name}</p>
          <p>
            Sample design by{" "}
            <a href="https://deprograma.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold text-sunset hover:underline">
              DePrograma
            </a>{" "}
            — preview for Giddipass Crest.
          </p>
        </div>
      </div>
    </footer>
  );
}
