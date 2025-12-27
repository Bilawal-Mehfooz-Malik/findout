"use client";

import { useEffect, useState } from "react";
import {
  OpeningHourSlotRow,
  mapDbToAppOpeningHours,
  OpeningHourRow,
} from "../../(features)/[categorySlug]/domain/opening-hours";
import { hardcoded } from "../../lib/i18n";
import { cn } from "../../lib/utils";

interface Props {
  hours: OpeningHourRow[];
  slots: OpeningHourSlotRow[];
}

export default function ClientStatus({ hours, slots }: Props) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    // Convert raw DB data into app format
    const openingHours = mapDbToAppOpeningHours(hours, slots);

    const now = new Date();
    const days = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];

    const day = days[now.getDay()];
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}`;

    const todaysHours = openingHours[day as keyof typeof openingHours];
    if (!todaysHours) {
      setIsOpen(false);
      return;
    }
    if (todaysHours === true) {
      setIsOpen(true);
      return;
    }

    const openNow = todaysHours.some(
      (slot) => time >= slot.open && time < slot.close
    );
    setIsOpen(openNow);
  }, [hours, slots]);

  if (isOpen === null) {
    return null;
  }

  const status = {
    label: hardcoded(isOpen ? "Open" : "Closed"),
    variant: isOpen ? "success" : "error",
  };

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-full px-2.5 py-1",
        "bg-white/70 backdrop-blur-md border border-white/40 shadow-sm",
        "dark:bg-black/50 dark:border-white/10"
      )}
    >
      <span
        className={cn(
          "inline-flex h-2 w-2 rounded-full border",
          status.variant === "success" && "bg-green-500 border-green-700",
          status.variant === "error" && "bg-red-500 border-red-700",
          status.variant === "muted" && "bg-zinc-400 border-zinc-600"
        )}
      />

      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
        {status.label}
      </span>
    </div>
  );
}
