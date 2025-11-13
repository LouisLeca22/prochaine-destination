import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BaseItem } from "@/data";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import Link from "next/link";
import { Check } from "lucide-react";

interface HeadbandProps {
    bandText: string
    bandLisItems: [string, string, string, string],
    image: string
    buttonText: string
    buttonLink: string
}

const Headband: FC<HeadbandProps> = ({
    bandText,
    bandLisItems,
    image,
    buttonText,
    buttonLink
}) => {
    const locale = useCurrentLocale()

    return (
        <div className="flex items-center">

            <div className="relative w-full  bg-linear-to-b from-primary to-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{
                        amount: 0.5,
                        once: true
                    }}
                    className="sm:w-[70%]  w-full flex items-center flex-col  gap-2 "
                >
                    <p className="text-base sm:text-2xl text-white leading-relaxed">
                        {bandText}
                    </p>
                    <ul className="text-white sm:text-lg">
                        {bandLisItems.map((item, i) => (
                            <li key={i} className="flex gap-2 items-center"> <Check className="w-3 h-3 text-white" /> {item}</li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{
                        amount: 0.5,
                        once: true
                    }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="block bg-white shadow-lg overflow-hidden rounded-2xl w-full sm:w-80 mt-10 sm:mt-0 relative sm:absolute sm:right-30 sm:top-1/2 sm:-translate-y-1/2"
                >
                    <div className="relative h-48 sm:h-72 w-full">
                        <Image
                            src={image}
                            alt={buttonText}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex  h-25 items-center justify-center  text-center">
                        <Link href={buttonLink} target="_blank" className="bg-secondary  self-center text-primary-foreground py-2 px-4 rounded-xl transition hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md">
                            {buttonText}
                        </Link>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default Headband;
