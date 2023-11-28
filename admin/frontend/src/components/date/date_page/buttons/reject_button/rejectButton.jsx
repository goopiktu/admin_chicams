import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import "./rejectButton.css"
import "../button.css"

const RejectButton = ({ onStatusUpdate }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleRejectClick = async () => {
    onStatusUpdate('Rejected');
  };

  return (
    <div className='reject-wrapper'>
      

    <Popup 
      trigger={<button className='reject-button'>Reject</button>} 
      position="right center" 
      modal
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      contentStyle={{ display: isOpen ? 'block' : 'none', 
                      animationName: isOpen ? 'fade-in' : 'fade-out',
                      animationDuration: '0.25s',
                      animationTimingFunction: 'ease-in-out'}}
      >
        {close => (
            <div className="modal active">
                <button className="close" onClick={close}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M8.53336 24.4107L7.58936 23.4667L15.056 16L7.58936 8.53336L8.53336 7.58936L16 15.056L23.4667 7.58936L24.4107 8.53336L16.944 16L24.4107 23.4667L23.4667 24.4107L16 16.944L8.53336 24.4107Z" fill="black"/>
                  </svg>
                </button>
                {/* <div className="header"> Reject </div> */}
                <div className="content">
                    Are you sure you want to reject the order?
                </div>
        <div className="actions">

          <button
            className="go-back"
            onClick={() => {
              console.log('modal closed');
              close();
            }}
          >
            Go back
          </button>

          <button
            className='yes reject'
          onClick={() => {
            handleRejectClick();
            close();
          }}>
            Reject
          </button>

        </div>
      </div>
    )}
    </Popup>

    {isOpen && <div className="overlay" />}
    </div>
  );
};

export default RejectButton;
