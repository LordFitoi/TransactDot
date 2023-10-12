// import { useState } from 'react'
import './styles.scss'


function Transaction(props: any) {
    const formatDate = (date: Date) => {
        const options: object = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return date.toLocaleDateString('en', options);
    
    } 

    return <>
        <div className='transaction'>
            <div className='featured-icon'></div>
            <div className="inner">
                <span>{props.title}</span>
                <span>{props.amount}</span>
            </div>
            <span>{formatDate(props.date)}</span>
        </div>
    </>
}

function MonthTransactions(props: any) {
    let transactions: Array<object> = props.transactions
        .sort((a: any, b: any) => b.date - a.date)

    return <>
        <h2>{ props.label }</h2>
        {
            transactions.map((transaction: any, index: number) => (
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

export default function TransactionBoard(props: any) {
    let monthTransactions: { [key: string]: any } = {}

    props.transactions.forEach((transaction: any) => {
        transaction.date = new Date(transaction.date)
        
        const year = transaction.date.getFullYear();
        const month = transaction.date.toLocaleString('en', { month: 'long' });
        const dateKey = `${month}_${year}`;


        if (!monthTransactions[dateKey]) {
            monthTransactions[dateKey] = {
                index: transaction.date.getMonth() + year,
                label: month,
                transactions: []
            };
        }
        
        monthTransactions[dateKey].transactions.push(transaction)
    })

    monthTransactions = Object.entries(monthTransactions)
        .sort((a: any, b: any) => b[1].index - a[1].index)

    return <>
        <div className="transaction__board">
            {
                monthTransactions.map(([key, month]: [string, any]) => (
                    <MonthTransactions 
                        key={key}
                        transactions={month.transactions}
                        label={month.label}
                    />
                ))
            }
        </div>
    </>
}