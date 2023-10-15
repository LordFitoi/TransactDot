// import { useState } from 'react'
import { TransactionData, TransactionsOfMonth } from './interface';
import './styles.scss'


function Transaction(props: TransactionData) {
    const formatDate = (dateString: string) => {
        const date: Date = new Date(dateString);
        const options: object = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return date.toLocaleDateString('en', options);
    } 

    const formatAmount = (amount: number) => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        return formatter.format(amount)
    }

    return <>
        <div className='transaction'>
            <div className='featured-icon'></div>
            <div className="inner">
                <span>{props.title}</span>
                <span>{formatAmount(props.amount)}</span>
            </div>
            <span>{formatDate(props.date)}</span>
        </div>
    </>
}

function MonthTransactions(props: TransactionsOfMonth) {
    const transactions: Array<TransactionData> = props.transactions
        .sort((a: TransactionData, b: TransactionData) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            
            return dateB.getTime() - dateA.getTime()
        })
            
    return <>
        <h2>{ props.label }</h2>
        {
            transactions.map((transaction: TransactionData, index: number) => (
                <Transaction
                    key={index}
                    title={transaction.title}
                    amount={transaction.amount}
                    date={transaction.date}
                />
            ))
        }
    </>
}

export default function TransactionBoard(props: {transactions: Array<TransactionData>}) {
    const monthTransactions: { [key: string]: TransactionsOfMonth } = {}

    props.transactions.forEach((transaction: TransactionData) => {
        const date = new Date(transaction.date)
        const year = date.getFullYear();
        const month = date.getMonth();
        const dateKey = `${month}_${year}`;

        if (!monthTransactions[dateKey]) {
            monthTransactions[dateKey] = {
                key: (date.getMonth() + year).toString(),
                label: `${date.toLocaleString('en', { month: 'long' })}, ${year}`,
                transactions: []
            };
        }
        
        monthTransactions[dateKey].transactions.push(transaction)
    })

    const sortedMonthTransactions: Array<TransactionsOfMonth> = Object.values(monthTransactions)
        .sort((a: TransactionsOfMonth, b: TransactionsOfMonth) => Number(b.key) - Number(a.key))

    return <>
        <div className="transaction__board">
            {
                sortedMonthTransactions.map((month: TransactionsOfMonth) => (
                    <MonthTransactions 
                        key={month.key}
                        transactions={month.transactions}
                        label={month.label}
                    />
                ))
            }
        </div>
    </>
}