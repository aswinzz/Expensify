import React from 'react';
import { connect } from 'react-redux';
import Calculate from './Summary-Calculate';
import selectExpenses from '../selectors/expenses';
const ExpenseList = (props) => (
    <div>
       Statistics <hr/>
        Total Number : {props.expenses.length}<br/>
        Total Amount : {Calculate(props)}<br/>
        <hr/>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses : selectExpenses(state.expenses,state.filters)
    };
};


export default connect(mapStateToProps)(ExpenseList);
