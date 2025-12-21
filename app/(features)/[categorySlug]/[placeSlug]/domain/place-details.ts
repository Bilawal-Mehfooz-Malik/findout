import {
  ApprovalStatus,
  CategoryId,
  GenderPreference,
  OperationalStatus,
  PlaceId,
  SubCategoryId,
  UserId,
} from "@/app/lib/my-data-types";

export type PlaceDetails = {
  id: PlaceId;
  slug: string;
  categoryId: CategoryId;
  subCategoryId: SubCategoryId;
  ownerId: UserId;
  name: string;
  description: string;
  country: string;
  city: string;
  street_address: string;
  latitude: number;
  longitude: number;
  genderPreference: GenderPreference;
  operationalStatus: OperationalStatus;
  approvalStatus: ApprovalStatus;
  coverImage: string;
  galleryImages: string[];
  avgRating: number;
  reviewCount: number;
  isFeatured: boolean;
  phoneNumber?: string;
  websiteUrl?: string;
  email?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  whatsappNumber?: string;
  updatedAt: Date;
  createdAt: Date;
};

export function mapPlaceDetails(place: any): PlaceDetails {
  return {
    id: place.id,
    slug: place.slug,
    categoryId: place.category_id,
    subCategoryId: place.sub_category_id,
    ownerId: place.owner_id,
    name: place.name,
    description: place.description,
    country: place.country,
    city: place.city,
    street_address: place.street_address,
    latitude: place.latitude,
    longitude: place.longitude,
    genderPreference: place.gender_preference,
    operationalStatus: place.operational_status,
    approvalStatus: place.approval_status,
    coverImage: place.cover_image,
    galleryImages: place.gallery_images,
    avgRating: place.avg_rating,
    reviewCount: place.review_count,
    isFeatured: place.is_featured,
    phoneNumber: place.phone_number,
    websiteUrl: place.website_url,
    email: place.email,
    facebookUrl: place.facebook_url,
    instagramUrl: place.instagram_url,
    tiktokUrl: place.tiktok_url,
    whatsappNumber: place.whatsapp_number,
    updatedAt: place.updated_at,
    createdAt: place.created_at,
  };
}
