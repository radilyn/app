import React, { useState } from 'react';
import "./ToDoInput.css";

const TodoInput = (props) => {
const [enteredValue, setEnteredValue] = useState("");

const todosInputChangeHandler = (event) => {
  setEnteredValue(event.target.value);    //To get the entered value
};

//Run after clicking submit
const formSubmitHandler = (event) => {
  event.preventDefault();                //To prevent reload
  // console.log("Submitted");
  // console.log(enteredValue);
  props.onAddTodo(enteredValue);
  setEnteredValue("");
};

  return (                               //To handle submit button 
    <form onSubmit={formSubmitHandler}>       
    <div className="form-control"> 
      <label htmlFor="todos">
        <h2>2023 GOALS</h2>
      </label>
      <input 
      type="text" 
      id="todos" 
      onChange={todosInputChangeHandler} 
      value={enteredValue}
      />
      </div>
      <div className="add">
      <button type="submit" className="button" id="add">
        Add New To-do
      </button>
      </div>
  </form> 
  );
};

export default TodoInput;