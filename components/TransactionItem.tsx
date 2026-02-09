import React from 'react';
import { MapPin } from 'lucide-react';
import { Transaction } from '../types';
import { TransactionIcon } from './TransactionIcon';
import { BankLogo } from './BankLogo';

interface TransactionItemProps {
    transaction: Transaction;
    bankName?: string;
    accountNumber?: string;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({ transaction: t, bankName, accountNumber }) => {
    const isPositive = t.type === 'SELL' || t.type === 'Credit';

    return (
        <div className="p-4 hover:bg-gray-50 dark:hover:bg-slate-800/30 transition-all group">
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                    <div className="shrink-0">
                        <TransactionIcon type={t.type} />
                    </div>

                    <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-sm text-canDark dark:text-white truncate">{t.merchant}</p>
                            {t.pending && (
                                <span className="text-[9px] font-bold bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-1.5 rounded tracking-tighter animate-pulse">PENDING</span>
                            )}
                            {t.exchange && (
                                <span className="text-[9px] font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-1.5 rounded tracking-tighter uppercase">{t.exchange}</span>
                            )}
                        </div>

                        <div className="flex items-center gap-2 mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                            {bankName && (
                                <div className="flex items-center gap-1 border-r border-gray-200 dark:border-slate-700 pr-2">
                                    <BankLogo bankName={bankName} className="w-3 h-3" />
                                    <span className="font-mono pt-0.5">•• {accountNumber?.slice(-4)}</span>
                                </div>
                            )}
                            <span className="whitespace-nowrap">{t.date}</span>
                            {t.address && (
                                <>
                                    <span>•</span>
                                    <span className="flex items-center gap-0.5 truncate max-w-[120px]">
                                        <MapPin size={10} />
                                        {t.address}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="text-right shrink-0">
                    <p className={`font-black text-sm ${isPositive ? 'text-green-600' : 'text-canDark dark:text-white'}`}>
                        {isPositive ? '+' : '-'}
                        ${t.amount.toLocaleString('en-CA', { minimumFractionDigits: 2 })}
                    </p>
                </div>
            </div>
        </div>
    );
};
