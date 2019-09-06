import React from 'react';

import {TodoStateProvider} from '../../states/todo.state';
import {DetailStateProvider} from '../../states/detail.state';

import Sidebar from '../sidebar/sidebar';
import Detail from '../detail/detail';

import './main.css'

export default function Main() {
    return <main className="main">
        <TodoStateProvider>
            <DetailStateProvider>
                <Sidebar/>
                <Detail/>
            </DetailStateProvider>
        </TodoStateProvider>
    </main>
}
