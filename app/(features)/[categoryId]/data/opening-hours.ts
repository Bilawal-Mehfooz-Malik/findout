import {
  DayOfWeek,
  OpeningHourId,
  OpeningHourSlotId,
  PlaceId,
} from "@/app/lib/my-data-types";

type DbTimeString = `${number}${number}:${number}${number}:${number}${number}`;

export type OpeningHourRow = {
  id: OpeningHourId;
  place_id: PlaceId;
  day_of_week: DayOfWeek;
  is_24_hours: boolean;
};

export type OpeningHourSlotRow = {
  id: OpeningHourSlotId;
  opening_hour_id: OpeningHourId;
  open_time: DbTimeString; // "09:00:00"
  close_time: DbTimeString; // "17:00:00"
};

/**
 * Represents a single period of opening hours.
 * Times should be in HH:MM format (e.g., "14:30").
 */
export type TimeSlot = {
  open: string;
  close: string;
};

/**
 * The hours for a single day. Can be an array of time slots
 * or the boolean `true` to indicate it's open 24 hours.
 */
export type DailyOpeningHours = TimeSlot[] | true;

/**
 * Represents the opening hours for a place for the entire week.
 *
 * - To mark a day as CLOSED: Omit the day's key.
 * - To mark a day as OPEN 24 HOURS: Set the day's value to `true`.
 * - To set specific hours: Provide an array of `TimeSlot` objects.
 */
export type OpeningHours = {
  [key in DayOfWeek]?: DailyOpeningHours;
};
