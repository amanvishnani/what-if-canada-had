import React from 'react';
import { Account } from '../types';
import { BankLogo } from './BankLogo';
import { LandmarkIcon } from './LandmarkIcon';

interface AccountHeroProps {
    account: Account;
}

export const AccountHero: React.FC<AccountHeroProps> = ({ account }) => {
    const isCredit = account.category === 'Credit';
    const usagePercent = isCredit && account.limit ? (account.used! / account.limit) * 100 : 0;
    const isOverdue = account.balance < 0;

    return (
        <div className={`relative overflow-hidden rounded-2xl p-8 text-white shadow-2xl ${isOverdue ? 'bg-canRed' : 'bg-canDark dark:bg-slate-900'} transition-all`}>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-white p-2 rounded-lg shadow-sm">
                            <BankLogo bankName={account.bankName} className="w-10 h-10" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-black tracking-tighter">{account.bankName}</h1>
                            <p className="text-white/70 font-mono text-sm uppercase tracking-widest">
                                {account.accountType} Account • {account.accountNumber}
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="text-xs uppercase font-bold tracking-[0.2em] text-white/60 mb-1">Available Balance</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-black">
                                ${Math.abs(account.balance).toLocaleString('en-CA', { minimumFractionDigits: 2 })}
                            </span>
                            <span className="text-white/60 font-bold uppercase tracking-tighter text-sm">CAD</span>
                        </div>
                    </div>
                </div>

                {isCredit && account.limit && (
                    <div className="w-full md:w-64 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-xs font-bold uppercase tracking-widest text-white/80">Credit Limit</span>
                            <span className="text-xs font-black">${account.limit.toLocaleString()}</span>
                        </div>
                        <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden mb-4">
                            <div
                                className="h-full bg-white transition-all duration-1000 shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                                style={{ width: `${Math.min(usagePercent, 100)}%` }}
                            ></div>
                        </div>
                        <p className="text-[10px] text-white/70 uppercase font-black text-right">
                            {usagePercent.toFixed(1)}% Limit Used
                        </p>
                    </div>
                )}

                {account.availableCash !== undefined && (
                    <div className="w-full md:w-64 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                        <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-2">Cash Available</p>
                        <p className="text-3xl font-black mb-1">
                            ${account.availableCash.toLocaleString('en-CA', { minimumFractionDigits: 2 })}
                        </p>
                        <p className="text-[10px] text-white/60 uppercase font-bold tracking-wider">
                            Ready to trade
                        </p>
                    </div>
                )}
            </div>

            {/* Subtle pattern background */}
            <div className="absolute top-0 right-0 p-8 opacity-10 -rotate-12 translate-x-12 translate-y-[-20%] pointer-events-none">
                <LandmarkIcon size={250} />
            </div>
        </div>
    );
};
