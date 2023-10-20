import { useState } from 'react';

import AddButton from '@/components/inputs/add-button';
import TransactionBoard from 'components/transactions/board'
import TransactionForm from 'components/transactions/form'
import Header from 'components/layouts/header'

import mockTransactions from '@/mock/transactions'

export function TransactionView() {
    const [formVisible, setFormVisible] = useState(false);
    const [transactionList, setTrasactionList] = useState(mockTransactions);
    const [transactionState, setTransactionState] = useState({
        title: '',
        amount: 0,
        date: new Date()
    });

    const toggleFormVisibility = function() {
        setFormVisible(!formVisible);
    }

    const onCreateTransaction = function() {
        setTrasactionList([...transactionList, transactionState])

        toggleFormVisibility();
    }


    return <>
        <main className="transactions">
            <Header title="Transactions"></Header>
            <TransactionForm
                visible={formVisible}
                onClose={toggleFormVisibility}
                state={transactionState}
                setState={setTransactionState}
            />
            <TransactionBoard transactions={transactionList} />
            <AddButton action={formVisible ? onCreateTransaction : toggleFormVisibility} />
        </main>
    </>
}