import React from "react";
import ExpenseItem from './ExpensItem';
import './ExpensesList.css';


function ExpensesList(props) {


    if (props.items.length === 0) {
       return <h2 className="expenses-list__fallback">Found No Espenses</h2>
    }


    return (
        <div className="expenses-list">
            {props.items.map(expense => <ExpenseItem expense={expense} key={expense.id} />)}
        </div>
    )
}


export default ExpensesList;