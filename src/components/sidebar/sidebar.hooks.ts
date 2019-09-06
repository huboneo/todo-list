import {useCallback} from 'react';

import {resetTodoState, useTodoState} from '../../states/todo.state';
import {clearDetailItem, useDetailState} from '../../states/detail.state';

export function useStateReset() {
    const [, todoDispatch] = useTodoState();
    const [, detailDispatch] = useDetailState();

    return useCallback(() => {
        todoDispatch(resetTodoState());
        detailDispatch(clearDetailItem());
    }, [todoDispatch, detailDispatch])
}
