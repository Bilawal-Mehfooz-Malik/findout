import { Button } from "../components/button";

type Props = {
  label: string;
  onClick?: () => void;
};

export default function OutlinedButton({ label, onClick }: Props) {
  return (
    <Button onClick={onClick} variant="outline">
      {label}
    </Button>
  );
}
