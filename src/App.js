import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: "Toilet Paper",
    amount: 94.15,
    date: new Date(2020, 7, 14)
  },
  {
    id: 'e2',
    title: "Sugar",
    amount: 94.15,
    date: new Date(2021, 6, 14)
  },
  {
    id: 'e3',
    title: "Chocolate",
    amount: 94.15,
    date: new Date(2020, 8, 14)
  },
  {
    id: 'e4',
    title: "Car insuarance",
    amount: 94.15,
    date: new Date(2021, 7, 14)
  },
];
function App() {

  const [expenses, setExpesenses] = useState(DUMMY_EXPENSE)

  // expense Handler
  const addExpenseHandler = (expense) => {
    setExpesenses(prevExpenses => [...prevExpenses, expense])
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
