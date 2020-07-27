import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@scripty/react-buttons';
import { Card } from '@scripty/react-card';
import { Input } from '@scripty/react-inputs';
import * as PropTypes from 'prop-types';

export const ResetPassword = (props) => {
    const { title, onPasswordReset } = props;
    const { userId, token } = useParams();
    const [ password, setPassword ] = useState('');
    const [ passwordRepeat, setPasswordRepeat ] = useState('');

    const handleSubmit = async () => {
        const params = {
            userId,
            token,
            password
        }

        if (password === passwordRepeat) {
            console.log('passwords not equal');
            return;
        }

        onPasswordReset(params);
    };

    return (
        <form id={'reset-password'} onSubmit={handleSubmit}>
            <Card title={title}>
                <Input
                    style={{width: '96%'}}
                    placeholder={'New Password'}
                    name={'password'}
                    onChange={(name, value) => setPassword(value)}
                />
                <br />
                <Input
                    style={{width: '96%'}}
                    placeholder={'Repeat Password'}
                    name={'password-repeat'}
                    onChange={(name, value) => setPasswordRepeat(value)}
                />
                <br />
                <Button color={'#1F517F'}>Login</Button>
            </Card>
        </form>
    );
};

ResetPassword.defaultProps = {
    title: 'Reset Password'
};

ResetPassword.propTypes = {
    title: PropTypes.string
};
