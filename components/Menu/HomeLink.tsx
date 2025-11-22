"use client"

import { Home } from "lucide-react"
import { motion } from "framer-motion"

export const HomeLink = () => {

    return (
        <div className="fixed top-5 left-85 z-50">

            <motion.a
                href="/"
                className="bg-secondary p-4 rounded-full flex items-center justify-center"
                whileTap={{ scale: 0.9 }}
                whileHover={{ rotate: 15 }}
                transition={{ type: 'spring', stiffness: 300 }}
                aria-label="Changer de langues"
            >
                <Home size={20} className="text-primary-foreground" />
            </motion.a>
        </div>
    )

}

