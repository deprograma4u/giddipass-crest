"use client";

import { useEffect, useState } from "react";
import { restaurant } from "@/data/restaurant";

/** Shows "Open now" / "Closed now" based on the current time in Ghana (GMT, no daylight saving). */
export default function OpenStatus() {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const minutes = now.getUTCHours() * 60 + now.getUTCMinutes();
      setOpen(minutes >= restaurant.hours.opens && minutes < restaurant.hours.closes);
    };
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  if (open === null) return null;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
        open ? "bg-emerald-500/15 text-emerald-700" : "bg-ember/10 text-ember"
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${open ? "animate-pulse bg-emerald-500" : "bg-ember"}`} />
      {open ? "Open now" : "Closed now · opens 8 AM"}
    </span>
  );
}
