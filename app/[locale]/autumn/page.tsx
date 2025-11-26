"use client"
import HeaderSlider from "@/components/ui/HeaderSlider"
import Section from "@/components/ui/Section"
import { useScopedI18n } from "@/locales/client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useIsMobile } from "@/hooks/use-mobile"
import ScrollFloat from "@/components/ui/ScrollFloat"
import Separator from "@/components/ui/Separator"
import Carrousel from "@/components/ui/Carrousel"
import { useMemo } from "react"
import { accommodations, activities, restaurants } from "@/data"
import { selectItemById, selectItemsByIds } from "@/utils"
import MirrorGrid from "@/components/ui/MirrorGrid"
import ThreeCards from "@/components/ui/ThreeCards"
import Featured from "@/components/ui/Featured"
import Masonry from "@/components/ui/Masonry"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PodcastOne from "@/components/ui/PodcastOne"
function AutumnPage() {
    const isMobile = useIsMobile()
    const t1 = useScopedI18n("Autumn")
    const t2 = useScopedI18n("Components")
    const headerImages = [
        "https://images.unsplash.com/photo-1509224863479-ab583ee78692?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1639595338175-d7daf3949ef0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGtpdGVzdXJmfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    const highlights = [
        {
            title: t1("lightTitle"),
            description: t1("lightDescription"),
            image: "https://images.pexels.com/photos/2120624/pexels-photo-2120624.jpeg"
        },
        {
            title: t1("flavorTitle"),
            description: t1("flavorDescription"),
            image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("airTitle"),
            description: t1("airDescription"),
            image: "https://images.unsplash.com/photo-1490984792589-bc12fe270585?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    const allActivities = useMemo(() => activities, [])
    const allRestaurants = useMemo(() => restaurants, [])
    const allAccommodations = useMemo(() => accommodations, [])


    const moments = selectItemsByIds(allActivities, [4, 9, 10, 16, 17, 21, 24])

    const halloween = [
        {
            title: t1("halloweenFive"),
            image: "https://images.unsplash.com/photo-1669059473539-03b28f2cf295?q=80&w=675&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("halloweenLiOne"),
            image: "https://images.pexels.com/photos/5415710/pexels-photo-5415710.jpeg"
        },
        {
            title: t1("halloweenLiTwo"),
            image: "https://images.unsplash.com/photo-1463871181391-8550cd89c179?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("halloweenSix"),
            image: "https://images.unsplash.com/photo-1690650553995-cc5109870e00?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("halloweenLiThree"),
            image: "https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: t1("halloweenFour"),
            image: "https://images.unsplash.com/photo-1697378594486-a0e65ea8b7c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }

    ]

    const featured = selectItemById(allAccommodations, 15)!
    const featuredItems = selectItemsByIds(allAccommodations, [2, 5, 18])

    const gastronomyItems = selectItemsByIds(allRestaurants, [17, 22, 13])

    const photoLibrary = [
        {
            id: "1",
            img: "https://images.pexels.com/photos/5827880/pexels-photo-5827880.jpeg",
            height: 400,
        },
        {
            id: "2",
            img: "https://images.pexels.com/photos/5724875/pexels-photo-5724875.jpeg",
            height: 250
        },
        {
            id: "3",
            img: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg",
            height: 600
        },
        {
            id: "4",
            img: "https://images.pexels.com/photos/3152022/pexels-photo-3152022.jpeg",
            height: 300
        },
        {
            id: "5",
            img: "https://images.pexels.com/photos/1477359/pexels-photo-1477359.jpeg",
            height: 450
        },
        {
            id: "6",
            img: "https://images.pexels.com/photos/3183739/pexels-photo-3183739.jpeg",
            height: 200
        },
        {
            id: "7",
            img: "https://images.pexels.com/photos/218673/pexels-photo-218673.jpeg",
            height: 500
        },
        {
            id: "8",
            img: "https://images.pexels.com/photos/3151775/pexels-photo-3151775.jpeg",
            height: 300
        },
        {
            id: "9",
            img: "https://images.unsplash.com/photo-1508881136857-d1781947f4d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 250
        },
        {
            id: "10",
            img: "https://images.pexels.com/photos/754944/pexels-photo-754944.jpeg",
            height: 400
        },
        {
            id: "11",
            img: "https://images.unsplash.com/photo-1506899686410-4670690fccef?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 300
        },
        {
            id: "12",
            img: "https://images.pexels.com/photos/3220558/pexels-photo-3220558.jpeg",
            height: 550
        },
        {
            id: "13",
            img: "https://images.unsplash.com/photo-1506900039127-b1cb41deb557?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 300
        },
        {
            id: "14",
            img: "https://images.unsplash.com/photo-1445561696415-deadc6a2adaa?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 500
        },
        {
            id: "15",
            img: "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 200
        },
        {
            id: "16",
            img: "https://images.unsplash.com/photo-1453324044162-a4e5f32b7d6c?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 350
        },
        {
            id: "17",
            img: "https://images.unsplash.com/photo-1446663600271-00db8247d6a0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            height: 250
        },
        {
            id: "18",
            img: "https://images.pexels.com/photos/5604950/pexels-photo-5604950.jpeg",
            height: 250
        },

    ]

    return (
        <>
            <header>
                <HeaderSlider heading={t1("heading")} images={headerImages} />
                <motion.div
                    className="h-[35vh] p-3 md:p-0 flex max-w-xl mx-auto flex-col justify-center items-center text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p className="text-2xl">{t1("subHeading")}</p>

                </motion.div>
            </header>


            <Section className="my-0 md:my-30 p-10 md:p-0">
                <div className="max-w-6xl mx-auto flex items-center sm:items-start flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("highlights")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <div className="w-full flex justify-center py-20">
                    <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="relative group cursor-pointer h-full"
                            >
                                <motion.div
                                    whileHover={{ rotate: i % 2 === 0 ? -2 : 2, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="bg-white backdrop-blur-xl border-primary border-3 rounded-3xl p-6 shadow-2xl relative overflow-visible 
                               flex flex-col justify-between min-h-92"
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 rounded-2xl overflow-hidden shadow-xl rotate-3 group-hover:rotate-0 transition-all duration-500">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={300}
                                            height={300}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>

                                    <div className="pt-36 text-center flex flex-col flex-grow">
                                        <h3 className="text-xl text-primary font-semibold mb-3">
                                            {item.title}
                                        </h3>

                                        <p className=" text-gray-600 leading-relaxed mb-6">
                                            {item.description}
                                        </p>

                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-2 justify-center  opacity-80 hover:opacity-100 transition mt-auto"
                                        >
                                            <ArrowRight size={16} className="text-secondary-foreground" />
                                            <Link className="text-secondary-foreground" href="http://www.linkedin.com/in/louis-leca" target="_blank">
                                                {t2("discover")}
                                            </Link>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -10, 0], opacity: [0.6, 0.4, 0.6] }}
                                    transition={{ duration: 6 + i, repeat: Infinity }}
                                    className="absolute -z-10 -bottom-10 left-1/2 -translate-x-1/2 w-56 h-56 bg-purple-400/20 blur-3xl rounded-full"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="my-10 md:my-50">
                <Carrousel items={moments} title={t1("moments")} description={t1("momentsDescription")} />
            </Section>


            <Section className="relative my-0 md:my-30 p-10 md:p-0">

                <div className="max-w-6xl mx-auto flex items-center sm:items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("halloweenTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                </div>
                <MirrorGrid cards={halloween} />
            </Section>


            <Section className="py-10 bg-linear-to-br from-primary to-primary-foreground text-gray-600">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-white"
                    >
                        {t1("inspiringTitle")}
                    </ScrollFloat>

                    <div className="h-1 bg-linear-to-r from-white to-[oklch(0.98_0.02_230)] mx-auto rounded-full w-72 mb-15" />

                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
                        {[
                            {
                                img: "https://images.pexels.com/photos/462023/pexels-photo-462023.jpeg",
                                title: t1("sunsetsTitle"),
                                desc: t1("sunsetsDescription"),
                            },
                            {
                                img: "https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg",
                                title: t1("circuitTitle"),
                                desc: t1("circuitDescription"),
                            },
                            {
                                img: "https://images.pexels.com/photos/70577/sunset-birds-flying-sky-70577.jpeg",
                                title: t1("landscapeTitle"),
                                desc: t1("landscapeDescription"),
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: i * 0.4 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                            >
                                <div className="relative w-full h-40">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6 flex flex-col items-center justify-center">
                                    <h3 className="text-lg text-primary font-semibold mb-4 line-clamp-2 text-center h-12">{item.title}</h3>
                                    <p className="text-gray-600  mb-3">{item.desc}</p>
                                    <Link href="http://www.linkedin.com/in/louis-leca" target="_blank"
                                        className="inline-block bg-secondary text-primary-foreground px-4 py-2 w-1/2 rounded-lg  font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                                        {t2("seeMore")}
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="relative my-0 md:my-30 p-10 md:p-0">

                <div className="max-w-6xl mx-auto flex items-center  flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl sm:text-3xl font-josefin-sans text-center whitespace-nowrap font-bold text-primary"
                    >
                        {t1("gastronomyTitle")}
                    </ScrollFloat>
                    <Separator width="w-48 " />
                    <h3 className="my-10 text-xl">{t1("gastronomyDescription")}</h3>
                    <ThreeCards items={gastronomyItems} />
                    <div className="mt-10 md:mx-20 bg-white shadow-xl rounded-3xl overflow-hidden border border-primary">
                        <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581073759002-70a0a2044072?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                        </div>

                        <div className="p-8 md:p-10 space-y-8">
                            <div>
                                <h3 className="md:text-3xl text-2xl font-semibold text-primary">{t1("recipeTitle")}</h3>
                                <p className="mt-2 text-gray-600">{t1("recipeDescription")}</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <h4 className="md:text-2xl font-semibold text-primary border-l-4 border-primary pl-3">{t1("ingredientsTitle")}
                                    </h4>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>• {t1("ingredientsLiOne")}</li>
                                        <li>• {t1("ingredientsLiTwo")}</li>
                                        <li>• {t1("ingredientsLiThree")}</li>
                                        <li>• {t1("ingredientsLiFour")}</li>
                                        <li>• {t1("ingredientsLiFive")}</li>
                                        <li>• {t1("ingredientsLiSix")}</li>
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="md:text-2xl font-semibold text-primary border-l-4 border-primary pl-3">{t1("preparationTitle")}
                                    </h4>
                                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                                        <li>{t1("preparationLiOne")}</li>
                                        <li>{t1("preparationLiTwo")}</li>
                                        <li>{t1("preparationLiThree")}</li>
                                        <li>{t1("preparationLiFour")}</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Section>


            <Featured items={featuredItems} featured={featured} subHeading={t1("accommodationTitle")} heading={t1("accommodationSubTitle")} />


            <Section className="p-10 mb-10 md:p-0">
                <div className=" max-w-6xl mx-auto flex items-end flex-col">
                    <ScrollFloat
                        animationDuration={1}
                        ease="back.inOut(2)"
                        scrollStart="center bottom+=50%"
                        scrollEnd="bottom bottom-=40%"
                        stagger={0.03}
                        textClassName="text-2xl  whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
                    >
                        {t1("gallery")}
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
                </div>
            </Section>

            <Section className="relative md:mt-40 mb-20">

                <PodcastOne
                    title={t1("podcastName")}
                    description={t1("podcastDescription")}
                    cover="https://images.unsplash.com/photo-1673806780536-d4eedc231dfd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    src="/audios/podcast.mp3"
                    podcastName={t1("podcastName")}
                />
            </Section>

        </>
    )
}
export default AutumnPage