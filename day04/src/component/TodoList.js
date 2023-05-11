import React from 'react';
import styles from '../css/TodoList.module.css';
import TodoItem from './TodoItem';
const TodoList = ({ data }) => {
  return (
    <ul className= { styles.TodoList }>
      {
        data.map(item => < TodoItem key={item.seq} item={ item } />)
      }
    </ul>
  );
};

export default TodoList;