import React from 'react';
import { removeExpense } from "../actions/expenses";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export default (props) => (
    <div>
        <NavLink to={"/edit/" + props.id}>
            <h3>{props.description}</h3>
        </NavLink>
        <p>
            {numeral(props.amount / 100).format('$0,0.00')}
            -
            {moment(props.createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);





