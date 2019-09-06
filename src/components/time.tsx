import React from 'react';

import {useTimeState} from '../states/time.state';
import countRenders from '../utils/count-renders';

export default function Time() {
    const [time] = useTimeState();

    countRenders(Time);

    return <span className="time">{new Date(time).toLocaleString()}</span>
}
