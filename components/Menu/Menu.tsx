"use client"

import ThemeToggler from "@/components/Menu/ThemeToggler"
import Navigation from "@/components/Menu/Navigation"
import GlobalSearch from "./GllobalSearch"
import { LanguageSwitcher } from "./LanguageSwitcher"

function Menu() {
    return (
        <div className="z-50 relative">
            <Navigation />
            <ThemeToggler />
            <GlobalSearch />
            <LanguageSwitcher />
        </div>
    )
}
export default Menu