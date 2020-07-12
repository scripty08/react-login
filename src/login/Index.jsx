import React  from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from './Login';
import { ForgotPassword } from '../recovery/ForgotPassword';
import { ForgotUsername } from '../recovery/ForgotUsername';
import { ResetPassword } from '../recovery/ResetPassword';
import { Confirmation } from '../recovery/Confirmation';
import { Registration } from '../registration/Registration';

export default (props) => {
    const { loginPath = 'login', registerPath = 'register' } = props;

    return (
        <Switch>
            <Route path={registerPath}><Registration/></Route>
            <Route path={`${loginPath}/forgot-password`}><ForgotPassword/></Route>
            <Route path={`${loginPath}/forgot-username`}><ForgotUsername/></Route>
            <Route path={`${loginPath}/forgot-password/reset/:userId/:token`}><ResetPassword/></Route>
            <Route path={`${loginPath}/forgot-password/confirmation`}><Confirmation/></Route>
            <Route path={`${loginPath}`} ><Login props{...props} /></Route>
        </Switch>
    );
};
