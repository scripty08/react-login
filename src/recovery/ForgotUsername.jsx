import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Button } from '@scripty/react-buttons';
import { Input } from '@scripty/react-inputs';
import { Card } from '@scripty/react-card';

export const ForgotUsername = (props) => {
    const { title, onForgotUsernameSubmit } = props;
    const [ username, setUsername ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        onForgotUsernameSubmit(username);
    };

    return (
        <form id={'login'} onSubmit={handleSubmit}>
            <Card title={title}>
                <Input
                    style={{width: '96%'}}
                    placeholder={'Email'}
                    name={'email'}
                    onChange={(name, value) => setUsername(value)}
                />
                <br />
                <Button color={'#1F517F'}>Login</Button>
            </Card>
        </form>
    );
};

ForgotUsername.defaultProps = {
    title: 'Request Username',
};

ForgotUsername.propTypes = {
    title: PropTypes.string,
};
