"use client"

import ThemeToggler from "@/components/ThemeToggler"
import Sidebar from "@/components/Menu/Sidebar"

function Menu() {
    return (
        <div className="z-50 relative">
            <Sidebar />
            <ThemeToggler />

        </div>
    )
}
export default Menu