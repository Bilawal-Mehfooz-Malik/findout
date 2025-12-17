import { CATEGORIES, CategoryId } from "@/app/data/categories";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ categoryId: CategoryId }>;
}) {
  const id = (await params).categoryId;
  const category = CATEGORIES[id];
  
  if (!category) notFound();

  return <h1>{category.name}</h1>;
}
