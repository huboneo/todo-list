import React, {PropsWithChildren} from 'react';

import {IAuthenticationOptions, useAuthentication} from './authentication-gate.hooks';
import countRenders from '../../utils/count-renders';

import Spinner from '../spinner/spinner';

import './authentication-gate.css'

export default function AuthenticationGate({children}: PropsWithChildren<IAuthenticationGateProps>) {
    const [isAuthenticated] = useAuthentication();

    countRenders(AuthenticationGate);

    if (isAuthenticated) return <>{children}</>;

    return <div className="authentication-gate">
        <Spinner/>
    </div>;
}

export interface IAuthenticationGateProps {
    options?: IAuthenticationOptions;
}
