import { hardcoded } from "@/app/lib/i18n";
import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../components/input-group";

type Props = {
  hintText: string;
};

export default function SearchBar({ hintText }: Props) {
  return (
    <InputGroup>
      <InputGroupInput placeholder={hintText} />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupButton>{hardcoded("Search")}</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
