"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import SplitText from "@/components/ui/SplitText";
import { useScopedI18n } from "@/locales/client";
import ThreeCards from "@/components/ui/ThreeCards";
import Headband from "@/components/ui/HeadBand";
import { SquareCards } from "@/components/ui/SquareCards";
import HeaderSlider from "@/components/ui/HeaderSlider";
import OverlappingCards from "@/components/ui/OverlappingCards";



export default function TestPage() {
    const t = useScopedI18n("Explore")

    const verticalImage = "https://images.unsplash.com/photo-1551927411-95e412943b58?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=749"
    const headerImages = [
        "https://images.unsplash.com/photo-1446038202205-1c96430dbdab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
        "https://images.unsplash.com/photo-1534781600251-463b503104b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331",
        "https://images.unsplash.com/photo-1656155035922-ee105c9364b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
    ];

    const squareImages: [string, string, string, string] = [
        'https://images.unsplash.com/photo-1512649408904-c0a00fb810da?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1331',
        'https://images.unsplash.com/photo-1593812350679-8bfcb563b297?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1167',
        'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170',
        'https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1171',
    ]

    const overlapCards = [
        {
            title: "Les calanques de Marseille",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        },
        {
            title: "La Cité radieuse – Le Corbusier",
            image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
        },
        {
            title: "Les îles du Frioul",
            image: "https://images.unsplash.com/photo-1502085671122-2d218cd434e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1226"
        }
    ]

    const cardsData = [
        {
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            title: "Évasion marine",
            description: "Le souffle de l’océan et la beauté brute des falaises.",
            offsetClass: "sm:top-0 md:top-8",
        },
        {
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            title: "Escapade urbaine",
            description: "Flânez dans les ruelles d’une ville pleine d’histoires et d’art.",
            offsetClass: "sm:top-0 md:-top-8",
        },
        {
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            title: "Nature et sérénité",
            description: "Respirez, contemplez, et laissez-vous porter par la beauté du monde.",
            offsetClass: "sm:top-0 md:top-8",
        },
    ];
    return (
        <div className="overflow-hidden">
            <HeaderSlider images={headerImages} heading="Explore" />
            <SquareCards
                title="Découvrir autrement"
                description="Découvrez des lieux chargés d’histoire, des expériences uniques et des rencontres inattendues. Chaque destination révèle une atmosphère,  savoir-faire et un patrimoine à préserver."
                images={squareImages}
                reverse={true}
            />
            <Headband verticalImage={verticalImage}
                descriptionText="Parcourez nos sélections exclusives et laissez-vous inspirer par des horizons nouveaux, entre nature et culture. Parcourez nos sélections exclusives et laissez-vous inspirer par des horizons nouveaux, entre nature et culture. Parcourez nos sélections exclusives et laissez-vous inspirer par des horizons nouveaux, entre nature et culture."
                cardTitle="Coup de cœur"
                cardText="Un lieu à explorer sans attendre, entre authenticité et émerveillement."
            />
            <ThreeCards cards={cardsData} />
            <OverlappingCards cards={overlapCards} />

            {/* <section className="h-[50vh] max-w-6xl mx-auto my-16 px-6">
                <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    textClassName="text-xl!"
                >
                    When does a man die? When he is hit by a bullet? No! When he suffers a disease?
                    No! When he ate a soup made out of a poisonous mushroom?
                    No! A man dies when he is forgotten!
                </ScrollReveal>
            </section> */}
        </div >
    )
}
