import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { userContext } from '../userContext/userContextProvider';

export default function EditNotes() {
    const { editNote, setEditNote, submitNote2, notes, } = useContext(userContext);

    return (
        <>
            <div className='bg-info h-75 w-100 p-2 m-1'>
                <Form type="submit" onSubmit={submitNote2}>
                    <h1>Edit & Update</h1>
                    <Form.Control name='title' value={editNote.title} onChange={(e) => setEditNote(e.target.value)} size="lg" required className='w-75 border-0' type="text" placeholder="Title" />
                    <br />
                    <Form.Control name='content' value={editNote.content} onChange={(e) => setEditNote(e.target.value)} required type="text" className='w-50 border-0' placeholder="Take a note..." />
                    <br />
                    <Button type='submit' className='bg-success border-3'>
                        Update
                    </Button>
                </Form>
                <small> {notes.lastModified} </small>
            </div>
        </>
    )
}
