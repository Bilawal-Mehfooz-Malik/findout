import { OperationalStatus, PlaceId } from "@/app/lib/my-data-types";
import { StatusIndicator } from "../(features)/[categorySlug]/domain/status-indicator";
import { hardcoded } from "./i18n";
import { getOpeningHoursByPlaceId } from "../(features)/[categorySlug]/data/opening-hours.repo";
import { StatusFormatterClient } from "../ui/client-status.formatter";

type Params = {
  placeId: PlaceId;
  availability?: boolean;
  operationalStatus?: OperationalStatus;
};

export async function getStatusIndicator({
  placeId,
  availability,
  operationalStatus,
}: Params): Promise<StatusIndicator | null> {
  if (availability === false) {
    return {
      label: hardcoded("Unavailable"),
      variant: "muted",
    };
  }

  if (availability === true) {
    return {
      label: hardcoded("Available"),
      variant: "success",
    };
  }

  switch (operationalStatus) {
    case "open":
      return {
        label: hardcoded("Open"),
        variant: "success",
      };

    case "closed":
      return {
        label: hardcoded("Closed"),
        variant: "error",
      };

    case "default":
      const { hours, slots } = await getOpeningHoursByPlaceId(placeId);
      return StatusFormatterClient({ hours, slots });

    default:
      return null;
  }
}
