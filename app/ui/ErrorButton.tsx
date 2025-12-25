import { Button } from "../components/button";
import { cn } from "@/app/lib/utils";

type Props = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export default function ErrorButton({ label, onClick, className }: Props) {
  return (
    <Button
      onClick={onClick}
      size="lg"
      variant="destructive"
      className={cn(
        "h-11 rounded-xl px-6 text-[15px] font-medium cursor-pointer",
        className
      )}
    >
      {label}
    </Button>
  );
}
