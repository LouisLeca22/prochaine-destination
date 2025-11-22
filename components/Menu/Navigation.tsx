"use client"

import Link from "next/link"
import { useSidebarStore } from '@/store/sidebarStore'


import { motion, Variants } from "framer-motion"
import { useScopedI18n } from "@/locales/client"

function ToggleButton() {
    const toggle = useSidebarStore(state => state.toggle)
    const open = useSidebarStore(state => state.open)
    return (
        <button
            onClick={toggle}
            className="w-[50px] h-[50px] rounded-full fixed top-[23px] left-[25px] px-3  flex justify-center items-center bg-transparent border-0 cursor-pointer z-50"
            aria-label="Toggle menu"
        >
            <motion.svg
                width="30"
                height="30"
                viewBox="0 0 23 23"
                initial={false}
                animate={open ? "open" : "closed"}
                whileHover={{ rotate: 15 }}
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
    const setOpen = useSidebarStore(state => state.setOpen)

    const t = useScopedI18n("Menu")

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

    const links = [
        { key: "explore", href: "/explore" },
        { key: "stay", href: "/accommodations" },
        { key: "taste", href: "/restaurants" },
        { key: "enjoy", href: "/activities" },
    ] as const

    return (
        <motion.div
            variants={containerVariants}
            className="w-full h-full flex flex-col items-center justify-center gap-10 font-bold uppercase"
        >
            {links.map((link) => (
                <motion.div key={link.key} variants={itemVariants}>
                    <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="relative text-3xl text-primary-foreground transition-all duration-300 group"
                    >
                        {t(link.key)}
                        <span
                            className="absolute -bottom-px left-1.5 w-full h-[80%] bg-secondary-foreground opacity-0 translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 -z-10"
                        ></span>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    )
}

function FooterLinks() {
    const t = useScopedI18n("Menu")
    const setOpen = useSidebarStore(state => state.setOpen)

    const containerVariants = {
        open: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    };

    const itemVariants = {
        closed: { opacity: 0, y: 50 },
        open: { opacity: 1, y: 0 },
    };

    const links = [
        { key: "press", href: "/press" },
        { key: "groups", href: "/groups" },
        { key: "partners", href: "/partners" },
        { key: "business", href: "/business" },
    ] as const

    return (
        <motion.div
            variants={containerVariants}
            className="absolute bottom-10 w-full flex justify-center gap-6 text-primary-foreground font-medium uppercase"
        >
            {links.map((link) => (
                <motion.div key={link.key} variants={itemVariants}>
                    <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="relative text-sm tracking-wide transition-all duration-300 group"
                    >
                        {t(link.key)}
                        <span
                            className="absolute left-0 bottom-[-3px] w-0 h-0.5 bg-secondary-foreground transition-all duration-300 group-hover:w-full"
                        ></span>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    )
}

function Navigation() {
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
            clipPath: "circle(26px at 50px 46px)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }
    return (
        <motion.div initial={false} animate={open ? "open" : "closed"} className="flex flex-col items-center justify-center text-primary-foreground">
            <motion.div variants={variants} className="fixed top-0 left-0 bottom-0 w-full md:w-[28vw] bg-secondary" >
                <NavLinks />
                <FooterLinks />
            </motion.div>
            <ToggleButton />
        </motion.div>
    )
}


export default Navigation