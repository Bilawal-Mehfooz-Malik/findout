import { MyCarousel } from "@/app/ui/MyCarousel";
import { CategoryId } from "@/app/lib/my-data-types";
import { PlaceSummaryCardSkeleton } from "@/app/ui/place-summary-card/PlaceSummaryCardSkeleton";

interface Props {
  categoryId: CategoryId;
}

export function PlacesCarouselSkeleton({ categoryId }: Props) {
  return (
    <MyCarousel>
      {Array.from({ length: 4 }).map((_, i) => (
        <PlaceSummaryCardSkeleton key={i} categoryId={categoryId} />
      ))}
    </MyCarousel>
  );
}
