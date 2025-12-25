"use client";

import { useEffect } from "react";
import { hardcoded } from "../lib/i18n";
import { Button } from "@/app/components/button";
import { Card, CardContent } from "@/app/components/card";
import { AlertTriangle } from "lucide-react";
import { cn } from "../lib/utils";
import ErrorButton from "../ui/ErrorButton";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[100vh] items-center justify-center px-4 py-4">
      <Card className={cn("w-full max-w-md animate-in fade-in zoom-in-95")}>
        <CardContent
          className={cn("flex flex-col items-center gap-6 p-8 text-center")}
        >
          {/* Icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className={cn("h-7 w-7 text-destructive")} />
          </div>

          {/* Text */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              {hardcoded("Something went wrong")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {hardcoded(
                "An unexpected error occurred. Please try again or come back later."
              )}
            </p>
          </div>

          {/* Action */}
          <ErrorButton label={hardcoded("Try Again")} onClick={reset} />
        </CardContent>
      </Card>
    </div>
  );
}
