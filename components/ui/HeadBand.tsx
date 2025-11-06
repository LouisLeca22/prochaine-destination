import { FC } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface HeadbandProps {
    bandText: string
    card: {
        title: string
        description: string
        img: string | StaticImageData;
        href: string
    }

}

const Headband: FC<HeadbandProps> = ({
    bandText,
    card
}) => (
    <section className="my-10 sm:my-50 flex items-center">

        <div className="relative w-full bg-primary py-16 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="sm:w-[70%] w-full text-center "
            >
                <p className="text-base sm:text-xl text-white leading-relaxed">
                    {bandText}
                </p>
            </motion.div>

            <motion.a
                href={card.href}
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="block bg-white shadow-lg rounded-2xl p-6 w-full sm:w-80 mt-10 sm:mt-0 relative sm:absolute sm:right-30 sm:-bottom-1/2"
            >
                <div className="relative h-48 sm:h-64 w-full mb-4">
                    <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>
                <h3 className="text-lg sm:text-xl text-primary font-semibold mb-2">
                    {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{card.description}</p>
            </motion.a>
        </div>
    </section>
);

export default Headband;
