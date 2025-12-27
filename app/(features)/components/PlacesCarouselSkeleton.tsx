import { MyCarousel } from "@/app/ui/MyCarousel";
import { CategoryId } from "@/app/lib/my-data-types";
import { PlaceSummaryCardSkeleton } from "@/app/ui/place-summary-card/PlaceSummaryCardSkeleton";

interface Props {
  categoryId: CategoryId;
  title: string;
}

export function PlacesCarouselSkeleton({ categoryId, title }: Props) {
  return (
    <div className="max-w-6xl mx-auto w-[95%]">
      <h2 className="text-xl font-bold">{title}</h2>

      <MyCarousel>
        {Array.from({ length: 4 }).map((_, i) => (
          <PlaceSummaryCardSkeleton key={i} categoryId={categoryId} />
        ))}
      </MyCarousel>
    </div>
  );
}
