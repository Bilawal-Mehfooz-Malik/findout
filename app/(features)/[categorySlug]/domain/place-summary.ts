import { CategoryId, PlaceId } from "@/app/lib/my-data-types";

export type PlaceSummary = {
  id: PlaceId;
  slug: string;
  categoryId: CategoryId;
  name: string;
  city: string;
  streetAddress: string;
  coverImageUrl: string;
  avgRating: number;
  reviewCount: number;
};

export function mapPlaceSummary(place: any): PlaceSummary {
  return {
    id: place.id,
    slug: place.slug,
    categoryId: place.category_id,
    name: place.name,
    city: place.city,
    streetAddress: place.street_address,
    coverImageUrl: place.cover_image,
    avgRating: place.avg_rating,
    reviewCount: place.review_count,
  };
}
