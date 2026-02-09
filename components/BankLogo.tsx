import React from 'react';

interface BankLogoProps {
  bankName: string;
  className?: string;
}

export const BankLogo: React.FC<BankLogoProps> = ({ bankName, className = "w-10 h-10" }) => {
  const name = bankName.toLowerCase();

  // Royal Bank (RBC) - Blue shield with yellow accent implication
  if (name.includes('royal') || name.includes('rbc')) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="20" fill="#005DAA"/>
        <path d="M50 20L80 40V80H20V40L50 20Z" fill="#FFC72C"/>
        <text x="50" y="70" textAnchor="middle" fill="#005DAA" fontSize="30" fontWeight="900" fontFamily="sans-serif">RBC</text>
      </svg>
    );
  }

  // TD Bank - Green box with white text
  if (name.includes('td')) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="15" fill="#008A00"/>
        <text x="50" y="65" textAnchor="middle" fill="white" fontSize="45" fontWeight="900" fontFamily="sans-serif" letterSpacing="-2">TD</text>
      </svg>
    );
  }

  // Scotiabank - Red circle with S
  if (name.includes('scotia')) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="#EC111A"/>
        <text x="50" y="70" textAnchor="middle" fill="white" fontSize="50" fontWeight="bold" fontFamily="serif" fontStyle="italic">S</text>
      </svg>
    );
  }

  // Wealthsimple - Gold W
  if (name.includes('wealth')) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="50" fill="#F5B229"/>
        <path d="M25 35L35 65L50 45L65 65L75 35" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  // Tangerine - Orange
  if (name.includes('tangerine')) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="10" fill="#EA700F"/>
        <path d="M30 50L45 65L70 35" stroke="white" strokeWidth="8" strokeLinecap="round"/>
      </svg>
    );
  }

  // EQ Bank - Pink/Black
  if (name.includes('eq')) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="10" fill="#000000"/>
        <text x="50" y="65" textAnchor="middle" fill="#E6007E" fontSize="40" fontWeight="900">EQ</text>
      </svg>
    );
  }

  // Neo - Dark Green/Black
  if (name.includes('neo')) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="20" fill="#1C1C1C"/>
        <text x="50" y="65" textAnchor="middle" fill="#CCFF00" fontSize="35" fontWeight="900">neo</text>
      </svg>
    );
  }

  // Default
  return (
    <div className={`${className} bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-bold`}>
      {bankName[0]}
    </div>
  );
};