import sql from "@/app/lib/db";
import { OpeningHourRow, OpeningHourSlotRow } from "../domain/opening-hours";
import { PlaceId } from "@/app/lib/my-data-types";

export async function getOpeningHoursByPlaceId(
  placeId: PlaceId
): Promise<{ hours: OpeningHourRow[]; slots: OpeningHourSlotRow[] }> {
  try {
    const hours = await sql<OpeningHourRow[]>`
      SELECT * 
      FROM opening_hours 
      WHERE place_id = ${placeId}
    `;

    if (hours.length === 0) {
      return { hours: [], slots: [] };
    }

    const hourIds = hours.map((h) => h.id);

    const slots = await sql<OpeningHourSlotRow[]>`
      SELECT *
      FROM opening_hour_slots
      WHERE opening_hour_id IN ${sql(hourIds)}
    `;

    return { hours, slots };
  } catch (error) {
    console.error("Error fetching opening hours:", error);
    return { hours: [], slots: [] };
  }
}
