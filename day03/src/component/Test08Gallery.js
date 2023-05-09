import React from 'react';

const Test08Gallery = () => {
  return (
    <div>
      
    </div>
  );
};

export default Test08Gallery;
/*
- public에 있는 이미지 폴더는 index.html를 기준으로부터 상대경로를 지정해야 한다.
- index.html 안의 <div id="root"></div> 이곳으로 렌더링 되기 때문이다.
- 단 ./ 를 생략해서는 안 된다.

- src 안에 있는 이미지 파일 처리는 참조변수를 사용한다.
  import 참조변수 from '이미지경로';
*/