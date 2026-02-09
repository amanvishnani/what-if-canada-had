import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Construction, FileText, Landmark } from 'lucide-react';

export const EPayrollApp: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-300 font-sans">
            <header className="p-6 border-b border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex justify-between items-center transition-colors">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-canRed transition-colors font-bold"
                >
                    <ArrowLeft size={18} />
                    Back to Portal Selection
                </button>
                <div className="flex items-center gap-3">
                    <Landmark size={20} className="text-canRed" />
                    <span className="font-black text-canDark dark:text-white uppercase tracking-tighter">ePayroll Hub</span>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-2xl mx-auto">
                <div className="w-24 h-24 bg-red-50 dark:bg-red-900/10 rounded-full flex items-center justify-center mb-8 animate-pulse">
                    <Construction size={48} className="text-canRed" />
                </div>
                <h1 className="text-4xl font-black text-canDark dark:text-white mb-6">ePayroll is coming soon.</h1>
                <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 leading-relaxed">
                    Imagine a Canada where your income is verified instantly, taxes are calculated in real-time,
                    and job changes are literally one click away. We're building that vision.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <div className="p-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-xl text-left shadow-sm">
                        <Clock size={24} className="text-blue-500 mb-4" />
                        <h3 className="font-bold text-canDark dark:text-white mb-2">Real-time Income</h3>
                        <p className="text-sm text-gray-500">Eliminate the 2-week pay cycle. Access earned wages instantly.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-xl text-left shadow-sm">
                        <FileText size={24} className="text-green-500 mb-4" />
                        <h3 className="font-bold text-canDark dark:text-white mb-2">Digital T4s</h3>
                        <p className="text-sm text-gray-500">Verified earning history available to banks and government via API.</p>
                    </div>
                </div>
            </main>

            <footer className="p-8 border-t border-gray-100 dark:border-slate-800 text-center">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                    Conceptual Sandbox • 2026 Policy Lab
                </p>
            </footer>
        </div>
    );
};
