import React from 'react';
import { connect } from 'react-redux';
import EditExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };

    render(){
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <EditExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove expense</button>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state , props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        startEditExpense: (id,expense) => dispatch(startEditExpense(id,expense)),
        startRemoveExpense: (expenseId) => dispatch(startRemoveExpense(expenseId))
    }

};

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);