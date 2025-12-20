import { notFound } from "next/navigation";
import { fetchPlaceBySlug } from "../application/place.service";
import { getCategoryIdBySlug } from "@/app/lib/categories";

export default async function Page({
  params,
}: {
  params: Promise<{
    placeSlug: string;
    categoryId: string;
  }>;
}) {
  const paramsData = await params;
  const categoryId = getCategoryIdBySlug(paramsData.categoryId);

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
