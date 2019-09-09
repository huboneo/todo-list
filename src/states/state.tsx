import React, {
    createContext,
    useContext,
    useReducer,
    FunctionComponent,
    Context,
    Dispatch,
    PropsWithChildren
} from 'react';
import {reduce} from 'lodash-es';

export default function createStateContext<T>(reducer: Reducer<T>, initialState: T, middleware: StateMiddleware | StateMiddleware[] = []): IStateContext<T> {
    const middlewares = Array.isArray(middleware) ? middleware : [middleware];
    const StateContext = createContext<ContextState<T>>([initialState, () => null]);
    const StateProvider: IStateProvider = ({children}) => {
        const stateContext = reduce(middlewares, (agg, mw) => mw(agg) || agg, useReducer(reducer, initialState));

        return <StateContext.Provider value={stateContext}>
            {children}
        </StateContext.Provider>
    };
    const useStateValue = () => useContext(StateContext);

    return {useStateValue, StateProvider, StateContext};
}

export type IStateProvider = FunctionComponent<PropsWithChildren<any>>

export type StateMiddleware = <T>(stateContext: ContextState<T>) => ContextState<T> | void

export interface IAction {
    type: string;
    payload?: any;
}

export type ContextState<T> = [T, Dispatch<IAction>];

export interface IStateContext<T> {
    useStateValue(): ContextState<T>;

    StateProvider: FunctionComponent;
    StateContext: Context<ContextState<T>>;
}

export type Reducer<T> = (state: T, action: IAction) => T;
