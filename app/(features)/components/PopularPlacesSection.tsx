import { CategoryId } from "@/app/lib/my-data-types";
import ErrorSection from "@/app/ui/ErrorSection";
import { hardcoded } from "@/app/lib/i18n";
import { fetchPopularPlaces } from "../application/popular-places.service";
import { FoodSummary } from "../[categorySlug]/domain/food-summary";
import { ResidenceSummary } from "../[categorySlug]/domain/residence-summary";
import { PlacesCarousel } from "./PlacesCarousel";

interface Props {
  title: string;
  categoryId: CategoryId;
}

export default async function PopularPlacesSection({
  title,
  categoryId,
}: Props) {
  let places: (FoodSummary | ResidenceSummary)[] = [];
  let errorMessage: string | null = null;

  try {
    places = await fetchPopularPlaces(categoryId);
  } catch (error: any) {
    console.error("Error fetching popular places:", error);
    errorMessage =
      error.message ||
      hardcoded("Oops! Failed to load popular places. Please try again.");
  }

  if (errorMessage) {
    return (
      <div className="mt-4">
        <ErrorSection message={errorMessage} />
      </div>
    );
  }

  // If there are no places, don't render the section
  if (places.length === 0) {
    return null;
  }

  return (
    <PlacesCarousel title={title} categoryId={categoryId} places={places} />
  );
}
