import { Button } from "../components/button";

type Props = {
  label: string;
  onClick?: () => void;
};

export default function PrimaryButton({ label, onClick }: Props) {
  return <Button onClick={onClick}>{label}</Button>;
}
