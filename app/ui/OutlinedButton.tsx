import { Button } from "../components/button";

type OutlinedButtonProps = {
  label: string;
};

export default function OutlinedButton({ label }: OutlinedButtonProps) {
  return <Button variant="outline" >{label}</Button>;
}
