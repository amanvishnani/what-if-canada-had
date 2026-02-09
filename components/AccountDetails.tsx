import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Account, Transaction } from '../types';
import {
    ArrowLeft,
    Clock
} from 'lucide-react';
import { AccountHero } from './AccountHero';
import { TransactionItem } from './TransactionItem';
import { LandmarkIcon } from './LandmarkIcon';

interface AccountDetailsProps {
    accounts: Account[];
    transactions: Transaction[];
}

export const AccountDetails: React.FC<AccountDetailsProps> = ({ accounts, transactions }) => {
    const { accountId } = useParams();
    const navigate = useNavigate();

    const account = accounts.find(a => a.id === accountId);
    const accountTransactions = transactions.filter(t => t.accountRef === accountId);

    if (!account) {
        return (
            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800">
                <LandmarkIcon size={64} className="mx-auto text-gray-200 mb-6" />
                <h2 className="text-2xl font-bold text-canDark dark:text-white">Account Not Found</h2>
                <p className="text-gray-500 mt-2 mb-8">We couldn't retrieve the details for this account.</p>
                <button
                    onClick={() => navigate('/open-banking/dashboard')}
                    className="bg-canDark dark:bg-slate-800 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                >
                    Back to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-fade-in max-w-5xl mx-auto pb-20">
            {/* Header / Navigation */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-500 hover:text-canRed transition-colors font-bold group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back
                </button>
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-full border border-gray-100 dark:border-slate-800">
                    <Clock size={12} className="text-canRed" />
                    Last Synced: 1 Day Ago
                </div>
            </div>

            {/* Account Hero Section */}
            <AccountHero account={account} />

            {/* Transaction Feed Section */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden transition-colors">
                <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-canDark dark:text-white tracking-tight">Recent Activity</h2>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] font-black text-green-600 uppercase tracking-tighter">Real-time Feed</span>
                    </div>
                </div>

                <div className="divide-y divide-gray-50 dark:divide-slate-800">
                    {accountTransactions.length > 0 ? (
                        accountTransactions.map((t) => (
                            <TransactionItem key={t.id} transaction={t} />
                        ))
                    ) : (
                        <div className="p-20 text-center">
                            <p className="text-gray-400 font-medium">No recent transactions for this account.</p>
                        </div>
                    )}
                </div>

                {accountTransactions.length > 0 && (
                    <div className="p-4 bg-gray-50 dark:bg-slate-800/20 text-center border-t border-gray-50 dark:border-slate-800">
                        <button className="text-xs font-bold text-gray-400 hover:text-canRed transition-colors uppercase tracking-widest">
                            Load More Transactions
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
