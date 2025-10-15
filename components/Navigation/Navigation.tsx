"use client"

import Sidebar from "./Sidebar"
import { useState } from "react";
import { useEffect } from "react";

function Navigation() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full h-25 z-50 transition-colors duration-500 ${isScrolled ? "bg-cyan-800/80 backdrop:blur-sm" : "bg-transparent"
                }`}
        >
            <Sidebar />
        </div>
    )
}
export default Navigation