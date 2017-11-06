import { shallow } from 'enzyme';
import React from 'react';
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />)
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters:altFilters
    });

    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {

    const input = wrapper.find('input');
    input.simulate('change', {target: {value:'bill'}});
    expect(setTextFilter).toHaveBeenLastCalledWith('bill');

});

test('should sort by amount', () => {

    const select = wrapper.find('select');
    select.simulate('change', {target: {value:'amount'}});
    expect(sortByAmount).toHaveBeenCalled();

});

test('should sort by date', () => {

    wrapper.setProps({
        filters:altFilters
    });

    const select = wrapper.find('select');
    select.simulate('change', {target: {value:'date'}});
    expect(sortByDate).toHaveBeenCalled();

});

test('should set startdate', () => {

    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(8,'years');

    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);

});


test('should handle focus change',() => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});