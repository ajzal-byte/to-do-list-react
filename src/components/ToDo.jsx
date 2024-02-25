import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const ToDo = ({tasks, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p 
      onClick={() => toggleComplete(tasks.id)}
      className={`${tasks.completed ? 'completed' : ''}`}>
        {tasks.task}
        </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare}
        onClick={() => editTodo(tasks.id)} />
        <FontAwesomeIcon icon={faTrash}
        onClick={() => deleteTodo(tasks.id)} />
      </div>
    </div>
  )
}

export default ToDo