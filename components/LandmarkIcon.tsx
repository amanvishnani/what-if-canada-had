import React from 'react';

interface LandmarkIconProps {
    size?: number;
    className?: string;
}

export const LandmarkIcon: React.FC<LandmarkIconProps> = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <line x1="2" y1="22" x2="22" y2="22"></line>
        <line x1="18" y1="11" x2="18" y2="18"></line>
        <line x1="12" y1="11" x2="12" y2="18"></line>
        <line x1="6" y1="11" x2="6" y2="18"></line>
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
    </svg>
);
