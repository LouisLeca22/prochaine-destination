"use client"

import ScrollFloat from "@/components/ui/ScrollFloat"
import Separator from "@/components/ui/Separator"
import { useScopedI18n } from "@/locales/client"
import DomeGallery from "@/components//ui/DomeGallery"
import { motion, Variants } from "framer-motion"
import { InstagramIcon, FacebookIcon, YoutubeIcon, LinkedinIcon } from "lucide-react"

const images = [
    {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
        alt: "dessert"
    },
    {
        src: "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1034",
        alt: "modern"
    },
    {
        src: "https://images.unsplash.com/photo-1481988535861-271139e06469?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1190",
        alt: "sunset"
    },
    {
        src: "https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        alt: "museum"
    },
    {
        src: "https://images.unsplash.com/photo-1552686943-10abeb475c93?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331",
        alt: "sculpture"
    },
    {
        src: "https://images.unsplash.com/photo-1501619951397-5ba40d0f75da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176",
        alt: "sunset"
    },
    {
        src: "https://images.unsplash.com/photo-1573512443418-c6768862dda7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
        alt: "museum"
    },
    {
        src: "https://images.unsplash.com/photo-1503197979108-c824168d51a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1333",
        alt: "beach"
    },
    {
        src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        alt: "art"
    },
    {
        src: "https://images.unsplash.com/photo-1575883147621-d20c567ed5ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
        alt: "church"
    },
    {
        src: "https://images.unsplash.com/photo-1592656094267-764a45160876?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        alt: "beach volley"
    },
    {
        src: "https://images.unsplash.com/photo-1569227997603-33b9f12af927?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        alt: "architecture"
    },
    {
        src: "https://images.unsplash.com/photo-1496886077455-6e206da90837?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        alt: "skateboard"
    },
    {
        src: "https://images.unsplash.com/photo-1527314392553-2c7bded21b23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
        alt: "port"
    },
    {
        src: "https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
        alt: "forest"
    },
    {
        src: "https://images.unsplash.com/photo-1446038202205-1c96430dbdab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
        alt: "coast"
    },
    {
        src: "https://images.unsplash.com/photo-1604938814491-c696899ec59b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
        alt: "zen"
    },
    {
        src: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        alt: "sunset"
    },

]

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
        <section className="snap-start">
            <div className="sticky z-40 overflow-hidden  top-0 left-0 bg-background pt-20 md:pt-15  mb-10 md:mb-0 text-center flex flex-col items-center">
                <ScrollFloat
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    textClassName="text-3xl md:text-4xl font-josefin-sans font-bold text-cyan-500"
                >
                    {t("Heading")}
                </ScrollFloat>
                <Separator width="w-200" />
            </div>
            <div className=" flex md:w-[80vw] mx-auto flex-col md:flex-row">
                <div className="md:flex-1  flex justify-center items-center">
                    <motion.div
                        initial="hidden"
                        variants={containerVariants}
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }} className="flex flex-row md:flex-col gap-8"
                    >
                        <motion.a variants={iconVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }} href="http://instagram.com">
                            <InstagramIcon width={48} height={48} stroke="#06b6d4" />
                        </motion.a>
                        <motion.a variants={iconVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }} href="http://facebook.com">
                            <FacebookIcon width={48} height={48} stroke="#06b6d4" />
                        </motion.a>
                        <motion.a variants={iconVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }} href="http://youtube.com">
                            <YoutubeIcon width={48} height={48} stroke="#06b6d4" />
                        </motion.a>
                        <motion.a variants={iconVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }} href="http://linkedin.com">
                            <LinkedinIcon width={48} height={48} stroke="#06b6d4" />
                        </motion.a>
                    </motion.div>
                </div>
                <div className="md:flex-2 h-[75vh]">
                    <DomeGallery images={images} grayscale={false} overlayBlurColor="transparent" />
                </div>
            </div>
        </section>
    )
}
export default Social