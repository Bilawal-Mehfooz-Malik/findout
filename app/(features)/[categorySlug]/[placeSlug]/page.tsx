import { notFound } from "next/navigation";
import { fetchPlaceBySlug } from "../application/place.service";
import { fetchCategoryIdBySlug } from "../../data/categoy.repo";

export default async function Page({
  params,
}: {
  params: Promise<{
    placeSlug: string;
    categorySlug: string;
  }>;
}) {
  const paramsData = await params;
  const categoryId = fetchCategoryIdBySlug(paramsData.categorySlug);

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
