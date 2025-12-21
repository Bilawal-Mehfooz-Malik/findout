import { hardcoded } from "@/app/lib/i18n";
import sql from "@/app/lib/db";
import {
  mapResidenceDetails,
  ResidenceDetails,
} from "../domain/residence-details";
import { fetchPlacePricing } from "../../data/pricing.repo";

export async function fetchResidenceDetailsBySlug({
  slug,
}: {
  slug: string;
}): Promise<ResidenceDetails | null> {
  try {
    const [residence] = await sql<ResidenceDetails[]>`
      SELECT * FROM residences 
      WHERE slug = ${slug} 
      ORDER BY updated_at DESC
    `;

    if (!residence) return null;

    const pricing = await fetchPlacePricing(residence.id);

    if (!pricing) return null;

    return mapResidenceDetails(residence, pricing);
  } catch (error) {
    console.error("Fetch Residence By Id Error:", error);
    throw new Error(
      hardcoded(
        "Oops! We couldn't load this residence. Please try again later."
      )
    );
  }
}
