import './App.css';
import Header from "./MyComponents/header";
import { Footer } from "./MyComponents/footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { TodoItem } from "./MyComponents/TodoItem";
import { About } from './MyComponents/About'
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo)
    // let index=todos.indexOf(todo);
    // todos.splice(index,1); Deleting this way does not work
    setTodos(todos.filter((e) => {
      return e !== todo
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, descript) => {
    console.log("I am adding this todo", title, descript);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      descript: descript
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  //creating todos object array
  const [todos, setTodos] = useState(initTodo
    // [{
    //   sno: 1,
    //   title: "Go to market",
    //   descript: "You need to go market to get this job done"
    // },
    // {
    //   sno: 2,
    //   title: "Go to mall",
    //   descript: "You need to go mall to get this job done"
    // },
    // {
    //   sno: 3,
    //   title: "Go to park",
    //   descript: "You need to go park to enjoy"
    // },]
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  // let myvar=29;
  return (
    <>
      <Router>
        <Header title="MyTodosList" />
        <Routes>
          <Route exact path="/" element={<><AddTodo addTodo={addTodo} /><Todos todos={todos} onDelete={onDelete} /></>} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;