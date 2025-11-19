'use client';

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2 } from "lucide-react";

interface AudioPlayerProps {
    src: string;
    title?: string;
    cover?: string;
}

export default function AudioPlayer({ src, title, cover }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => setProgress(audio.currentTime);
        const setAudioDuration = () => setDuration(audio.duration);

        audio.addEventListener("timeupdate", updateProgress);
        audio.addEventListener("loadedmetadata", setAudioDuration);

        return () => {
            audio.removeEventListener("timeupdate", updateProgress);
            audio.removeEventListener("loadedmetadata", setAudioDuration);
        };
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) audio.pause();
        else audio.play();
        setIsPlaying(!isPlaying);
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const audio = audioRef.current;
        if (!audio) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        audio.currentTime = (clickX / rect.width) * duration;
        setProgress(audio.currentTime);
    };

    const formatTime = (time: number) => {
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60).toString().padStart(2, "0");
        return `${min}:${sec}`;
    };

    return (
        <div className="bg-gradient-to-br bg-gradient-to-br from-[#007AB4]  to-[#5FE6A0]  backdrop-blur-xl rounded-3xl p-6 shadow-2xl max-w-md mx-auto flex flex-col gap-4 border border-white/20">
            {cover && (
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 shadow-inner">
                    <img src={cover} alt={title} className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
            )}

            {title && <h3 className="text-xl font-bold text-white drop-shadow-md">{title}</h3>}

            <audio ref={audioRef} src={src} preload="metadata" />

            {/* Progress Bar */}
            <div
                className="w-full h-2 bg-white/20 rounded-full cursor-pointer overflow-hidden"
                onClick={handleProgressClick}
            >
                <motion.div
                    className="h-2 bg-secondary rounded-full"
                    style={{ width: `${(progress / duration) * 100 || 0}%` }}
                    layout
                />
            </div>

            <div className="flex justify-between text-sm text-white/80">
                <span>{formatTime(progress)}</span>
                <span>{formatTime(duration)}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-2">
                <motion.button
                    onClick={togglePlay}
                    whileTap={{ scale: 0.9 }}
                    className="bg-secondary backdrop-blur-md text-primary-foreground p-3 rounded-full shadow-lg hover:bg-secondary-foreground hover:text-white transition"
                >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </motion.button>

                <div className="flex items-center gap-2">
                    <Volume2 size={20} className="text-white/80" />
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        defaultValue={1}
                        onChange={(e) => {
                            if (audioRef.current) audioRef.current.volume = parseFloat(e.target.value);
                        }}
                        className="w-24 h-1 rounded-lg accent-white"
                    />
                </div>
            </div>
        </div>
    );
}