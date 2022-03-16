import React from "react";
import ExpenseItem from "./ExpensItem";
import './Expenses.css';
import Card from "../UI/Card";

function Expenses(props) {

    const expenses = props.expenses;

    return (
        <Card className="expenses">
            { expenses.map(expense => <ExpenseItem expense={expense} key={expense.id}/>) }
        </Card>
    )
}

export default Expenses;