import { hardcoded } from "../lib/i18n";
import ErrorButton from "./ErrorButton";

interface Props {
  message: string;
  onRetry?: () => void;
}
export default function ErrorSection({ message, onRetry }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-6 rounded-xl bg-secondary/50 w-[95%] max-w-6xl mx-auto">
      <p className="text-muted-foreground font-medium mb-4 text-center max-w-[250px]">
        {message}
      </p>

      <ErrorButton onClick={onRetry} label={hardcoded("Try Again")} />
    </div>
  );
}
