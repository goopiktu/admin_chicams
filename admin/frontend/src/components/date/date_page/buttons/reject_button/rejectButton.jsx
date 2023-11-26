import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import "./rejectButton.css"
import "../button.css"

const RejectButton = ({ onStatusUpdate }) => {

  const handleRejectClick = async () => {
    onStatusUpdate('Rejected');
  };

  return (
    <div className='reject-wrapper'>
      

    <Popup trigger={<button className='reject-button'>Reject</button>} position="right center" modal>
        {close => (
            <div className="modal">
                <button className="close" onClick={close}>&times;</button>
                <div className="header"> Reject </div>
                <div className="content">
                    Are you sure you want to reject the order?
                </div>
        <div className="actions">
          <button
            className='yes'
          onClick={() => {
            handleRejectClick();
            close();
          }}>
            Yes
          </button>

          <button
            className="no"
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

export default RejectButton;
