import TransactionBoard from './components/transactions/board'
import mockTransactions from './mock/transactions'


function App() {
  return (
    <>
      <TransactionBoard transactions={mockTransactions} />
    </>
  )
}

export default App
