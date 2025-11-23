"use client"

import HeaderSlider from "@/components/ui/HeaderSlider"
import { useScopedI18n } from "@/locales/client"
import { motion } from "framer-motion"
import { Cloud, Eye, Flower, Palette, Pencil, Route, TreeDeciduous, Waves } from "lucide-react"

function CouplePage() {
    const t1 = useScopedI18n("Relax")
    const t2 = useScopedI18n("Components")
    const headerImages = [
        "https://images.unsplash.com/photo-1458501534264-7d326fa0ca04?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1500904156668-758cff89dcff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1483691278019-cb7253bee49f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1546440765-e7e3c881b5fe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    const squareImages = [
        "https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg",
        "https://images.pexels.com/photos/268134/pexels-photo-268134.jpeg",
        "https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg",
        "https://images.pexels.com/photos/1548769/pexels-photo-1548769.jpeg"
    ]

    const benefits = [
        {
            title: t1("benefitLiOne"),
            description: t1("benefitOneDescription"),
            image: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg"
        },
        {
            title: t1("benefitTwo"),
            description: t1("benefitTwoDescription"),
            image: "https://images.pexels.com/photos/1494639/pexels-photo-1494639.jpeg"
        },
        {
            title: t1("benefitThree"),
            description: t1("benefitThreeDescription"),
            image: "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg"
        },
    ]

    const experiences = [
        {
            title: t1("spaTitle"),
            description: t1("spaDescription"),
            image: "https://images.unsplash.com/photo-1488345979593-09db0f85545f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("accommodationTitle"),
            description: t1("accommodationDescription"),
            image: "https://images.pexels.com/photos/5390056/pexels-photo-5390056.jpeg"
        },
        {
            title: t1("activityTitle"),
            description: t1("activityDescription"),
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

    const stays = [
        {
            title: t1("stayOneTitle"),
            description: t1("stayOneDescription"),
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("stayTwoTitle"),
            description: t1("stayTwoDescription"),
            image: "https://images.unsplash.com/photo-1649751295468-953038600bef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("stayThreeTitle"),
            description: t1("stayThreeDescription"),
            image: "https://images.unsplash.com/photo-1554332208-9dfebcc48334?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

    const weather = [
        {
            title: t1("weatherOneTitle"),
            description: t1("weatherOneDescription"),
            image: "https://images.pexels.com/photos/163255/sunrise-sun-morgenrot-skies-163255.jpeg",
        },
        {
            title: t1("weatherTwoTitle"),
            description: t1("weatherTwoDescription"),
            image: "https://images.pexels.com/photos/269110/pexels-photo-269110.jpeg"
        },
        {
            title: t1("weatherThreeTitle"),
            description: t1("weatherThreeDescription"),
            image: "https://images.pexels.com/photos/6035/healthy-apple-summer-garden.jpg"
        },
        {
            title: t1("weatherFourTitle"),
            description: t1("weatherFourDescription"),
            image: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

    const gestures = [
        {

            title: t1("gestureOne"),
            image: "https://images.pexels.com/photos/532891/pexels-photo-532891.jpeg"
        },
        {

            title: t1("gestureTwo"),
            image: "https://images.unsplash.com/photo-1673568515106-f78ddee79f7d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("gestureThree"),
            image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg"
        },
        {
            title: t1("gestureFour"),
            image: "https://images.pexels.com/photos/846080/pexels-photo-846080.jpeg"
        },

    ]

    const terroir = [
        {
            title: t1("terroirOneTitle"),
            description: t1("terroirOneDescription"),
            image: "https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg"
        },
        {
            title: t1("terroirTwoTitle"),
            description: t1("terroirTwoDescription"),
            image: "https://images.unsplash.com/photo-1536953705238-a34098616ed1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    const art = [
        {
            title: t1("artOneTitle"),
            image: "https://images.unsplash.com/photo-1742294009985-a688e521f881?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("artTwoTitle"),
            image: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("artThreeTitle"),
            image: "https://images.unsplash.com/photo-1581342997031-2e763fc9a643?q=80&w=1042&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

    const moments = [
        {
            title: t1("momentOne"),
            icon: <Palette className="w-8 h-8 text-primary-foreground" />
        },
        {
            title: t1("momentTwo"),
            icon: <Pencil className="w-8 h-8 text-primary-foreground" />
        },
        {
            title: t1("momentThree"),
            icon: <Cloud className="w-8 h-8 text-primary-foreground" />
        },
        {
            title: t1("momentFour"),
            icon: <Flower className="w-8 h-8 text-primary-foreground" />
        },
        {
            title: t1("momentFive"),
            icon: <TreeDeciduous className="w-8 h-8 text-primary-foreground" />
        },
        {
            title: t1("momentSix"),
            icon: <Eye className="w-8 h-8 text-primary-foreground" />
        },
        {
            title: t1("momentSeven"),
            icon: <Waves className="w-8 h-8 text-primary-foreground" />
        },
        {
            title: t1("momentEight"),
            icon: <Route className="w-8 h-8 text-primary-foreground" />
        },
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