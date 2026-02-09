import React from 'react';
import { Holding } from '../types';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface HoldingItemProps {
    holding: Holding;
}

export const HoldingItem: React.FC<HoldingItemProps> = ({ holding }) => {
    const isPositive = holding.change >= 0;

    return (
        <div className="p-4 hover:bg-gray-50 dark:hover:bg-slate-800/30 transition-all group">
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                    <div className="bg-gray-100 dark:bg-slate-800 p-3 rounded-lg font-bold text-sm text-gray-700 dark:text-gray-300 w-12 h-12 flex items-center justify-center shrink-0">
                        {holding.symbol.slice(0, 2)}
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h4 className="font-bold text-canDark dark:text-white">{holding.symbol}</h4>
                            <span className="text-xs text-gray-400 dark:text-gray-500 hidden sm:inline">{holding.name}</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            {holding.quantity} shares @ ${holding.price.toFixed(2)}
                        </p>
                    </div>
                </div>

                <div className="text-right">
                    <p className="font-black text-canDark dark:text-white">
                        ${holding.value.toLocaleString('en-CA', { minimumFractionDigits: 2 })}
                    </p>
                    <div className={`flex items-center justify-end gap-1 text-xs font-bold mt-0.5 ${isPositive ? 'text-green-600' : 'text-canRed'}`}>
                        {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                        <span>{isPositive ? '+' : ''}{holding.change.toFixed(2)} ({holding.changePercent.toFixed(2)}%)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
