import React from 'react';
import { MapPin } from 'lucide-react';
import { Transaction } from '../types';
import { TransactionIcon } from './TransactionIcon';

interface TransactionItemProps {
    transaction: Transaction;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({ transaction: t }) => {
    const isPositive = t.type === 'SELL' || t.type === 'Credit' || t.type === 'Payment';

    return (
        <div className="p-6 hover:bg-gray-50 dark:hover:bg-slate-800/30 transition-all group">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-4">
                    <TransactionIcon type={t.type} />
                    <div>
                        <div className="flex items-center gap-2">
                            <p className="font-black text-canDark dark:text-white">{t.merchant}</p>
                            {t.pending && (
                                <span className="text-[9px] font-bold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-1.5 py-0.5 rounded tracking-tighter animate-pulse">PENDING</span>
                            )}
                            {t.exchange && (
                                <span className="text-[9px] font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-1.5 py-0.5 rounded tracking-tighter uppercase">{t.exchange}</span>
                            )}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 flex flex-wrap items-center gap-2 mt-0.5">
                            <span>{t.date}</span>
                            <span>•</span>
                            <span className="uppercase font-bold text-[10px]">{t.type}</span>
                            {(t.address || t.description) && <span>•</span>}
                            <span className="italic">{t.description}</span>
                        </div>
                        {t.address && (
                            <div className="flex items-center gap-1 mt-1 text-gray-400">
                                <MapPin size={10} />
                                <span className="text-[10px] font-medium">{t.address}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="text-right w-full md:w-auto">
                    <p className={`text-lg font-black ${isPositive ? 'text-green-600' : 'text-canDark dark:text-white'}`}>
                        {isPositive ? '+' : '-'}
                        ${t.amount.toLocaleString('en-CA', { minimumFractionDigits: 2 })}
                    </p>
                    <p className="text-[9px] font-mono text-gray-300 dark:text-gray-600 uppercase tracking-tighter mt-1">
                        ID: {t.uuid}
                    </p>
                </div>
            </div>
        </div>
    );
};
