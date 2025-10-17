"use client"

import ScrollFloat from '@/components/ui/ScrollFloat';
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import Image from 'next/image';
import { useRef } from 'react';



type Item = {
    id: number,
    title: string,
    img: string,
    desc: string
}

const items: Item[] = [
    {
        id: 1,
        title: "React commerce",
        img: "/images/header1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio libero inventore eum vel, voluptates cupiditate. Harum sequi ut repellat tempora."
    },
    {
        id: 2,
        title: "Typescript",
        img: "/images/header2.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio libero inventore eum vel, voluptates cupiditate. Harum sequi ut repellat tempora."
    },
    {
        id: 3,
        title: "Php",
        img: "/images/header3.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio libero inventore eum vel, voluptates cupiditate. Harum sequi ut repellat tempora."
    },
    {
        id: 4,
        title: "Nextjs",
        img: "/images/header4.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio libero inventore eum vel, voluptates cupiditate. Harum sequi ut repellat tempora."
    },
    {
        id: 5,
        title: "Vanilla Js",
        img: "/images/header5.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio libero inventore eum vel, voluptates cupiditate. Harum sequi ut repellat tempora."
    }
]

const Headline = ({ item, reverse }: { item: Item, reverse: boolean }) => {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({ target: ref })

    const y = useTransform(scrollYProgress, [0, 1.5], [-100, 100])

    return (<section className='h-[80vh] snap-center'>
        <div className="flex items-centerjustify-center w-full h-full overflow-hidden">
            <div
                className={`max-w-[1366px] h-full m-auto flex items-center justify-center gap-3 ${reverse ? "flex-row-reverse" : ""
                    }`}
            >                <div ref={ref} className="flex-1 h-full  relative">
                    <Image
                        fill
                        className="object-cover p-10 w-full h-full"
                        src={item.img}
                        alt={item.title}
                    />
                </div>
                <motion.div className="flex-1 flex flex-col justify-center items-center text-center h-full  gap-3" style={{ y }}>
                    <h2 className="text-2xl">{item.title}</h2>
                    <p className="text-1xl">{item.desc}</p>
                    <button className="bg-cyan-500 border-none rounded-lg p-2 w-[200px] cursor-pointer">
                        Voir plus
                    </button>
                </motion.div>
            </div>
        </div>
    </section>)
}


function Headlines() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })
    return (
        <div className="relative" ref={ref}>
            <div className='sticky z-40 bg-background  top-0 left-0 pt-10 pb-4 px-100 text-center'>
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                    containerClassName='text-cyan-500 font-inter font-bold'
                >
                    À la une
                </ScrollFloat>
                <motion.div style={{ scaleX }} className='h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full'></motion.div>
            </div>
            {items.map((item, index) => {
                return <Headline item={item} key={item.id} reverse={index % 2 !== 0} />
            })}

        </div>
    )
}
export default Headlines