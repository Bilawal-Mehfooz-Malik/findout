import { OperationalStatus, PlaceId } from "@/app/lib/my-data-types";
import { getStatusIndicator } from "../lib/status.formatter";
import { cn } from "../lib/utils";

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
  if (!placeId) {
    return null;
  }

  const status = await getStatusIndicator({
    placeId,
    availability,
    operationalStatus,
  });

  if (status.label === "Status unknown") {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-full px-2.5 py-1",
        "bg-white/70 backdrop-blur-md border border-white/40 shadow-sm",
        "dark:bg-black/50 dark:border-white/10"
      )}
    >
      <span
        className={cn(
          "inline-flex h-2 w-2 rounded-full border",
          status.variant === "success" && "bg-green-500 border-green-700",
          status.variant === "error" && "bg-red-500 border-red-700",
          status.variant === "muted" && "bg-zinc-400 border-zinc-600"
        )}
      />

      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
        {status.label}
      </span>
    </div>
  );
}
