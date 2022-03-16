import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

function NewExpense(props) {

    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: (Math.random() * 10).toString()
        }

        console.log(expenseData);
        props.onAddExpense(expenseData);
    }


    return (
        <div className="new-expense">
           <ExpenseForm onSaveExpensedata={saveExpenseDatahandler}/>
        </div>
    )
}

export default NewExpense;