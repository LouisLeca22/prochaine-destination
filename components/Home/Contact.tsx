"use client"
import { useScopedI18n } from "@/locales/client"
import ScrollFloat from "../ui/ScrollFloat"
import Separator from "../ui/Separator"

function Contact() {
    const t = useScopedI18n("Home.Contact")
    return (
        <section className="h-screen snap-center">
            <div className="sticky z-40 overflow-hidden  top-0 left-0 bg-background pt-20 md:pt-15 pb-4 mb-10 text-center flex flex-col items-center">
                <ScrollFloat
                    animationDuration={1}
                    ease="back.inOut(2)"
                    scrollStart="center bottom+=50%"
                    scrollEnd="bottom bottom-=40%"
                    stagger={0.03}
                    textClassName="text-5xl font-josefin-sans font-bold text-cyan-500"
                >
                    {t("Heading")}
                </ScrollFloat>
                <Separator width="w-200" />
            </div>
        </section>
    )
}
export default Contact