import { PlaceId, SubCategoryId } from "@/app/lib/my-data-types";
import { hardcoded } from "@/app/lib/i18n";
import sql from "@/app/lib/db";
import {
  mapResidenceSummary,
  ResidenceSummary,
} from "../domain/residence-summary";
import { fetchPlacePricing } from "./pricing.repo";

interface Props {
  subCategoryId: SubCategoryId;
}

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
}: Props): Promise<ResidenceSummary[]> {
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

export async function fetchPopularResidenceList(): Promise<ResidenceSummary[]> {
  try {
    const residences = await sql<ResidenceSummary[]>`
      SELECT * FROM residences 
      WHERE approval_status = 'approved' 
      AND is_featured = true 
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
    return [];
  }
}

export async function fetchPopularResidenceListBySubCategoryId({
  subCategoryId,
}: Props): Promise<ResidenceSummary[]> {
  try {
    const residences = await sql<ResidenceSummary[]>`
      SELECT * FROM residences 
      WHERE sub_category_id = ${subCategoryId} 
      AND approval_status = 'approved' 
      AND is_featured = true 
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
