import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './addButton.css';

function AddContact({ onFormSubmit }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Popup className="contact-popup"
                trigger={<button className="addCon-btn">+ Add a Contact</button>}
                modal 
                onClose={() => setIsOpen(false)}
                onOpen={() => setIsOpen(true)}
                contentStyle={{ display: isOpen ? 'block' : 'none', 
                                animationName: isOpen ? 'fade-in' : 'fade-out',
                                animationDuration: '0.25s',
                                animationTimingFunction: 'ease-in-out',
                                height: 'auto'}}
                >
                    {close => (
                        <div className="contact-modal active">
                            <button className="close" onClick={close}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M8.53336 24.4107L7.58936 23.4667L15.056 16L7.58936 8.53336L8.53336 7.58936L16 15.056L23.4667 7.58936L24.4107 8.53336L16.944 16L24.4107 23.4667L23.4667 24.4107L16 16.944L8.53336 24.4107Z" fill="black"/>
                                </svg>
                            </button>

                            {/* <div className="content">
                                Are you sure you want to accept the order?
                            </div> */}

                            <div className="contactForm-title">Contact Form</div>

                            <form className="contactform-box" onSubmit={onFormSubmit}>
                                <label className="contact-label" name="name">Name</label>
                                <input type="text" className="contact-input" name="name"/>

                                <label className="contact-label" name="address">Address</label>
                                <input type="text" className="contact-input" name="address"/>

                                <label className="contact-label" name="contactNo">Contact No.</label>
                                <input type="text" className="contact-input" name="contactNo"/>

                                <label className="contact-label" name="fbLink">Facebook Link</label>
                                <input type="text" className="contact-input" name="fbLink"/>

                                <label className="contact-label" name="email">Email</label>
                                <input type="text" className="contact-input" name="email"/>

                                <div className="formbtn-layout">
                                    <button onClick={() => {
                                        close();
                                    }}> Cancel </button>
                                    
                                    <button type="submit">Add Contact</button>
                                </div>
                                
                            </form>
                        </div>
                    )}
                
            </Popup>

            {isOpen && <div className="overlay" />}
        </>
    );
}

export default AddContact;