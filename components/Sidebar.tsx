import React from 'react';
import { ViewState } from '../types';
import { LayoutDashboard, Store, MessageSquareText, Shield, LogOut } from 'lucide-react';

interface SidebarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  
  const navItems = [
    { id: ViewState.DASHBOARD, label: 'Overview', icon: LayoutDashboard },
    { id: ViewState.MARKETPLACE, label: 'Marketplace', icon: Store },
    { id: ViewState.ASSISTANT, label: 'Maple Assistant', icon: MessageSquareText },
    { id: ViewState.CONSENT, label: 'My Consents', icon: Shield },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full hidden md:flex font-sans">
      {/* Government of Canada Logo Area */}
      <div className="p-6 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-4">
           {/* Simple CSS representation of the Canada Flag Symbol */}
           <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M0 0H10V20H0V0Z" fill="#EA0000"/>
             <path d="M30 0H40V20H30V0Z" fill="#EA0000"/>
             <path d="M20 2L23 8H28L24 11L26 17L20 13L14 17L16 11L12 8H17L20 2Z" fill="#EA0000"/>
           </svg>
           <div className="flex flex-col">
             <span className="text-[10px] font-bold leading-tight text-canDark">Government</span>
             <span className="text-[10px] font-bold leading-tight text-canDark">of Canada</span>
           </div>
        </div>
        <div>
          <h1 className="text-xl font-black text-canDark tracking-tight">MapleSync</h1>
          <p className="text-xs text-gray-500 font-medium">Open Banking Portal</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-md text-sm font-semibold transition-all duration-200 border-l-4 ${
                isActive 
                  ? 'border-canRed bg-gray-50 text-canDark' 
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon size={20} className={isActive ? 'text-canRed' : 'text-gray-400'} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="mb-4">
          <p className="text-[10px] uppercase font-bold text-gray-500 mb-1">Secure Connection</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-xs text-gray-600 font-medium">
              GCKey Verified
            </p>
          </div>
        </div>
        <button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-canRed w-full transition-colors border border-gray-200 rounded-lg bg-white shadow-sm">
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </div>
  );
};