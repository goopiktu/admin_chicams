import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import "./completeButton.css"
import "../button.css"

const CompleteButton = () => {

  return (
    <div className='complete-wrapper'>
      

    <Popup trigger={<button className='complete-button'>Complete</button>} position="right center" modal>
        {close => (
            <div className="modal">
                <button className="close" onClick={close}>&times;</button>
                <div className="header"> Complete </div>
                <div className="content">
                    Are you sure you want to complete the order?
                </div>
        <div className="actions">
          <button 
          className='no'
          onClick={() => {
            console.log('cliff')
          }}>
            Yes
          </button>

          <button
            className="yes"
            onClick={() => {
              console.log('modal closed');
              close();
            }}
          >
            No
          </button>
        </div>
      </div>
    )}
    </Popup>
    </div>
  );
};

export default CompleteButton;
