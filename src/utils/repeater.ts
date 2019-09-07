// only dev
import {Dispatch} from 'react';
import {ContextState, IAction} from '../states/state';

type DispatchObj = {
  [str: string]:Dispatch<IAction>
}

const dispatches: DispatchObj = {}

export default function repeater(name: string) {
  console.log('loading repeater middleware: ', name);
  
  return function middleware<T>(_: T, dispatch: Dispatch<IAction>): ContextState<T>  {
    const newDispatch: Dispatch<IAction> = (action, ...args) => {
      console.log('dispatch in: ', name);
      console.log('action: ', action);
      
      const newState = dispatch(action, ...args)
      
      // Bail if this isn't the original
      if(action.__repeated) {
        return newState
      }

      // Start repeating
      Object.keys(dispatches).forEach(key => {
        if(key === name) {
          console.log('origin found, skipping', key);
          return
        }
        console.log('repeating to', key);
        dispatches[key]({...action, __repeated: true}, ...args)
        })
        return newState
    };
    dispatches[name] = newDispatch
    return [_, newDispatch];
}}
