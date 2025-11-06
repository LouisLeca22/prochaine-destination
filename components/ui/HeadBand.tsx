import { FC } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface HeadbandProps {
    verticalImage: string | StaticImageData;
    descriptionText: string;
    cardTitle: string;
    cardText: string;
}

const Headband: FC<HeadbandProps> = ({
    verticalImage,
    descriptionText = "Parcourez nos sélections exclusives et laissez-vous inspirer par des horizons nouveaux, entre nature et culture.",
    cardTitle = "Coup de cœur",
    cardText = "Un lieu à explorer sans attendre, entre authenticité et émerveillement.",
}) => (
    <section className="h-[60vh] flex items-center">

        <div className="relative w-full bg-primary py-16 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="w-[70%] text-center "
            >
                <p className="text-base sm:text-xl text-white leading-relaxed">
                    {descriptionText}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="
            bg-white shadow-lg rounded-2xl p-6 w-full sm:w-80 
            mt-10 sm:mt-0
            relative sm:absolute 
            sm:right-30 sm:-bottom-1/2
            "
            >
                <div className="relative h-48 sm:h-64 w-full mb-4">
                    <Image
                        src={verticalImage}
                        alt={cardTitle}
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>
                <h3 className="text-lg sm:text-xl text-primary font-semibold mb-2">
                    {cardTitle}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{cardText}</p>
            </motion.div>
        </div>
    </section>
);

export default Headband;
