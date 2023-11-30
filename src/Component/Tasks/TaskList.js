import React, { useContext } from 'react';
import { userContext } from '../userContext/userContextProvider';
import { MdDelete } from "react-icons/md";

export default function TaskList() {

    const { task, handleDelete2, handleCheck } = useContext(userContext);

    return (
        <>
            <h2>My Tasks</h2>
            <div className='p-3 mt-3 w-100 d-flex flex-column bg-body'>
                {
                    task.length > 0 ?
                        task.map((item,value  ) => {
                            return (
                                <div className='bg-white border border-2 rounded me-1 mt-1 mb-3' key={value}>
                                    <ul className='p-1 m-1'>
                                        <div className='d-flex align-content-center justify-content-between'>
                                            <li className='d-flex align-content-center ms-5'>
                                                <input className='me-5' type="checkbox" checked={item.checked} />
                                                <div style={(item.checked) ? { textDecoration: "line-through" } : null} >
                                                    <h3>{item.name} </h3>
                                                    <p>{item.date}</p>
                                                </div>
                                                <input className='ms-5' type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} />
                                            </li>
                                            <li className='btn border-0'>
                                                <button onClick={() => handleDelete2(item.id)} className='border-0'>
                                                    <MdDelete />
                                                </button>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            )
                        }) : <h2>Note Tasks Available</h2>}
            </div>
        </>
    )
}
