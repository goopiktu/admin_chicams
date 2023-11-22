import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import "./rejectButton.css"

const RejectButton = () => {

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
          onClick={() => {
            console.log('cliff')
          }}>
            Yes
          </button>

          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            No
          </button>
        </div>
      </div>
    )}
    </Popup>
{/* 
      {isConfirmationOpen && (
        <div className="confirmation-popup">
          <p>Are you sure you want to reject this order?</p>
          <button onClick={handleRejectOrder}>Yes, Reject</button>
          <button onClick={() => setIsConfirmationOpen(false)}>Cancel</button>
        </div>
      )} */}
    </div>
  );
};

export default RejectButton;
