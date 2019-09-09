import {useEffect} from 'react';

import createStateContext, {ContextState, IAction} from './state';

const initialState: ITimeState = Date.now();
const {
    useStateValue,
    StateProvider,
    StateContext
} = createStateContext(timeReducer, initialState, useInterval);

// we do this only for DX
const DISPLAY_NAME = 'TimeState';
const useTimeState = useStateValue;
const TimeState = StateProvider;

StateContext.displayName = DISPLAY_NAME;
TimeState.displayName = DISPLAY_NAME;

export {
    useTimeState,
    TimeState
};

/**
 * Actions
 */
const SET_TIME = 'SET_TIME';
export const setTime = (isAuthenticated: number): IAction => ({
    type: SET_TIME,
    payload: isAuthenticated
});

/**
 * Reducer
 */
function timeReducer(state: ITimeState, action: IAction): ITimeState {
    if (action.type === SET_TIME) {
        return action.payload
    }

    return state;
}

/**
 * State
 */
export type ITimeState = number;

/**
 * Middleware
 */
function useInterval<ITimeState>([, dispatch]: ContextState<ITimeState>) {
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(setTime(Date.now()))
        }, 1000);

        return () => clearInterval(interval)
    }, [dispatch])
}
