import { PlaceId, SubCategoryId } from "@/app/lib/my-data-types";
import { hardcoded } from "@/app/lib/i18n";
import sql from "@/app/lib/db";
import {
  mapResidenceSummary,
  ResidenceSummary,
} from "../domain/residence-summary";
import { fetchPlacePricing } from "./pricing.repo";

export async function fetchResidenceList(): Promise<ResidenceSummary[]> {
  try {
    const residences = await sql<ResidenceSummary[]>`
      SELECT * FROM residences 
      WHERE approval_status = 'approved' 
      ORDER BY updated_at DESC
    `;

    const residenceSummaries = await Promise.all(
      residences.map(async (res) => {
        const pricing = await fetchPlacePricing(res.id);
        return mapResidenceSummary(res, pricing);
      })
    );

    return residenceSummaries;
  } catch (error) {
    console.error("Fetch Residence List Error:", error);
    throw new Error(
      hardcoded(
        "Oops! We couldn't load the residences. Please try again later."
      )
    );
  }
}

export async function fetchResidenceListBySubCategoryId({
  subCategoryId,
}: {
  subCategoryId: SubCategoryId;
}): Promise<ResidenceSummary[]> {
  try {
    const residences = await sql<ResidenceSummary[]>`
      SELECT * FROM residences 
      WHERE sub_category_id = ${subCategoryId} 
      AND approval_status = 'approved' 
      ORDER BY updated_at DESC
    `;

    const residenceSummaries = await Promise.all(
      residences.map(async (res) => {
        const pricing = await fetchPlacePricing(res.id);
        return mapResidenceSummary(res, pricing);
      })
    );

    return residenceSummaries;
  } catch (error) {
    console.error("Fetch Residence List By SubCategoryId Error:", error);
    throw new Error(
      hardcoded(
        "Oops! We couldn't load residences for this category. Please try again later."
      )
    );
  }
}

export async function fetchResidenceBySlug({
  slug,
}: {
  slug: string;
}): Promise<ResidenceSummary | null> {
  try {
    const [residence] = await sql<ResidenceSummary[]>`
      SELECT * FROM residences 
      WHERE slug = ${slug} 
      ORDER BY updated_at DESC
    `;

    if (!residence) return null;

    const pricing = await fetchPlacePricing(residence.id);

    if (!pricing) return null;

    return mapResidenceSummary(residence, pricing);
  } catch (error) {
    console.error("Fetch Residence By Id Error:", error);
    throw new Error(
      hardcoded(
        "Oops! We couldn't load this residence. Please try again later."
      )
    );
  }
}
