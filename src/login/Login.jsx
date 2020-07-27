import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Button } from '@scripty/react-buttons';
import { Input } from '@scripty/react-inputs';
import { Card } from '@scripty/react-card';
import { NavLink } from 'react-router-dom';
import './Login.scss';

export const Login = (props) => {

    const {
        width,
        title,
        onLoginSubmit,
        loginPath,
        registerPath = 'register',
        onForgotUsernameSubmit,
        onForgotPasswordSubmit,
        onRegisterSubmit,
    } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const forgotUsernameLink = (onForgotUsernameSubmit) ?
        <NavLink tabIndex={-1} to={`${loginPath}/forgot-username`}>Forgotten?</NavLink> : null;
    const forgotPasswordLink = (onForgotPasswordSubmit) ?
        <NavLink tabIndex={-1} to={`${loginPath}/forgot-password`}>Forgotten?</NavLink> : null;
    const forgotRegisterLink = (onRegisterSubmit) ?
        <NavLink to={registerPath}>No account yet?</NavLink> : null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        onLoginSubmit({ username, password })
    };

    return (
        <form id={'login'} onSubmit={handleSubmit}>
            <Card title={title} width={width}>
                <Input
                    placeholder={'Username'}
                    name={'username'}
                    onChange={(name, value) => setUsername(value)}
                    helpLink={forgotUsernameLink}
                    value={username}
                    style={{width: '96%'}}
                />
                <br />
                <Input
                    placeholder={'Password'}
                    name={'password'}
                    type={'password'}
                    onChange={(name, value) => setPassword(value)}
                    helpLink={forgotPasswordLink}
                    value={password}
                    style={{width: '96%'}}
                />
                <br />
                <Button color={'#1F517F'}>Login</Button>

                <span className={'no-account-link'}>{forgotRegisterLink}</span>
            </Card>
        </form>
    );
};

Login.defaultProps = {
    title: 'Login',
};

Login.propTypes = {
    title: PropTypes.string,
};
