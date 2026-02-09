import { Account, Transaction, Holding } from './types';

export const MOCK_HOLDINGS: Holding[] = [
  {
    id: 'h1',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    quantity: 15,
    price: 175.50,
    value: 2632.50,
    change: 2.50,
    changePercent: 1.45
  },
  {
    id: 'h2',
    symbol: 'VFV',
    name: 'Vanguard S&P 500 Index ETF',
    quantity: 50,
    price: 110.25,
    value: 5512.50,
    change: -0.45,
    changePercent: -0.41
  },
  {
    id: 'h3',
    symbol: 'SHOP',
    name: 'Shopify Inc.',
    quantity: 25,
    price: 75.80,
    value: 1895.00,
    change: 5.20,
    changePercent: 7.35
  },
  {
    id: 'h4',
    symbol: 'RY',
    name: 'Royal Bank of Canada',
    quantity: 100,
    price: 124.50,
    value: 12450.00,
    change: 0.15,
    changePercent: 0.12
  },
  {
    id: 'h5',
    symbol: 'TD',
    name: 'Toronto-Dominion Bank',
    quantity: 80,
    price: 82.30,
    value: 6584.00,
    change: -1.20,
    changePercent: -1.44
  }
];

export const MOCK_ACCOUNTS: Account[] = [
  {
    id: 'acc_1',
    bankName: 'Royal Bank',
    category: 'Banking',
    accountType: 'Chequing',
    balance: 2450.50,
    lastUpdated: 'Just now',
    accountNumber: '**** 1234',
    color: 'bg-blue-600'
  },
  {
    id: 'acc_2',
    bankName: 'TD Bank',
    category: 'Banking',
    accountType: 'Savings',
    balance: 15000.00,
    lastUpdated: '5 mins ago',
    accountNumber: '**** 5678',
    color: 'bg-green-600'
  },
  {
    id: 'acc_3',
    bankName: 'Scotiabank',
    category: 'Credit',
    accountType: 'Credit Card',
    balance: -450.25,
    lastUpdated: '1 hour ago',
    accountNumber: '**** 9012',
    color: 'bg-red-600',
    limit: 5000,
    used: 450.25
  },
  {
    id: 'acc_4',
    bankName: 'WealthSimple',
    category: 'Investment',
    accountType: 'TFSA',
    balance: 34500.75,
    lastUpdated: '1 day ago',
    accountNumber: '**** 3456',
    color: 'bg-yellow-500',
    availableCash: 5426.75
  }
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: 't1',
    uuid: '550e8400-e29b-41d4-a716-446655440000',
    date: '2023-10-25',
    datetime: '2023-10-25T14:30:00Z',
    merchant: 'Loblaws',
    amount: 124.50,
    category: 'Groceries',
    accountRef: 'acc_1',
    type: 'Debit',
    description: 'Weekly grocery run'
  },
  {
    id: 't2',
    uuid: '550e8400-e29b-41d4-a716-446655440001',
    date: '2023-10-24',
    datetime: '2023-10-24T09:15:00Z',
    merchant: 'Netflix',
    amount: 16.99,
    category: 'Subscription',
    accountRef: 'acc_3',
    type: 'Debit',
    pending: false,
    address: '100 University Ave, Toronto, ON'
  },
  {
    id: 't3',
    uuid: '550e8400-e29b-41d4-a716-446655440002',
    date: '2023-10-23',
    merchant: 'Petro-Canada',
    datetime: '2023-10-23T18:45:00Z',
    amount: 65.00,
    category: 'Transport',
    accountRef: 'acc_3',
    type: 'Debit',
    pending: true,
    address: '123 Gas Station Rd, Ottawa, ON'
  },
  {
    id: 't4',
    uuid: '550e8400-e29b-41d4-a716-446655440003',
    date: '2023-10-22',
    datetime: '2023-10-22T08:00:00Z',
    merchant: 'Tim Hortons',
    amount: 8.50,
    category: 'Dining',
    accountRef: 'acc_1',
    type: 'Debit'
  },
  {
    id: 't5',
    uuid: '550e8400-e29b-41d4-a716-446655440004',
    date: '2023-10-20',
    datetime: '2023-10-20T10:00:00Z',
    merchant: 'WealthSimple',
    amount: 1000.00,
    category: 'Investment',
    accountRef: 'acc_4',
    type: 'Contribution'
  },
  {
    id: 't6',
    uuid: '550e8400-e29b-41d4-a716-446655440005',
    date: '2023-10-18',
    datetime: '2023-10-18T15:20:00Z',
    merchant: 'Apple',
    amount: 150.00,
    category: 'Investment',
    accountRef: 'acc_4',
    type: 'BUY',
    exchange: 'NASDAQ',
    description: 'AAPL Stock Purchase'
  },
  {
    id: 't7',
    uuid: '550e8400-e29b-41d4-a716-446655440006',
    date: '2023-10-15',
    datetime: '2023-10-15T12:00:00Z',
    merchant: 'Shopify',
    amount: 200.00,
    category: 'Investment',
    accountRef: 'acc_4',
    type: 'SELL',
    exchange: 'TSX',
    description: 'SHOP Stock Sale'
  },
];

export const SUGGESTED_QUESTIONS = [
  "How does Open Banking help me save money?",
  "Analyze my spending patterns this month.",
  "Compare Canadian Open Banking to the UK.",
  "Find me a better savings rate."
];
