import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { restaurant, whatsappLink } from "@/data/restaurant";
import OpenStatus from "./OpenStatus";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Visit() {
  const { lat, lng } = restaurant.coords;
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=17&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <section id="visit" className="bg-cream px-5 pb-20 md:pb-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">Visit us</p>
          <h2 className="mt-3 font-serif text-4xl text-charcoal md:text-5xl">
            In the heart of <em className="text-ember">Tamale</em>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-5">
          <Reveal className="overflow-hidden rounded-2xl bg-night/5 shadow-lg shadow-night/5 md:col-span-3">
            <iframe
              src={mapSrc}
              title="Map showing Giddipass Crest in central Tamale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border-0 md:h-full md:min-h-[28rem]"
            />
          </Reveal>

          <Reveal className="md:col-span-2" delay={100}>
            <div className="h-full rounded-2xl bg-white p-6 shadow-lg shadow-night/5 md:p-8">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-ember" />
                <div>
                  <p className="font-semibold text-charcoal">{restaurant.address.line1}</p>
                  <p className="text-charcoal/65">{restaurant.address.line2}</p>
                  <p className="mt-1 text-xs text-charcoal/45">Plus Code: {restaurant.address.plusCode}</p>
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between gap-3">
                <h3 className="flex items-center gap-2 font-semibold text-charcoal">
                  <Clock className="h-5 w-5 text-ember" /> Opening hours
                </h3>
                <OpenStatus />
              </div>
              <table className="mt-3 w-full text-sm">
                <tbody>
                  {restaurant.hours.days.map((d) => (
                    <tr key={d.day} className="border-b border-charcoal/5 last:border-0">
                      <td className="py-2 text-charcoal/65">{d.day}</td>
                      <td className="py-2 text-right font-medium text-charcoal">{d.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-7 grid gap-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-white transition hover:brightness-105"
                >
                  <WhatsAppIcon /> WhatsApp us
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${restaurant.phone.tel}`}
                    className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-night font-semibold text-cream transition hover:bg-night-soft"
                  >
                    <Phone className="h-4 w-4" /> Call
                  </a>
                  <a
                    href={directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-charcoal/15 font-semibold text-charcoal transition hover:border-ember hover:text-ember"
                  >
                    <Navigation className="h-4 w-4" /> Directions
                  </a>
                </div>
                <p className="text-center text-xs text-charcoal/50">
                  {restaurant.phone.display} · alt.{" "}
                  <a href={`tel:${restaurant.altPhone.tel}`} className="underline underline-offset-2">
                    {restaurant.altPhone.display}
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
