import React from 'react';

const Lion = (props) => {

  //비구조 할당  한번에 여러개 할 때 쓰이는게 편함
  const { name } = props

  return (
    <div>
      <h1>나는 { name }이다</h1>
    </div>
  );
};

export default Lion;