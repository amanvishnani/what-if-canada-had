import React from 'react';
import { Account, Transaction } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ArrowUpRight, DollarSign, Wallet, ShieldCheck, TrendingUp } from 'lucide-react';
import { BankLogo } from './BankLogo';
import { useNavigate } from 'react-router-dom';
import { TransactionList } from './TransactionList';

interface DashboardProps {
  accounts: Account[];
  transactions: Transaction[];
  darkMode: boolean;
}

const COLORS = ['#EA0000', '#26374A', '#FFBB28', '#8884d8', '#00C49F'];

export const Dashboard: React.FC<DashboardProps> = ({ accounts, transactions, darkMode }) => {
  const navigate = useNavigate();
  const totalBalance = accounts.reduce((acc, curr) => acc + curr.balance, 0);

  // Aggregate categories
  const categoryData = transactions.reduce((acc: any[], t) => {
    const existing = acc.find(c => c.name === t.category);
    if (existing) {
      existing.value += t.amount;
    } else {
      acc.push({ name: t.category, value: t.amount });
    }
    return acc;
  }, []);

  return (
    <div className="space-y-8 animate-fade-in font-sans">
      {/* Welcome Banner */}
      <div className="bg-canDark dark:bg-slate-900 rounded-none md:rounded-lg p-8 text-white shadow-lg relative overflow-hidden border-l-8 border-canRed transition-colors duration-300">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2 tracking-tight">Financial Snapshot</h2>
          <p className="text-gray-300 max-w-2xl text-lg">
            Welcome back, Alex. All your connected accounts are synced and up to date with the
            <span className="font-semibold text-white ml-1">Canadian Consumer Data Framework</span>.
          </p>
          <div className="mt-6 flex gap-4">
            <div className="bg-white/10 px-4 py-2 rounded flex items-center gap-2 backdrop-blur-sm">
              <ShieldCheck size={18} className="text-green-400" />
              <span className="text-sm font-medium">Data Encrypted</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded flex items-center gap-2 backdrop-blur-sm">
              <TrendingUp size={18} className="text-yellow-400" />
              <span className="text-sm font-medium">Credit Score: 785</span>
            </div>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-20 opacity-10 text-white">
          <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.0002 22.6275L11.9961 17.6569C11.9961 17.6569 9.38914 18.5367 8.92723 18.0069C8.46532 17.4771 10.1587 14.2253 10.1587 14.2253C10.1587 14.2253 6.94632 16.5912 5.86877 15.3552C4.79122 14.1192 8.35649 10.9575 8.35649 10.9575C8.35649 10.9575 3.39169 11.5312 3.12225 9.94191C2.85282 8.35265 6.43825 8.65287 7.7314 7.63756C9.02454 6.62225 6.66914 4.54751 7.66981 3.23816C8.67048 1.9288 10.8707 5.70471 12.0002 5.70471C13.1297 5.70471 15.33 1.9288 16.3307 3.23816C17.3313 4.54751 14.9759 6.62225 16.2691 7.63756C17.5622 8.65287 21.1477 8.35265 20.8782 9.94191C20.6088 11.5312 15.644 10.9575 15.644 10.9575C15.644 10.9575 19.2093 14.1192 18.1317 15.3552C17.0542 16.5912 13.8418 14.2253 13.8418 14.2253C13.8418 14.2253 15.5352 17.4771 15.0733 18.0069C14.6113 18.5367 12.0044 17.6569 12.0044 17.6569L12.0002 22.6275Z" />
          </svg>
        </div>
      </div>

      {/* Account Cards */}
      <div>
        <h3 className="text-xl font-bold text-canDark dark:text-white mb-4 flex items-center gap-2 transition-colors">
          Connected Institutions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {accounts.map((account) => {
            const isCredit = account.category === 'Credit';
            const usagePercent = isCredit && account.limit ? (account.used! / account.limit) * 100 : 0;

            return (
              <div
                key={account.id}
                onClick={() => navigate(`/open-banking/accounts/${account.id}`)}
                className="bg-white dark:bg-slate-900 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-slate-800 hover:shadow-md hover:border-canRed dark:hover:border-canRed transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <BankLogo bankName={account.bankName} className="w-12 h-12" />
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-mono bg-gray-50 dark:bg-slate-800/50 px-2 py-1 rounded group-hover:text-canRed transition-colors">{account.accountNumber}</span>
                </div>
                <div className="mb-2">
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">{account.accountType}</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                    ${Math.abs(account.balance).toLocaleString('en-CA', { minimumFractionDigits: 2 })}
                  </h3>
                </div>

                {/* Credit Limit Progress Bar */}
                {isCredit && account.limit && (
                  <div className="mt-3 mb-4">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter mb-1">
                      <span className="text-gray-400">Usage</span>
                      <span className="text-canRed">{usagePercent.toFixed(0)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-canRed transition-all duration-500"
                        style={{ width: `${Math.min(usagePercent, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center pt-2 border-t border-gray-50 dark:border-slate-800">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{account.bankName}</p>
                  <p className={`text-xs ${account.balance < 0 ? 'text-canRed' : 'text-green-600'} flex items-center font-bold`}>
                    {account.balance < 0 ? 'Due' : 'Available'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Transactions */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center px-2">
            <h3 className="font-bold text-lg text-canDark dark:text-white">Unified Transaction Stream</h3>
            <button
              className="text-sm text-canRed font-bold hover:underline bg-red-50 dark:bg-red-900/10 px-3 py-1 rounded-full transition-colors"
              onClick={() => navigate('/open-banking/transactions')}
            >
              View All Activity
            </button>
          </div>
          <TransactionList
            transactions={transactions}
            accounts={accounts}
            limit={5}
            showLoadMore={false}
            title="Recent Activity"
          />
        </div>

        {/* Spending Breakdown */}
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-gray-200 dark:border-slate-800 p-6 transition-colors">
          <h3 className="font-bold text-lg text-canDark dark:text-white mb-6">Spending Analysis</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? '#1e293b' : '#fff',
                    borderColor: darkMode ? '#334155' : '#e2e8f0',
                    color: darkMode ? '#fff' : '#000'
                  }}
                  itemStyle={{ color: darkMode ? '#cbd5e1' : '#475569' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-3">
            {categoryData.slice(0, 3).map((entry: any, index: number) => (
              <div key={index} className="flex justify-between items-center text-sm border-b border-gray-50 dark:border-slate-800 pb-2 last:border-0">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">{entry.name}</span>
                </div>
                <span className="font-bold text-gray-900 dark:text-white">${entry.value.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};