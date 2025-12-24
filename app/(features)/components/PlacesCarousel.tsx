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
import { cn } from "@/app/lib/utils";

interface Props {
  title: string;
  categoryId: CategoryId;
  places: (FoodSummary | ResidenceSummary)[];
}

export function PlacesCarousel({ title, categoryId, places }: Props) {
  return (
    <Carousel className={cn("max-w-6xl mx-auto w-[95%]")}>
      {/* Header row */}
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl font-semibold leading-8">{title}</h2>

        <div className="hidden sm:flex gap-2">
          <CarouselPrevious className="h-8 w-8" />
          <CarouselNext className="h-8 w-8" />
        </div>
      </div>

      {/* CarouselContent */}
      <CarouselContent>
        {places.map((place) => {
          const categorySlug = fetchCategorySlugById(categoryId);
          return (
            <CarouselItem key={place.id} className={cn("flex-none py-2")}>
              <PlaceSummaryCard
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
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
