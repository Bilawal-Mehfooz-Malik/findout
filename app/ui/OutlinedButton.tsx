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
      className={cn("rounded-xl px-6 text-[15px] font-medium h-11", className)}
    >
      {label}
    </Button>
  );
}
