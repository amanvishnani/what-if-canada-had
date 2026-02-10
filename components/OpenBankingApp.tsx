import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Dashboard } from './Dashboard';
import { Marketplace } from './Marketplace';
import { Assistant } from './Assistant';
import { Layout } from './Layout';
import { Accounts } from './Accounts';
import { AccountDetails } from './AccountDetails';
import { AllTransactions } from './AllTransactions';
import { MOCK_ACCOUNTS, MOCK_TRANSACTIONS } from '../constants';
import { Shield, Moon, Sun, LogOut } from 'lucide-react';

interface OpenBankingAppProps {
    darkMode: boolean;
    setDarkMode: (dark: boolean) => void;
}

export const OpenBankingApp: React.FC<OpenBankingAppProps> = ({ darkMode, setDarkMode }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const getTitle = () => {
        const path = location.pathname;
        if (path.includes('marketplace')) return 'Smart Marketplace';
        if (path.includes('assistant')) return 'Maple AI Assistant';
        if (path.includes('consent')) return 'Consent Management';
        if (path.includes('accounts')) return 'Manage Accounts';
        if (path.includes('transactions')) return 'Account Activity';
        return 'Financial Overview';
    };

    const onBackToPortal = () => navigate('/');

    return (
        <div className="flex h-screen w-screen bg-[#F3F4F6] dark:bg-slate-950 overflow-hidden font-sans text-slate-900 dark:text-white transition-colors duration-300">
            {/* Sidebar for Desktop */}
            <Sidebar
                darkMode={darkMode}
                toggleDarkMode={() => setDarkMode(!darkMode)}
                onBackToPortal={onBackToPortal}
            />

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 md:hidden flex">
                    <div className="w-64 h-full bg-white dark:bg-slate-900 shadow-2xl animate-fade-in flex flex-col">
                        <div className="p-4 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                            <span className="font-bold text-lg">Menu</span>
                            <button onClick={() => setIsSidebarOpen(false)} className="text-gray-500">Close</button>
                        </div>
                        <div className="p-4 space-y-2 flex-1 overflow-y-auto">
                            <button onClick={() => { navigate('/open-banking/dashboard'); setIsSidebarOpen(false); }} className="block w-full text-left py-3 px-4 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition-colors">Overview</button>
                            <button onClick={() => { navigate('/open-banking/accounts'); setIsSidebarOpen(false); }} className="block w-full text-left py-3 px-4 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition-colors">Accounts</button>
                            <button onClick={() => { navigate('/open-banking/transactions'); setIsSidebarOpen(false); }} className="block w-full text-left py-3 px-4 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition-colors">Activity</button>
                            <button onClick={() => { navigate('/open-banking/marketplace'); setIsSidebarOpen(false); }} className="block w-full text-left py-3 px-4 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition-colors">Marketplace</button>
                            <button onClick={() => { navigate('/open-banking/assistant'); setIsSidebarOpen(false); }} className="block w-full text-left py-3 px-4 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition-colors">Assistant</button>
                            <button onClick={() => { navigate('/open-banking/consent'); setIsSidebarOpen(false); }} className="block w-full text-left py-3 px-4 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition-colors">Consents</button>
                            <button onClick={onBackToPortal} className="block w-full text-left py-3 px-4 text-canRed hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors">Back to Portal</button>
                        </div>

                        {/* Mobile Footer */}
                        <div className="p-4 border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-canRed dark:hover:text-canRed w-full transition-colors border border-gray-200 dark:border-slate-700 rounded-lg bg-gray-50 dark:bg-slate-800 shadow-sm mb-3"
                            >
                                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                                {darkMode ? 'Light Mode' : 'Dark Mode'}
                            </button>
                            <button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-canRed dark:hover:text-canRed w-full transition-colors border border-gray-200 dark:border-slate-700 rounded-lg bg-gray-50 dark:bg-slate-800 shadow-sm">
                                <LogOut size={16} />
                                Sign Out
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 bg-black/20 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}></div>
                </div>
            )}

            <Layout
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                title={getTitle()}
            >
                <Routes>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route
                        path="dashboard"
                        element={<Dashboard accounts={MOCK_ACCOUNTS} transactions={MOCK_TRANSACTIONS} darkMode={darkMode} />}
                    />
                    <Route path="accounts" element={<Accounts accounts={MOCK_ACCOUNTS} />} />
                    <Route path="accounts/:accountId" element={<AccountDetails accounts={MOCK_ACCOUNTS} transactions={MOCK_TRANSACTIONS} />} />
                    <Route path="transactions" element={<AllTransactions transactions={MOCK_TRANSACTIONS} accounts={MOCK_ACCOUNTS} />} />
                    <Route path="marketplace" element={<Marketplace darkMode={darkMode} />} />
                    <Route
                        path="assistant"
                        element={<Assistant accounts={MOCK_ACCOUNTS} transactions={MOCK_TRANSACTIONS} darkMode={darkMode} />}
                    />
                    <Route path="consent" element={
                        <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 transition-colors">
                            <Shield size={64} className="mx-auto text-gray-300 mb-6" />
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Consent Management</h2>
                            <p className="text-gray-500 max-w-md mx-auto mb-8">
                                This module would allow users to see exactly which third-party providers have access to their banking data and revoke access instantly.
                            </p>
                            <button
                                className="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                                onClick={() => navigate('dashboard')}
                            >
                                Back to Dashboard
                            </button>
                        </div>
                    } />
                </Routes>
            </Layout>
        </div>
    );
};
