"use client";
import { useEffect, useState } from "react";
import {
  OpeningHours,
  OpeningHourSlotRow,
  mapDbToAppOpeningHours,
  OpeningHourRow,
} from "../(features)/[categorySlug]/domain/opening-hours";
import { hardcoded } from "../lib/i18n";
import { StatusIndicator } from "../(features)/[categorySlug]/domain/status-indicator";

interface Props {
  hours: OpeningHourRow[];
  slots: OpeningHourSlotRow[];
}

export function StatusFormatterClient({
  hours,
  slots,
}: Props): StatusIndicator | null {
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

  if (isOpen === null) return null;

  return {
    label: hardcoded(isOpen ? "Open" : "Closed"),
    variant: isOpen ? "success" : "error",
  };
}
