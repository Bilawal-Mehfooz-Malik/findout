import { notFound } from "next/navigation";
import CatgoriesAppBar from "./components/CategoriesAppBar";
import SubCategorySection from "./components/SubCategorySection";
import PlaceListSection from "./components/PlaceListSection";
import { fetchCategoryIdBySlug } from "../data/categoy.repo";

export default async function Page({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const categorySlug = (await params).categorySlug;
  const categoryId = fetchCategoryIdBySlug(categorySlug);

  if (!categoryId) notFound();

  return (
    <div>
      <CatgoriesAppBar categoryId={categoryId} />
      <SubCategorySection categoryId={categoryId} />
      <PlaceListSection categoryId={categoryId} />
    </div>
  );
}
