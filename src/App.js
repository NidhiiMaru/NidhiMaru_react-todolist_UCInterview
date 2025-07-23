import './App.css';
import Header from "./MyComponents/Header"
import {Todos} from "./MyComponents/Todos"
import {AddTodo} from "./MyComponents/AddTodo"
import {Footer} from "./MyComponents/Footer"
import {About} from "./MyComponents/About"
import React, { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){ 
     initTodo=[];
  }
  else{
   initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  
    const onDelete=(todo)=>{
      console.log("i am onDelete of todo",todo);
      setTodos(todos.filter((e)=>{
        return e!==todo;
      }))
      console.log("deleted",todos);
  
    } 
    const addTodo=(title,desc)=>{
      console.log("i am adding todo",title,desc);
      let sno;
      if(todos.length===0){
         sno=0; 
      }
      else{
     sno=todos[todos.length-1].sno+1;
      }
      const myTodo={
        sno:sno,
        title:title,
        desc:desc,
        completed:false 
      }
      setTodos([...todos,myTodo]);
      console.log(myTodo);
      
    }
    const [todos, setTodos] = useState(initTodo);

    const onToggleComplete = (todo) => {
      setTodos(
        todos.map((item) =>
          item.sno === todo.sno ? { ...item, completed: !item.completed } : item
        )
      );
    };
    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos)); 
    },[todos]) 
  return (
    <>
   <Router>
      <Header title="My Todos List" searchBar={false} />
      <Routes>
        <Route
   path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} onToggleComplete={onToggleComplete} />
            </>
          }
        />
        <Route  path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
    </>
  ); 
}
export default App;

