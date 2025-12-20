import { Badge } from "@/app/components/badge";

interface Props {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export function SubCategoryChip({ label, selected = false, onClick }: Props) {
  return (
    <Badge variant={selected ? "default" : "outline"} onClick={onClick}>
      {label}
    </Badge>
  );
}
