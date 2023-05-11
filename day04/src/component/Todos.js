import React, { useState, useRef } from 'react';
import styles from '../css/Todos.module.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todos = () => {
  const [data, setData] = useState([])
  const seq = useRef(data.length + 1)

  const onAdd = (text) => {
    setData([
      ...data,
      {
        seq: seq.current++,
        text
      }
    ])
  }


  return (
    <div className={ styles.Todos }>
      <h1>일정관리</h1>
      <TodoForm onAdd={ onAdd }/>
      <TodoList data={ data }/>
    </div>
  );
};

export default Todos;