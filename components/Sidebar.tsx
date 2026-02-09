import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Store, MessageSquare, Shield, LogOut, Moon, Sun, Home, Landmark, Repeat } from 'lucide-react';

interface SidebarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  onBackToPortal?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ darkMode, toggleDarkMode, onBackToPortal }) => {
  const location = useLocation();

  const navItems = [
    { id: 'dashboard', path: '/open-banking/dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'accounts', path: '/open-banking/accounts', label: 'Accounts', icon: Landmark },
    { id: 'transactions', path: '/open-banking/transactions', label: 'Activity', icon: Repeat },
    { id: 'marketplace', path: '/open-banking/marketplace', label: 'Marketplace', icon: Store },
    { id: 'assistant', path: '/open-banking/assistant', label: 'Assistant', icon: MessageSquare },
    { id: 'consent', path: '/open-banking/consent', label: 'My Consents', icon: Shield },
  ];

  return (
    <div className="w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 flex flex-col h-full hidden md:flex font-sans transition-colors duration-300">
      {/* Government of Canada Logo Area */}
      <div className="p-6 pb-4 border-b border-gray-100 dark:border-slate-800">
        <div className="mb-6">
          <img
            src="/GOC-GDC.png"
            alt="Government of Canada"
            className="h-10 w-auto object-contain dark:invert"
          />
        </div>
        <div>
          <h1 className="text-xl font-black text-canDark dark:text-white tracking-tight">MapleSync</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Open Banking Portal</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname.includes(item.id);
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-md text-sm font-semibold transition-all duration-200 border-l-4 ${isActive
                ? 'border-canRed bg-gray-50 dark:bg-slate-800 text-canDark dark:text-white'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white'
                }`}
            >
              <item.icon size={20} className={isActive ? 'text-canRed' : 'text-gray-400'} />
              {item.label}
            </Link>
          );
        })}

        {onBackToPortal && (
          <button
            onClick={onBackToPortal}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-md text-sm font-semibold transition-all duration-200 border-l-4 border-transparent text-canRed hover:bg-red-50 dark:hover:bg-red-900/10"
          >
            <Home size={20} />
            Back to Main Portal
          </button>
        )}
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/50">
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-canRed dark:hover:text-canRed w-full transition-colors border border-gray-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 shadow-sm mb-4"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        <div className="mb-4">
          <p className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400 mb-1">Secure Connection</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
              GCKey Verified
            </p>
          </div>
        </div>
        <button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-canRed dark:hover:text-canRed w-full transition-colors border border-gray-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 shadow-sm">
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </div>
  );
};