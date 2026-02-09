import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, ReceiptText, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface PortalCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    onClick: () => void;
    color: string;
    status?: string;
}

const PortalCard: React.FC<PortalCardProps> = ({ title, description, icon, onClick, color, status }) => (
    <button
        onClick={onClick}
        className="group bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-canRed dark:hover:border-canRed transition-all duration-300 text-left relative overflow-hidden flex flex-col h-full"
    >
        <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            {icon}
        </div>
        <div className="flex-1">
            <h3 className="text-2xl font-black text-canDark dark:text-white mb-3 group-hover:text-canRed transition-colors">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
        </div>
        <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{status || 'Live Prototype'}</span>
            </div>
            <ArrowRight className="text-gray-300 group-hover:text-canRed group-hover:translate-x-2 transition-all" size={24} />
        </div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-canRed/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </button>
);

export const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[#F9FAFB] dark:bg-slate-950 flex flex-col font-sans transition-colors duration-300">
            {/* Header */}
            <header className="p-8 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img src="/GOC-GDC.png" alt="Canada" className="h-8 w-auto dark:invert" />
                    <div className="h-6 w-px bg-gray-200 dark:border-slate-800"></div>
                    <span className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest">Future Policy Labs</span>
                </div>
                <div className="flex items-center gap-2">
                    <ShieldCheck size={18} className="text-canRed" />
                    <span className="text-xs font-bold text-canDark dark:text-white uppercase tracking-tighter">Verified Sandbox</span>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex-1 max-w-6xl mx-auto px-8 py-16 flex flex-col justify-center">
                <div className="max-w-3xl mb-16">
                    <div className="inline-flex items-center gap-2 bg-canRed/10 text-canRed px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                        <Zap size={14} className="fill-current" />
                        The "What If" Series
                    </div>
                    <h1 className="text-6xl md:text-7xl font-black text-canDark dark:text-white mb-8 tracking-tighter leading-tight">
                        What if Canada had <span className="text-canRed">actually</span> modernized?
                    </h1>
                    <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                        Explore interactive prototypes of critical digital infrastructure that other nations take for granted.
                        MapleSync visualizes a friction-less Canadian economy.
                    </p>
                </div>

                {/* Portals Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <PortalCard
                        title="Open Banking"
                        description="Secure financial data sharing that puts you in control. Aggregate your accounts, analyze spending, and switch providers instantly."
                        icon={<LayoutDashboard size={28} className="text-white" />}
                        onClick={() => navigate('/open-banking')}
                        color="bg-canDark dark:bg-slate-800"
                        status="Live Prototype (v1.2)"
                    />
                    <PortalCard
                        title="ePayroll"
                        description="Real-time income verification and seamless job transitions. No more paper T4s or manual income proof for mortgages."
                        icon={<ReceiptText size={28} className="text-white" />}
                        onClick={() => navigate('/epayroll')}
                        color="bg-canRed"
                        status="Conceptual Stage"
                    />
                </div>

                {/* Footer/Meta */}
                <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-100 dark:border-slate-900 pt-12">
                    <div className="flex items-center gap-8">
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Build Version</p>
                            <p className="text-sm text-canDark dark:text-gray-400 font-mono">MAPLE-SYNCHRO-2026.04</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Security Status</p>
                            <p className="text-sm text-green-600 font-bold">End-to-End Encrypted</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-400 max-w-xs text-center md:text-right font-medium">
                        Part of the "Future-Proof Canada" initiative. All data shown is mocked locally.
                    </p>
                </div>
            </main>
        </div>
    );
};
