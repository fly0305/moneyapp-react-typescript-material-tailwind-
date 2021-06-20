import { Route, RouteProps } from "react-router";
import React from "react";
import Login from "../../pages/auth/Login";


export function PrivateRoute({ children, ...rest }: RouteProps): JSX.Element {
    return (
        <Route {...rest} render={() =><Login/>} />
    );
}