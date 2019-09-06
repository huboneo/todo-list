import React from 'react';
import {TextField} from '@material-ui/core';

import {useTodoFilter} from './header.hooks';
import countRenders from '../../utils/count-renders';

export default function HeaderInput() {
    const setFilter = useTodoFilter('');

    countRenders(HeaderInput);

    return <TextField
            id="outlined-name"
            label="Search by title"
            className="header__search"
            onChange={({target}) => setFilter(target.value)}
            margin="normal"
            variant="outlined"
        />
}
