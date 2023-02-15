import React from 'react'
import "./ToDoItem.css";

const ListItem = (props) => {
  const deleteHandler = () => {
    // console.log(props.id);
    props.onDelete(props.id);
  };

  return (
    <li className='list-item' onClick={deleteHandler}>
    {props.children}
    </li>
    );
};

export default ListItem;