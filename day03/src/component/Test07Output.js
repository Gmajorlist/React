import React from 'react';

const Test07Output = ({name, on}) => {
  return (
    <>
      <h3>{name}님</h3>
      <h3>설문조사 고맙습니다</h3>
      <button onClick={ on }>확인</button>
    </>
  );
};

export default Test07Output;