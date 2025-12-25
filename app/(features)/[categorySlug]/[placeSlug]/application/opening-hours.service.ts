import {
  OpeningHours,
  mapDbToAppOpeningHours,
} from "@/app/(features)/[categorySlug]/domain/opening-hours";
import { DayOfWeek, PlaceId } from "@/app/lib/my-data-types";
import { getOpeningHoursByPlaceId } from "../../data/opening-hours.repo";

function getCurrentDayAndTime(): {
  day: DayOfWeek;
  time: string;
} {
  const now = new Date();
  const days: DayOfWeek[] = [
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
  return { day, time };
}

export async function isPlaceCurrentlyOpen(placeId: PlaceId): Promise<boolean> {
  const { hours, slots } = await getOpeningHoursByPlaceId(placeId);
  if (hours.length === 0) {
    return false;
  }

  const openingHours: OpeningHours = mapDbToAppOpeningHours(hours, slots);
  const { day, time } = getCurrentDayAndTime();
  const todaysHours = openingHours[day];

  if (!todaysHours) {
    return false;
  }

  if (todaysHours === true) {
    return true;
  }

  for (const slot of todaysHours) {
    if (time >= slot.open && time < slot.close) {
      return true;
    }
  }

  return false;
}
