import React from 'react';
import {StylesProvider} from '@material-ui/styles';

import {AuthenticationStateProvider} from './states/authentication.state';
import {TimeStateProvider} from './states/time.state';
import {SearchStateProvider} from './states/search.state';

import AuthenticationGate from './components/authentication-gate/authentication-gate';
import Main from './components/main/main';
import Header from './components/header/header';

const App: React.FC = () => {
    return (
        <StylesProvider injectFirst={true}>
            <TimeStateProvider>
                <AuthenticationStateProvider>
                    <AuthenticationGate>
                        <SearchStateProvider>
                            <Header/>
                            <Main/>
                        </SearchStateProvider>
                    </AuthenticationGate>
                </AuthenticationStateProvider>
            </TimeStateProvider>
        </StylesProvider>
    );
};

export default App;
