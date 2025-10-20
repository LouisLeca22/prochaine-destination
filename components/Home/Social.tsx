"use client"

import ScrollFloat from "@/components/ui/ScrollFloat"
import Separator from "@/components/ui/Separator"
import { useScopedI18n } from "@/locales/client"
import DomeGallery from "@/components//ui/DomeGallery"
import { motion, Variants } from "framer-motion"

function Social() {
    const t = useScopedI18n("Home.Social")

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const iconVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, damping: 15 },
        },
    }

    return (
        <section className="snap-center">
            <div className="sticky z-40 overflow-hidden  top-0 left-0 bg-background pt-20 md:pt-15  mb-10 text-center flex flex-col items-center">
                <ScrollFloat
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    textClassName="text-5xl font-josefin-sans font-bold text-cyan-500"
                >
                    {t("Heading")}
                </ScrollFloat>
                <Separator width="w-200" />
            </div>
            <div className=" flex flex-col md:flex-row">
                <motion.div variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="md:flex-1 h-[5vh] md:h-screen flex justify-center items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }} className="flex  gap-8"
                    >
                        <motion.a variants={iconVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }} href="/">
                            <img src="images/social/instagram.png" alt="" />
                        </motion.a>
                        <motion.a variants={iconVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }} href="/">
                            <img src="images/social/facebook.png" alt="" />
                        </motion.a>
                        <motion.a variants={iconVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }} href="/">
                            <img src="images/social/youtube.png" alt="" />
                        </motion.a>

                    </motion.div>
                </motion.div>
                <div className="md:flex-2 h-screen">
                    <DomeGallery grayscale={false} overlayBlurColor="transparent" />
                </div>
            </div>
        </section>
    )
}
export default Social