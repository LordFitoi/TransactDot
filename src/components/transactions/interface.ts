export interface TransactionData {
    title: string;
    amount: number;
    date: string;
}

export interface TransactionsOfMonth {
    key: string;
    label: string;
    transactions: Array<TransactionData>
}