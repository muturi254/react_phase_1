import React, { useState } from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const expenses = props.expenses;
    const [filteredyear, setFilteredYear] = useState('2020');
    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredyear)

    
    // filterChange
    const filterChange = (value) => {
        setFilteredYear(value)
    }




    return (
        <Card className="expenses">
            <ExpenseFilter onFilterChange={filterChange} selected={filteredyear} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>

    )
}

export default Expenses;