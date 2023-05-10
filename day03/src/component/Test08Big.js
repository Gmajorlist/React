import React from 'react';

const Test08Big = ({one}) => {
  //비구조할당
  const { id, img, title } = one
  
  return (
    <div className='bigimg'>
      <h2>{ title }</h2>
      <img src={ img }/>    
    </div>
  );
};

export default Test08Big;