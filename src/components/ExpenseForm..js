import React from 'react'
import {MdSend} from 'react-icons/md';

const ExpenseForm = ({charge, amount, handleCharge, handleAmount, handleSubmit, edit}) => {
    return (
        <form onSubmit={handleSubmit}>
        <div className="form-center">
        
            <div className="form-group">
                <label htmlFor="expense">charge</label>
                <input 
                className="form-control"
                id="charge" 
                name ="charge" 
                placeholder= "e.g. rent, electricity bill, " type="text"
                value={charge}
                onChange={handleCharge}
                />
            </div>
            <div className="form-group">
            <label htmlFor="expense">amount</label>
            <input 
            className="form-control"
            type="number"
            id="amount" 
            name ="amount" 
            placeholder= "e.g. 1200 "
            value={amount}
            onChange={handleAmount}
            
            />
        </div>
        
        </div>
        <button className="btn" >
            { edit? "edit" : "submit" }
        <MdSend className="btn-icon" />
        </button>
        </form>
    )
}

export default ExpenseForm;