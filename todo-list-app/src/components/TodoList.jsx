import React from 'react'
import Todo from './Todo'
import "../css/TodoList.css"

function TodoList({todosList, editTodo, deleteTodo}) {
  return (
    <div className='todo-list-container'>
      {
        todosList.map((item) => {
          return <Todo key={item.id} todoId = {item.id} content = {item.content} editTodo = {editTodo} deleteTodo = {deleteTodo} />
        })
      }
    </div>
  )
}

export default TodoList
