import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters.js';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ConnectedExpenseList/>
    </div>
);

export default ExpenseDashboardPage;