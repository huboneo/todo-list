import {useEffect} from 'react';

import createStateContext, {IAction} from './state';

const initialState: ITimeState = Date.now();
const {
    useStateValue,
    StateProvider
} = createStateContext(timeReducer, initialState, useInterval);

// we do this only for DX
const useTimeState = useStateValue;
const TimeStateProvider = StateProvider;

export {
    useTimeState,
    TimeStateProvider
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
function useInterval(state: any, dispatch: any) {
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(setTime(Date.now()))
        }, 1000);

        return () => clearInterval(interval)
    }, [dispatch])
}
