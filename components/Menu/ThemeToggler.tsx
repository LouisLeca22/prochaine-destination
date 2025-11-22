'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggler() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);


    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const isDark = currentTheme === 'dark';

    return (
        <motion.button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="fixed top-5 left-25 cursor-pointer p-4 rounded-full bg-secondary text-primary-foreground "
            whileTap={{ scale: 0.9 }}
            whileHover={{ rotate: 15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            aria-label="Changer de thème"
        >
            <motion.div
                key={isDark ? 'moon' : 'sun'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                {isDark ? <Moon size={20} /> : <Sun size={20} />}
            </motion.div>
        </motion.button>
    );
}
