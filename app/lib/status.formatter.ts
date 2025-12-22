import { OperationalStatus } from "@/app/lib/my-data-types";
import { StatusIndicator } from "../(features)/[categorySlug]/domain/status-indicator";
import { hardcoded } from "./i18n";

type Params = {
  availability?: boolean;
  operationalStatus?: OperationalStatus;
};

export function getStatusIndicator({
  availability,
  operationalStatus,
}: Params): StatusIndicator {
  // 1️⃣ Explicitly unavailable
  if (availability === false) {
    return {
      label: hardcoded("Unavailable"),
      variant: "muted",
    };
  }

  // 2️⃣ Operational status
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

    default:
      return {
        label: hardcoded("Status unknown"),
        variant: "muted",
      };
  }
}
