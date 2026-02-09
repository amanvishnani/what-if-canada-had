import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Account, Transaction } from '../types';
import {
    ArrowLeft,
    Clock
} from 'lucide-react';
import { AccountHero } from './AccountHero';
import { TransactionList } from './TransactionList';
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
            <TransactionList
                transactions={accountTransactions}
                accounts={accounts}
                title={`${account.bankName} Activity`}
            />
        </div>
    );
};
