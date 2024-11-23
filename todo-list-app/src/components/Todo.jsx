import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "../css/Todo.css"

function Todo({ todoId, content, editTodo, deleteTodo }) {

  const [newContent, setNewContent] = useState(content)
  const [isEdit, setIsEdit] = useState(false);

  const confirmDeleteTodo = () => {
    deleteTodo(todoId);
  }

  const confirmEditTodo = () => {-
    editTodo(todoId, newContent);
    setIsEdit(false);
  }

  
  return (
      
      <div className='todo-container'>
        
        <div>

          {
            isEdit ? <input type='text' value={newContent} onChange = {(e) => setNewContent(e.target.value)}/> : <p>{content}</p> 
          }  

        </div>
        
        <div className='icon-container'>
          
          {
            isEdit ? <FaCheck className='icon-check' onClick={confirmEditTodo}/> : <FaEdit className = "icon-pen" onClick ={() => setIsEdit(true)}/>
          }
          <FaTrash className = "icon-trash" onClick={confirmDeleteTodo}/>
        
        </div>
      
      </div>

  )
}

export default Todo
