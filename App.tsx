import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Marketplace } from './components/Marketplace';
import { Assistant } from './components/Assistant';
import { Layout } from './components/Layout';
import { ViewState } from './types';
import { MOCK_ACCOUNTS, MOCK_TRANSACTIONS } from './constants';
import { Shield } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getTitle = () => {
    switch(currentView) {
      case ViewState.DASHBOARD: return 'Financial Overview';
      case ViewState.MARKETPLACE: return 'Smart Marketplace';
      case ViewState.ASSISTANT: return 'Maple AI Assistant';
      case ViewState.CONSENT: return 'Consent Management';
      default: return 'Dashboard';
    }
  };

  const renderContent = () => {
    switch(currentView) {
      case ViewState.DASHBOARD:
        return <Dashboard accounts={MOCK_ACCOUNTS} transactions={MOCK_TRANSACTIONS} />;
      case ViewState.MARKETPLACE:
        return <Marketplace />;
      case ViewState.ASSISTANT:
        return <Assistant accounts={MOCK_ACCOUNTS} transactions={MOCK_TRANSACTIONS} />;
      case ViewState.CONSENT:
        return (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
            <Shield size={64} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Consent Management</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
              This module would allow users to see exactly which third-party providers have access to their banking data and revoke access instantly.
            </p>
            <button 
               className="bg-gray-100 text-gray-600 px-6 py-2 rounded-lg text-sm font-medium"
               onClick={() => setCurrentView(ViewState.DASHBOARD)}
            >
              Back to Dashboard
            </button>
          </div>
        );
      default:
        return <Dashboard accounts={MOCK_ACCOUNTS} transactions={MOCK_TRANSACTIONS} />;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-[#F3F4F6] overflow-hidden font-sans text-slate-900">
      {/* Sidebar for Desktop */}
      <Sidebar currentView={currentView} setView={setCurrentView} />

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div className="w-64 h-full bg-white shadow-2xl animate-slide-in">
             {/* Reusing sidebar logic for mobile would ideally extract nav items, but for simplicity we render a simplified menu here or just the same sidebar component if it was fully responsive itself. 
                 Since Sidebar component is hidden md:flex, we can wrap it or just render it here.
             */}
             <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <span className="font-bold text-lg">Menu</span>
                <button onClick={() => setIsSidebarOpen(false)} className="text-gray-500">Close</button>
             </div>
             <div className="p-4 space-y-2">
                <button onClick={() => { setCurrentView(ViewState.DASHBOARD); setIsSidebarOpen(false); }} className="block w-full text-left py-3 px-4 hover:bg-gray-50 rounded-lg">Overview</button>
                <button onClick={() => { setCurrentView(ViewState.MARKETPLACE); setIsSidebarOpen(false); }} className="block w-full text-left py-3 px-4 hover:bg-gray-50 rounded-lg">Marketplace</button>
                <button onClick={() => { setCurrentView(ViewState.ASSISTANT); setIsSidebarOpen(false); }} className="block w-full text-left py-3 px-4 hover:bg-gray-50 rounded-lg">Assistant</button>
                <button onClick={() => { setCurrentView(ViewState.CONSENT); setIsSidebarOpen(false); }} className="block w-full text-left py-3 px-4 hover:bg-gray-50 rounded-lg">Consents</button>
             </div>
          </div>
          <div className="flex-1 bg-black/20 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}></div>
        </div>
      )}

      <Layout 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        title={getTitle()}
      >
        {renderContent()}
      </Layout>
    </div>
  );
};

export default App;
