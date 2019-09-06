import React from 'react';

import {TodoState} from '../../states/todo.state';
import {DetailState} from '../../states/detail.state';

import Sidebar from '../sidebar/sidebar';
import Detail from '../detail/detail';

import './main.css'

export default function Main() {
    return <main className="main">
        <TodoState>
            <DetailState>
                <Sidebar/>
                <Detail/>
            </DetailState>
        </TodoState>
    </main>
}
