import { Button } from "../components/button";
import { cn } from "@/app/lib/utils";

type Props = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export default function OutlinedButton({ label, onClick, className }: Props) {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      size="lg"
      className={cn(
        "rounded-full px-6 text-[15px] font-semibold h-11",
        className
      )}
    >
      {label}
    </Button>
  );
}
