export type DayOfWeek =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

type Brand<K, T> = K & { readonly __brand: T };
export type GenderPreference = "male" | "female" | "any";
export type ApprovalStatus = "pending" | "approved" | "rejected";
export type OperationalStatus = "open" | "closed" | "default";
export type ListingType = "rent" | "sale";
export type PricingUnit = "person" | "room" | "unit";
export type PricingPeriod =
  | "oneTime"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly";

// ids
export type CategoryId = Brand<number, "CategoryId">;
export type SubCategoryId = Brand<number, "SubCategoryId">;
export type PlaceId = Brand<string, "PlaceId">;
export type OpeningHourId = Brand<number, "OpeningHourId">;
export type OpeningHourSlotId = Brand<number, "OpeningHourSlotId">;
export type UserId = Brand<string, "UserId">;

// constructors
export const CategoryId = (id: number) => id as CategoryId;
export const SubCategoryId = (id: number) => id as SubCategoryId;
export const PlaceId = (id: string) => id as PlaceId;
