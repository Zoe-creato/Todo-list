
import React, {useState} from 'react';
import "./App.css"
import { Todoform } from './Component/Form';
import Todolist from './Component/List/inddx';

function App() {
  
  const initialValue ={
    title: " ",
    date: " ",
    completed: " ",
   };
  const [todo, setTodo] =  useState(initialValue);
  const todos = localStorage.getItem("todo");
  const [todolist, setTodolist] = useState ( todos ? JSON.stringify:[]);
      
  
  
const handleChange = (event) => {
  const { name, value } = event.target;
  setTodo((prevState) => ({
    ...prevState,
  

    [name]: value,
  }));
};


const onAdd = (event) =>{
  event.preventDefault();


    // if (todo.trim() === "")
    // if (todo.tittle === ""|| todo.date === "" || todo.completed === "") {
     if (todo.title.trim() === "" || todo.date.trim()=== "" || todo.completed.trim() === "") {
        
      return alert ("Please enter a todo list");
}
  
  setTodolist((initialValue)=> [ initialValue, todo]);
  localStorage.setItem("todos", JSON.stringify([...todolist, todo]));

setTodo(initialValue);


};
  return (
    <div>
    <div className="todo">
      <h1>T0DO</h1>
      <Todoform onChange={handleChange}  todo={todo} onSubmit={onAdd}  />

      </div>
      <section className ="list">
      <Todolist list ={todolist}  />
      </section>
  </div>)
}

export default App

