import React, { useContext } from 'react';
import NoteList from '../Notes/NoteList';
import { userContext } from '../userContext/userContextProvider';
import '../../App.css';
import TaskList from '../Tasks/TaskList';


export default function Home() {
    const { names } = useContext(userContext);

    return (
        <div className='bg-body-secondary w-100 h-100'>
            <h1>
                Welcome {names}
            </h1>
            <div className='overflow-auto'>
                <NoteList />
            </div>
            <TaskList />
        </div>
    )
}
