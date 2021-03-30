import React from 'react';
import { 
    Route as ReactDOMRoute,
    RouteProps as ReactDOMRouteProps,
    Redirect
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

// true / true = OK
// false / false = OK
// true / false = Redirecionar ele para o login
// false / true = Redirecionar ele para o dashboard

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component , ...rest }) => {
    const { user } = useAuth();

    return (
        <ReactDOMRoute {...rest} render={({ location }) => {
            return isPrivate === !!user ? (
                <Component />
            ) : (
                <Redirect to={{ 
                    pathname: isPrivate ? '/' : '/dashboard',
                    state: { from: location },
                }} 
                />
            )
        }} />
    );
}

export default Route;