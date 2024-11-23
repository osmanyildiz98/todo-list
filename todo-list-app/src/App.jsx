import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  
  const [todosList, setTodosList] = useState([]);

  const createTodo = (content) => {
    const randomId = Math.floor(Math.random() * 9999);
    const todo = {
      id: randomId,
      content: content,
    }
    setTodosList([...todosList, todo]);
  }

  const editTodo = (todoId, newContent) => {
    const newTodosList = todosList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, content: newContent };
      } else {
        return todo;
      }
    })
    setTodosList(newTodosList);
  };

  const deleteTodo = (todoId) => {
    const exractedArray = todosList.filter((todo) => {
      if (todo.id !== todoId) {
        return todo;
      }
    })
    setTodosList(exractedArray);
  };


  return (
    <div className='container'>
      <TodoCreate createTodo = {createTodo}/>
      <TodoList todosList = {todosList} editTodo = {editTodo} deleteTodo = {deleteTodo} />
    </div>
  )
}

export default App
