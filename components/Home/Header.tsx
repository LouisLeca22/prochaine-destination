"use client"

import SplitText from "@/components/ui/SplitText";

const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

function Header() {
    return (
        <header className="flex flex-col min-h-screen items-center justify-center">
            <SplitText
                text="Hello, GSAP!"
                className="text-6xl font-extrabold font-josefin-sans"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
            />
        </header>
    )
}
export default Header