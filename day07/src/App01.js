import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Home from './page01/Home';
import About from './page01/About';
import Ceo from './page01/Ceo';
import Sub01 from './page01/Sub01';
import Notfiles from './page01/Notfiles';
const App01 = () => {
  return (
    <BrowserRouter>
      <>
        <nav>
          <ul>
            {/* <a href=""/> 대신 <link/> 를 쓴다 
                <a href=""/> 이걸 스면 로딩하느라 빙글빙글돈다잉*/}
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/ceo'>Ceo</Link></li>
            <li><Link to='/sub01'>Sub01</Link></li>
          </ul>  
        </nav>
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path='/' element={ <Home/>}></Route>
          <Route path='/about' element={ <About/> }></Route>
          <Route path='/ceo' element={ <Ceo/>}></Route>
          <Route path='/sub01' element={ <Sub01/>} ></Route>
          <Route path='*' element={ <Notfiles/> }></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App01;
