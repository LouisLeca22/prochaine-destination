import { motion } from 'framer-motion';
import Image from 'next/image';
import Separator from '@/components/ui/Separator';
import Link from 'next/link';
import { useScopedI18n } from '@/locales/client';

interface DiscoverSectionProps {
    title: string;
    description: string;
    images: [string, string, string, string];
    imageAlt?: string;
    reverse?: boolean;
}

export const SquareCards = ({
    title,
    description,
    images,
    imageAlt = 'Discover image',
    reverse = false,
}: DiscoverSectionProps) => {
    const t2 = useScopedI18n("Components")
    return (
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <motion.div
                className={`grid grid-cols-2 gap-4 ${reverse ? 'md:order-2' : ''}`}
                initial={{ opacity: 0, x: reverse ? 120 : -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{ once: true, amount: .5 }}
            >
                {images.map((src, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            show: { opacity: 1, y: 0 },
                        }}
                        className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    >
                        <Image src={src} alt={`${imageAlt} ${i + 1}`} fill className="object-cover" />
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className={`text-center ${reverse ? 'md:order-1' : ''}`}
                initial={{ opacity: 0, x: reverse ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true, amount: .5 }}
            >
                <h2 className="text-4xl font-josefin-sans font-bold text-primary mb-4">{title}</h2>
                <Separator width="w-40" className="mx-auto" />
                <p className="text-lg leading-relaxed mt-10">{description}</p>
                <Link href="http://www.linkedin.com/in/louis-leca" target="_blank"
                    className="inline-block bg-secondary text-primary-foreground px-2 py-2 w-1/3 rounded-lg mt-6 text-sm font-medium hover:text-white hover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md transition">
                    {t2("interesting")}
                </Link>
            </motion.div>
        </div>
    );
};
