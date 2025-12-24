import { Button } from "../components/button";
import { cn } from "@/app/lib/utils";

type Props = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export default function PrimaryButton({ label, onClick, className }: Props) {
  return (
    <Button
      onClick={onClick}
      size="lg"
      className={cn(
        "h-11 rounded-full px-6 text-[15px] font-semibold",
        className
      )}
    >
      {label}
    </Button>
  );
}
