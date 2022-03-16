import React from "react";
import ExpenseItem from "./ExpensItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {

    const expenses = props.expenses;

    // filterChange
    const filterChange = (value) => {
        console.log(value);
    }

    return (
        <Card className="expenses">
            <ExpenseFilter onFilterChange={filterChange}/>
            {expenses.map(expense => <ExpenseItem expense={expense} key={expense.id} />)}
        </Card>

    )
}

export default Expenses;