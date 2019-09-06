import uuid from 'uuid/v4'
import {useEffect} from 'react';
import {loremIpsum} from 'lorem-ipsum'

import dispatchIntercept from '../utils/dispatch-intercept';
import createStateContext, {IAction} from './state';

import DUMMY_TODOS from '../data/dummy-todos'

const STORAGE_KEY = 'foo-storage';
const initialState: ITodoState = getInitialState();
const {
    useStateValue,
    StateProvider
} = createStateContext(todoReducer, initialState, [dispatchIntercept, useLocalStorage]);

// we do this only for DX
const useTodoState = useStateValue;
const TodoStateProvider = StateProvider;

export {
    useTodoState,
    TodoStateProvider
};

/**
 * Actions
 */
const ADD_TODO = 'ADD_TODO';
export const addTodo = (): IAction => ({
    type: ADD_TODO
});

const RESET_TODO_STATE = 'RESET_TODO_STATE';
export const resetTodoState = (): IAction => ({
    type: RESET_TODO_STATE
});


/**
 * Reducer
 */
function todoReducer(state: ITodoState, action: IAction): ITodoState {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {id: uuid(), title: `${loremIpsum({count: 2, units: 'words'})} todo`}
            ];

        case RESET_TODO_STATE:
            return DUMMY_TODOS;

        default:
            return state;
    }
}

/**
 * State
 */
export type ITodoState = ITodo[]

export interface ITodo {
    id: string;
    title: string;
    body?: string;
    icon?: string;
}

/**
 * Middleware
 */
function useLocalStorage(state: ITodoState) {
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    }, [state])
}

function getInitialState() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)!)
    } catch (e) {
        return DUMMY_TODOS
    }
}
