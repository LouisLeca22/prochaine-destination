"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import SplitText from "@/components/ui/SplitText";
import ScrollReveal from "@/components/ui/ScrollReveal"
import { useScopedI18n } from "@/locales/client";
import { motion } from 'framer-motion'
import Separator from "@/components/ui/Separator";
import HeaderCards from "@/components/ui/HeaderCards";
import { Anchor, Sparkles, Waves } from "lucide-react";
import Section from "@/components/ui/Section";
import { SquareCards } from "@/components/ui/SquareCards";
import Carrousel from "@/components/ui/Carrousel";
import { useMemo } from "react";
import { activities } from "@/data";
import { selectItemsByIds } from "@/utils";


export default function ExplorePage() {
    const t = useScopedI18n("Explore")
    const headerImages = [
        "https://images.unsplash.com/photo-1446038202205-1c96430dbdab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
        "https://images.unsplash.com/photo-1534781600251-463b503104b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331",
        "https://images.unsplash.com/photo-1656155035922-ee105c9364b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
    ];

    const headerCards = [
        {
            title: {
                text: t("cardOneTitle"),
                icon: <Waves className="text-primary w-8 h-8" />
            },
            description: t("cardOneDescription")
        },
        {
            title: {
                text: t("cardTwoTitle"),
                icon: <Anchor className="text-primary w-8 h-8" />
            },
            description: t("cardTwoDescription")
        },
        {
            title: {
                text: t("cardThreeTitle"),
                icon: <Sparkles className="text-primary w-8 h-8" />
            },
            description: t("cardThreeDescription")
        },

    ]

    const discoverImages: [string, string, string, string] = [
        'https://images.unsplash.com/photo-1512649408904-c0a00fb810da?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1331',
        'https://images.unsplash.com/photo-1593812350679-8bfcb563b297?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1167',
        'https://images.unsplash.com/photo-1600626337767-e4fbae218c9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        "https://images.unsplash.com/photo-1697445560859-caa1ddf37213?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    ]
    const allActivities = useMemo(() => activities, []);

    const essentials = selectItemsByIds(allActivities, [2, 4, 12, 24])

    return (
        <>
            <header>
                <HeaderCards cards={headerCards} images={headerImages} heading={t("Heading")} subHeading={t("Subheading")} />

            </header>
            <Section className="my-10 md:my-50">
                <SquareCards title={t("spiritTitle")} description={t("spiritDescription")} imageAlt={t("spiritTitle")} images={discoverImages} />
            </Section>
            <Section className="my-10 md:my-50">
                <Carrousel items={essentials} title={t("topTitle")} description={t("topDescription")} />
            </Section>

        </>
    )
}
