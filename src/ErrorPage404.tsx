import React from "react";
import { useRouteError } from "react-router-dom";

interface RouteError {
    statusText: string;
    data: string;
}

export const ErrorPage404: React.FC = () => {
    const error = useRouteError() as RouteError;
    console.error(error);
    
    return (
        <>
            <h1>Hi! It is an Error Page</h1>
            <h2>404 Not Found Error</h2>
            <p>
                <i>{error.statusText}</i>
            </p>
            <p>
                <i>{error.data}</i>
            </p>
        </>
    );
};