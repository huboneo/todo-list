import {useEffect} from 'react';

import {setIsAuthenticated, useAuthenticationState} from '../../states/authentication.state';

export function useAuthentication() {
    const [{isAuthenticated}, dispatch] = useAuthenticationState();

    useEffect(() => {
        if (isAuthenticated) return;

        const timeout = setTimeout(() => dispatch(setIsAuthenticated(true)), 1500);

        return () => clearTimeout(timeout);
    }, [isAuthenticated, dispatch]);

    return [isAuthenticated];
}

export interface IAuthenticationOptions {
    [index: string]: any;
}
