import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./Expensedate";
import './ExpenseItem.css';


function ExpenseItem(props) {
    
    
    const {title, amount, date} = props.expense;
 
    return (

        <Card className="expense-item">
            <div className="expense-item__description">
            <ExpenseDate date={date}/>
                <h2>{ title }</h2>
                <div className="expense-item__price">${ amount }</div>
            </div>
            
       </Card>

    )
}

export default ExpenseItem; 