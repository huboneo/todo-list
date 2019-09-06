import createStateContext, {IAction} from './state';

import dispatchIntercept from '../utils/dispatch-intercept';
import {ITodo} from './todo.state';

const initialState: IDetailState = null;
const {
    useStateValue,
    StateProvider
} = createStateContext(detailReducer, initialState, dispatchIntercept);

// we do this only for DX
const useDetailState = useStateValue;
const DetailStateProvider = StateProvider;

export {
    useDetailState,
    DetailStateProvider
};

/**
 * Actions
 */
const SET_DETAIL_ITEM = 'SET_DETAIL_ITEM';
export const setDetailItem = (payload: ITodo | null): IAction => ({
    type: SET_DETAIL_ITEM,
    payload
});

const CLEAR_DETAIL_ITEM = 'CLEAR_DETAIL_ITEM';
export const clearDetailItem = (): IAction => ({
    type: CLEAR_DETAIL_ITEM
});

/**
 * Reducer
 */
function detailReducer(state: IDetailState, action: IAction): IDetailState {
    switch (action.type) {
        case SET_DETAIL_ITEM:
            return action.payload;

        case CLEAR_DETAIL_ITEM:
            return null;

        default:
            return state;
    }
}

export type IDetailState = ITodo | null;
