import { hardcoded } from "@/app/lib/i18n";
import { SearchIcon } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "../components/input-group";

export default function SearchBar() {
    return (
        <InputGroup>
            <InputGroupInput placeholder={hardcoded("Search for residences and resturants near you...")} />
            <InputGroupAddon>
                <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
                <InputGroupButton>{hardcoded("Search")}</InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    );
}
