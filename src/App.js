import React from "react";
import CreateTodoButton from "./create-todo-button/CreateTodoButton";
import TodoCounter from "./todo-counter/TodoCounter";
import TodoItem from "./todo-item/TodoItem";
import TodoSearch from "./todo-search/TodoSearch";
import TodoList from "./todolist/TodoList";

// import './App.css';

const todos = [
  {text: 'Estudiar todos los dias', completed: true},
  {text: 'hacer una aplicacion', completed: false},
  {text: 'Crear un portafolio', completed: false},
]

function App(props) {
  return (
  <React.Fragment>
    <TodoCounter/> 
    <TodoSearch /> 
    <TodoList >
      {todos.map(todo => (
    <TodoItem key={todo.text} text={todo.text} />))}
    </TodoList>  
    <CreateTodoButton /> 
  </React.Fragment>
  );
}

export default App;
