import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

function NewExpense(props) {

    const [isEditing, setIsEditing ] = useState(false)

    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: (Math.random() * 10).toString()
        }

        props.onAddExpense(expenseData);
        setIsEditing(false)
    }

    // handle Edting 
    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }


    return (
        <div className="new-expense">
           {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
           {isEditing && <ExpenseForm onSaveExpensedata={saveExpenseDatahandler} onCancel = {stopEditingHandler} />}
        </div>
    )
}

export default NewExpense;