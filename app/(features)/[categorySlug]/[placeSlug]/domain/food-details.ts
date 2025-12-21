import { mapPlaceDetails, PlaceDetails } from "./place-details";

export type FoodDetails = PlaceDetails & {
  menu_Images: string[];
};

export function mapFoodDetails(food: FoodDetails): FoodDetails {
  return {
    ...mapPlaceDetails(food),
    menu_Images: food.menu_Images,
  };
}
