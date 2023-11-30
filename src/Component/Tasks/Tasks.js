import React from 'react';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import '../../App.css';
import { useUserContext } from '../userContext/userContextProvider';
import TaskList from './TaskList';

export default function Tasks() {

    const { tasks, handleChange2, date, setDate, setTasks, validated } = useUserContext();

    return (
        <>
            <div className='bg-info w-100 h-100 p-1 m-1'>
                <Form  validated={validated}>
                    <div className='d-flex align-content-center justify-content-between p-2'>
                        <h1>Add a Task</h1>
                        <span>
                            <CloseButton />
                        </span>
                    </div>
                    <h2 className='ms-2'>Title</h2>
                    <br />
                    <Form.Control type="text" name='name' required value={tasks} onChange={(e) => setTasks(e.target.value)} className='w-50 border-0 bg-transparent' placeholder="add a task..." />
                    <br />
                    <span className='d-flex align-items-center'>
                        <Form.Control className='w-25 me-1 bg-transparent border-0' name='date' value={date} onChange={(e) => setDate(e.target.value)} required type="date" /><b>Date/Time</b>
                    </span>
                    <Button type='submit' onClick={handleChange2} className='bg-transparent border-0'>
                    </Button>
                </Form>
            </div>
            <div className='overflow-auto'>
                <TaskList />
            </div>
        </>
    )
}
