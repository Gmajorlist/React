import React, { useState } from 'react';
import Test07Input from './Test07Input';
import Test07Print from './Test07Print';
import Test07Output from './Test07Output';
import '../css/Test07.css';
const Test07Main = () => {
  const [count, setCount] = useState(1)

  const onPrev = () => {
    setCount(count-1)
  }
  const onNext = () => {
    setCount(count+1)
  }
  const on = () => {
    setCount(1)
  }
  const [data, setData] = useState({
    name: '',
    age: '',
    addr: '',
    phone:''
});

const onInput = (e) => {
  const { name, value } = e.target //name은 name속성의 값

  setData({
      ...data, // 1.객체 복사(복사하지 않으면 매번 초기화됨), 2.원하는 부분만 수정
      [name]: value //이벤트가 일어난 곳 태그의 name속성의 값을 가져온다.(name속성이 여러개이므로 [] 사용)
  })
}
  return (
    <div className='wrap'>
      {
        count === 1 && <Test07Input data={data} onInput={onInput} onNext={onNext}/>
      }   
      {
        count === 2 &&<Test07Print {...data} onPrev={onPrev} onNext={onNext}/>
      }
      {
        count === 3 &&<Test07Output name={data.name} on = { on }/>
      }
      </div>
  );
};

export default Test07Main;