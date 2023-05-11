import React from 'react';

const TodoItem = ({item}) => {
  const { seq, text} = item
  return (
    <li>
      { text }
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;