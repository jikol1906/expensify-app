import React from 'react';
import { removeExpense } from "../actions/expenses";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default (props) => (
    <div>
        <NavLink to={"/edit/" + props.id}>
            <h3>{props.description}</h3>
        </NavLink>
        <p>{props.amount} - {props.createdAt}</p>
    </div>
);





