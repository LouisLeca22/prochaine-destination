"use client"

import ThemeToggler from "@/components/Menu/ThemeToggler"
import Navigation from "@/components/Menu/Navigation"
import GlobalSearch from "./GllobalSearch"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { useEffect, useState } from "react"
import { HomeLink } from "./HomeLink"

function Menu() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight - 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (<div
        className={`z-50 fixed top-0 left-0 h-20 md:h-10 w-full transition-colors duration-500 ${scrolled ? "bg-background" : "bg-transparent"
            }`}
    >
        <Navigation />
        <ThemeToggler />
        <GlobalSearch />
        <LanguageSwitcher />
        <HomeLink />
    </div>
    )
}
export default Menu