"use client"

import { motion } from "framer-motion"
import FuzzyText from "@/components/ui/FuzzyText"
import { useScopedI18n } from "@/locales/client"

export default function NotFound() {
    const t = useScopedI18n("404")
    return (
        <div className="flex flex-col items-center justify-center h-screen font-josefin-sans">

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
            >
                <FuzzyText
                    baseIntensity={0.2}
                    enableHover={true}
                    fontSize={120}
                    hoverIntensity={1}
                    color="#06b6d4"
                >
                    404
                </FuzzyText>
            </motion.div>

            <motion.p
                className="text-xl mt-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                {t("notFound")}
            </motion.p>

            <motion.a
                href="/"
                className="relative mt-4 text-lg font-medium text-primary group transition-all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                {t("goHome")}
                <span
                    className="absolute -bottom-px left-1 w-full h-[5%] bg-secondary-foreground opacity-0 translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 -z-10"
                ></span>
            </motion.a>


        </div>
    )
}
