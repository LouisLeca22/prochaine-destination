"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import ScrollFloat from "./ScrollFloat";
import Separator from "./Separator";
import Image from "next/image";
import { activities, BaseItem } from "@/data";
import { getRandomItems } from "@/utils";

interface Step {
    question: string
    answers: string[]
}

export default function QuizComponent({ steps, title, description, items }: { items: BaseItem[], steps: Step[], title: string, description: string }) {


    const item = getRandomItems(items, 1)[0]

    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const isLast = current === steps.length - 1;

    const t1 = useScopedI18n("Types")
    const t2 = useScopedI18n("Details")
    const t3 = useScopedI18n("Components")
    const locale = useCurrentLocale()

    const handleAnswer = (answer: string) => {
        const updated = [...answers, answer];
        setAnswers(updated);

        if (!isLast) {
            setCurrent(current + 1);
        } else {
            console.log("RESULT:", updated);
        }
    };

    const cardVariant: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="max-w-2xl mx-auto my-20 px-6 sm:px-0">
            <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=0%"
                scrollEnd="bottom bottom-=50%"
                stagger={0.03}
                textClassName="text-2xl whitespace-nowrap sm:text-3xl font-josefin-sans font-bold text-primary"
            >
                {title}
            </ScrollFloat>
            <Separator width="w-48 mb-20 " />

            <p className="text-center text-xl mt-2 mb-10">
                {description}
            </p>

            {answers.length <= 3 &&
                (<>
                    <div className="w-full bg-gray-200 h-2 rounded-full mb-10 overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            animate={{ width: `${((current) / steps.length) * 100}%` }}
                            transition={{ duration: 0.4 }}
                        />
                    </div>


                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-3xl shadow-xl p-8"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">
                                {steps[current].question}
                            </h3>

                            <div className="grid sm:grid-cols-3 gap-4">
                                {steps[current].answers.map((ans, i) => (
                                    <motion.button
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleAnswer(ans)}
                                        className="p-5 rounded-2xl border text-primary-foreground cursor-pointer border-gray-200 bg-gray-50 hover:bg-secondary hover:text-white transition-all shadow-sm"
                                    >
                                        {ans}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </>)
            }
            {answers.length === 4 && (

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-10 p-6 rounded-3xl bg-primary text-white text-center shadow-xl"
                >
                    <h3 className="text-xl font-bold mb-3">✨ {t3("result")}</h3>

                    <motion.a
                        href={`/${item.category}?id=${item.id}`}
                        className={`inline-block bg-white w-full shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 `}
                        variants={cardVariant}
                    >
                        <div className="relative w-full h-56">
                            <Image
                                src={item.images[0]}
                                alt={locale === "fr" ? item.nameFR : item.nameEN}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="p-6 flex flex-col items-center justify-center text-center">
                            <h3 className="text-xl text-primary font-semibold mb-2 h-12 line-clamp-2">{locale === "fr" ? item.nameFR : item.nameEN}</h3>
                            <span className="text-primary-foreground uppercase tracking-wide font-medium font-inter">
                                {t1(item.type)}
                            </span>
                            <span className=" font-semibold text-sm text-muted-foreground">
                                {t2("from")} {item.price} €
                            </span>
                        </div>
                    </motion.a>
                </motion.div>
            )}
        </section>
    );
}
