import {
  DayOfWeek,
  OpeningHourId,
  OpeningHourSlotId,
  PlaceId,
} from "@/app/lib/my-data-types";

type DbTimeString = `${number}${number}:${number}${number}:${number}${number}`;
type DbTimeSlotString = `${number}${number}:${number}${number}`;

/**
 * DB row for a day's opening hours (snake_case for DB)
 */
export type OpeningHourRow = {
  id: OpeningHourId;
  place_id: PlaceId;
  day_of_week: DayOfWeek;
  is_24_hours: boolean;
};

/**
 * DB row for a single time slot (snake_case for DB)
 */
export type OpeningHourSlotRow = {
  id: OpeningHourSlotId;
  opening_hour_id: OpeningHourId;
  open_time: DbTimeString; // "09:00:00"
  close_time: DbTimeString; // "17:00:00"
};

/**
 * Represents a single period of opening hours in app-friendly format.
 * Times are in "HH:MM" format.
 */
export type TimeSlot = {
  open: DbTimeSlotString;
  close: DbTimeSlotString;
};

/**
 * Daily opening hours: array of time slots or `true` for 24h open.
 */
export type DailyOpeningHours = TimeSlot[] | true;

/**
 * App-facing opening hours for a place (camelCase)
 *
 * - Missing day → closed
 * - `true` → open 24h
 * - Array of TimeSlot → specific hours
 */
export type OpeningHours = {
  [key in DayOfWeek]?: DailyOpeningHours;
};

/**
 * Converts DB rows (snake_case) into app-friendly OpeningHours (camelCase)
 *
 * @param hours - Array of OpeningHourRow from DB
 * @param slots - Array of OpeningHourSlotRow from DB
 * @returns OpeningHours object suitable for frontend consumption
 */

/* Example usage:
const openingHours: OpeningHours = {
  MONDAY: [
    { open: "09:00", close: "12:00" },
    { open: "13:00", close: "17:00" },
  ],
  TUESDAY: true, // 24h open
  WEDNESDAY: [
    { open: "10:00", close: "14:00" }
  ],
  // THURSDAY, FRIDAY, SATURDAY, SUNDAY are omitted → closed
};*/
export function mapDbToAppOpeningHours(
  hours: OpeningHourRow[],
  slots: OpeningHourSlotRow[]
): OpeningHours {
  const result: OpeningHours = {};

  hours.forEach((hour) => {
    // If the day is marked as 24 hours open, set the value to `true`
    if (hour.is_24_hours) {
      result[hour.day_of_week] = true;
      return; // next day
    }

    // Filter time slots that belong to the current day's record
    const relatedSlots = slots
      .filter((s) => s.opening_hour_id === hour.id)
      .map<TimeSlot>((s) => ({
        // Convert "HH:MM:SS" -> "HH:MM"
        open: s.open_time.slice(0, 5) as DbTimeSlotString,
        close: s.close_time.slice(0, 5) as DbTimeSlotString,
      }));

    if (relatedSlots.length > 0) {
      result[hour.day_of_week] = relatedSlots;
    }
    // Days with no slots are omitted → considered closed
  });

  return result;
}

/**
 * map a DB row to app-facing camelCase object
 */
export function mapDbRowToApp(hour: OpeningHourRow): {
  id: OpeningHourId;
  placeId: PlaceId;
  dayOfWeek: DayOfWeek;
  is24Hours: boolean;
} {
  return {
    id: hour.id,
    placeId: hour.place_id,
    dayOfWeek: hour.day_of_week,
    is24Hours: hour.is_24_hours,
  };
}

export function mapDbSlotToApp(slot: OpeningHourSlotRow): {
  id: OpeningHourSlotId;
  openingHourId: OpeningHourId;
  openTime: DbTimeString;
  closeTime: DbTimeString;
} {
  return {
    id: slot.id,
    openingHourId: slot.opening_hour_id,
    openTime: slot.open_time,
    closeTime: slot.close_time,
  };
}
