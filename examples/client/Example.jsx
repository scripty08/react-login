import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Login } from '../../src';

export const Example = () => {

    const onLoginSubmit = (data) => {
        const { username, password } = data;
        console.log(username, password);
    }

    const onRegisterSubmit = (data) => {
        const { username, password } = data;
        console.log(username, password);
    }

    const onForgotUsernameSubmit = (username) => {
        console.log(username);
    }

    const onForgotPasswordSubmit = (password) => {
        console.log(password);
    }

    return (
        <Router>
            <h2>Login</h2>
            <Login
                width={350}
                onLoginSubmit={onLoginSubmit}
                onRegisterSubmit={onRegisterSubmit}
                onForgotUsernameSubmit={onForgotUsernameSubmit}
                onForgotPasswordSubmit={onForgotPasswordSubmit}
                loginPath={'/login'}
                registerPath={'/register'}
            />
        </Router>
    );
};
