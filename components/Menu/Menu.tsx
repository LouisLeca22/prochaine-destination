"use client"

import { useEffect, useState } from "react"
import ThemeToggler from "@/components/Menu/ThemeToggler"
import Navigation from "@/components/Menu/Navigation"
import GlobalSearch from "./GllobalSearch"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { HomeLink } from "./HomeLink"
import { usePathname } from "next/navigation";


export default function Menu() {
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname();

    const isHome = pathname === "/fr" || pathname === "/en"


    useEffect(() => {
        if (isHome) return

        const handleScroll = () => setScrolled(window.scrollY > 250)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div
            className={`fixed top-0 left-0  w-full h-25 flex items-center justify-between  transition-all duration-500 z-80 ${scrolled
                ? "bg-background/95  shadow-lg"
                : "bg-transparent"
                }`}
        >
            <HomeLink />
            <Navigation />
            <GlobalSearch />
            <LanguageSwitcher />
            <ThemeToggler />
        </div>
    )
}
