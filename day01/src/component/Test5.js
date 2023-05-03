import React from 'react';
import TestSSub from './TestSSub';

const Test5 = () => {
  return (
    <div>
      <TestSSub name='홍길동'
                age={19}
                addr='서울'
                tel= '010-1234-1234'
                color='tomoto'
                bgcolor='pink'
                done={true}/>
    <hr/>
    <TestSSub name='코난' addr='부산' color='skyblue' bgcolor='hotpink'/>
    </div>
  );
};

export default Test5;
