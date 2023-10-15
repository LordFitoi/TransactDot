import TransactionBoard from 'components/transactions/board'
import TransactionForm from 'components/transactions/form'
import Header from 'components/layouts/header'

import mockTransactions from './mock/transactions'
import { useState } from 'react';


function App() {
  const [formVisible, setFormVisible] = useState(true);

  return (
    <>
      <Header title="Transactions"></Header>
      <TransactionForm visible={formVisible} setVisible={setFormVisible}/>
      <TransactionBoard transactions={mockTransactions} />
    </>
  )
}

export default App
