import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './page02/NavBar';
import Home from './page01/Home';
import About from './page01/About';
import Ceo from './page01/Ceo';
import Sub01 from './page01/Sub01';
import Notfiles from './page01/Notfiles';
import './css/style02.css';

const App02 = () => {
  return (
    <BrowserRouter>
      <>
        <NavBar/>

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

export default App02;