import React from 'react';
import {StylesProvider} from '@material-ui/styles';

import {AuthenticationState} from './states/authentication.state';
import {TimeState} from './states/time.state';
import {SearchState} from './states/search.state';

import AuthenticationGate from './components/authentication-gate/authentication-gate';
import Main from './components/main/main';
import Header from './components/header/header';

const App: React.FC = () => {
    return (
        <StylesProvider injectFirst={true}>
            <TimeState>
                <AuthenticationState>
                    <AuthenticationGate>
                        <SearchState>
                            <Header/>
                            <Main/>
                        </SearchState>
                    </AuthenticationGate>
                </AuthenticationState>
            </TimeState>
        </StylesProvider>
    );
};

export default App;
