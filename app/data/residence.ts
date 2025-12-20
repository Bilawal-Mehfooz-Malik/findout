import { ListingType } from "@/app/lib/my-data-types";
import { BasePlace } from "./base-place";
import { Pricing } from "../(features)/[categorySlug]/domain/pricing";

export type Residence = BasePlace & {
  listing_type: ListingType;
  availability: boolean;
  pricing: Pricing;
  furnished?: boolean;
  wifi_available?: boolean;
  air_conditioning?: boolean;
  security_system?: boolean;
  tv?: boolean;
};
