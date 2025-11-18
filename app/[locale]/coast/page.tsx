"use client"

import HeaderPolygon from "@/components/ui/HeaderPolygon"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import { useScopedI18n } from "@/locales/client"
import { motion } from "framer-motion"
import Image from "next/image"


function CoastPage() {
    const t1 = useScopedI18n("Coast")

    const headerImages = [
        "https://images.unsplash.com/photo-1495171081156-cc1209ddf6a0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1505896202-4fe971e982fa?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1500456759136-362ab38eec6d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    const hiking = [{
        title: t1("hikingOneTitle"),
        description: t1("hikingOneDescription"),
        tips: t1("hikingOneTips"),
        img: "https://images.unsplash.com/photo-1522679056866-8dbbc8774a9d?q=80&w=1247&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
        title: t1("hikingTwoTitle"),
        description: t1("hikingTwoDescription"),
        tips: t1("hikingTwoTips"),
        img: "https://images.unsplash.com/photo-1686861555991-fe7f69e32c71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, {
        title: t1("hikingThreeTitle"),
        description: t1("hikingThreeDescription"),
        tips: t1("hikingThreeTips"),
        img: "https://images.pexels.com/photos/27869485/pexels-photo-27869485.jpeg"
    }]

    return (
        <>
            <header>
                <HeaderPolygon heading={t1("heading")} images={headerImages} />
                <motion.div
                    className="mt-24 flex max-w-xl mx-auto flex-col justify-center items-center text-center gap-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p className="text-2xl">{t1("description")}</p>
                </motion.div>
            </header>

            <Section className="my-0 sm:my-20 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("hikingTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>

                <p className="text-xl my-10 mx-auto text-center">{t1("hikingDescription")}</p>

                <div className={'mt-15'}>
                    <div className="hidden relative h-[20vh] sm:flex flex-col justify-center items-center sm:bg-linear-to-b from-primary to-primary-foreground" />
                    <div className="relative sm:-mt-24 py-6 sm:py-0 px-6 md:px-16">
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-6">
                            {hiking.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -6 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    viewport={{
                                        amount: 0.5,
                                        once: true
                                    }}
                                    className="group max-w-70 bg-white rounded-2xl shadow-md  transition-all hover:-translate-y-2 hover:shadow-xl">

                                    <div className="rounded-t-2xl overflow-hidden h-48 relative">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="p-5 space-y-3">
                                        <h3 className="text-xl text-primary font-semibold">{item.title}</h3>

                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <strong>{t1("tips")} :</strong> {item.tips}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </Section >
        </>
    )
}
export default CoastPage