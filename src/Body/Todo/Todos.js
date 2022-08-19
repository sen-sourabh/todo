import React, { useState } from 'react'
import AddTodo from './AddTodo';
import TodoItem from './TodoItem'

export default function Todos(props) {
    const [showAdd, setShowAdd] = useState(false);
    const [editTodo, setEditTodo] = useState({
        id: 0,
        title: String,
        summary: String,
        desc: String,
        status: String,
        createdDate: Date,
        updatedDate: Date,
        deleted: Number,
        priority: String,
        cardClasses: String,
        statusClasses: String,
        priorityClasses: String
      }
  );
    function showAddTodo(value) {
        if(value.id) {
            setEditTodo(value);
            setShowAdd(true);
        }
        else if(value === false) {
            setShowAdd(false);
            setEditTodo({
                id: 0,
                title: String,
                summary: String,
                desc: String,
                status: String,
                createdDate: Date,
                updatedDate: Date,
                deleted: Number,
                priority: String,
                cardClasses: String,
                statusClasses: String,
                priorityClasses: String
              });
        } else {
            setShowAdd(true);
        }
    }
    return (
    <div className="justify-center body-content">
        {
          showAdd ? <AddTodo addTodo={props.addTodo} editTodo={editTodo} showAddTodo={showAddTodo} /> : '' 
        }
        <div className="row">
            {
                (props.todo && props.todo.length === 0) ? <div className="text-center text-danger"><b>You have no todo.</b></div> :
                    props.todo.map((gotTodo) => {
                        return (
                            <TodoItem todo={gotTodo} key={gotTodo.id} onDelete={props.deleteFunc} showAddTodo={showAddTodo}/>
                        );
                    })
            }
        </div>
        <button 
            className="btn button-to-add" 
            onClick={() => { showAddTodo(true) }}
        > + </button>
    </div>
  )
}
