import {useState} from 'react'

const EditToDoForm = ({editTask, task}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = e => {
    e.preventDefault();
    editTask(value, task.id);
    setValue('')
  }
  return (
    <form className='TodoForm'
    onSubmit={handleSubmit}>
      <input 
      type="text" 
      className='todo-input'
      placeholder='Update task'
      value={value}
      onChange={(e) => setValue(e.target.value)} />
      <button type='submit'
      className='todo-btn'>
        Save Task
      </button>
    </form>
  )
}

export default EditToDoForm