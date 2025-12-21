import { ListingType } from "@/app/lib/my-data-types";
import { mapPlaceDetails, PlaceDetails } from "./place-details";
import { mapPricing, Pricing } from "../../domain/pricing";

export type ResidenceDetails = PlaceDetails & {
  listing_type: ListingType;
  availability: boolean;
  pricing: Pricing;
  furnished?: boolean;
  wifiAvailable?: boolean;
  airConditioning?: boolean;
  securitySystem?: boolean;
  tv?: boolean;
};

export function mapResidenceDetails(
  residence: any,
  pricing: any
): ResidenceDetails {
  return {
    ...mapPlaceDetails(residence),
    listing_type: residence.listing_type,
    availability: residence.availability,
    pricing: mapPricing(pricing),
    furnished: residence.furnished,
    wifiAvailable: residence.wifi_available,
    airConditioning: residence.air_conditioning,
    securitySystem: residence.security_system,
    tv: residence.tv,
  };
}
