"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

type SocialLink = {
    label: string;
    icon: React.ReactNode;
    href: string;
};

interface SocialMasonryProps {
    images?: string[];
    title?: string;
    socialLinks?: SocialLink[];
    hideOnMobile?: boolean;
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
};

export default function SocialMasonry({
    images = [],
    title = "Suivez-nous",
    socialLinks = [],
    hideOnMobile = true,
}: SocialMasonryProps) {
    return (
        <section className="md:my-30 px-6">
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 max-w-6xl mx-auto">
                <div className={hideOnMobile ? "hidden sm:block" : ""}>
                    {images.slice(0, 3).map((src, i) => (
                        <motion.div
                            key={i}
                            className="mb-4 break-inside-avoid overflow-hidden rounded-lg"
                            variants={fadeInScale}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: false }}
                        >
                            <Image
                                src={src}
                                alt={`Image ${i + 1}`}
                                width={600}
                                height={800}
                                className="w-full h-auto rounded-lg"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Social links block */}
                <motion.div
                    className="bg-white text-center py-12 flex flex-col justify-center items-center rounded-lg mb-4 break-inside-avoid shadow-md"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false }}
                >
                    <h2 className="text-2xl text-primary font-semibold mb-3">{title}</h2>
                    <div className="flex gap-6 text-primary text-2xl">
                        {socialLinks.map((link, i) => (
                            <motion.a
                                key={i}
                                href={link.href}
                                aria-label={link.label}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="hover:text-secondary-foreground transition-colors"
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <div className={hideOnMobile ? "hidden sm:block" : ""}>
                    {images.slice(3).map((src, i) => (
                        <motion.div
                            key={i + 3}
                            className="mb-4 break-inside-avoid overflow-hidden rounded-lg"
                            variants={fadeInScale}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: false }}
                        >
                            <Image
                                src={src}
                                alt={`Image ${i + 4}`}
                                width={600}
                                height={800}
                                className="w-full h-auto rounded-lg"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
