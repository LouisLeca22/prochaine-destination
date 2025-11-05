"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import SplitText from "@/components/ui/SplitText";
import ScrollReveal from "@/components/ui/ScrollReveal"
import { useScopedI18n } from "@/locales/client";
import { motion } from 'framer-motion'
import Separator from "@/components/ui/Separator";



export default function ExplorePage() {
    const t = useScopedI18n("Explore")
    const headerImages = [
        "https://images.unsplash.com/photo-1446038202205-1c96430dbdab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
        "https://images.unsplash.com/photo-1534781600251-463b503104b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331",
        "https://images.unsplash.com/photo-1656155035922-ee105c9364b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169"
    ];

    const discoverImages = [
        'https://images.unsplash.com/photo-1512649408904-c0a00fb810da?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1331',
        'https://images.unsplash.com/photo-1593812350679-8bfcb563b297?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1167',
        'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170',
        'https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1171',
    ]
    return (
        <>

        </>
    )
}
