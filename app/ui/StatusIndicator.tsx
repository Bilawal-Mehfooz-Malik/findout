import { OperationalStatus } from "@/app/lib/my-data-types";
import { getStatusIndicator } from "../lib/status.formatter";
import { cn } from "../lib/utils";

export type Props = {
  availability?: boolean;
  operationalStatus?: OperationalStatus;
};

export function StatusIndicator({ availability, operationalStatus }: Props) {
  const status = getStatusIndicator({
    availability,
    operationalStatus,
  });

  return (
    <div
      className={cn(
        "flex items-center gap-1 text-xs font-medium rounded-sm px-2 py-1 bg-background"
      )}
    >
      <span
        className={cn(
          "h-2 w-2 rounded-full",
          status.variant === "success" && "bg-green-500",
          status.variant === "error" && "bg-red-500",
          status.variant === "muted" && "bg-muted-foreground"
        )}
      />
      <span className={cn("text-muted-foreground")}>{status.label}</span>
    </div>
  );
}
