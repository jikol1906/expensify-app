import addExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return zero if no expenses', () => {

    expect(addExpenses([])).toBe(0);

});

test('should correctly add up single expense', () => {

    expect(addExpenses([expenses[1]])).toBe(expenses[1].amount);

});

test('should correctly add up multiple expenses', () => {

    expect(addExpenses(expenses)).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);

});

