"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceSummaryCard } from "../[categorySlug]/components/PlaceSummaryCard";
import { fetchCategorySlugById } from "../data/categoy.repo";
import { CategoryId } from "@/app/lib/my-data-types";
import { FoodSummary } from "../[categorySlug]/domain/food-summary";
import { ResidenceSummary } from "../[categorySlug]/domain/residence-summary";

interface Props {
  title: string;
  categoryId: CategoryId;
  places: (FoodSummary | ResidenceSummary)[];
}

export function PlacesCarousel({ title, categoryId, places }: Props) {
  return (
    <div className="relative space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>

      <Carousel>
        {/* CarouselContent without scrollbar */}
        <CarouselContent className="flex gap-4">
          {places.map((place) => {
            const categorySlug = fetchCategorySlugById(categoryId);
            return (
              <CarouselItem key={place.id} className="flex-none">
                <PlaceSummaryCard
                  name={place.name}
                  categorySlug={categorySlug}
                  slug={place.slug}
                  coverImageUrl={place.coverImageUrl}
                  cityName={place.city}
                  streetAddress={place.streetAddress}
                  avgRating={place.avgRating}
                  ratingCount={place.reviewCount}
                  pricing={(place as ResidenceSummary).pricing}
                  availability={(place as ResidenceSummary).availability}
                  operationalStatus={place.operationalStatus}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Arrow buttons */}
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white shadow p-2 hover:bg-gray-100">
          &lt;
        </CarouselPrevious>
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white shadow p-2 hover:bg-gray-100">
          &gt;
        </CarouselNext>
      </Carousel>
    </div>
  );
}
