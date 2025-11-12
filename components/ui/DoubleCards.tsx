import { motion } from 'framer-motion';
import Image from 'next/image';
import Separator from '@/components/ui/Separator';

interface DoubleCardsProps {
    title: string;
    description: string;
    images: [string, string];
    imageAlt?: string;
    reverse?: boolean;
    smallTitle?: boolean
}

export const DoubleCards = ({
    title,
    description,
    images,
    imageAlt = 'Discover image',
    reverse = false,
    smallTitle = false
}: DoubleCardsProps) => {
    return (
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            {/* Images section */}
            <motion.div
                className={`grid grid-cols-2 gap-4 ${reverse ? 'md:order-2' : ''}`}
                initial={{ opacity: 0, x: reverse ? 120 : -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{
                    amount: 0.5,
                    once: true
                }}
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

            {/* Text section */}
            <motion.div
                className={`text-center ${reverse ? 'md:order-1' : ''}`}
                initial={{ opacity: 0, x: reverse ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                viewport={{
                    amount: 0.5,
                    once: true
                }}
            >
                <h2 className={`${smallTitle ? "md:text-3xl" : "md:text-4xl"
                    } text-2xl font-josefin-sans font-bold text-primary mb-4`}>{title}</h2>
                <Separator width="w-40" className="mx-auto" />
                <p className="text-lg leading-relaxed mt-10">{description}</p>
            </motion.div>
        </div>
    );
};
