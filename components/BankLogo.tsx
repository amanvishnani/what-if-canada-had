import React from 'react';

interface BankLogoProps {
  bankName: string;
  className?: string;
}

export const BankLogo: React.FC<BankLogoProps> = ({ bankName, className = "w-10 h-10" }) => {
  const name = bankName.toLowerCase();

  // Royal Bank (RBC)
  if (name.includes('royal') || name.includes('rbc')) {
    return (
      <img src="/logos/rbc.png" style={{ width: '30%', height: '30%' }} alt="RBC Logo" className={`${className} object-contain`} />
    );
  }

  // TD Bank
  if (name.includes('td')) {
    return (
      <img src="/logos/TD.png" alt="TD Logo" className={`${className} object-contain`} />
    );
  }

  // Scotiabank
  if (name.includes('scotia')) {
    return (
      <img src="/logos/scotiabank.svg" alt="Scotiabank Logo" className={`${className} object-contain`} />
    );
  }

  // Wealthsimple
  if (name.includes('wealth')) {
    return (
      <img src="/logos/wealthsimple.png" alt="Wealthsimple Logo" className={`${className} object-contain`} />
    );
  }

  // Tangerine - Orange
  if (name.includes('tangerine')) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="10" fill="#EA700F" />
        <path d="M30 50L45 65L70 35" stroke="white" strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  }

  // EQ Bank - Pink/Black
  if (name.includes('eq')) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="10" fill="#000000" />
        <text x="50" y="65" textAnchor="middle" fill="#E6007E" fontSize="40" fontWeight="900">EQ</text>
      </svg>
    );
  }

  // Neo - Dark Green/Black
  if (name.includes('neo')) {
    return (
      <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="20" fill="#1C1C1C" />
        <text x="50" y="65" textAnchor="middle" fill="#CCFF00" fontSize="35" fontWeight="900">neo</text>
      </svg>
    );
  }

  // Default
  return (
    <div className={`${className} bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-bold overflow-hidden`}>
      {bankName[0]}
    </div>
  );
};