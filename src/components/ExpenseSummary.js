import React from 'react';
import getVisibleExpenses from '../selectors/expenses';
import getExpenseTotal from '../selectors/expenses-total';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpenseSummary =  ({expenseCount, expenseTotal}) => (
    <div>
        <h1>Viewing {expenseCount} expenses totalling: {numeral( expenseTotal / 100).format('$0,0.00')}</h1>
    </div>
);

const mapStateToProps = (state) => {

    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    return {
        expenseTotal: getExpenseTotal(visibleExpenses),
        expenseCount: visibleExpenses.length
    }

};

export default connect(mapStateToProps)(ExpenseSummary);
