import { MenuIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "./ui/dropdown-menu"
import { SideBar } from "./home/side-bar"

export const Menu = () => {
    return <DropdownMenu>
        <DropdownMenuTrigger>
            <MenuIcon/>
        </DropdownMenuTrigger>
        <DropdownMenuContent asChild>
            <SideBar/>
        </DropdownMenuContent>
    </DropdownMenu>
}