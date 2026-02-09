export interface Transaction {
  id: string;
  date: string;
  merchant: string;
  amount: number;
  category: string;
  accountRef: string;
}

export interface Account {
  id: string;
  bankName: string;
  accountType: 'Chequing' | 'Savings' | 'Credit' | 'Investment';
  balance: number;
  lastUpdated: string;
  accountNumber: string; // masked
  color: string;
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