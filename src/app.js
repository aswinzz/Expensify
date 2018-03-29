import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses'; 
import { startSetExpenses } from './actions/expenses';
import { setTextFilter , sortByDate , sortByAmount , setStartDate ,setEndDate} from './actions/filter';

import {login,logout} from './actions/auth';

import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter,{history} from './routes/AppRouter';
import { firebase } from './firebase/firebase';

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

const hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx,document.getElementById('app'));
    }
};

ReactDOM.render(<p>Loading....</p>,document.getElementById('app'));



firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if(history.location.pathname ==='/'){
                history.push('/dashboard');
            }
        });
    }
    else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});