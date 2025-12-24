import { Button } from "../components/button";
import { cn } from "@/app/lib/utils";

type TextButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export default function TextButton({
  label,
  onClick,
  className,
}: TextButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      size="lg"
      className={cn(
        "rounded-full px-6 font-medium text-[15px] h-11",
        className
      )}
    >
      {label}
    </Button>
  );
}
