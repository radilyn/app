import React from 'react'
import "./ToDoList.css"
import ListItem from '../ToDoItem/ToDoItem';

const TodoList = (props) => {
  return <ul className='todo-list'>
    {props.items.map((todos) => ( 
  <ListItem key={todos.id} id={todos.id} onDelete={props.onDeleteItem}>
    {todos.text}
  </ListItem>
  ))}</ul>;
}

export default TodoList;