import { notFound } from "next/navigation";
import { fetchCategoryIdBySlug } from "../../data/categoy.repo";
import { fetchPlaceDetailsBySlug } from "./application/place-details.service";

interface Props {
  placeSlug: string;
  categorySlug: string;
}

export default async function Page({ params }: { params: Promise<Props> }) {
  const paramsData = await params;
  const categoryId = fetchCategoryIdBySlug(paramsData.categorySlug);

  const place = await fetchPlaceDetailsBySlug({
    categoryId: categoryId,
    placeSlug: paramsData.placeSlug,
  });

  if (!place) notFound();

  return (
    <div>
      <p>{place.name}</p>
    </div>
  );
}
