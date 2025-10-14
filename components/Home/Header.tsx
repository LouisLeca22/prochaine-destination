"use client"

import SplitText from "@/components/ui/SplitText";

import Image from 'next/image'

function Header() {
    return (
        <header className="z-10 relative w-full h-[90vh]">
            <Image
                src="/images/header.jpg"
                alt="Bannière du site"
                fill
                priority
                quality={90}
                sizes="100vw"
                className="object-cover object-center"
            />
            <div className="relative top-0 left-0 w-full h-full bg-black/40">
                <div className="absolute top-100 px-20 flex w-full gap-2 flex-col align-middle">
                    <SplitText
                        text="PROCHAINE"
                        className="text-6xl font-extrabold text-shadow-lg font-inter"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="end"
                    />

                    <SplitText
                        text="DESTINATION"
                        className="text-6xl text-shadow-lg font-josefin-sans"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="end"
                    />


                </div>

            </div>

        </header >
    )
}
export default Header