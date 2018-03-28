import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import Summary from './Summary';
const ExpenseList = (props) => (
    <div>
        <Summary/>
        ExpenseList
        <ol>
        {props.expenses.map((expense)=>{
            return (
                <ExpenseListItem key={expense.id} {...expense}/>       
            );
        })}
        </ol>
        
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses : selectExpenses(state.expenses,state.filters)
    };
};


export default connect(mapStateToProps)(ExpenseList);
