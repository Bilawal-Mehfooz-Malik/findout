import { PlaceId, SubCategoryId } from "@/app/lib/my-data-types";
import { hardcoded } from "@/app/lib/i18n";
import sql from "@/app/lib/db";
import { Residence } from "../domain/residence";
import {
  mapResidenceSummary,
  ResidenceSummary,
} from "../domain/residence-summary";
import { fetchPlacePricing } from "./pricing.repo";

export async function fetchResidenceList() {
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
}) {
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

export async function fetchResidenceById({ placeId }: { placeId: PlaceId }) {
  try {
    const [residence] = await sql<ResidenceSummary[]>`
      SELECT * FROM residences 
      WHERE id = ${placeId} 
      ORDER BY updated_at DESC
    `;

    const pricing = await fetchPlacePricing(placeId);

    if (!residence || !pricing) return null;

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
