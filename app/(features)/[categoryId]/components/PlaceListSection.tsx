import { fetchPlaceList } from "../application/place.service";
import { CategoryId } from "@/app/lib/my-data-types";
import { PlaceCard } from "./PlaceCard";
import getPlaceType from "@/app/lib/place-type";
import { hardcoded } from "@/app/lib/i18n";

interface Props {
  categoryId: CategoryId;
}

export default async function PlaceListSection({ categoryId }: Props) {
  const places = await fetchPlaceList({ categoryId });

  if (!places || places.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        {hardcoded("No places found in this category.")}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {places.map((place: any) => (
        <PlaceCard
          key={place.id}
          name={place.name}
          coverImageUrl={place.coverImageUrl}
          cityName={place.city}
          streetAddress={place.streetAddress}
          avgRating={place.avgRating}
          ratingCount={place.reviewCount}
          pricing={place.pricing}
        />
      ))}
    </div>
  );
}
