import CategoryCard from "./CategoryCard";
import { CATEGORIES, CategoryId } from "@/app/data/categories";

export default function CategorySection() {
  // Get all the unique IDs for our categories (e.g., 'residences', 'foods').
  const categoryIds = Object.keys(CATEGORIES) as CategoryId[];

  // This part creates the list of <CategoryCard> components.
  const categoryCards = categoryIds.map((id) => {
    const details = CATEGORIES[id];
    return (
      <CategoryCard
        key={details.id}
        name={details.name}
        icon={details.icon}
        href={id}
      />
    );
  });

  // Render the list of cards inside a grid layout.
  return <div className="grid grid-cols-2 gap-4">{categoryCards}</div>;
}
