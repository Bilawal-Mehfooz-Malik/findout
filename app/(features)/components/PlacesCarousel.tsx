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
    <div>
      <h2>{title}</h2>
      <Carousel>
        <CarouselContent>
          {places.map((place) => {
            const categorySlug = fetchCategorySlugById(categoryId);
            return (
              <CarouselItem key={place.id}>
                <div>
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
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
