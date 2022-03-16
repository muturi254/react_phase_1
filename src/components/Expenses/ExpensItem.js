import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./Expensedate";
import './ExpenseItem.css';


function ExpenseItem(props) {
    
    
    const {titlee, amount, date} = props.expense;
    const [title, setTitle] = useState(titlee);
    
    const clickHandler = () =>{
        setTitle('updated');
    };
    

    return (

        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{ title }</h2>
                <div className="expense-item__price">${ amount }</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
       </Card>

    )
}

export default ExpenseItem; 