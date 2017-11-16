import { shallow } from 'enzyme'
import React from 'react';
import { LoginPage } from "../../components/LoginPage";

let startLogin, wrapper;

beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLogin}/>);
});

test('Should render LoginPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle startLogin',() => {
    const input = wrapper.find('button');
    input.simulate('click');

    expect(startLogin).toHaveBeenCalled();
});