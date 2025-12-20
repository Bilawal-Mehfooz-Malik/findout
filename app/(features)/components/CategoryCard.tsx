import { Card, CardHeader, CardTitle } from "@/app/components/card";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  name: string;
  icon: LucideIcon;
  href: string;
};

export default function CategoryCard({ icon: Icon, name, href }: Props) {
  return (
    <Link href={`/${href}`}>
      <Card>
        <CardHeader className="flex flex-col items-center gap-2">
          <Icon />
          <CardTitle>{name}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
