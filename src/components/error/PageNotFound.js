import React from 'react';
import ErrorPage from './ErrorPage';

const PageNotFound = () => {
    console.log("page not found")
    return (
        <ErrorPage>
            <h1>PAGE NOT FOUND!</h1>
        </ErrorPage>
    );
};

export default PageNotFound;