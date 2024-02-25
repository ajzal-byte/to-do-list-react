import {useState} from 'react'

  const ToDoForm = ({addTodo}) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(value);
    addTodo(value);
    setValue('')
  }

  const today = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = days[today.getDay()];

  return (
    <form className='TodoForm'
    onSubmit={handleSubmit}>
      <input 
      type="text" 
      className='todo-input'
      placeholder={`What's up for ${dayOfWeek}`}
      value={value}
      onChange={(e) => setValue(e.target.value)} />
      <button type='submit'
      className='todo-btn'>
        Add Task
      </button>
    </form>
  )
}

export default ToDoForm