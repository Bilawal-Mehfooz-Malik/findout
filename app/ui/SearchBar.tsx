import { hardcoded } from "@/app/lib/i18n";
import { SearchIcon } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "../components/input-group";

type Props = {
    hintText: string;
}

export default function SearchBar({ hintText }: Props) {
    return (
        <InputGroup className="h-12 p-2">
            <InputGroupInput className="text-base! pl-4!" placeholder={hintText} />
            <InputGroupAddon>
                <SearchIcon className="h-4.5! w-4.5!"/>
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
                <InputGroupButton className="h-10 text-base">{hardcoded("Search")}</InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    );
}
