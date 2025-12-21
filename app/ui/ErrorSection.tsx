"use client";

import { Button } from "../components/button";
import { hardcoded } from "../lib/i18n";

interface Props {
  message: string;
  onRetry?: () => void;
}

export default function ErrorSection({ message, onRetry }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 border rounded-md bg-red-50 text-red-700">
      <p className="text-center text-lg font-medium">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline">
          {hardcoded("Retry")}
        </Button>
      )}
    </div>
  );
}
