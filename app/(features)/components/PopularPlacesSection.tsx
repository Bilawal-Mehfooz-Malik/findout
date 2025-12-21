import { CategoryId } from "@/app/lib/my-data-types";
import { fetchPopularResidenceList } from "../[categorySlug]/data/residence-summary.repo";
import { fetchPopularFoodList } from "../[categorySlug]/data/food-summary.repo";
import { PlaceSummaryCard } from "../[categorySlug]/components/PlaceSummaryCard";
import { fetchCategorySlugById } from "../data/categoy.repo";
import ErrorSection from "@/app/ui/ErrorSection";
import { hardcoded } from "@/app/lib/i18n";

interface Props {
  categoryId: CategoryId;
}

export default async function PopularPlacesSection({ categoryId }: Props) {
  let places: any[] = [];
  let errorMessage: string | null = null;

  try {
    if (categoryId === 1) {
      places = await fetchPopularResidenceList();
    } else if (categoryId === 2) {
      places = await fetchPopularFoodList();
    }
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

  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      {places.map((place) => {
        const categorySlug = fetchCategorySlugById(categoryId);

        return (
          <PlaceSummaryCard
            key={place.id}
            name={place.name}
            categorySlug={categorySlug}
            slug={place.slug}
            coverImageUrl={place.coverImageUrl}
            cityName={place.city}
            streetAddress={place.streetAddress}
            avgRating={place.avgRating}
            ratingCount={place.reviewCount}
            pricing={place.pricing}
            availability={place.availability}
          />
        );
      })}
    </div>
  );
}
