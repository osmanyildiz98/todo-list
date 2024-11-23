import React, { useState } from 'react'
import "../css/TodoCreate.css"

function TodoCreate({createTodo}) {
  
  const [content, setContent] = useState("");

  const confirmTodo = () => {
    if(content !== "") {
      createTodo(content);
      setContent("");
    }
  }

  return (

        <div className='input-container'>
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
            <button onClick={confirmTodo}>Todo Ekle</button>
        </div>

  )
}

export default TodoCreate
