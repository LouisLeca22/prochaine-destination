"use client"

import HeaderPolygon from "@/components/ui/HeaderPolygon"
import { useScopedI18n } from "@/locales/client"
import { motion } from "framer-motion"

function HikingPage() {

    const headerImages = [
        "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1171",
        "https://images.unsplash.com/photo-1525474089639-b5fff4440315?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1032",
        "https://images.unsplash.com/photo-1628941490404-d4e2ef1d7ec4?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170"
    ]

    const t1 = useScopedI18n("Hiking")
    const t2 = useScopedI18n("Components")

    const hikingOneImages = [
        "https://images.unsplash.com/photo-1590089349708-9842d3f6ca25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xpZmZzfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1591387091135-1bd5a83d27ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1724863617908-070a2345ffa4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1677462083945-c34b99cbde09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    const hikingTwoImages = [
        "https://images.pexels.com/photos/33595422/pexels-photo-33595422.jpeg",
        "https://images.pexels.com/photos/18709446/pexels-photo-18709446.jpeg",
        "https://images.pexels.com/photos/1460280/pexels-photo-1460280.jpeg",
        "https://images.pexels.com/photos/34757101/pexels-photo-34757101.jpeg"
    ]

    const hikingThreeImages = [
        "https://images.pexels.com/photos/1009355/pexels-photo-1009355.jpeg",
        "https://images.pexels.com/photos/1118667/pexels-photo-1118667.jpeg",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1426170042593-200f250dfdaf?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]

    const hikingFourImages = [
        "https://images.pexels.com/photos/247506/pexels-photo-247506.jpeg",
        "https://images.pexels.com/photos/1373937/pexels-photo-1373937.jpeg",
        "https://images.unsplash.com/photo-1638340389325-31f8fdd7c0ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y292ZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.pexels.com/photos/792375/pexels-photo-792375.jpeg"
    ]

    const hikingFiveImages = [
        "https://images.pexels.com/photos/1076081/pexels-photo-1076081.jpeg",
        "https://images.pexels.com/photos/172510/pexels-photo-172510.jpeg",
        "https://images.pexels.com/photos/1469880/pexels-photo-1469880.jpeg",
        "https://images.pexels.com/photos/1370668/pexels-photo-1370668.jpeg"
    ]

    const hikingSixImages = [
        "https://images.unsplash.com/photo-1508985307703-52d13b2b06b3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1668616202749-67406392862b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGhvdXNlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1505731266723-9adc6eb6ea96?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    return (
        <header>
            <HeaderPolygon heading={t1("heading")} images={headerImages} />
            <motion.div
                className="my-10 flex max-w-xl mx-auto flex-col justify-center items-center text-center gap-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <p className="text-2xl mt-10">{t1("description")}</p>
            </motion.div>
        </header>
    )
}
export default HikingPage