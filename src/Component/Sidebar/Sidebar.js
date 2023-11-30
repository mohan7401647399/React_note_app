import React, { useContext } from 'react';
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoMdArchive } from "react-icons/io";
import { ImBin } from "react-icons/im";
import Avatar from 'react-avatar';
import IMG from './Profile.jpg';
import { Link } from 'react-router-dom';
import { userContext } from '../userContext/userContextProvider';
import '../../App.css';

export default function Sidebar() {

    const sideBars = [
        {
            title: "Home",
            icon: <FaHome />,
            link: "/"
        },
        {
            title: "Search",
            icon: <FaSearch />,
            link: "/search"
        },
        {
            title: "Notes",
            icon: <MdOutlineTaskAlt />,
            link: "/notes"
        },
        {
            title: "Tasks",
            icon: <MdOutlineTaskAlt />,
            link: "/tasks"
        },
        {
            title: "Archieve",
            icon: <IoMdArchive />,
            link: "/archieve"
        },
        {
            title: "Bin",
            icon: <ImBin />,
            link: "/bin"
        },
    ]

    const { names, ActiveNote, setActiveNote } = useContext(userContext);

    return (
        <div className='container mt-5'>
            <div className='d-flex'>
                <Avatar src={IMG} size={70} round="50px" />
                <div className='p-2'>
                    <h3>{names}</h3>
                    <p>Mtm.kcs@gmail.com</p>
                </div>
            </div>
            <ul className='list-group p-2 m-1'>
                {
                    sideBars.map((value, key) => {
                        return (
                            <li className={`list-group-item ${value.link === ActiveNote && "active"}`} onClick={() => setActiveNote(value.link)} key={key}>

                                <Link className='d-flex' to={value.link}>
                                    <div className='p-1 text-dark'> {value.icon} </div>
                                    <div className='p-1 text-dark'> {value.title} </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div >
    );
}
