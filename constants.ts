import { Account, Transaction } from './types';

export const MOCK_ACCOUNTS: Account[] = [
  {
    id: 'acc_1',
    bankName: 'Royal Bank',
    accountType: 'Chequing',
    balance: 2450.50,
    lastUpdated: 'Just now',
    accountNumber: '**** 1234',
    color: 'bg-blue-600'
  },
  {
    id: 'acc_2',
    bankName: 'TD Bank',
    accountType: 'Savings',
    balance: 15000.00,
    lastUpdated: '5 mins ago',
    accountNumber: '**** 5678',
    color: 'bg-green-600'
  },
  {
    id: 'acc_3',
    bankName: 'Scotiabank',
    accountType: 'Credit',
    balance: -450.25,
    lastUpdated: '1 hour ago',
    accountNumber: '**** 9012',
    color: 'bg-red-600'
  },
  {
    id: 'acc_4',
    bankName: 'WealthSimple',
    accountType: 'Investment',
    balance: 34500.75,
    lastUpdated: '1 day ago',
    accountNumber: '**** 3456',
    color: 'bg-yellow-500'
  }
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 't1', date: '2023-10-25', merchant: 'Loblaws', amount: 124.50, category: 'Groceries', accountRef: 'acc_1' },
  { id: 't2', date: '2023-10-24', merchant: 'Netflix', amount: 16.99, category: 'Subscription', accountRef: 'acc_3' },
  { id: 't3', date: '2023-10-23', merchant: 'Petro-Canada', amount: 65.00, category: 'Transport', accountRef: 'acc_3' },
  { id: 't4', date: '2023-10-22', merchant: 'Tim Hortons', amount: 8.50, category: 'Dining', accountRef: 'acc_1' },
  { id: 't5', date: '2023-10-20', merchant: 'Hydro Ottawa', amount: 85.20, category: 'Utilities', accountRef: 'acc_1' },
  { id: 't6', date: '2023-10-18', merchant: 'Spotify', amount: 10.99, category: 'Subscription', accountRef: 'acc_3' },
  { id: 't7', date: '2023-10-15', merchant: 'Rogers', amount: 90.00, category: 'Utilities', accountRef: 'acc_1' },
];

export const SUGGESTED_QUESTIONS = [
  "How does Open Banking help me save money?",
  "Analyze my spending patterns this month.",
  "Compare Canadian Open Banking to the UK.",
  "Find me a better savings rate."
];
