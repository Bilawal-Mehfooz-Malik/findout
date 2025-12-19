import {
  ApprovalStatus,
  CategoryId,
  GenderPreference,
  OperationalStatus,
  PlaceId,
  SubCategoryId,
  UserId,
} from "@/app/lib/my-data-types";

export type BasePlace = {
  id: PlaceId;
  slug: string;
  category_id: CategoryId;
  sub_category_id: SubCategoryId;
  owner_id: UserId;
  name: string;
  description: string;
  country: string;
  city: string;
  street_address: string;
  latitude: number;
  longitude: number;
  gender_preference: GenderPreference;
  operational_status: OperationalStatus;
  approval_status: ApprovalStatus;
  cover_image: string;
  gallery_images: string[];
  avg_rating: number;
  review_count: number;
  is_featured: boolean;
  phone_number?: string;
  website_url?: string;
  email?: string;
  facebook_url?: string;
  instagram_url?: string;
  tiktok_url?: string;
  whatsapp_number?: string;
  updated_at: Date;
  created_at: Date;
};
