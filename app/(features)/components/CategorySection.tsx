import { fetchCategoriesList } from "../data/categoy.repo";
import CategoryCard from "./CategoryCard";

export default function CategorySection() {
  const categories = fetchCategoriesList();
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
  return <div className="mt-4 grid grid-cols-2 gap-4">{categoryCards}</div>;
}
