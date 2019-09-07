import createStateContext, {IAction} from './state';

import dispatchIntercept from '../utils/dispatch-intercept';
import {ITodo} from './todo.state';
import repeater from '../utils/repeater';

const initialState: IDetailState = null;
const {
    useStateValue,
    StateProvider,
    StateContext
} = createStateContext(detailReducer, initialState, [dispatchIntercept, repeater('detail')]);

// we do this only for DX
const DISPLAY_NAME = 'DetailState';
const useDetailState = useStateValue;
const DetailState = StateProvider;

StateContext.displayName = DISPLAY_NAME;
DetailState.displayName = DISPLAY_NAME;

export {
    useDetailState,
    DetailState
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
