import React from 'react';
import {
    ArrowUpRight,
    ArrowDownLeft,
    Repeat,
    ShoppingCart,
    Wallet,
    ExternalLink,
    Plus,
    Minus
} from 'lucide-react';
import { TransactionType } from '../types';

interface TransactionIconProps {
    type: TransactionType;
}

export const TransactionIcon: React.FC<TransactionIconProps> = ({ type }) => {
    switch (type) {
        case 'BUY':
            return (
                <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded-full text-green-600">
                    <Plus size={18} />
                </div>
            );
        case 'SELL':
            return (
                <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-full text-red-600">
                    <Minus size={18} />
                </div>
            );
        case 'Contribution':
            return (
                <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-full text-blue-600">
                    <Wallet size={18} />
                </div>
            );
        case 'Debit':
            return (
                <div className="bg-gray-50 dark:bg-slate-800 p-2 rounded-full text-gray-600 dark:text-gray-400">
                    <ArrowUpRight size={18} />
                </div>
            );
        case 'Credit':
            return (
                <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded-full text-green-600">
                    <ArrowDownLeft size={18} />
                </div>
            );
        case 'Borrow':
            return (
                <div className="bg-orange-50 dark:bg-orange-900/20 p-2 rounded-full text-orange-600">
                    <ShoppingCart size={18} />
                </div>
            );
        case 'Payment':
            return (
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded-full text-indigo-600">
                    <Repeat size={18} />
                </div>
            );
        default:
            return (
                <div className="bg-gray-50 dark:bg-slate-800 p-2 rounded-full text-gray-600">
                    <ExternalLink size={18} />
                </div>
            );
    }
};
