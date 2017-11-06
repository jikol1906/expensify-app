import moment from 'moment';
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from "../../actions/filters";

test('should generate setStartDate action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('should generate set end date action object', () => {

    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type:'SET_END_DATE',
        date: moment(0)

    })

});

test('should generate sortByDate object', () => {

    const action = sortByDate();

    expect(action).toEqual({
        type:'SORT_BY_DATE',
    })

});

test('should generate sortByAmount action object', () => {

    const action = sortByAmount();

    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })

});

test('should generate setTextFilter action object', () => {

    const action = setTextFilter('bill');

    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: 'bill'

    })

});

test('should set default value to setTextFilter', () => {

    const action = setTextFilter();

    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''

    })

});

