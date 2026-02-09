import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Account, Transaction } from '../types';
import { BankLogo } from './BankLogo';
import {
    ArrowLeft,
    ArrowUpRight,
    ArrowDownLeft,
    Repeat,
    ShoppingCart,
    Wallet,
    MapPin,
    Globe,
    Clock,
    ExternalLink
} from 'lucide-react';

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
            <div className="flex flex-col items-center justify-center h-full p-12 text-center">
                <Landmark size={64} className="text-gray-200 mb-4" />
                <h2 className="text-2xl font-bold text-canDark dark:text-white mb-2">Account Not Found</h2>
                <p className="text-gray-500 mb-6">The account you're looking for doesn't exist or has been disconnected.</p>
                <button
                    onClick={() => navigate('/open-banking/dashboard')}
                    className="bg-canRed text-white px-6 py-2 rounded-lg font-bold transition-all hover:bg-canRed/90"
                >
                    Back to Dashboard
                </button>
            </div>
        );
    }

    const getTransactionIcon = (type: string) => {
        switch (type) {
            case 'BUY': return <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-full text-red-600"><ArrowUpRight size={18} /></div>;
            case 'SELL': return <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded-full text-green-600"><ArrowDownLeft size={18} /></div>;
            case 'Contribution': return <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-full text-blue-600"><Wallet size={18} /></div>;
            case 'Debit': return <div className="bg-gray-50 dark:bg-slate-800 p-2 rounded-full text-gray-600 dark:text-gray-400"><ArrowUpRight size={18} /></div>;
            case 'Credit': return <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded-full text-green-600"><ArrowDownLeft size={18} /></div>;
            case 'Borrow': return <div className="bg-orange-50 dark:bg-orange-900/20 p-2 rounded-full text-orange-600"><ShoppingCart size={18} /></div>;
            case 'Payment': return <div className="bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded-full text-indigo-600"><Repeat size={18} /></div>;
            default: return <div className="bg-gray-50 dark:bg-slate-800 p-2 rounded-full text-gray-600"><ExternalLink size={18} /></div>;
        }
    };

    const isCredit = account.accountType === 'Credit';
    const usagePercent = isCredit && account.limit ? (account.used! / account.limit) * 100 : 0;

    return (
        <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-500 hover:text-canRed transition-colors font-bold group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back
                </button>
                <div className="flex items-center gap-3 bg-gray-50 dark:bg-slate-800 px-4 py-2 rounded-full border border-gray-100 dark:border-slate-700">
                    <Clock size={16} className="text-gray-400" />
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Last synced: {account.lastUpdated}</span>
                </div>
            </div>

            {/* Hero Card */}
            <div className={`relative overflow-hidden rounded-2xl p-8 text-white shadow-2xl ${account.balance < 0 ? 'bg-canRed' : 'bg-canDark dark:bg-slate-900'} transition-all`}>
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-white p-2 rounded-lg">
                                <BankLogo bankName={account.bankName} className="w-10 h-10" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-black tracking-tighter">{account.bankName}</h1>
                                <p className="text-white/70 font-mono text-sm uppercase tracking-widest">{account.accountType} Account • {account.accountNumber}</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="text-xs uppercase font-bold tracking-[0.2em] text-white/60 mb-1">Available Balance</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-black">${Math.abs(account.balance).toLocaleString('en-CA', { minimumFractionDigits: 2 })}</span>
                                <span className="text-white/60 font-bold uppercase tracking-tighter text-sm">CAD</span>
                            </div>
                        </div>
                    </div>

                    {isCredit && account.limit && (
                        <div className="w-full md:w-64 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-xs font-bold uppercase tracking-widest">Credit Limit</span>
                                <span className="text-xs font-black">${account.limit.toLocaleString()}</span>
                            </div>
                            <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden mb-4">
                                <div
                                    className="h-full bg-white transition-all duration-1000"
                                    style={{ width: `${usagePercent}%` }}
                                ></div>
                            </div>
                            <p className="text-[10px] text-white/70 uppercase font-black text-right">
                                {usagePercent.toFixed(1)}% Limit Used
                            </p>
                        </div>
                    )}
                </div>

                {/* Subtle pattern background */}
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Landmark size={200} />
                </div>
            </div>

            {/* Transaction Feed */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden transition-colors">
                <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-canDark dark:text-white tracking-tight">Recent Activity</h2>
                    <div className="flex gap-2">
                        <span className="text-[10px] font-bold bg-gray-50 dark:bg-slate-800 px-3 py-1 rounded text-gray-500 border border-gray-100 dark:border-slate-700">REAL-TIME</span>
                    </div>
                </div>

                <div className="divide-y divide-gray-50 dark:divide-slate-800">
                    {accountTransactions.length > 0 ? (
                        accountTransactions.map((t) => (
                            <div key={t.id} className="p-6 hover:bg-gray-50 dark:hover:bg-slate-800/30 transition-all group">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div className="flex items-center gap-4">
                                        {getTransactionIcon(t.type)}
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
                                            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                                <span>{t.date}</span>
                                                <span>•</span>
                                                <span className="uppercase font-bold text-[10px]">{t.type}</span>
                                                {(t.address || t.description) && <span>•</span>}
                                                <span className="italic">{t.description}</span>
                                            </p>
                                            {t.address && (
                                                <div className="flex items-center gap-1 mt-1 text-gray-400">
                                                    <MapPin size={10} />
                                                    <span className="text-[10px] font-medium">{t.address}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="text-right w-full md:w-auto">
                                        <p className={`text-lg font-black ${t.type === 'SELL' || t.type === 'Credit' || t.type === 'Payment'
                                                ? 'text-green-600'
                                                : 'text-canDark dark:text-white'
                                            }`}>
                                            {t.type === 'SELL' || t.type === 'Credit' || t.type === 'Payment' ? '+' : '-'}
                                            ${t.amount.toLocaleString('en-CA', { minimumFractionDigits: 2 })}
                                        </p>
                                        <p className="text-[9px] font-mono text-gray-300 dark:text-gray-600 uppercase tracking-tighter mt-1">
                                            ID: {t.uuid}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-12 text-center">
                            <p className="text-gray-500 italic">No recent transactions found for this account.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Helper for landmark icon in empty state
const Landmark: React.FC<{ size: number, className: string }> = ({ size, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="2" y1="22" x2="22" y2="22"></line>
        <line x1="18" y1="11" x2="18" y2="18"></line>
        <line x1="12" y1="11" x2="12" y2="18"></line>
        <line x1="6" y1="11" x2="6" y2="18"></line>
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
    </svg>
);
