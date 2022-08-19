import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { actionCreators } from '../../State';

export default function AddTodo(props) {
    // const dispatch = useDispatch();

    let formTitle = props.editTodo.id === 0 ? "Add Todo" : "Edit Todo";

    const [title, setTitle] = useState(props.editTodo.id === 0 ? "" : props.editTodo.title);
    const [summary, setSummary] = useState(props.editTodo.id === 0 ? "" : props.editTodo.summary);
    const [desc, setDesc] = useState(props.editTodo.id === 0 ? "" : props.editTodo.desc);
    const [status, setStatus] = useState(props.editTodo.id === 0 ? "Pending" : props.editTodo.status);
    const [priority, setPriority] = useState(props.editTodo.id === 0 ? "Very Low" : props.editTodo.priority);
    const submit = (e) => {
        e.preventDefault();
        if(!title || !summary || !desc) {
            alert("Field should not be empty.");
        } else {
            let spDataAndClasses = getStatusAndPriorityData(status, priority);
            if(props.editTodo.id === 0) {
                let newTodo = {
                    title: title,
                    summary: summary,
                    desc: desc,
                    createdDate: new Date(),
                    updatedDate: new Date(),
                    deleted: 0,
                    ...spDataAndClasses,
                }
                // dispatch(actionCreators.addTodo(newTodo));
                props.addTodo(newTodo);
                clearAddForm();
            } else {
                let newTodo = {
                    id: props.editTodo.id,
                    title: title,
                    summary: summary,
                    desc: desc,
                    createdDate: props.editTodo.createdDate,
                    updatedDate: new Date(),
                    deleted: 0,
                    ...spDataAndClasses,
                }
                props.addTodo(newTodo);
                clearAddForm();
            }
        }
    }
    const clearAddForm = () => {
        setTitle("");
        setSummary("");
        setDesc("");
        props.showAddTodo(false);
    }

    return (
    <div className="my-5 justify-center body-content">
        <h1>{ formTitle }</h1>
        <div>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control fw-bold"
                        value={title}
                        required
                        placeholder="Title"
                        onChange={(e) => {setTitle(e.target.value)}}
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control fw-bold"
                        value={summary}
                        required
                        placeholder="Summary" 
                        onChange={(e) => {setSummary(e.target.value)}}
                    />
                </div>
                <div className="mb-3">
                    <textarea 
                        className="form-control fw-bold"
                        value={desc}
                        required
                        placeholder="Description" 
                        onChange={(e) => {setDesc(e.target.value)}}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <select 
                        className="form-control dropdown fw-bold"
                        value={status}
                        placeholder="Status" 
                        onChange={(e) => {setStatus(e.target.value)}}
                    >
                        <option value="Pending"> Pending </option>
                        <option value="In Progress"> In Progress </option>
                        <option value="Won't Fix"> Won't Fix </option>
                        <option value="Clarification"> Clarification </option>
                        <option value="Completed"> Completed </option>
                    </select>
                </div>
                <div className="mb-3">
                    <select 
                        className="form-control dropdown fw-bold"
                        value={priority}
                        placeholder="Priority" 
                        onChange={(e) => {setPriority(e.target.value)}}
                    >
                        <option value="Very Low"> Very Low </option>
                        <option value="Low"> Low </option>
                        <option value="Medium"> Medium </option>
                        <option value="High"> High </option>
                        <option value="Highest"> Highest </option>
                    </select>
                </div>
                <button type="submit" className="btn btn-outline-success me-2">Submit</button>
                <button type="reset" className="btn btn-outline-dark" onClick={() => { props.showAddTodo(false) }}>Cancel</button>
            </form>
        </div>
    </div>
  )
}


const getStatusAndPriorityData = (status, priority) => {
    let spDataAndClasses = {};
    if(status === "Pending") {
        spDataAndClasses = {
            status: status,
            statusClasses: "bg-warning"
        };
    } else if(status === "In Progress") {
        spDataAndClasses = {
            status: status,
            statusClasses: "bg-primary"
        };
    } else if(status === "Won't Fix") {
        spDataAndClasses = {
            status: status,
            statusClasses: "bg-secondary"
        };
    } else if(status === "Clarification") {
        spDataAndClasses = {
            status: status,
            statusClasses: "bg-info"
        };
    } else if(status === "Completed") {
        spDataAndClasses = {
            status: status,
            statusClasses: "bg-success"
        };
    }
    if(priority === "Very Low") {
        spDataAndClasses = {
            priority: priority,
            priorityClasses: "bg-info",
            cardClasses: "shadow-info text-info border-info",
            ...spDataAndClasses
        };
    } else if(priority === "Low") {
        spDataAndClasses = {
            priority: priority,
            priorityClasses: "bg-success",
            cardClasses: "shadow-success text-success border-success",
            ...spDataAndClasses
        };
    } else if(priority === "Medium") {
        spDataAndClasses = {
            priority: priority,
            priorityClasses: "bg-warning",
            cardClasses: "shadow-warning text-warning border-warning",
            ...spDataAndClasses
        };
    } else if(priority === "High") {
        spDataAndClasses = {
            priority: priority,
            priorityClasses: "bg-primary",
            cardClasses: "shadow-primary text-primary border-primary",
            ...spDataAndClasses
        };
    } else if(priority === "Highest") {
        spDataAndClasses = {
            priority: priority,
            priorityClasses: "bg-danger",
            cardClasses: "shadow-danger text-danger border-danger",
            ...spDataAndClasses
        };
    }
    return spDataAndClasses;
}