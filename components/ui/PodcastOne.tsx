"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Separator from "./Separator";
import AudioPlayer from "./AudioPlayer";

interface PodcastOneProps {
    title: string;
    description?: string;
    ol?: string[]
    reverse?: boolean;
    large?: boolean
    src: string
    cover: string;
    podcastName: string
}

function PodcastOne({ title, description, src, ol, cover, podcastName, reverse = false, large = false }: PodcastOneProps) {
    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <motion.div
            className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
                gap-8  ${large ? "max-w-7xl" : "max-w-6xl"} mx-auto items-center md:items-start px-4 md:px-8`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div
                className="relative w-full md:flex-1 h-[40vh] md:h-[60vh]"
                variants={imageVariants}
            >

                <AudioPlayer src={src} cover={cover} title={podcastName} />
            </motion.div>

            <motion.div
                className={`flex-1 flex flex-col  justify-center h-[40vh] md:h-[60vh] items-center ${reverse
                    ? "md:items-start md:text-left"
                    : "md:items-end md:text-right"
                    } text-center  mt-6 md:mt-0`}
                variants={containerVariants}
            >
                <h2 className="text-3xl md:text-4xl font-josefin-sans font-bold text-primary mb-4">
                    {title}
                </h2>
                <Separator width="w-40 md:w-80" className="mb-6 md:mb-8" />
                {description && (
                    <p className="text-base md:text-lg leading-relaxed">{description}</p>
                )}

                {ol && (
                    <ol className="text-base md:text-lg leading-relaxe">
                        {ol.map((item, i) => (
                            <li className="mb-4" key={i}>{item}</li>
                        ))}
                    </ol>
                )}
            </motion.div>
        </motion.div>
    );
}

export default PodcastOne;
