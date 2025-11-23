"use client"

import HeaderSlider from "@/components/ui/HeaderSlider"
import { activities } from "@/data"
import { useScopedI18n } from "@/locales/client"
import { selectItemsByIds } from "@/utils"
import { motion } from "framer-motion"
import { useMemo } from "react"

function AdventurePage() {
    const t1 = useScopedI18n("Adventure")
    const t2 = useScopedI18n("Components")
    const headerImages = [
        "https://images.unsplash.com/photo-1590053404184-ce4ee04f3d58?q=80&w=808&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1501389446297-06c4c50b5ee8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]


    const allActivities = useMemo(() => activities, [])

    const top3 = selectItemsByIds(allActivities, [1, 23, 24])

    const micro = [
        {
            title: t1("microOneTitle"),
            description: t1("microOneDescription"),
            image: "https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg"
        }, {
            title: t1("microTwoTitle"),
            description: t1("microTwoDescription"),
            image: "https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg"
        }
    ]

    const spots = [
        {
            title: t1("spotOne"),
            image: "https://images.unsplash.com/photo-1590089349708-9842d3f6ca25?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("spotTwo"),
            image: "https://images.pexels.com/photos/794579/pexels-photo-794579.jpeg"
        },
        {
            title: t1("spotThree"),
            image: "https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg"
        },
        {
            title: t1("spotFour"),
            image: "https://images.unsplash.com/photo-1718713763106-635423803396?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlbHYlQzMlQTlkJUMzJUE4cmV8ZW58MHx8MHx8fDA%3D"
        },
        {
            title: t1("spotFive"),
            image: "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

    const challenges = [
        {
            title: t1("challengeOneTitle"),
            description: t1("challengeOneDescription"),
            image: "https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg"
        },
        {
            title: t1("challengeTwoTitle"),
            description: t1("challengeTwoDescription"),
            image: "https://images.pexels.com/photos/840667/pexels-photo-840667.jpeg"
        },
        {
            title: t1("challengeThreeTitle"),
            description: t1("challengeThreeDescription"),
            image: "https://images.pexels.com/photos/939729/pexels-photo-939729.jpeg"
        }
    ]

    const targets = [
        {
            title: t1("targetOneTitle"),
            description: t1("targetOneDescription"),
            image: "https://images.pexels.com/photos/165505/pexels-photo-165505.jpeg"
        },
        {
            title: t1("targetTwoTitle"),
            description: t1("targetTwoDescription"),
            image: "https://images.unsplash.com/photo-1641761327166-0c1a0dd04b56?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("targetThreeTitle"),
            description: t1("targetThreeDescription"),
            image: "https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg"
        },
        {
            title: t1("targetFourTitle"),
            description: t1("targetFourDescription"),
            image: "https://images.unsplash.com/photo-1490984792589-bc12fe270585?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZyZWVkb218ZW58MHx8MHx8fDA%3D"
        }
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
export default AdventurePage