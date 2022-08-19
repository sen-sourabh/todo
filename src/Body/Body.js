import React, { useEffect, useState } from 'react'
import Todos from "./Todo/Todos";
import TextOp from "./TextOp/Text";
import {
  Route,
  Routes
} from "react-router-dom";
import About from './About';
import Users from './Users/Users';
import ReduxTransaction from './ReduxTransaction/ReduxTransaction';

function Body() {
  let initTodos;
  if(!localStorage.getItem("todos")) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }

  function getTodoForDelete(todo) {
    //Deleting this way in react won't work
    // let index = todo_list.indexOf(todo.id);
    // todo_list.splice(index, 1);
    setTodoList(todo_list.filter((e) => {
      return e !== todo
    }));
    localStorage.setItem("todos", JSON.stringify(todo_list));
  }

  function addTodo(newTodo) {
    if(!newTodo.id) {
      if(todo_list.length === 0) {
        newTodo.id = 1;
      } else {
        newTodo.id = todo_list[todo_list.length-1].id + 1;
      }
      setTodoList([...todo_list, newTodo]);
    } else {
      let index = todo_list.findIndex((e => e.id === newTodo.id));
      todo_list.splice(index, 1);
      setTodoList([newTodo, ...todo_list]);
    }    
  }


  const [todo_list, setTodoList] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo_list));
  }, [todo_list]);
  
  return (
    <>
      <Routes>
        <Route exact path="" element={<Todos todo={todo_list} deleteFunc={getTodoForDelete} addTodo={addTodo} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/textop" element={<TextOp />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/trans" element={<ReduxTransaction />} />
      </Routes>
      
    </>
  )
}

export default Body;