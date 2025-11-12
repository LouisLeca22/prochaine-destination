import { motion } from "framer-motion"
import Link from "next/link";

type LinkProps = {
    href: string
    text: string
}

export default function AnimatedLink({ href, text }: LinkProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
            <Link
                href={href}
                className="relative bg-secondary text-primary-foreground font-medium border-none rounded-xl px-4 py-2 w-[200px] flex justify-center items-center overflow-hidden hover:text-white chover:bg-linear-to-r from-emerald-400 to-emerald-300 shadow-md"
            >
                <motion.span
                    className="absolute inset-0  opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.span
                    className="relative z-10"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 250 }}
                >
                    {text}
                </motion.span>
            </Link>
        </motion.div>
    );
}