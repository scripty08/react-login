import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Registration } from './Registration';

export default (props) => {
    const { registerPath = '/register'} = props;

    return (
        <Switch>
            <Route path={registerPath}><Registration props{...props} /></Route>
        </Switch>
    );
};
