export interface TransactionData {
    title: string;
    amount: number;
    date: Date;
}

export interface TransactionsOfMonth {
    key: string;
    label: string;
    transactions: Array<TransactionData>
}