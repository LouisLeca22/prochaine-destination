import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BaseItem } from "@/data";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";

interface HeadbandProps {
    bandText: string
    item: BaseItem
}

const Headband: FC<HeadbandProps> = ({
    bandText,
    item
}) => {
    const locale = useCurrentLocale()
    const t1 = useScopedI18n("Types")
    const t2 = useScopedI18n("Details")
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
                    className="sm:w-[70%] w-full text-center "
                >
                    <p className="text-base sm:text-xl text-white leading-relaxed">
                        {bandText}
                    </p>
                </motion.div>

                <motion.a
                    href={`/${item.category}?id=${item.id}`}
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{
                        amount: 0.5,
                        once: true
                    }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="block bg-white shadow-lg overflow-hidden rounded-2xl w-full sm:w-80 mt-10 sm:mt-0 relative sm:absolute sm:right-30 sm:-bottom-1/2"
                >
                    <div className="relative h-48 sm:h-64 w-full">
                        <Image
                            src={item.images[0]}
                            alt={locale === "fr" ? item.nameFR : item.nameEN}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 gap-2 text-center">
                        <h3 className="text-lg sm:text-xl text-primary font-semibold ">
                            {locale === "fr" ? item.nameFR : item.nameEN}
                        </h3>
                        <span className="text-primary-foreground uppercase tracking-wide font-medium font-inter">
                            {t1(item.type)}
                        </span>
                        <span className=" font-semibold text-sm text-muted-foreground">
                            {t2("from")} {item.price} €
                        </span>
                    </div>

                </motion.a>
            </div>
        </div>
    )
}

export default Headband;
