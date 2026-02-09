import React from 'react';
import { Holding } from '../types';
import { HoldingItem } from './HoldingItem';

interface HoldingsListProps {
    holdings: Holding[];
    title?: string;
}

export const HoldingsList: React.FC<HoldingsListProps> = ({ holdings, title = "Investment Portfolio" }) => {
    const totalValue = holdings.reduce((acc, curr) => acc + curr.value, 0);
    const dayChange = holdings.reduce((acc, curr) => acc + (curr.change * curr.quantity), 0);
    const isPositive = dayChange >= 0;

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden transition-colors">
            <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold text-canDark dark:text-white tracking-tight">{title}</h2>
                    <p className={`text-xs font-bold mt-1 ${isPositive ? 'text-green-600' : 'text-canRed'}`}>
                        {isPositive ? '+' : ''}${Math.abs(dayChange).toLocaleString('en-CA', { minimumFractionDigits: 2 })} Today
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Total Value</p>
                    <p className="font-black text-lg text-canDark dark:text-white">
                        ${totalValue.toLocaleString('en-CA', { minimumFractionDigits: 2 })}
                    </p>
                </div>
            </div>

            <div className="divide-y divide-gray-50 dark:divide-slate-800">
                {holdings.length > 0 ? (
                    holdings.map((h) => (
                        <HoldingItem key={h.id} holding={h} />
                    ))
                ) : (
                    <div className="p-20 text-center">
                        <p className="text-gray-400 font-medium">No holdings to display.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
