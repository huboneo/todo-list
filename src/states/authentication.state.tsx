import createStateContext, {IAction} from './state';

const initialState: IAuthenticationState = {
    isAuthenticated: false
};
const {
    useStateValue,
    StateProvider
} = createStateContext(authenticationReducer, initialState);

// we do this only for DX
const useAuthenticationState = useStateValue;
const AuthenticationStateProvider = StateProvider;

export {
    useAuthenticationState,
    AuthenticationStateProvider
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
