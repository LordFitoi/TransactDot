import TransactionBoard from './components/transactions/board'
import Header from './components/layouts/header'
import mockTransactions from './mock/transactions'


function App() {
  return (
    <>
      <Header title="Transactions"></Header>
      <TransactionBoard transactions={mockTransactions} />
    </>
  )
}

export default App
