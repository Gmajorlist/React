import React,{useReducer} from 'react';
//기본값은 블랙

const initialState = 'black'
const reducer = (state, action) => {
  switch(action.type) {
    case 'RED': return 'red'
    case 'GREEN': return 'green'
    case 'BLUE': return 'blue'
    case 'YELLOW': return 'yellow'
    case 'RESET': return initialState
    default: return state

  }//switch
}

const Test02 = () => {
  const [color, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1 style={{color : color}}> color : { color } </h1>
      <p>
        <button onClick={ ()=> dispatch({type : "RED"})}>빨강</button>
        <button onClick={ ()=> dispatch({type : "GREEN"})}>초록</button>
        <button onClick={ ()=> dispatch({type : "BLUE"})}>파랑</button>
        <button onClick={ ()=> dispatch({type : "YELLOW"})}>노랑</button>
        <button onClick={ ()=> dispatch({type : "RESET"})}>초기화</button>
      </p>
    </div>
  );
};

export default Test02;