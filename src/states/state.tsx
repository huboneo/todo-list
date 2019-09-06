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

export default function createStateContext<T>(reducer: Reducer<T>, initialState: T, stateMiddleware: any = []): IStateContext<T> {
    const stateMiddlewares = Array.isArray(stateMiddleware) ? stateMiddleware : [stateMiddleware];
    const StateContext = createContext<ContextState<T>>([initialState, () => null]);
    const StateProvider: IStateProvider = ({children}) => {
        const [state, dispatcher] = reduce(stateMiddlewares, ([prevState, prevDispatch], middleware) => {
            const [modifiedState, modifiedDispatch]: ContextState<T> = middleware(prevState, prevDispatch) || [];

            return [modifiedState || prevState, modifiedDispatch || prevDispatch]
        }, useReducer(reducer, initialState));

        return <StateContext.Provider value={[state, dispatcher]}>
            {children}
        </StateContext.Provider>
    };
    const useStateValue = () => useContext(StateContext);

    return {useStateValue, StateProvider, StateContext};
}

export type IStateProvider = FunctionComponent<PropsWithChildren<any>>

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
