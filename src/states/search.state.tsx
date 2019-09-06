import createStateContext, {IAction} from './state';

const initialState: ISearchState = '';
const {
    useStateValue,
    StateProvider
} = createStateContext(detailReducer, initialState);

// we do this only for DX
const useSearchState = useStateValue;
const SearchStateProvider = StateProvider;

export {
    useSearchState,
    SearchStateProvider
};

/**
 * Actions
 */
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const setSearchValue = (payload: string): IAction => ({
    type: SET_SEARCH_VALUE,
    payload
});

/**
 * Reducer
 */
function detailReducer(state: ISearchState, action: IAction): ISearchState {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return action.payload || '';

        default:
            return state;
    }
}

export type ISearchState = string;
