import CategoryCard from "./CategoryCard";
import { getCategories } from "@/app/lib/categories";

export default function CategorySection() {
  const categories = getCategories();
  // This part creates the list of <CategoryCard> components.
  const categoryCards = categories.map((category) => {
    return (
      <CategoryCard
        key={category.id}
        name={category.name}
        icon={category.icon}
        href={category.slug}
      />
    );
  });

  // Render the list of cards inside a grid layout.
  return <div className="grid grid-cols-2 gap-4">{categoryCards}</div>;
}
