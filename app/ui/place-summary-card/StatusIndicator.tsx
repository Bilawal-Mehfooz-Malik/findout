import { OperationalStatus, PlaceId } from "@/app/lib/my-data-types";
import { hardcoded } from "../../lib/i18n";
import { getOpeningHoursByPlaceId } from "../../(features)/[categorySlug]/data/opening-hours.repo";
import ClientStatus from "./ClientStatus";
import { StatusBadge } from "./StatusBadge";

export type Props = {
  placeId: PlaceId;
  availability?: boolean;
  operationalStatus?: OperationalStatus;
};

export async function StatusIndicator({
  placeId,
  availability,
  operationalStatus,
}: Props) {
  if (!placeId) return null;

  // 1️⃣ Availability has absolute priority
  if (availability === true) {
    return <StatusBadge label={hardcoded("Available")} variant="success" />;
  }

  if (availability === false) {
    return <StatusBadge label={hardcoded("Unavailable")} variant="muted" />;
  }

  // 2️⃣ No availability → handle operational status
  if (operationalStatus === "default") {
    const { hours, slots } = await getOpeningHoursByPlaceId(placeId);
    return <ClientStatus hours={hours} slots={slots} />;
  }

  if (operationalStatus === "open") {
    return <StatusBadge label={hardcoded("Open")} variant="success" />;
  }

  if (operationalStatus === "closed") {
    return <StatusBadge label={hardcoded("Closed")} variant="error" />;
  }

  return null;
}
