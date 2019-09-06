import React from 'react'
import {Card, CardHeader, CardMedia, CardContent, Typography, IconButton} from '@material-ui/core'
import {Close} from '@material-ui/icons'

import {clearDetailItem, useDetailState} from '../../states/detail.state';
import countRenders from '../../utils/count-renders';
import Time from '../time';

import './detail.css'

export default function Detail() {
    const [selectedTodo, dispatch] = useDetailState();

    countRenders(Detail);

    if (!selectedTodo) return null;

    return <div className="detail">
        <Card className="detail__card">
            <CardHeader
                title={selectedTodo.title}
                subheader={`id: ${selectedTodo.id}`}
                action={
                    <IconButton aria-label="settings" onClick={() => dispatch(clearDetailItem())}>
                        <Close />
                    </IconButton>
                }
            />
            <CardMedia
                image="https://placekitten.com/g/350/200"
                title="Cat!"
            />
            <CardContent>
                {selectedTodo.body
                    ? <Typography paragraph={true}>
                        {selectedTodo.body}
                    </Typography>
                    : <Typography variant="body2" color="textSecondary">
                        No description added...
                    </Typography>
                }
            </CardContent>
            <CardContent>
                Time is: <Time />
            </CardContent>
        </Card>
    </div>
}
