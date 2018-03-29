import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import {history} from '../routes/AppRouter';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        
          console.log(expense);
        props.dispatch(startAddExpense(expense));
        console.log(expense);
        history.push('/dashboard');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);