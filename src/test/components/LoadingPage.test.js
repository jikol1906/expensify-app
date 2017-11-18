import { shallow } from 'enzyme';
import React from 'react';
import LoadingPage from '../../components/LoadingPage';


test('should render ExpenseListItem', () => {
    const wrapper = shallow(<LoadingPage/>);
    expect(wrapper).toMatchSnapshot();
});