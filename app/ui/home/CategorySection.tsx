import CategoryCard from "./CategoryCard";
import { homeCategories } from "@/app/data/categories";

export default function CategorySection() {
    const categories = homeCategories;

    return (
        <div className="grid grid-cols-2 gap-4">
            {categories.map((c) => (
                <CategoryCard
                    key={c.id}
                    name={c.name}
                    icon={c.icon}
                    href={c.href}
                />
            ))}
        </div>
    );
}
