import React from 'react';

const Fruit = ({fruit, onInputFruit}) => {

  return (
    <div>
      <h2>fruit 컴포넌트</h2>
      <label> 과일이름을 입력하세요</label>
      <input type="text" value={ fruit } onChange={ onInputFruit }/>
    </div>
  );
};

export default Fruit;