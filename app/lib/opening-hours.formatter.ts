import { DailyOpeningHours } from "../(features)/[categorySlug]/domain/opening-hours";

export function formatDailyHours(hours: DailyOpeningHours): string {
  if (!hours) return "Closed";
  if (hours === true) return "Open 24h";

  return hours.map((slot) => `${slot.open} - ${slot.close}`).join(", ");
}
