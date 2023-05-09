import React from 'react';

const Output = ({name,fruit}) => {
  return (
    <div>
      <h2>Output 컴포넌트</h2>
      <h1>{ name }이 좋아하는 과일은 { fruit }  입니다</h1>
    </div>
  );
};

export default Output;