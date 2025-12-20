import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/card";

import Image from "next/image";
import { Pricing } from "../domain/pricing";
import Link from "next/link";

interface Props {
  name: string;
  categorySlug: string;
  slug: string;
  coverImageUrl: string;
  cityName: string;
  streetAddress: string;
  avgRating: number;
  ratingCount: number;
  pricing?: Pricing;
  //   availability?: boolean;
}

export function PlaceCard({
  name,
  slug,
  categorySlug,
  coverImageUrl,
  cityName,
  streetAddress,
  avgRating,
  ratingCount,
  pricing,
}: Props) {
  return (
    <Link href={`/${categorySlug}/${slug}`}>
      <Card className="hover:shadow-lg transition-shadow duration-200">
        {coverImageUrl && (
          <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
            <Image
              fill
              src={coverImageUrl}
              alt={name}
              className="object-cover"
            />
          </div>
        )}
        <CardContent>
          <CardHeader>
            <CardTitle>{name}</CardTitle>
            <h4>
              {cityName}, {streetAddress}
            </h4>
            <p>
              {avgRating} ({ratingCount}) stars
            </p>
            {pricing && (
              <p>
                {pricing.cost} {pricing.period} {pricing.unit}
              </p>
            )}
          </CardHeader>
        </CardContent>
      </Card>
    </Link>
  );
}
