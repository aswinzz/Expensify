import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses'; 
import { startSetExpenses } from './actions/expenses';
import { setTextFilter , sortByDate , sortByAmount , setStartDate ,setEndDate} from './actions/filter';

import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routes/AppRouter'
import './firebase/firebase';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
  });


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>  
);

ReactDOM.render(<p>Loading....</p>,document.getElementById('app'));

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx,document.getElementById('app'));
});

