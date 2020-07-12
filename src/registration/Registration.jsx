import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Button } from '@scripty/react-buttons';
import { Input } from '@scripty/react-inputs';
import { Card } from '@scripty/react-card';

export const Registration = (props) => {
    const { title, children, onRegisterSubmit } = props;
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        onRegisterSubmit({
            username,
            email,
            password
        })
    };

    return (
        <form id={'login'} onSubmit={handleSubmit}>
            <Card title={title}>
                <Input
                    placeholder={'Username'}
                    name={'username'}
                    onChange={(name, value) => setUsername(value)}
                />
                <Input
                    placeholder={'Email'}
                    name={'email'}
                    onChange={(name, value) => setEmail(value)}
                />
                {children}
                <Input
                    placeholder={'Password'}
                    name={'password'}
                    onChange={(name, value) => setPassword(value)}
                />
                <Button>Send</Button>
            </Card>
        </form>
    );
};

Registration.defaultProps = {
    title: 'Register',
};

Registration.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object
};
