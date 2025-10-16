"use client"

import ThemeToggler from "@/components/Menu/ThemeToggler"
import Sidebar from "@/components/Menu/Sidebar"
import GlobalSearch from "./GllobalSearch"
import { LanguageSwitcher } from "./LanguageSwitcher"

function Menu() {
    return (
        <div className="z-50 relative">
            <Sidebar />
            <ThemeToggler />
            <GlobalSearch />
            <LanguageSwitcher />
        </div>
    )
}
export default Menu