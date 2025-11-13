"use client"

import HeaderPolygon from "@/components/ui/HeaderPolygon"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Section from "@/components/ui/Section"
import Separator from "@/components/ui/Separator"
import { useCurrentLocale, useScopedI18n } from "@/locales/client"
import { getReleases } from "./pressData"
import { DataTable } from "@/components/ui/DataTable"
import { getReleasesColumns } from "@/components/Press/Releases-columns"
import CountUp from "@/components/ui/CountUp"
import Masonry from "@/components/ui/Masonry"
import { motion } from "framer-motion"
import Link from "next/link"
import SocialMasonry from "@/components/ui/SocialMasonry"
import { Facebook, FolderClosed, Image as Img, Instagram, LayoutPanelTop, Palette, Youtube } from "lucide-react"
import { ContactForm } from "@/components/Home/Contact"

function PressPage() {
    const t1 = useScopedI18n("Press")
    const t2 = useScopedI18n("Components")
    const locale = useCurrentLocale()

    const headerImages = [
        "https://images.unsplash.com/photo-1630797160666-38e8c5ba44c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        "https://images.unsplash.com/photo-1625850806650-ae9d18b4a256?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
        "https://images.unsplash.com/photo-1489395131208-596c1ecb2a39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    ]

    const releases = getReleases(locale)
    const releasesColumns = getReleasesColumns(locale)


    const photoLibrary = [
        {
            id: "1",
            img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
            height: 400,
        },
        {
            id: "2",
            img: "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1034",
            height: 250
        },
        {
            id: "3",
            img: "https://images.unsplash.com/photo-1481988535861-271139e06469?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1190",
            height: 600
        },
        {
            id: "4",
            img: "https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            height: 300
        },
        {
            id: "5",
            img: "https://images.unsplash.com/photo-1552686943-10abeb475c93?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331",
            height: 450
        },
        {
            id: "6",
            img: "https://images.unsplash.com/photo-1501619951397-5ba40d0f75da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176",
            height: 200
        },
        {
            id: "7",
            img: "https://images.unsplash.com/photo-1573512443418-c6768862dda7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
            height: 500
        },
        {
            id: "8",
            img: "https://images.unsplash.com/photo-1503197979108-c824168d51a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1333",
            height: 300
        },
        {
            id: "9",
            img: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            height: 250
        },
        {
            id: "10",
            img: "https://images.unsplash.com/photo-1575883147621-d20c567ed5ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
            height: 400
        },
        {
            id: "11",
            img: "https://images.unsplash.com/photo-1592656094267-764a45160876?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            height: 150
        },
        {
            id: "12",
            img: "https://images.unsplash.com/photo-1569227997603-33b9f12af927?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            height: 550
        },
        {
            id: "13",
            img: "https://images.unsplash.com/photo-1496886077455-6e206da90837?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            height: 300
        },
        {
            id: "14",
            img: "https://images.unsplash.com/photo-1527314392553-2c7bded21b23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
            height: 500
        },
        {
            id: "15",
            img: "https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
            height: 200
        },
        {
            id: "16",
            img: "https://images.unsplash.com/photo-1446038202205-1c96430dbdab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
            height: 350
        },
        {
            id: "17",
            img: "https://images.unsplash.com/photo-1604938814491-c696899ec59b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
            height: 250
        },
        {
            id: "18",
            img: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            height: 250
        },

    ]

    return (
        <>
            <header>
                <HeaderPolygon heading={t1("Heading")} images={headerImages} />
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
                                <CountUp startWhen={true} from={0} to={40} />
                            </p>
                            <p>{t1("reception")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold  mb-2 text-primary">
                                <CountUp from={0} to={70} />
                            </p>
                            <p>{t1("articles")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold mb-2 text-primary">
                                <CountUp from={0} to={80} />K
                            </p>
                            <p>{t1("followers")}</p>
                        </div>
                        <div className="bg-white shadow rounded-xl p-6">
                            <p className="text-4xl font-bold text-primary mb-2">
                                <CountUp from={0} to={35} />
                            </p>
                            <p>{t1("influencers")}</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="sm:my-20 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("releaseTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <div className="container mx-auto mt-5 max-w-6xl">
                        <DataTable columns={releasesColumns} data={releases} />
                    </div>
                </div>
            </Section>

            <Section className="p-10 md:p-0">
                <div className=" max-w-6xl mx-auto flex items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl  whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("photoLibrary")}
                    </ScrollFloat>
                    <Separator width="w-48 mb-10 " />
                    <div className="w-full flex-col overflow-hidden h-[180vh] md:h-180">

                        <Masonry
                            items={photoLibrary}
                            ease="power3.out"
                            duration={0.6}
                            stagger={0.05}
                            animateFrom="bottom"
                            scaleOnHover={true}
                            hoverScale={0.95}
                            blurToFocus={true}
                        />


                    </div>
                    <Link href="http://www.linkedin.com/in/louis-leca" target="_blank" className="bg-secondary mt-10 md:mt-0 self-center text-primary-foreground py-2 px-4 rounded-xl transition hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md">
                        {t1("libraryButton")}
                    </Link>
                </div>
            </Section>

            <Section className="my-20 p-10 md:p-0">
                <div className=" max-w-6xl mx-auto flex  flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("socialMedia")}
                    </ScrollFloat>
                    <Separator width="w-48 mb-20 " />
                </div>
                <SocialMasonry
                    title={t2("followUs")}
                    images={[
                        "https://images.unsplash.com/photo-1519922639192-e73293ca430e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172",
                        "https://images.unsplash.com/photo-1673806780503-eeeb8d2139b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bm9ybWFuZHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
                        "https://images.unsplash.com/photo-1546512970-372b2be5a667?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                        "https://images.unsplash.com/photo-1633114779837-09d335c1ae43?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
                        "https://images.unsplash.com/photo-1668670579233-7f0b202f7028?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=736",
                        "https://images.unsplash.com/photo-1687599428236-20dd968005e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
                    ]}
                    socialLinks={[
                        { label: "Instagram", icon: <Instagram size={28} />, href: "http://instagram.com" },
                        { label: "Facebook", icon: <Facebook size={28} />, href: "http://facebook.com" },
                        { label: "YouTube", icon: <Youtube size={28} />, href: "http://youtube.com" },
                    ]}
                    hideOnMobile

                />
            </Section>

            <Section className="my-10 p-10 md:p-0">
                <div className=" max-w-6xl mx-auto flex items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=100%"
                        scrollEnd="bottom bottom-=5%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("downloads")}
                    </ScrollFloat>
                    <Separator width="w-48 mb-20 " />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                    <div
                        className="group bg-white rounded-2xl shadow-md p-6 transition-all hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex flex-col items-center text-center">
                            <div
                                className="p-4 rounded-full mb-4 bg-secondary">
                                <Img className="w-8 h-8 text-primary-foreground" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-primary">{t1("logosTitle")}</h3>
                            <p className="text-sm text-gray-500 mb-4">{t1("logosDescription")}</p>
                            <Link href="http://www.linkedin.com/in/louis-leca" target="_blank"
                                className="inline-block bg-secondary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                {t2("download")}
                            </Link>
                        </div>
                    </div>

                    <div
                        className="group bg-white rounded-2xl shadow-md p-6 transition-all hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex flex-col items-center text-center">
                            <div
                                className="p-4 rounded-full mb-4 bg-secondary">
                                <LayoutPanelTop className="w-8 h-8 text-primary-foreground" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-primary">{t1("kitTitle")}</h3>
                            <p className="text-sm text-gray-500 mb-4">{t1("kitDescription")}</p>
                            <Link href="http://www.linkedin.com/in/louis-leca" target="_blank"
                                className="inline-block bg-secondary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                {t2("download")}
                            </Link>
                        </div>
                    </div>
                    <div
                        className="group bg-white rounded-2xl shadow-md p-6 transition-all hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex flex-col items-center text-center">
                            <div
                                className="p-4 rounded-full mb-4 bg-secondary">
                                <Palette className="w-8 h-8 text-primary-foreground" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-primary">{t1("brandTitle")}</h3>
                            <p className="text-sm text-gray-500 mb-4">{t1("brandDescription")}</p>
                            <Link href="http://www.linkedin.com/in/louis-leca" target="_blank"
                                className="inline-block bg-secondary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                {t2("download")}
                            </Link>
                        </div>
                    </div>
                    <div
                        className="group bg-white rounded-2xl shadow-md p-6 transition-all hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex flex-col items-center text-center">
                            <div
                                className="p-4 rounded-full mb-4 bg-secondary">
                                <FolderClosed className="w-8 h-8 text-primary-foreground" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-primary">{t1("dossierTitle")}</h3>
                            <p className="text-sm text-gray-500 mb-4">{t1("dossierDescription")}</p>
                            <Link href="http://www.linkedin.com/in/louis-leca" target="_blank"
                                className="inline-block bg-secondary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                {t2("download")}
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </Section >

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
                        {t1("receptionTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />

                    <div className="container mx-auto mt-5 max-w-6xl">
                        <p className="md:text-2xl font-josefin-sans text-center">{t1("receptionDescription")}</p>
                        <div className="flex md:flex-row flex-col mt-10">
                            <ContactForm />
                            <img src="/images/press/press.svg" className="w-[40%] md:block hidden " />
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}
export default PressPage