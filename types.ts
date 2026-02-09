export type TransactionType = 'Credit' | 'Debit' | 'Contribution' | 'BUY' | 'SELL';

export interface Transaction {
  id: string;
  uuid: string;
  date: string;
  datetime: string;
  merchant: string;
  description?: string;
  amount: number;
  category: string;
  accountRef: string;
  type: TransactionType;
  pending?: boolean;
  exchange?: string;
  address?: string;
}

export interface Holding {
  id: string;
  symbol: string;
  name: string;
  quantity: number;
  price: number;
  value: number;
  change: number;
  changePercent: number;
}

export interface Account {
  id: string;
  bankName: string;
  accountType: 'Chequing' | 'Savings' | 'Credit' | 'Investment';
  balance: number;
  lastUpdated: string;
  accountNumber: string; // masked
  color: string;
  limit?: number;
  used?: number;
  availableCash?: number;
}

export interface SpendingCategory {
  name: string;
  value: number;
  color: string;
}

export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  MARKETPLACE = 'MARKETPLACE',
  CONSENT = 'CONSENT',
  ASSISTANT = 'ASSISTANT',
  INSIGHTS = 'INSIGHTS'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}