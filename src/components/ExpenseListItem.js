import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({dispatch,id,description,amount,createdAt}) => (
    <div>
        <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
        <p>{amount} - {moment(createdAt).format('MMMM Do YYYY')}</p>
        <button onClick={()=>{
            dispatch(removeExpense({ id }));
        }}>Remove</button>
        
    </div>
);




export default connect()(ExpenseListItem);
