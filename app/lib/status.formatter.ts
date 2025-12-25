import {
  isPlaceCurrentlyOpen,
} from "../(features)/[categorySlug]/[placeSlug]/application/opening-hours.service";
import { OperationalStatus, PlaceId } from "@/app/lib/my-data-types";
import { StatusIndicator } from "../(features)/[categorySlug]/domain/status-indicator";
import { hardcoded } from "./i18n";

type Params = {
  placeId: PlaceId;
  availability?: boolean;
  operationalStatus?: OperationalStatus;
};

export async function getStatusIndicator({
  placeId,
  availability,
  operationalStatus,
}: Params): Promise<StatusIndicator> {
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
      const isOpen = await isPlaceCurrentlyOpen(placeId);
      return {
        label: hardcoded(isOpen ? "Open" : "Closed"),
        variant: isOpen ? "success" : "error",
      };

    default:
      return {
        label: hardcoded("Status unknown"),
        variant: "muted",
      };
  }
}
