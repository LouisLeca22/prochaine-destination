"use client"

import HeaderSlider from "@/components/ui/HeaderSlider"
import { useScopedI18n } from "@/locales/client"
import { motion } from "framer-motion"

function CouplePage() {
    const t1 = useScopedI18n("Couple")
    const t2 = useScopedI18n("Components")
    const headerImages = [
        "https://images.pexels.com/photos/415351/pexels-photo-415351.jpeg",
        "https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1489094889106-39069373d6ef?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1513279922550-250c2129b13a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
    return (
        <>
            <header>
                <HeaderSlider heading={t1("heading")} images={headerImages} />
                <motion.div
                    className="mt-20 flex max-w-xl mx-auto flex-col justify-center items-center text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p className="text-2xl">{t1("description")}</p>

                </motion.div>
            </header>
        </>
    )
}
export default CouplePage