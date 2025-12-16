import CategoryCard from "./CategoryCard";
import { homeCategories } from "@/app/data/categories";

export default function CategorySection() {
    const categories = homeCategories;
    return <>
        {
            categories.map((c) => <CategoryCard key={c.id} name={c.name} icon={c.icon} href={c.href} />)
        }
    </>;
}