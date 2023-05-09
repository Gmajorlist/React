import React from 'react';

const Name = ({name, onInputName}) => {

  
  return (
    <div>
      <h2>name 컴포넌트</h2>
      <label> 이름을 입력하세요</label>
      <input type="text" value={ name } onChange={ onInputName }/>
    </div>
  );
};

export default Name;