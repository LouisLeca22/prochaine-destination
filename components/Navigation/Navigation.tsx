"use client"

import ThemeToggler from "@/components/ThemeToggler"
import Sidebar from "@/components/Navigation/Sidebar"

function Navigation() {
    return (
        <div className="z-50 relative">
            <Sidebar />
            <ThemeToggler />

        </div>
    )
}
export default Navigation