import React, { useState } from 'react';
import Test04Sub from './Test04Sub';

const Test04 = () => {
const [color, setColor] = useState('')
const [food, setFood] = useState('')

const onColor = (e) => {
  setColor(e.target.value)
}
const onfood = (e) => {
  setFood(e.target.value)
}




  return (
    <div style={{ margin: 30 }}>
      <h2>당신이 좋아하는 색은?</h2>
      <div>
        <input type='text' value={ color} onChange={ onColor}/>
        <p>선택 : hotpink, magenta, blue, tomato</p>
      </div>
      <hr/>
      <h2>당신이 좋아하는 음식은?</h2>
      <div>
        <p>
          <input type="radio" name='food' value='햄버거' onChange={ onfood}/>
          <label>햄버거</label>
        </p>
        <p>
          <input type="radio" name='food' value='삼겹살' onChange={ onfood}/>
          <label>삼겹살</label>
        </p>
        <p>
          <input type="radio" name='food' value='치킨' onChange={ onfood}/>
          <label>치킨</label>
        </p>
        <p>
          <input type="radio" name='food' value='피자' onChange={ onfood}/>
          <label>피자</label>
        </p>

      </div>
      <hr/>
      <Test04Sub color={ color} food={ food }/>
    </div>
  );
};

export default Test04;