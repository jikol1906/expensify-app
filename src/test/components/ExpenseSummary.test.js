import { ExpenseSummary } from '../../components/ExpenseSummary';
import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';


test('should render ExpenseSummary correct with 1 expense', () => {

    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={2539} />);
    expect(wrapper).toMatchSnapshot();

});

test('should render ExpenseSummary correct with multiple expenses', () => {

    const wrapper = shallow(<ExpenseSummary expenseCount={23423} expenseTotal={25232342339} />);
    expect(wrapper).toMatchSnapshot();

});

