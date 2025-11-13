"use client"

import { ContactForm } from "@/components/Home/Contact"
import CountUp from "@/components/ui/CountUp"
import HeaderPolygon from "@/components/ui/HeaderPolygon"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import { useScopedI18n } from "@/locales/client"
import { motion } from "framer-motion"

function BusinessPage() {
    const t1 = useScopedI18n("Business")

    const headerImages = [
        "https://images.unsplash.com/photo-1603478804503-dc909c7f5ce5?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg",
        "https://images.pexels.com/photos/3321789/pexels-photo-3321789.jpeg"
    ]


    return (
        <>
            <header>
                <HeaderPolygon heading={t1("heading")} images={headerImages} />
                <motion.div
                    className="mt-20 flex max-w-xl mx-auto flex-col justify-center items-center text-center gap-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl underline-secondary">{t1("subHeading")}</h3>
                    <p className="text-2xl">{t1("description")}</p>
                </motion.div>
            </header>
            <Section className="my-20 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center sm:items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("keyFigures")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <div className="grid md:grid-cols-4 gap-8 text-center text-gray-600 self-center  mt-10">
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold mb-2 text-primary">
                                <CountUp startWhen={true} from={0} to={120} />+
                            </p>
                            <p>{t1("eventsYear")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold  mb-2 text-primary">
                                <CountUp from={0} to={15} />K
                            </p>
                            <p>{t1("participants")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold mb-2 text-primary">
                                <CountUp from={0} to={25} />
                            </p>
                            <p>{t1("equipments")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold text-primary mb-2">
                                <CountUp from={0} to={15} />
                            </p>
                            <p>{t1("hotels")}</p>
                        </div>
                    </div>

                </div>
            </Section>


            <Section className="sm:my-20 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=100%"
                        scrollEnd="bottom bottom-=5%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("contactBusiness")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <div className="container mx-auto mt-5 max-w-6xl ">
                        <p className="md:text-2xl font-josefin-sans text-center">{t1("contactDescription")}</p>
                        <div className="flex md:flex-row flex-col mt-10">
                            <ContactForm />
                            <img src="/images/business/business.svg" className="w-[40%] md:block hidden " />
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}
export default BusinessPage