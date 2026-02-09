import React from 'react';
import { Account } from '../types';
import { BankLogo } from './BankLogo';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, CreditCard, Landmark, PiggyBank, Briefcase } from 'lucide-react';

interface AccountsProps {
    accounts: Account[];
}

export const Accounts: React.FC<AccountsProps> = ({ accounts }) => {
    const navigate = useNavigate();

    const getAccountIcon = (type: string) => {
        switch (type) {
            case 'Chequing': return <Landmark className="text-blue-500" size={24} />;
            case 'Savings': return <PiggyBank className="text-green-500" size={24} />;
            case 'Credit Card': return <CreditCard className="text-red-500" size={24} />;
            case 'Line of Credit': return <CreditCard className="text-orange-500" size={24} />;
            case 'Mortgage': return <Landmark className="text-purple-500" size={24} />;
            case 'TFSA':
            case 'RRSP':
            case 'RESP':
            case 'FHSA':
            case 'Non-Registered':
                return <Briefcase className="text-yellow-500" size={24} />;
            default: return <Landmark size={24} />;
        }
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold text-canDark dark:text-white mb-1">Your Accounts</h2>
                    <p className="text-gray-500 dark:text-gray-400">Manage all your connected Canadian financial institutions</p>
                </div>
                <button className="bg-canRed text-white px-6 py-2 rounded-lg font-bold text-sm shadow-lg hover:bg-canRed/90 transition-all">
                    Connect New Bank
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {accounts.map((account) => {
                    const isCredit = account.category === 'Credit';
                    const usagePercent = isCredit && account.limit ? (account.used! / account.limit) * 100 : 0;

                    return (
                        <div
                            key={account.id}
                            onClick={() => navigate(`/open-banking/accounts/${account.id}`)}
                            className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between hover:shadow-xl hover:border-canRed/30 transition-all cursor-pointer group"
                        >
                            <div className="flex items-center gap-6 w-full md:w-auto">
                                <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-xl group-hover:scale-110 transition-transform">
                                    {getAccountIcon(account.accountType)}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <BankLogo bankName={account.bankName} className="w-6 h-6" />
                                        <h3 className="font-bold text-lg text-canDark dark:text-white">{account.bankName}</h3>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                        {account.accountType} • {account.accountNumber}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-12 w-full md:w-auto mt-6 md:mt-0 pt-6 md:pt-0 border-t md:border-t-0 border-gray-100 dark:border-slate-800">
                                {isCredit && account.limit && (
                                    <div className="hidden lg:block w-48">
                                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-1.5 text-gray-400">
                                            <span>Credit Usage</span>
                                            <span className="text-canRed">{usagePercent.toFixed(0)}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-canRed transition-all duration-700"
                                                style={{ width: `${Math.min(usagePercent, 100)}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )}

                                <div className="text-right flex-1 md:flex-none">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Current Balance</p>
                                    <p className={`text-2xl font-black ${account.balance < 0 ? 'text-canRed' : 'text-canDark dark:text-white'}`}>
                                        ${Math.abs(account.balance).toLocaleString('en-CA', { minimumFractionDigits: 2 })}
                                    </p>
                                </div>

                                <ChevronRight className="text-gray-300 group-hover:text-canRed group-hover:translate-x-1 transition-all" size={24} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
