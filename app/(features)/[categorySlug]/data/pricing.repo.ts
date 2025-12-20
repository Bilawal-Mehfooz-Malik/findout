import sql from "@/app/lib/db";
import { PlaceId } from "@/app/lib/my-data-types";
import { mapPricing, Pricing } from "../domain/pricing";
import { hardcoded } from "@/app/lib/i18n";

export async function fetchPlacePricing(placeId: PlaceId): Promise<Pricing> {
  try {
    const [pricing] =
      await sql`SELECT * from pricings where place_id=${placeId}`;
    return mapPricing(pricing);
  } catch (error) {
    console.error(error);
    throw new Error(hardcoded("Failed to fetch place pricing"));
  }
}
