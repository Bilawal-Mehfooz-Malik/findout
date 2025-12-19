import { getCategoryBySlug } from "@/app/lib/categories";
import { notFound } from "next/navigation";
import CatgoriesAppBar from "./components/CategoriesAppBar";
import SubCategorySection from "./components/SubCategorySection";
import PlaceListSection from "./components/PlaceListSection";

export default async function Page({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const categorySlug = (await params).categoryId;
  const category = getCategoryBySlug(categorySlug);

  if (!category) notFound();

  return (
    <div>
      <CatgoriesAppBar categoryId={category.id} />
      <SubCategorySection categoryId={category.id} />
      <PlaceListSection categoryId={category.id} />
    </div>
  );
}
