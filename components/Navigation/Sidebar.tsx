"use client"

import Link from "next/link"
import { useState } from "react"

import { motion, Variants } from "framer-motion"

function ToggleButton({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <button onClick={() => setOpen(prev => !prev)} className="w-[50px] h-[50px] rounded-full fixed top-[25px] left-[25px] cursor-pointer bg-transparent border-0">
            Button
        </button>
    )
}

function NavLinks() {
    return (
        <div className="absolute w-full h-full flex flex-col items-center justify-center gap-1.5">
            <Link className="text-3xl" href="#">Home</Link>
            <Link className="text-3xl" href="#">Projects</Link>
            <Link className="text-3xl" href="#">Works</Link>
            <Link className="text-3xl" href="#">Contact</Link>
        </div>
    )
}

function Sidebar() {
    const [open, setOpen] = useState(false)


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
        <motion.div animate={open ? "open" : "closed"} className="flex flex-col items-center justify-center bg-cyan-700 text-white dark:bg-white dark:text-cyan-700">
            <motion.div variants={variants} className="fixed top-0 left-0 bottom-0 w-[400px] bg-amber-300">
                <NavLinks />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    )
}


export default Sidebar