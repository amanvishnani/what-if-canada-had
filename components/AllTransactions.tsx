import React from 'react';
import { Transaction, Account } from '../types';
import { TransactionList } from './TransactionList';

interface AllTransactionsProps {
    transactions: Transaction[];
    accounts: Account[];
}

export const AllTransactions: React.FC<AllTransactionsProps> = ({ transactions, accounts }) => {
    return (
        <div className="space-y-8 animate-fade-in max-w-5xl mx-auto pb-20">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-black text-canDark dark:text-white tracking-tighter">All Transactions</h1>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-full border border-gray-100 dark:border-slate-800">
                    Viewing All Accounts
                </div>
            </div>

            <TransactionList
                transactions={transactions}
                accounts={accounts}
                title="Consolidated Transaction Stream"
                showLoadMore={true}
            />
        </div>
    );
};
