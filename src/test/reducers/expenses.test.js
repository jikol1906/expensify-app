import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import {setExpenses} from "../../actions/expenses";

test('should set default sate', () => {
    const state = expensesReducer(undefined, { type:'@@INIT' })
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]])
});

test('should remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '12312'
    };

    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            description:'Rent',
            amount: 12,
            createdAt: 2000,
            note: 'a note'
        }
    };

    const state = expensesReducer(expenses,action);
    expect(state).toContainEqual(action.expense);
});

test('should edit an expense', () => {

    //Updating the second expense from fixtures
    const action = {
        type:'EDIT_EXPENSE',
        id: '2',
        updates: {
            description: 'Updated description'
        }
    };

    const state = expensesReducer(expenses,action);
    const expenseWithId2 = state.find((expense) => expense.id === action.id);

    expect(expenseWithId2.description).toBe('Updated description');


});

test('should not edit expense if not found', () => {

    const action = {
        type:'EDIT_EXPENSE',
        id: '5',
        updates: {
            description: 'Updated description'
        }
    };

    const state = expensesReducer(expenses,action);
    const shouldNotExist = state.find((expense) => expense.id === action.id);

    expect(shouldNotExist).toBeFalsy();
    expect(state.length).toBe(3);


});

test('should set expenses', () => {


    //This should be removed when we use set expenses
    const addExpenseAction = {
        type: 'ADD_EXPENSE',
        expense: {
            description:'Rent',
            amount: 12,
            createdAt: 2000,
            note: 'a note'
        }
    };

    const state = expensesReducer(expenses,addExpenseAction);


    const setExpensesAction = {
        type:'SET_EXPENSES',
        expenses
    };

    const state2 = expensesReducer(state,setExpensesAction);

    expect(state2).toEqual(expenses);




});

