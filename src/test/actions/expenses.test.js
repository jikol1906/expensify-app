import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startAddExpense, addExpense, editExpense, removeExpense, setExpenses,
    startSetExpenses, startRemoveExpense,startEditExpense
} from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
import moment from 'moment';


const createMockStore = configureMockStore([thunk]);


beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt}) => {
        expensesData[id] = {description, note, amount, createdAt}
    });

    database.ref('expenses').set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
    const action = removeExpense({ id:'123abc' });

    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    });

});

test('should remove expense from database and store', async (done) => {

    const store = createMockStore({});
    const id = expenses[1].id;

    await store.dispatch(startRemoveExpense({id}));

    const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
    });

    const snapshot = await database.ref(`expenses/${id}`).once('value');

    expect(snapshot.val()).toBeFalsy();

    done();

});

test('should update expense', () => {

   const action = editExpense('123abc', {note:'somenote'});

   expect(action).toEqual({
       type:'EDIT_EXPENSE',
       id:'123abc',
       updates: {
           note:'somenote'
       }
   })

});

test('should update expense on firebase', async (done) => {

    const store = createMockStore({});
    const id = expenses[1].id;

    const updates = {
        description: 'This is an updated description',
        note: 'This is an updated note'
    };

    await store.dispatch(startEditExpense(id,updates));

    const actions = store.getActions();

    expect(actions[0]).toEqual({
        type:'EDIT_EXPENSE',
        id,
        updates
    });

    const snapshot = await database.ref(`expenses/${id}`).once('value');

    expect(snapshot.val().description).toBe('This is an updated description');
    expect(snapshot.val().note).toBe('This is an updated note');

    done();

});

test('should setup add expense object with provided values', () => {


    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })

});

test('should add expense to database and store', (done) => {

    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: '3000',
        note: 'This one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });

});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const defaultValues = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };

    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultValues
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultValues);
        done();
    });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });


});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        });

        done();
    });




});


