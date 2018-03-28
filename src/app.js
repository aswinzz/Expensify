import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses'; 
import { addExpense , editExpense , removeExpense } from './actions/expenses';
import { setTextFilter , sortByDate , sortByAmount , setStartDate ,setEndDate} from './actions/filter';

import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routes/AppRouter'


const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
  });

const expenseOne = store.dispatch(addExpense({ description: 'Gas bill',note : 'asdasd', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Water bill', amount: 200, createdAt: -1000 }));



const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>  
);

ReactDOM.render(jsx,document.getElementById('app'));
