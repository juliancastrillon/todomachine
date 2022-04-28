import React from "react";
import CreateTodoButton from "./create-todo-button/CreateTodoButton";
import TodoCounter from "./todo-counter/TodoCounter";
import TodoItem from "./todo-item/TodoItem";
import TodoSearch from "./todo-search/TodoSearch";
import TodoList from "./todolist/TodoList";
// webimport './App.css';

const defaultTodos = [
  {text: 'Estudiar todos los dias', completed: true},
  {text: 'hacer una aplicacion', completed: true},
  {text: 'Crear un portafolio', completed: true},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos
  }else{
      searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }


  return (
  <React.Fragment>
    <TodoCounter
   total={totalTodos}
   completed={completedTodos}

    /> 
    <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    /> 
    <TodoList >
      {searchedTodos.map(todo => 
    <TodoItem 
    key={todo.text} 
    text={todo.text} 
    completed={todo.completed}
    />)}
    </TodoList>  
    <CreateTodoButton /> 
  </React.Fragment>
  );
}

export default App;
