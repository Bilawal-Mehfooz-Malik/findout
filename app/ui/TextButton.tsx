import { Button } from "../components/button";

type TextButtonProps = {
  label: string;
};

export default function TextButton({ label }: TextButtonProps) {
  return <Button variant="ghost">{label}</Button>;
}
