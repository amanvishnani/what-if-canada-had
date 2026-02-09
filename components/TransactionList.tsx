import React from 'react';
import { Transaction, Account } from '../types';
import { TransactionItem } from './TransactionItem';

interface TransactionListProps {
    transactions: Transaction[];
    accounts: Account[];
    title?: string;
    limit?: number;
    showLoadMore?: boolean;
}

export const TransactionList: React.FC<TransactionListProps> = ({
    transactions,
    accounts,
    title = "Recent Activity",
    limit,
    showLoadMore = true
}) => {
    const displayTransactions = limit ? transactions.slice(0, limit) : transactions;

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden transition-colors">
            <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center">
                <h2 className="text-xl font-bold text-canDark dark:text-white tracking-tight">{title}</h2>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-black text-green-600 uppercase tracking-tighter">Real-time Feed</span>
                </div>
            </div>

            <div className="divide-y divide-gray-50 dark:divide-slate-800">
                {displayTransactions.length > 0 ? (
                    displayTransactions.map((t) => {
                        const account = accounts.find(a => a.id === t.accountRef);
                        return (
                            <TransactionItem
                                key={t.id}
                                transaction={t}
                                bankName={account?.bankName}
                                accountNumber={account?.accountNumber}
                            />
                        );
                    })
                ) : (
                    <div className="p-20 text-center">
                        <p className="text-gray-400 font-medium">No recent transactions to display.</p>
                    </div>
                )}
            </div>

            {showLoadMore && transactions.length > (limit || 0) && (
                <div className="p-4 bg-gray-50 dark:bg-slate-800/20 text-center border-t border-gray-50 dark:border-slate-800">
                    <button className="text-xs font-bold text-gray-400 hover:text-canRed transition-colors uppercase tracking-widest">
                        Load More Transactions
                    </button>
                </div>
            )}
        </div>
    );
};
