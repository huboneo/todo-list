import uuid from 'uuid/v4';

import {ITodo} from '../states/todo.state';
import {loremIpsum} from 'lorem-ipsum';

const DUMMY_TODOS: ITodo[] = [
    {
        id: uuid(),
        title: 'Foo todo',
        body: loremIpsum({count: 3})
    },
    {
        id: uuid(),
        title: 'Bar todo',
        body: loremIpsum({count: 3})
    },
    {
        id: uuid(),
        title: 'Baz todo',
        body: loremIpsum({count: 3})
    },
]

export default DUMMY_TODOS
