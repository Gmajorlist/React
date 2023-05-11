import React, { useState, useRef } from 'react';


const TodoForm = ({onAdd}) => {
  const [text , setText] = useState('')

  const textRef = useRef()
  
  const onInput = (e) => {
    setText(e.target.value);
  }
  const onSubmit = (e) => {

    //못가게막아 강제로이벤트없애
    e.preventDefault();

    if(!text) return
    onAdd(text) //보내고 Todo data
    setText('') //초기화
    textRef.current.focus()
  }


  return (
    <div>
      <form className={ styles.TodoForm } onSubmit={ onSubmit }>
        <input type='text' value={ text } onChange={ onInput } ref={ textRef } placeholder='놀면 뭐하니?'/>
        <button type='submit'>추가</button>
      </form>
    </div>
  );
};

export default TodoForm;