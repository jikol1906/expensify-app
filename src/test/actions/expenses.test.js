import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup remove expense action object', () => {
    const action = removeExpense({ id:'123abc' });

    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    });

});

test('shold update expense', () => {

   const action = editExpense('123abc', {note:'somenote'});

   expect(action).toEqual({
       type:'EDIT_EXPENSE',
       id:'123abc',
       updates: {
           note:'somenote'
       }
   })

});

test('should setup add expense object with provided values', () => {

    const expense = {
        description:'Some description',
        amount:'10000',
        createdAt:'1234',
        note:'this is a note'
    };

    const action = addExpense(expense);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
    })

});

test('should setup expense action object with default value', () => {

    const action = addExpense({});

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description:'',
            note:'',
            amount:0,
            createdAt:0,
            id:expect.any(String)
        }
    })

});
