// only dev
import {Dispatch} from 'react';

import {ContextState, IAction} from '../states/state';

export default function dispatchIntercept<T>([_, dispatch]: ContextState<T>): ContextState<T>  {
    const newDispatch: Dispatch<IAction> = (action, ...args) => {
        console.log(action, ...args);

        return dispatch(action, ...args)
    };

    return [_, newDispatch];
};
