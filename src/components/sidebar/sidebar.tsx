import React from 'react';
import {Button, ButtonGroup, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import {PlusOne, TurnedInNot, ClearAll} from '@material-ui/icons'
import {filter, includes, lowerCase, map} from 'lodash-es'

import {addTodo, useTodoState} from '../../states/todo.state';
import {useSearchState} from '../../states/search.state';
import {setDetailItem, useDetailState} from '../../states/detail.state';
import {useStateReset} from './sidebar.hooks';
import countRenders from '../../utils/count-renders';

import './sidebar.css';

export default function Sidebar() {
    const [search] = useSearchState();
    const [selectedItem, detailDispatch] = useDetailState();
    const [todos, todoDispatch] = useTodoState();
    const onStateReset = useStateReset();
    const filteredTodos = search
        ? filter(todos, ({title}) => includes(lowerCase(title), lowerCase(search)))
        : todos;

    countRenders(Sidebar);

    return <div className="sidebar">
        <ButtonGroup className="sidebar__buttons">
            <Button variant="outlined" className="sidebar__add-button" onClick={() => todoDispatch(addTodo())}>
                <PlusOne/>&nbsp;Add
            </Button>
            <Button variant="outlined" className="sidebar__reset-button" onClick={onStateReset}>
                <ClearAll/>&nbsp;Reset
            </Button>
        </ButtonGroup>
        <List className="sidebar__list">
            {map(filteredTodos, (todo) => <ListItem
                button
                key={todo.id}
                onClick={() => detailDispatch(setDetailItem(todo))}
                selected={Boolean(selectedItem && selectedItem.id === todo.id)}>
                <ListItemIcon>
                    <TurnedInNot/>
                </ListItemIcon>
                <ListItemText primary={todo.title}/>
            </ListItem>)}
        </List>
    </div>;
}
