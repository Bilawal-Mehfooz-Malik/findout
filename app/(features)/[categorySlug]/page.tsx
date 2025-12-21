import { notFound } from "next/navigation";
import CatgoriesAppBar from "./components/CategoriesAppBar";
import SubCategorySection from "./components/SubCategorySection";
import PlaceSummaryListSection from "./components/PlaceSummaryListSection";
import { fetchCategoryIdBySlug } from "../data/categoy.repo";

interface Props {
  categorySlug: string;
}

export default async function Page({ params }: { params: Promise<Props> }) {
  const categorySlug = (await params).categorySlug;
  const categoryId = fetchCategoryIdBySlug(categorySlug);

  if (!categoryId) notFound();

  return (
    <div className="w-[95%] mx-auto lg:w-6xl">
      <CatgoriesAppBar categoryId={categoryId} />
      <SubCategorySection categoryId={categoryId} />
      <PlaceSummaryListSection categoryId={categoryId} />
    </div>
  );
}
