import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [descript, setdescript] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !descript) {
            alert("Title or description can not be blank");
        }
        else {
            props.addTodo(title, descript);
            setTitle("")
            setdescript("")
        }


    }
    return (
        <div className="container my-3">
            <h3 className='my-2'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="descript" className="form-label">Todo Description</label>
                    <input type="text" onChange={(e) => { setdescript(e.target.value) }} value={descript} className="form-control" id="descript" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
