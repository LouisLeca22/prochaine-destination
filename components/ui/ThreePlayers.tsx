'use client';

import AudioPlayer from "./AudioPlayer";
import { motion } from "framer-motion"

interface PlayersProps {
    srcs: [string, string, string]
    titles: [string, string, string]
    covers: [string, string, string]
}

export default function ThreePlayers({ srcs, titles, covers }: PlayersProps) {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                    whileHover={{ scale: 1.04 }}
                >
                    <AudioPlayer
                        src={srcs[i]}
                        title={titles[i]}
                        cover={covers[i]}
                    />
                </motion.div>
            ))}
        </div>
    );
}
