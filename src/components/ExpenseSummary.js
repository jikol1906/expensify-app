import React from 'react';
import { Link } from 'react-router-dom';
import getVisibleExpenses from '../selectors/expenses';
import getExpenseTotal from '../selectors/expenses-total';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpenseSummary =  ({expenseCount, expenseTotal}) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{expenseCount}</span> expenses totalling: <span>{numeral( expenseTotal / 100).format('$0,0.00')}</span></h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
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
