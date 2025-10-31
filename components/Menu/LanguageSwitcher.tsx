"use client"

import { useChangeLocale, useCurrentLocale } from "@/locales/client"
import { LanguagesIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import FrFlag from "@/public/icons/france.svg"
import EnFlag from "@/public/icons/uk.svg"
import Image from "next/image"

export const LanguageSwitcher = () => {
    const locale = useCurrentLocale()
    const changeLocale = useChangeLocale()
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null) // ref du wrapper

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div ref={containerRef} className="fixed top-5 left-65 ">

            <motion.button
                onClick={() => setOpen(!open)}
                className="bg-secondary p-5 rounded-full flex items-center justify-center"
                whileTap={{ scale: 0.9 }}
                whileHover={{ rotate: 15 }}
                transition={{ type: 'spring', stiffness: 300 }}
                aria-label="Changer de langues"
            >
                <LanguagesIcon size={20} className="text-primary-foreground" />
            </motion.button>


            {open && (
                <div className="flex -translate-x-1/3 items-center gap-4 mt-2 p-2">
                    <motion.button onClick={() => changeLocale("fr")}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Image className={`${locale === "fr" && "outline-4 rounded-full outline-cyan-700 shadow-lg"}`} src={FrFlag} alt="Fr flag" width={40} />
                    </motion.button>
                    <motion.button onClick={() => changeLocale("en")}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Image className={`${locale === "en" && "outline-4 rounded-full outline-cyan-700 shadow-lg"}`} src={EnFlag} alt="En flag" width={40} />
                    </motion.button>
                </div>
            )}
        </div>
    )

}

