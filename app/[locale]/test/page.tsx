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
import SocialMasonry from "@/components/ui/SocialMasonry";
import { Facebook, Instagram, Link, Linkedin, Youtube } from "lucide-react";
import MirrorGrid from "@/components/ui/MirrorGrid";



export default function TestPage() {
    const t = useScopedI18n("Explore")

    const card = {
        img: "https://images.unsplash.com/photo-1551927411-95e412943b58?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=749",
        title: "Coup de cœur",
        description: "Un lieu à explorer sans attendre, entre authenticité et émerveillement.",
        href: "/"
    }

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
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            href: "/"
        },
        {
            title: "La Cité radieuse – Le Corbusier",
            image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
            href: "/"
        },
        {
            title: "Les îles du Frioul",
            image: "https://images.unsplash.com/photo-1502085671122-2d218cd434e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1226",
            href: "/"
        }
    ]

    const threeCards = [
        {
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            title: "Évasion marine",
            description: "Le souffle de l’océan et la beauté brute des falaises.",
            offsetClass: "sm:top-0 md:top-8",
            href: "/"
        },
        {
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            title: "Escapade urbaine",
            description: "Flânez dans les ruelles d’une ville pleine d’histoires et d’art.",
            offsetClass: "sm:top-0 md:-top-8",
            href: "/"
        },
        {
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            title: "Nature et sérénité",
            description: "Respirez, contemplez, et laissez-vous porter par la beauté du monde.",
            offsetClass: "sm:top-0 md:top-8",
            href: "/"
        },
    ];


    const mirrorImages = [
        { src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e", text: "Card 1", span: "md:row-span-2", href: "/" },
        { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", text: "Card 2", href: "/" },
        { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", text: "Card 3", href: "/" },
        { src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e", text: "Card 4", span: "md:row-span-2", href: "/" },
        { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", text: "Card 5", href: "/" },
        { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", text: "Card 6", href: "/" },
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
            <Headband
                bandText="Parcourez nos sélections exclusives et laissez-vous inspirer par des horizons nouveaux, entre nature et culture. Parcourez nos sélections exclusives et laissez-vous inspirer par des horizons nouveaux, entre nature et culture. Parcourez nos sélections exclusives et laissez-vous inspirer par des horizons nouveaux, entre nature et culture."
                card={card}
            />
            <ThreeCards cards={threeCards} />
            <OverlappingCards cards={overlapCards} />

            <SocialMasonry
                title="Follow Our Journey"
                images={[
                    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
                    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
                    "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
                    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
                    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
                    "https://images.unsplash.com/photo-1519681393784-d120267933ba",
                ]}
                socialLinks={[
                    { label: "Instagram", icon: <Instagram size={28} />, href: "http://instagram.com" },
                    { label: "Facebook", icon: <Facebook size={28} />, href: "http://facebook.com" },
                    { label: "Linkedin", icon: <Linkedin size={28} />, href: "http://linkedin.com" },
                    { label: "YouTube", icon: <Youtube size={28} />, href: "http://youtube.com" },
                ]}
                hideOnMobile
            />

            <MirrorGrid cards={mirrorImages} />

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
