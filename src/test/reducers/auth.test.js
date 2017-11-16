import authReducer from '../../reducers/auth';

test('should set default auth values', () => {

    const state = authReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({});

});

test('should set uid on user login', () => {

    const uid = '123abc';

    const state = authReducer(undefined, {
        type: 'LOGIN',
        uid
    });

    expect(state).toEqual({uid});

});

test('should remove uid on user logout', () => {

    const uid = '123abc';

    const state = authReducer({uid}, {
        type: 'LOGOUT',
    });

    expect(state).toEqual({});

});

