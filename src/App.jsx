import { useState } from "react";
import "./App.css";
import ToDoList from "./Components/ToDoList/ToDoList";
import ToDoInput from "./Components/ToDoInput/ToDoInput";

function App() {
  const [Todos, setTodos ] = useState([]);

  const addTodoHandler = enteredText => {
    setTodos(prevTodos => {
      const updatedTodos = [...prevTodos];
      updatedTodos.unshift({ id: Math.random().toString(), text: enteredText });
      return updatedTodos;
    });
  };

  const deleteItemHandler = (todosId) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.id !== todosId);
    });
  }

  return (
    <div>
    <section id="todos-form">
      <ToDoInput onAddTodo={addTodoHandler}/>
    </section>
    <section id="todos">
      <ToDoList items={Todos} onDeleteItem={deleteItemHandler} />
    </section>
  </div>
  );
}

export default App;