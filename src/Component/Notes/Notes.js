import React from 'react'
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import '../../App.css';
import { useUserContext } from '../userContext/userContextProvider';
import NoteList from './NoteList';
import { FaTextHeight } from "react-icons/fa";
import { BsPaintBucket } from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import { MdFormatColorText } from "react-icons/md";
import { FaAlignLeft } from "react-icons/fa";
import { ImUndo2 } from "react-icons/im";
import { ImRedo2 } from "react-icons/im";
import { FaRegClock } from "react-icons/fa";

export default function Notes() {

    const { notes, handleChange, submitNote, validated } = useUserContext();

    return (
        <>
            <div className='bg-info w-100 p-2 m-1'>
                <Form type="submit" validated={validated} onSubmit={submitNote}>
                    <div className='d-flex align-content-center justify-content-between p-2'>
                        <h1>Add a Note</h1>
                        <span>
                            <CloseButton />
                        </span>
                    </div>
                    <Form.Control name='title' size="lg" required value={notes.title} onChange={handleChange} className='w-75 border-0 bg-light' type="text" placeholder="Title" />
                    <br />
                    <Form.Control name='content' required type="text" value={notes.content} onChange={handleChange} className='w-50 border-0' placeholder="Take a note..." />
                    <br />
                    <Button type='submit' className='bg-transparent border-0'>
                    </Button>
                <small className='bg-secondary text-light rounded p-2 m-2'><FaRegClock />  {new Date(Date.now()).toDateString("en-GB")}</small>
                </Form>
                <div className='p-1 m-1 d-flex align-content-center justify-content-around w-50 mt-3 g-5 '>
                    <FaTextHeight />
                    <BsPaintBucket />
                    <MdFormatListBulleted />
                    <MdFormatColorText />
                    <FaAlignLeft />
                    <ImUndo2 />
                    <ImRedo2 />
                </div>
            </div>
            <div className='overflow-auto'>
                <NoteList />
            </div>
        </>
    )
}
