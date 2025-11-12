import React from "react";

interface SeparatorProps {
    width?: string;
    className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ width = "w-24", className = "" }) => {
    return (
        <div
            className={`h-1 mb-4 bg-linear-to-r from-cyan-400 to-cyan-600 rounded-full ${width} ${className}`}
        />
    );
};

export default Separator;
