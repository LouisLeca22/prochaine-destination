"use client"
import { useScopedI18n } from "@/locales/client";
import { motion } from 'framer-motion'
import Separator from "@/components/ui/Separator";
import HeaderCards from "@/components/ui/HeaderCards";
import { Anchor, Landmark, Sparkles, Waves } from "lucide-react";
import Section from "@/components/ui/Section";
import { SquareCards } from "@/components/ui/SquareCards";
import Carrousel from "@/components/ui/Carrousel";
import { useMemo } from "react";
import { accommodations, activities, restaurants } from "@/data";
import { selectItemById, selectItemsByIds } from "@/utils";
import ThreeCards from "@/components/ui/ThreeCards";
import OneCard from "@/components/ui/OneCard";
import Block from "@/components/ui/Block";
import BandCards from "@/components/ui/BandCards";
import AnimatedLink from "@/components/ui/AnimatedLink";
import OverlappingCards from "@/components/ui/OverlappingCards";


export default function ExplorePage() {
    const t1 = useScopedI18n("Explore")
    const t2 = useScopedI18n("Components")

    const allActivities = useMemo(() => activities, []);
    const allAccommodations = useMemo(() => accommodations, [])
    const allRestaurants = useMemo(() => restaurants, [])

    const headerImages = [
        "https://images.unsplash.com/photo-1446038202205-1c96430dbdab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
        "https://images.unsplash.com/photo-1534781600251-463b503104b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331",
        "https://images.unsplash.com/photo-1656155035922-ee105c9364b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
    ];

    const headerCards = [
        {
            title: {
                text: t1("cardOneTitle"),
                icon: <Waves className="text-primary w-8 h-8" />
            },
            description: t1("cardOneDescription")
        },
        {
            title: {
                text: t1("cardTwoTitle"),
                icon: <Anchor className="text-primary w-8 h-8" />
            },
            description: t1("cardTwoDescription")
        },
        {
            title: {
                text: t1("cardThreeTitle"),
                icon: <Sparkles className="text-primary w-8 h-8" />
            },
            description: t1("cardThreeDescription")
        },

    ]

    const discoverImages: [string, string, string, string] = [
        'https://images.unsplash.com/photo-1512649408904-c0a00fb810da?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1331',
        'https://images.unsplash.com/photo-1593812350679-8bfcb563b297?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1167',
        'https://images.unsplash.com/photo-1600626337767-e4fbae218c9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        "https://images.unsplash.com/photo-1697445560859-caa1ddf37213?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    ]

    const essentials = selectItemsByIds(allActivities, [2, 4, 12, 24])

    const feelImage = "https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg"

    const feelItems = [selectItemById(allActivities, 21), selectItemById(allRestaurants, 11), selectItemById(allAccommodations, 18)]
        .filter((item): item is NonNullable<typeof item> => item !== undefined);


    const cultureCards: [{ title: string, description: string, image: string }, { title: string, description: string, image: string }] = [
        {
            title: t1("cultureCardOneTitle"),
            description: t1("cultureCardOneDescription"),
            image: "https://images.unsplash.com/photo-1606819717115-9159c900370b?auto=format&fit=crop&q=80&w=1170"
        },
        {
            title: t1("cultureCardTwoTitle"),
            description: t1("cultureCardTwoDescription"),
            image: "https://images.unsplash.com/photo-1543677433-015d88f8341e?auto=format&fit=crop&q=80&w=1130"
        }
    ]
    const cultureItems = selectItemsByIds(allActivities, [12, 13, 14])

    const gastronomyItems = selectItemsByIds(allRestaurants, [2, 16, 24])

    return (
        <>
            <header>
                <HeaderCards cards={headerCards} images={headerImages} heading={t1("Heading")} subHeading={t1("Subheading")} />
            </header>
            <Section className="my-10 md:my-50">
                <SquareCards title={t1("spiritTitle")} description={t1("spiritDescription")} imageAlt={t1("spiritTitle")} images={discoverImages} />
            </Section>
            <Section className="my-10 md:my-50">
                <Carrousel items={essentials} title={t1("topTitle")} description={t1("topDescription")} />
            </Section>
            <Section className="my-10 md:my-50">
                <OneCard title={t1("feelTitle")} description={t1("feelDescription")} image={feelImage} />
                <div className="my-15">
                    <ThreeCards items={feelItems} />
                </div>
            </Section>

            <Section className="my-10 md:my-20">
                <Block
                    title={t1("cultureTitle")}
                    description={t1("cultureDescription")}
                    items={cultureItems}
                    cards={cultureCards}
                    asideIcon={<Landmark className="h-8 w-8 text-primary" />
                    }
                    asideTitle={t1('cultureAsideTitle')}
                    asideDescription={t1('cultureAsideDescription')}
                    buttonText={t2('seeMore')}
                    buttonLink="/activities?type=CULTURAL_TOUR"
                />
            </Section>

            <Section className="my-10 md:my-40">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex max-w-6xl mx-auto flex-col items-center justify-center gap-5 p-3 mb-10">
                    <h2

                        className="text-2xl sm:text-3xl md:text-4xl font-josefin-sans font-bold text-primary  text-center"
                    >
                        {t1("gastronomyTitle")}
                    </h2>
                    <div
                    >
                        <Separator className="w-24 sm:w-40 mx-auto lg:mx-0 mb-4" />
                    </div>

                    <p
                        className="text-sm sm:text-base text-center"
                    >
                        {t1("gastronomyDescription")}
                    </p>

                    <AnimatedLink text={t2("seeMore")} href={"/restaurants"} />


                </motion.div>
                <BandCards items={gastronomyItems} />
            </Section>
            <Section className="my-10 md:my-50">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex max-w-6xl mx-auto flex-col items-center md:items-end gap-5 p-3 mb-10">
                    <h2

                        className="text-2xl sm:text-3xl md:text-4xl font-josefin-sans font-bold text-primary  text-center"
                    >
                        {t1("inspireTitle")}
                    </h2>
                    <div
                    >
                        <Separator className="w-24 sm:w-40 mx-auto lg:mx-0 mb-4" />
                    </div>
                </motion.div>

                <OverlappingCards items={allActivities} buttonText={t2("inspire")} />
            </Section>
        </>
    )
}
