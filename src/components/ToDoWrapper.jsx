import { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./ToDo";
import EditToDoForm from "./EditToDoForm";
uuidv4();

const ToDoWrapper = () => {
  // useState
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  // useEffect
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add todo
  const addTodo = (todo) => {
    // if(todos.length == 3) return alert("Only 3 tasks for free teir")
    if(todo.length === 0 || todo.trim() !== todo) return alert("Task can't be empty");
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  // Mark as completed
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    if(window.confirm("Are you sure?") === false) return
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Show Edit input
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Edit task
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <h1>Get things Done!</h1>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditToDoForm editTask={editTask} task={todo} />
        ) : (
          <ToDo
            tasks={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default ToDoWrapper;
