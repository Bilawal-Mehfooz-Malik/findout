import { notFound } from "next/navigation";
import { fetchPlaceBySlug } from "../../[categorySlug]/application/place.service";
import { fetchCategoryIdBySlug } from "../../data/categoy.repo";

export default async function Page({
  params,
}: {
  params: Promise<{
    placeSlug: string;
    categoryId: string;
  }>;
}) {
  const paramsData = await params;
  const categoryId = fetchCategoryIdBySlug(paramsData.categoryId);

  const place = await fetchPlaceBySlug({
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
