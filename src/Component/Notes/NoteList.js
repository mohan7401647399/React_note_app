import React, { useContext } from 'react';
import { userContext } from '../userContext/userContextProvider';
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function NoteList() {

    const { note, handleDelete, handleEdit } = useContext(userContext);
    return (
        <>
            <h2>Recently viewed</h2>
            <div className='p-1 mt-2 h-100 w-100 d-flex flex-row'>
                {
                    note.length > 0 ?
                        note.map((item,value) => {
                            return (
                                <div>
                                    <div className='card h-100 bg-white border border-primary me-2 ms-3 mt-1' style={{ width: "16rem" }} key={value}>
                                        <div className='card-body w-100 d-flex justify-content-between p-2'>
                                            <div className='title'>
                                                <h3 className='card-title'>{item.title} </h3>
                                            </div>
                                            <div className='btn border-0'>
                                                <Link to={`/edit/${item.id}`}>
                                                    <button className='me-1 border-0 me-2' onClick={() => handleEdit(item.id)}>
                                                        <GrEdit />
                                                    </button>
                                                </Link>
                                                <button onClick={() => handleDelete(item.id)} className='border-0'>
                                                    <MdDelete />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='card-body p-2 w-100 m-1 overflow-auto'>
                                            <p> {item.content && item.content.substr(0, 100) + "..."} </p>
                                            <small>{item.lastModified}</small>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <h4>No Notes Available</h4>
                }
            </div>
        </>
    )
}
