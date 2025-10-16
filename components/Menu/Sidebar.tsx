"use client"

import Link from "next/link"
import { useSidebarStore } from '@/store/sidebarStore'


import { motion, Variants } from "framer-motion"

function ToggleButton() {
    const toggle = useSidebarStore(state => state.toggle)
    const open = useSidebarStore(state => state.open)
    return (
        <button
            onClick={toggle}
            className="w-[50px] h-[50px] rounded-full fixed top-[25px] left-[25px] px-3 pt-[3px] flex justify-center items-center bg-transparent border-0 cursor-pointer z-50"
            aria-label="Toggle menu"
        >
            <motion.svg
                width="30"
                height="30"
                viewBox="0 0 23 23"
                initial={false}
                animate={open ? "open" : "closed"}
            >
                <motion.path
                    stroke="#0e7490"
                    strokeWidth="2"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                    transition={{ duration: 0.3 }}
                />
                <motion.path
                    stroke="#0e7490"
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                />
                <motion.path
                    stroke="#0e7490"
                    strokeWidth="2"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.svg>
        </button>
    )
}

function NavLinks() {
    const containerVariants = {
        open: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const itemVariants = {
        closed: { opacity: 0, y: 20 },
        open: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            variants={containerVariants}
            className="w-full h-full flex flex-col items-center justify-center gap-10 font-bold uppercase"
        >
            {["Explorer", "Séjourner", "Déguster", "Profiter"].map((text) => (
                <motion.div key={text} variants={itemVariants}>
                    <Link
                        href="#"
                        className="relative text-3xl text-cyan-700 transition-all duration-300 group"
                    >
                        {text}
                        <span
                            className="absolute bottom-[-1px] left-[6px] w-full h-[65%] bg-amber-400 opacity-0 translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 -z-10"
                        ></span>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    )
}

function FooterLinks() {
    const containerVariants = {
        open: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    };

    const itemVariants = {
        closed: { opacity: 0, y: 50 },
        open: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            variants={containerVariants}
            className="absolute bottom-10 w-full flex justify-center gap-6 text-cyan-700 font-medium uppercase"
        >
            {["Presse", "Groupe", "Pro", "Affaire"].map((text) => (
                <motion.div key={text} variants={itemVariants}>
                    <Link
                        href="#"
                        className="relative text-sm tracking-wide transition-all duration-300 group"
                    >
                        {text}
                        <span
                            className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-amber-400 transition-all duration-300 group-hover:w-full"
                        ></span>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    )
}

function Sidebar() {
    const open = useSidebarStore(state => state.open)
    const variants: Variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }
    return (
        <motion.div initial={false} animate={open ? "open" : "closed"} className="flex flex-col items-center justify-center text-cyan-700">
            <motion.div variants={variants} className="fixed top-0 left-0 bottom-0 w-full md:w-1/4 bg-amber-300 ">
                <NavLinks />
                <FooterLinks />
            </motion.div>
            <ToggleButton />
        </motion.div>
    )
}


export default Sidebar