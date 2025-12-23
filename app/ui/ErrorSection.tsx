"use client";

import { Button } from "../components/button";
import { hardcoded } from "../lib/i18n";
import { cn } from "../lib/utils";
import OutlinedButton from "./OutlinedButton";

interface Props {
  message: string;
  onRetry?: () => void;
}

export default function ErrorSection({ message, onRetry }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 p-6 border rounded-md bg-red-50 text-red-700 w-[95%] mx-auto max-w-6xl"
      )}
    >
      <p className={cn("text-center text-lg font-medium")}>{message}</p>
      {onRetry && (
        <OutlinedButton onClick={onRetry} label={hardcoded("Retry")} />
      )}
    </div>
  );
}
