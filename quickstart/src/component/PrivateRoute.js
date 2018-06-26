import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {DefaultLayout} from '../component';
import MiniDrawer from './MiniDrawer';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <MiniDrawer {...rest}  component={Component} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)

//<DefaultLayout {...rest}  component={Component} />