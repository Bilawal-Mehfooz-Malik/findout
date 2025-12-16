import { Button } from "../components/button";

type PrimaryButtonProps = {
  label: string;
};

export default function PrimaryButton({ label }: PrimaryButtonProps) {
  return <Button>{label}</Button>;
}
