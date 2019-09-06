import createStateContext, {IAction} from './state';

const initialState: IAuthenticationState = {
    isAuthenticated: false
};
const {
    useStateValue,
    StateProvider,
    StateContext
} = createStateContext(authenticationReducer, initialState);

// we do this only for DX
const DISPLAY_NAME = 'AuthenticationState';
const useAuthenticationState = useStateValue;
const AuthenticationState = StateProvider;

StateContext.displayName = DISPLAY_NAME;
AuthenticationState.displayName = DISPLAY_NAME;

export {
    useAuthenticationState,
    AuthenticationState
};

/**
 * Actions
 */
const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
export const setIsAuthenticated = (isAuthenticated: boolean): IAction => ({
    type: SET_AUTHENTICATED,
    payload: isAuthenticated
});

/**
 * Reducer
 */
function authenticationReducer(state: IAuthenticationState, action: IAction): IAuthenticationState {
    if (action.type === SET_AUTHENTICATED) {
        return {
            ...state,
            isAuthenticated: action.payload
        };
    }

    return state;
}

/**
 * State
 */
export interface IAuthenticationState {
    isAuthenticated: boolean;
}
