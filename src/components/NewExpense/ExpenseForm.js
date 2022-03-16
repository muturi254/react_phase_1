import React, { useState } from "react";
import './ExpenseForm.css';

function ExpenseForm() {

    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    });
   

    const titleChangeHandler = (event) => {
       setUserInput((prevState) => {
           return {
               ...prevState,
               title: event.target.value
           }
       })
    }
    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            amount: event.target.value
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            date: event.target.value
        })
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" name="" id="" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" name="" id=""  min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" name="" min="2019-01-01"  max="2021-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;