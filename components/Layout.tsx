import React, { ReactNode } from 'react';
import { Menu } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  toggleSidebar: () => void;
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, toggleSidebar, title }) => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden transition-colors duration-300">
      {/* Mobile Header */}
      <header className="h-16 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between px-4 md:px-8 transition-colors">
        <div className="flex items-center gap-4">
          <button onClick={toggleSidebar} className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg">
            <Menu size={20} />
          </button>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
        </div>
        <div className="flex items-center gap-4">
          {/* Mock Profile */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-400">
              AS
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">Alex Smith</span>
          </div>
        </div>
      </header>

      {/* Main Content Scroll Area */}
      <main className="flex-1 overflow-y-auto bg-[#F3F4F6] dark:bg-slate-950 p-4 md:p-8 transition-colors">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
