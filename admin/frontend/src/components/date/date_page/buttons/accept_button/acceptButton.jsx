import Popup from 'reactjs-popup';
import "./acceptButton.css"
// import "./button.css"

const AcceptButton = ({ order, onStatusUpdate }) => {
    
    const handleAcceptClick = async () => {
      // You can perform any local logic here if needed

      // Assuming 'Accepted' is the new status
      onStatusUpdate('Accepted');
      
    };


    return (
      <div className='accept-wrapper'>
        
  
      <Popup trigger={<button className='accept-button'>Accept</button>} position="right center" modal>
          {close => (
              <div className="modal">
                  <button className="close" onClick={close}>&times;</button>
                  <div className="header"> Accept </div>
                  <div className="content">
                      Are you sure you want to accept the order?
                  </div>
          <div className="actions">
            <button 
            className='yes'
            onClick={() => {
              handleAcceptClick();
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
  
  export default AcceptButton;