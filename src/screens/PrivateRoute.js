import React from 'react';
import { useAuth } from '../core/context/AuthProvider';
import { Route, Redirect } from 'react-router';

export default function PrivateRoute({ children, ...res }) {

    const auth = useAuth();

    return (
        <Route
            {...res}
            render={({ location }) => {
                return (
                    auth.user ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                )
            }}
        />
    );
};
