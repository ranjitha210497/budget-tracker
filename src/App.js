import { useEffect, useState } from 'react';
import AddExpense from './Components/AddExpense/AddExpense';

import './App.css';
import ExpensesDonut from './Components/DonutChart/DonutChart';

function App() {
  const localStorage_expenses = JSON.parse(localStorage.getItem("expenses"))
  const [expenses, setExpenses] = useState(localStorage_expenses || {
    "food": { history: [], total: 0 },
    "travel": { history: [], total: 0 },
    "shopping": { history: [], total: 0 },
    "bills": { history: [], total: 0 },
    "repairs": { history: [], total: 0 },
    "health": { history: [], total: 0 },
    "education": { history: [], total: 0 },
    "donations": { history: [], total: 0 },
    "miscellanious": { history: [], total: 0 },
  })


  const addExpense = ({ title, amount, type }) => {
    setExpenses({
      ...expenses, [type]: { history: [...expenses[type].history, { title, amount }], total: expenses[type].total + Number(amount) }
    })
  }

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])
  return (
    <div className="App">
      <h1 className='header'>Budget App</h1>
      <div className='budget'>
        <AddExpense addExpense={addExpense} />
        <ExpensesDonut expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
