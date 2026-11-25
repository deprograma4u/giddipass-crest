import Image from "next/image";
import { PRICE_PLACEHOLDER, signatureDishes, whatsappLink } from "@/data/restaurant";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

export default function SignatureDishes() {
  const [featured, ...rest] = signatureDishes;

  return (
    <section id="dishes" className="bg-cream px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">Signature dishes</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
            Local favourites, <em className="text-ember">done right</em>
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {/* Featured: Banku & Tilapia */}
          <Reveal className="md:col-span-3">
            <article className="group grid overflow-hidden rounded-2xl bg-night text-cream shadow-xl shadow-night/10 md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-96">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="bg-sunset-gradient absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-night">
                  House favourite
                </span>
              </div>
              <div className="flex flex-col justify-center p-6 md:p-12">
                <h3 className="font-serif text-3xl md:text-4xl">{featured.name}</h3>
                <p className="mt-3 leading-relaxed text-cream/75">{featured.description}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="font-serif text-2xl text-sunset">{featured.price !== PRICE_PLACEHOLDER ? featured.price : ""}</span>
                  <a
                    href={whatsappLink(featured.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sunset-gradient inline-flex min-h-12 items-center gap-2 rounded-full px-5 text-sm font-semibold text-night transition hover:brightness-110"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Order this
                  </a>
                </div>
              </div>
            </article>
          </Reveal>

          {rest.map((dish, i) => (
            <Reveal key={dish.name} delay={i * 100}>
              <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-lg shadow-night/5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-2xl text-charcoal">{dish.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{dish.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-serif text-xl text-ember">{dish.price !== PRICE_PLACEHOLDER ? dish.price : ""}</span>
                    <a
                      href={whatsappLink(dish.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center gap-2 rounded-full px-3 text-sm font-semibold text-charcoal transition hover:text-ember"
                    >
                      <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> Order this
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
