"use client";

import { useRouter } from "next/navigation";
import ErrorSection from "@/app/ui/ErrorSection";

interface Props {
  message: string;
}

export default function PopularPlacesErrorSection({ message }: Props) {
  const router = useRouter();

  const handleRetry = () => {
    router.refresh();
  };

  return <ErrorSection onRetry={handleRetry} message={message} />;
}
