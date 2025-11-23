'use client';

import AudioPlayer from "./AudioPlayer";

interface PlayersProps {
    srcs: [string, string, string]
    titles: [string, string, string]
    covers: [string, string, string]
}

export default function ThreePlayers({ srcs, titles, covers }: PlayersProps) {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 my-8">

            <AudioPlayer
                src={srcs[0]}
                title={titles[0]}
                cover={covers[0]}
            />

            <AudioPlayer
                src={srcs[1]}
                title={titles[1]}
                cover={covers[1]}
            />

            <AudioPlayer
                src={srcs[2]}
                title={titles[2]}
                cover={covers[2]}
            />

        </div>
    );
}
