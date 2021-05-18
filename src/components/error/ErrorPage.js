import React from 'react';
import Link from '../../router/components/Link';
import { routes } from '../../router/routes';

const ErrorPage = ({children}) => {
    return (
        <div>
            {children}
            <Link to={routes.mynews.list.path}>Back to my news list!</Link>
        </div>
    );
};

export default ErrorPage;