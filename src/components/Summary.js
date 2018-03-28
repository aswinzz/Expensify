import React from 'react';
import { connect } from 'react-redux';
import Calculate from './Summary-Calculate';
import selectExpenses from '../selectors/expenses';
const ExpenseList = (props) => (
    <div>
        Expense - total<br/>
        {Calculate(props)}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses : selectExpenses(state.expenses,state.filters)
    };
};


export default connect(mapStateToProps)(ExpenseList);
