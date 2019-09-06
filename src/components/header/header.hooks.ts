import {useState, useEffect, SetStateAction, Dispatch} from 'react'

import {setSearchValue, useSearchState} from '../../states/search.state';

export function useTodoFilter(initialState: string): Dispatch<SetStateAction<string>> {
    const [, dispatch] = useSearchState(); // (•_•) ( •_•)>⌐■-■ (⌐■_■)
    const [value, setValue] = useState(initialState);

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(setSearchValue(value))
        }, 300);

        return () => clearTimeout(timeout)
    }, [value, dispatch]);

    return setValue
}
