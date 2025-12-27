import { MyCarousel } from "@/app/ui/MyCarousel";
import { fetchCategorySlugById } from "../data/categoy.repo";
import { PlaceSummaryCard } from "../../ui/place-summary-card/PlaceSummaryCard";
import { ResidenceSummary } from "../[categorySlug]/domain/residence-summary";
import { FoodSummary } from "../[categorySlug]/domain/food-summary";
import { CategoryId } from "@/app/lib/my-data-types";
import { Suspense } from "react";
import { PlacesCarouselSkeleton } from "./PlacesCarouselSkeleton";

interface Props {
  title: string;
  places: (ResidenceSummary | FoodSummary)[];
  categoryId: CategoryId;
}

export function PlacesCarousel({ title, places, categoryId }: Props) {
  return (
    <div className="max-w-6xl mx-auto w-[95%]">
      <h2 className="text-xl font-bold">{title}</h2>

      <Suspense fallback={<PlacesCarouselSkeleton categoryId={categoryId} />}>
        <MyCarousel>
          {places.map((place) => {
            const categorySlug = fetchCategorySlugById(categoryId);
            return (
              <PlaceSummaryCard
                id={place.id}
                name={place.name}
                categorySlug={categorySlug}
                slug={place.slug}
                coverImageUrl={place.coverImageUrl}
                cityName={place.city}
                streetAddress={place.streetAddress}
                avgRating={place.avgRating}
                pricing={(place as ResidenceSummary).pricing}
                availability={(place as ResidenceSummary).availability}
                operationalStatus={place.operationalStatus}
              />
            );
          })}
        </MyCarousel>
      </Suspense>
    </div>
  );
}
