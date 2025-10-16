'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'

interface Result {
    id: number
    name: string
    type: string
}

export default function GlobalSearch() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<Result[]>([])

    const data: Result[] = useMemo(
        () => [
            { id: 1, name: 'Hôtel du Port', type: 'Hébergement' },
            { id: 2, name: 'Restaurant La Belle Table', type: 'Restaurant' },
            { id: 3, name: 'Café des Arts', type: 'Restaurant' },
            { id: 4, name: 'Camping de la Forêt', type: 'Hébergement' },
            { id: 5, name: 'Hôtel Central', type: 'Hôtel' },
            { id: 6, name: 'Auberge du Rivage', type: 'Hébergement' },
            { id: 7, name: 'Bistrot du Marché', type: 'Restaurant' },
        ],
        []
    )


    useEffect(() => {
        if (!query.trim()) {
            setResults([])
            return
        }
        const q = query.toLowerCase()
        const filtered = data.filter((item) =>
            item.name.toLowerCase().includes(q)
        )
        setResults(filtered)
    }, [query, data])


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
                e.preventDefault()
                setIsOpen((prev) => !prev)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <>

            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed top-5 left-45 z-50 p-5 cursor-pointer rounded-full bg-amber-300 text-cyan-700"
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
                            onClick={() => setIsOpen(false)}
                            className="fixed top-8 right-6 text-amber-400 hover:scale-130 z-[60]"
                            aria-label="Fermer la recherche"
                        >
                            <X className="w-8 h-8 pointer cursor-pointer" />
                        </button>


                        <motion.div
                            className="bg-amber-400 rounded-2xl shadow-2xl w-full max-w-lg mx-4 p-6 flex flex-col relative min-h-[320px] max-h-[480px]"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -30, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >

                            <div className="flex items-center border-b-2 border-cyan-700 pb-2">
                                <Search className="text-cyan-700 w-5 h-5 mr-3" />
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Rechercher un lieu, un restaurant, un hôtel..."
                                    autoFocus
                                    className="w-full bg-transparent outline-none text-lg text-cyan-700 placeholder-cyan-700"
                                />
                                {query && (
                                    <button
                                        onClick={() => setQuery('')}
                                        className="text-cyan-700 hover:text-cyan-90 transition-colors cursor-pointer"
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
                                                        key={item.id}
                                                        className="py-3 px-2 rounded-lg cursor-pointer transition-colors hover:bg-amber-500"

                                                    >
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-cyan-700 font-sm">
                                                                {item.name}
                                                            </span>
                                                            <span className="text-1xl font-extrabold text-neutral-500">
                                                                {item.type}
                                                            </span>
                                                        </div>
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
                                                Aucun résultat trouvé pour{' '}
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
                                            Tapez quelque chose pour commencer la recherche
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
