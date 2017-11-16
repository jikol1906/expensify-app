import { login , logout } from "../../actions/auth";

test('should set up login action object', () => {
    expect(login('123abc')).toEqual({
        type:'LOGIN',
        uid: '123abc'
    })
});

test('should set up login action object', () => {
    expect(logout()).toEqual({
        type:'LOGOUT'
    })
});


