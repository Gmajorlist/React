import React from 'react';

const Test03Modal = ({ onClose }) => {
  return (
    <>
      <div className='bg'></div> 
      <div className='popup'>
        <p className='closex' style={{ cursor: 'pointer'}} onClick={ onClose }>X</p>
        <h2>fucking china</h2>     
      </div> 
    </>
  );
};

export default Test03Modal;