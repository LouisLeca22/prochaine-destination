"use client"

import HeaderSlider from "@/components/ui/HeaderSlider"
import { activities } from "@/data"
import { useScopedI18n } from "@/locales/client"
import { selectItemsByIds } from "@/utils"
import { motion } from "framer-motion"
import { useMemo } from "react"

function CouplePage() {
    const t1 = useScopedI18n("Couple")
    const t2 = useScopedI18n("Components")
    const headerImages = [
        "https://images.pexels.com/photos/415351/pexels-photo-415351.jpeg",
        "https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1489094889106-39069373d6ef?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1513279922550-250c2129b13a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    const allActivities = useMemo(() => activities, [])

    const top3 = selectItemsByIds(allActivities, [1, 4, 26])

    const itineraries = [
        {
            title: t1("itiOneTitle"),
            image: "https://images.unsplash.com/photo-1536953705238-a34098616ed1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            steps: [
                {

                    title: t1("itiOneStepOneTitle"),
                    description: t1("itiOneStepOneDescription")
                },
                {

                    title: t1("itiOneStepTwoTitle"),
                    description: t1("itiOneStepTwoDescription")
                },
                {

                    title: t1("itiOneStepThreeTitle"),
                    description: t1("itiOneStepThreeDescription")
                }
            ]
        },
        {
            title: t1("itiTwoTitle"),
            image: "https://images.unsplash.com/photo-1611601184963-9d1de9b79ff3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            steps: [
                {

                    title: t1("itiTwoStepOneTitle"),
                    description: t1("itiTwoStepOneDescription")
                },
                {

                    title: t1("itiTwoStepTwoTitle"),
                    description: t1("itiTwoStepTwoDescription")
                },
                {

                    title: t1("itiTwoStepThreeTitle"),
                    description: t1("itiTwoStepThreeDescription")
                }
            ]
        },
        {
            title: t1("itiThreeTitle"),
            image: "https://images.unsplash.com/photo-1611601184963-9d1de9b79ff3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            steps: [
                {

                    title: t1("itiThreeStepOneTitle"),
                    description: t1("itiThreeStepOneDescription")
                },
                {

                    title: t1("itiThreeStepTwoTitle"),
                    description: t1("itiThreeStepTwoDescription")
                },
                {

                    title: t1("itiThreeStepThreeTitle"),
                    description: t1("itiThreeStepThreeDescription")
                }
            ]
        }

    ]

    const agendaItems = [
        {
            title: t1("agendaOne"),
            image: "https://images.pexels.com/photos/4695765/pexels-photo-4695765.jpeg"
        },
        {
            title: t1("agendaTwo"),
            image: "https://images.unsplash.com/photo-1510673398445-94f476ef2cbc?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("agendaThree"),
            image: "https://images.pexels.com/photos/391213/pexels-photo-391213.jpeg"
        }
    ]

    const offers = [
        {
            title: t1("offerOneTitle"),
            description: t1("offerOneDescription"),
            image: "https://images.unsplash.com/photo-1488345979593-09db0f85545f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwYXxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            title: t1("offerTwoTitle"),
            description: t1("offerTwoDescription"),
            image: "https://images.pexels.com/photos/6579304/pexels-photo-6579304.jpeg"
        }
    ]

    const sunsets = [
        {
            title: t1("sunsetOne"),
            image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("sunsetTwo"),
            image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3Vuc2V0fGVufDB8fDB8fHww"
        },
        {
            title: t1("sunsetThree"),
            image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("sunsetFour"),
            image: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("sunsetFive"),
            image: "http://images.unsplash.com/photo-1501898047706-55903296cd09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            title: t1("sunsetSix"),
            image: "https://images.unsplash.com/photo-1536890274788-51861e124205?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    const ambiances = [
        {
            title: t1("ambianceOneTitle"),
            description: t1("ambianceOneDescription"),
            image: "https://images.unsplash.com/photo-1481988535861-271139e06469?q=80&w=890&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("ambianceTwoTitle"),
            description: t1("ambianceTwoDescription"),
            image: "https://images.pexels.com/photos/31096134/pexels-photo-31096134.jpeg"
        },
        {
            title: t1("ambianceThreeTitle"),
            description: t1("ambianceThreeDescription"),
            image: "https://images.unsplash.com/photo-1761040396461-35a4c34153f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJvbWFudGljJTIwZ2FyZGVufGVufDB8fDB8fHww"
        },

    ]

    const stories = [
        {
            title: t1("storyThreeTitle"),
            description: t1("storyThreeDescription"),
            image: "https://images.pexels.com/photos/1174958/pexels-photo-1174958.jpeg"
        },
        {
            title: t1("storyTwoTitle"),
            description: t1("storyTwoDescription"),
            image: "https://images.unsplash.com/photo-1658303033408-ff2a7e39a554?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        ,
        {
            title: t1("storyThreeTitle"),
            description: t1("storyThreeDescription"),
            image: "https://images.unsplash.com/photo-1670786056253-03def3bf8e3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvdmUlMjBsZXR0ZXJ8ZW58MHx8MHx8fDA%3D"
        }
    ]

    const carnet = [
        {
            title: t1("itemOneTitle"),
            description: t1("itemOneDescription"),
            image: "https://images.pexels.com/photos/1567069/pexels-photo-1567069.jpeg"
        },
        {
            title: t1("itemTwoTitle"),
            description: t1("itemTwoDescription"),
            image: "https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg"
        },
        {
            title: t1("itemThreeTitle"),
            description: t1("itemThreeDescription"),
            image: "https://images.unsplash.com/photo-1684920743721-8c2851d12d27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhcnQlMjBzYW5kfGVufDB8fDB8fHww"
        },
        {
            title: t1("itemFourTitle"),
            description: t1("itemFourDescription"),
            image: "https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("itemFiveTitle"),
            description: t1("itemFiveDescription"),
            image: "https://images.pexels.com/photos/6579082/pexels-photo-6579082.jpeg"
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