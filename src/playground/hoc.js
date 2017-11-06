import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info</p>
            <WrappedComponent {...props}/>
        </div>
    )
};


const RequireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ?
                <WrappedComponent {...props}/>
                :
                <p>This requires authentication</p>}
        </div>
    )
};


//const AdminInfo = withAdminWarning(Info);

const AuthInfo = RequireAuthentication(Info);

//ReactDOM.render(<AdminInfo info="This is detail"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={false} info="This is detail"/>, document.getElementById('app'));