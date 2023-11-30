import React, { createContext, useContext, useState } from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from "react-router-dom";

export const userContext = createContext(null);

//      data pass to all components
export const useUserContext = () => {
    const { id, title, name, post, editNote, getNote, submitNote2, handleEdit, setEditNote, date, setDate, ActiveNote, task, handleCheck, tasks, setTask, setTasks, handleChange2, handleDelete2, getNotes, setActiveNote, lastModified, content, note, setNote, edit, setEdit, notes, setNotes, handleChange, submitNote, names, handleDelete, validated } = useContext(userContext);
    return { id, title, content, post, name, handleEdit, getNote, submitNote2, editNote, setEditNote, date, setDate, task, handleCheck, tasks, setTask, setTasks, handleChange2, handleDelete2, ActiveNote, getNotes, setActiveNote, lastModified, note, setNote, edit, setEdit, notes, setNotes, handleChange, submitNote, names, handleDelete, validated };
};

//      user name
const names = ["R Mohan"];

//      all state componente functionals
export default function UserContextProvider({ children }) {

    //  render values
    const [note, setNote] = useState(JSON.parse(sessionStorage.getItem("Notes")) || [
        { id: nanoid(), title: "HTML", content: "HTML is the standard markup language for creating Web pages.", lastModified: "2 days ago" },
        { id: nanoid(), title: "CSS", content: "CSS is the language we use to style a Web page.", lastModified: "3 days ago" },
        { id: nanoid(), title: "Javascript", content: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.", lastModified: "4 days ago" }
    ]);
    console.log(note);

    const [task, setTask] = useState(JSON.parse(sessionStorage.getItem("Tasks")) || [
        { id: nanoid(), name: "HTML", date: "2 days ago", checked: true },
        { id: nanoid(), name: "CSS", date: "3 days ago", checked: false },
        { id: nanoid(), name: "Javascript", date: "4 days ago", checked: false }
    ]);

    //      set values
    const [notes, setNotes] = useState({ title: "", content: "" });
    const [editNote, setEditNote] = useState("");
    const [tasks, setTasks] = useState("");
    const [date, setDate] = useState("");

    //      input validation
    const [validated, setValidated] = useState(false);

    //      current page active
    const [ActiveNote, setActiveNote] = useState(false);

    //      page routes
    const navigate = useNavigate();

    //          date function
    const event = new Date(Date.now());
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: "2-digit",
        minute: "2-digit"
    };

    //      input values set
    const handleChange = (e) => {
        const { name, value } = e.target;
        const target = e.target;
        const id = nanoid();
        if (target.checkValidity() === false) {
            e.stopPropagation();
        }
        setNotes({
            ...notes,
            id,
            [name]: value,
            lastModified: event.toLocaleDateString('en-GB', options)
        });
    };

    //      get single note values
    const getNotes = (n) => {
        const getNote = note.find((item) => item.id === n);
        setEditNote(getNote);
    };

    const handleEdit = (id) => {
        const getEdit = note.find((item) => item.id === id);
        if (getEdit) setEditNote(getEdit);
        setNote(note.map(post => post.id === id ? { ...getEdit } : post));
    };

    const submitNote2 = (e) => {
        e.preventDefault();
        setNotes({ title: "", content: "", lastModified: "" });
        navigate('/notes');
    };


    const handleChange2 = () => {
        let newTodo = {
            id: nanoid(),
            name: tasks,
            date: date,
            checked: false
        };
        let updateNewTodo = [newTodo, ...task];
        setTask(updateNewTodo);
        window.sessionStorage.setItem("Tasks", JSON.stringify(updateNewTodo));
    };

    //      form submission
    const submitNote = (e) => {
        e.preventDefault();
        let NoteItems = [notes, ...note];
        setNote(NoteItems);
        setNotes({ title: "", content: "", lastModified: "" });
        window.sessionStorage.setItem("Notes", JSON.stringify(NoteItems));
        navigate('/notes');
    };

    //      delete function
    const handleDelete = (id) => {
        const leftNotes = note.filter((item) => item.id !== id);
        setNote(leftNotes);
        window.sessionStorage.setItem("Notes", JSON.stringify(leftNotes));
    };

    const handleDelete2 = (id) => {
        const leftTask = task.filter((item) => item.id !== id);
        setTask(leftTask);
        window.sessionStorage.setItem("Tasks", JSON.stringify(leftTask));
    };



    const handleCheck = (id) => {
        const checkedItems = task.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setTask(checkedItems);
        window.sessionStorage.setItem("Tasks", JSON.stringify(checkedItems));

    };

    return (
        <userContext.Provider value={{ names, handleEdit, getNotes, submitNote2, ActiveNote, editNote, setEditNote, setDate, handleCheck, task, handleDelete2, setTask, tasks, setTasks, handleChange2, setActiveNote, note, setNote, notes, setNotes, handleChange, submitNote, validated, handleDelete }}>
            {children}
        </userContext.Provider>
    );
}