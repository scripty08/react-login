import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button } from '@scripty/react-buttons';
import { Input } from '@scripty/react-inputs';
import { Card } from '@scripty/react-card';

export const ForgotPassword = (props) => {
    const { title, onForgotPasswordSubmit, onForgotUsernameSubmit, loginPath } = props;
    const [ password, setPassword ] = useState('');

    const forgotUsernameLink = (onForgotUsernameSubmit) ?
        <NavLink tabIndex={-1} to={`${loginPath}/forgot-username`}>Forgotten?</NavLink> : null;

    const handleSubmit = async (e) => {
        e.preventDefault()
        onForgotPasswordSubmit(password);
    };

    return (
        <form id={'forgot-password'} onSubmit={handleSubmit}>
            <Card title={title}>
                <Input
                    style={{width: '96%'}}
                    placeholder={'Username'}
                    name={'username'}
                    helpLink={forgotUsernameLink}
                    onChange={(name, value) => setPassword(value)}
                />
                <br />
                <Button color={'#1F517F'}>Login</Button>
            </Card>
        </form>
    );
};

ForgotPassword.defaultProps = {
    title: 'Forgot Password',
    loginPath: '/login',
};

ForgotPassword.propTypes = {
    title: PropTypes.string,
    loginPath: PropTypes.string,
};
