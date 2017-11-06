import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore'

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore;

store.dispatch(addExpense({description:'Water bill',note:'The water bill',amount:200,createdAt:200}));
store.dispatch(addExpense({description:'Gas bill',note:'The gas bill',amount:500,createdAt:4000}));
store.dispatch(addExpense({description:'Rent',note:'The water bill',amount:10400,createdAt:100}));



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
