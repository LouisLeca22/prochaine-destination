'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { activities, restaurants, accommodations, RestaurantType, AccommodationType, ActivityType } from '@/data'
import { useCurrentLocale, useScopedI18n } from '@/locales/client'
import Link from 'next/link'

interface Result {
    id: number
    nameFR: string
    nameEN: string
    type: ActivityType | RestaurantType | AccommodationType
    category: "activities" | "restaurants" | "accommodations"
}

export default function GlobalSearch() {
    const locale = useCurrentLocale()
    const t1 = useScopedI18n("Types")
    const t2 = useScopedI18n("Menu")

    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<Result[]>([])

    const data: Result[] = useMemo(
        () => [...activities, ...restaurants, ...accommodations],

        []
    )

    function handleClose() {
        setQuery("")
        setResults([])
        setIsOpen(false)
    }

    useEffect(() => {
        if (!query.trim()) {
            setResults([])
            return
        }

        const q = query.toLowerCase()

        const filtered = data.filter((item) => {
            const nameMatch =
                locale === "fr"
                    ? item.nameFR.toLowerCase().includes(q)
                    : item.nameEN.toLowerCase().includes(q)

            const translatedType = t1(item.type)?.toLowerCase?.() || ""
            const typeMatch = translatedType.includes(q)

            return nameMatch || typeMatch
        })

        setResults(filtered)
    }, [query, data, locale, t1])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
                e.preventDefault()
                setIsOpen((prev) => !prev)
            }

            if (e.key === 'Escape') {
                setIsOpen(false)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <>

            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed top-5 left-45 z-50 p-5 cursor-pointer rounded-full bg-secondary text-primary-foreground"
                whileTap={{ scale: 0.9 }}
                whileHover={{ rotate: 15 }}
                transition={{ type: 'spring', stiffness: 300 }}
                aria-label="Ouvrir la barre de recherche"
            >
                <Search size={20} />
            </motion.button>


            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            onClick={() => handleClose()}
                            className="fixed top-8 right-6 text-secondary hover:scale-130 z-60"
                            aria-label="Fermer la recherche"
                        >
                            <X className="w-8 h-8 pointer cursor-pointer" />
                        </button>


                        <motion.div
                            className="bg-secondary rounded-2xl shadow-2xl w-full max-w-5xl mx-4 p-6 flex flex-col relative min-h-80 max-h-[480px]"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -30, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >

                            <div className="flex items-center border-b-2 border-primary-foreground pb-2">
                                <Search className="text-primary-foreground w-5 h-5 mr-3" />
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder={t2("searchPlaceholder")}
                                    autoFocus
                                    className="w-full bg-transparent outline-none text-lg text-primary-foreground placeholder-primary-foreground"
                                />
                                {query && (
                                    <button
                                        onClick={() => setQuery('')}
                                        className="text-primary-foreground hover:text-cyan-90 transition-colors cursor-pointer"
                                        aria-label="Effacer la recherche"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                )}
                            </div>


                            <div className="flex-1 overflow-y-auto mt-4 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700">
                                <AnimatePresence mode="wait">
                                    {query ? (
                                        results.length > 0 ? (
                                            <motion.ul
                                                key="results"
                                                className="divide-y divide-neutral-600"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                {results.map((item) => (
                                                    <motion.li
                                                        key={item.id + item.category}
                                                        className="py-3 px-2 rounded-lg cursor-pointer transition-colors hover:bg-secondary-foreground"

                                                    >
                                                        <Link href={`/${item.category}?id=${item.id}`} onClick={() => handleClose()} className="flex justify-between items-center">
                                                            <span className="text-primary-foreground font-sm">
                                                                {locale === "fr" ? item.nameFR : item.nameEN}
                                                            </span>
                                                            <span className="text-1xl font-extrabold text-neutral-500">
                                                                {t1(item.type)}
                                                            </span>
                                                        </Link>
                                                    </motion.li>
                                                ))}
                                            </motion.ul>
                                        ) : (
                                            <motion.p
                                                key="no-results"
                                                className="text-neutral-500 text-sm text-center mt-6"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                {t2("noResults")}{' '}
                                                <span className="font-medium">{query}</span>
                                            </motion.p>
                                        )
                                    ) : (
                                        <motion.p
                                            key="placeholder"
                                            className="text-neutral-500 text-sm text-center mt-6"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            {t2("startSearch")}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div >
                        </motion.div >
                    </motion.div >
                )
                }
            </AnimatePresence >
        </>
    )
}
