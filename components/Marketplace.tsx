import React from 'react';
import { ArrowRight, Check, Star, AlertCircle } from 'lucide-react';
import { BankLogo } from './BankLogo';

const OFFERS = [
  {
    id: 1,
    provider: 'Tangerine',
    product: 'No-Fee Daily Chequing',
    highlight: 'Earn 6.00% interest for 5 months',
    matchScore: 98,
    type: 'Bank Account'
  },
  {
    id: 2,
    provider: 'EQ Bank',
    product: 'Notice Savings Account',
    highlight: '4.50% interest on every dollar',
    matchScore: 95,
    type: 'Savings'
  },
  {
    id: 3,
    provider: 'Neo Financial',
    product: 'Neo Credit',
    highlight: 'Up to 4% cashback on gas & grocery',
    matchScore: 88,
    type: 'Credit Card'
  }
];

export const Marketplace: React.FC<{ darkMode?: boolean }> = ({ darkMode }) => {
  return (
    <div className="space-y-8 animate-fade-in font-sans">
      <div className="bg-canDark dark:bg-slate-900 text-white p-8 rounded-lg relative overflow-hidden border-l-8 border-yellow-400 shadow-lg">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-2 text-yellow-400">
            <Star className="fill-current" size={20} />
            <span className="font-bold uppercase tracking-wider text-xs">Recommended Action</span>
          </div>
          <h2 className="text-3xl font-black mb-4">You could save $450/year.</h2>
          <p className="text-gray-300 mb-6 text-lg">
            Based on your transaction history, we found certified financial products that better match your spending habits.
            All providers are regulated by the <strong>Financial Consumer Agency of Canada (FCAC)</strong>.
          </p>
          <button className="bg-white text-canDark px-6 py-3 rounded font-bold hover:bg-gray-100 transition-colors shadow-md">
            Compare All 12 Offers
          </button>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <h3 className="text-xl font-bold text-canDark dark:text-white border-b border-gray-200 dark:border-slate-800 pb-2 transition-colors">Personalized Opportunities</h3>

      <div className="grid gap-4">
        {OFFERS.map((offer) => (
          <div key={offer.id} className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-canRed dark:hover:border-canRed transition-all cursor-pointer group">

            <div className="flex items-center gap-6 flex-1">
              <BankLogo bankName={offer.provider} className="w-16 h-16 shrink-0" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-2 py-0.5 rounded uppercase tracking-wide">
                    {offer.matchScore}% Match
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{offer.type}</span>
                </div>
                <h4 className="font-bold text-xl text-canDark dark:text-white">{offer.product}</h4>
                <p className="text-gray-500 dark:text-gray-400 font-medium">{offer.provider}</p>
              </div>
            </div>

            <div className="flex-1 md:border-l md:border-r border-gray-100 dark:border-slate-800 md:px-6 flex flex-col justify-center">
              <p className="font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                {offer.highlight}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                <Check size={12} className="text-green-500" /> Verified by Open Banking API
              </p>
            </div>

            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-canDark dark:bg-slate-800 text-white px-6 py-3 rounded font-bold group-hover:bg-canRed transition-colors shadow-sm">
                View Details <ArrowRight size={18} />
              </button>
            </div>

          </div>
        ))}
      </div>

      <div className="p-6 bg-gray-50 dark:bg-slate-900/50 rounded-lg border border-gray-200 dark:border-slate-800 mt-8 flex gap-4 items-start transition-colors">
        <AlertCircle className="text-canDark dark:text-gray-400 shrink-0" size={24} />
        <div>
          <h4 className="font-bold text-canDark dark:text-white mb-1">Consumer Protection</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            MapleSync is a prototype service of the Government of Canada. We do not sell your data.
            These matches are generated locally on your device using the Open Banking Standards Registry.
          </p>
          <a href="#" className="text-sm font-bold text-canRed hover:underline">Learn more about your rights</a>
        </div>
      </div>
    </div>
  );
};