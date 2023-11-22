import React, { useEffect, useState } from 'react';
import Sidebar from './components/sidebar/sidebar.jsx';
import Datelist from './components/datelist/datelist.jsx';
import { Button } from 'react-bootstrap';
import NavBar from '../navbar/navbar.jsx';
import './calendar.css';
import TopBar from '../header/header.jsx';

function Calendar({handleDateOrdered, setShowNavbar, setShow}){
        const [orderDate, setOrderDate] = useState(new Date());
        const [isOpen, setIsOpen] = useState(true);

        const closeComponent = () => {
                // setIsOpen(false);
                setShowNavbar(true);
                setShow(false);
        };

        const selectOrderDate = (date) => {
                setOrderDate(date);
                console.log('Date from component CALENDAR: ' + date);

                handleDateOrdered(date);
        };

        return(
                // <div className="calendar-div">

                //         {isOpen && (<div>
                //                 <div className="top-bar">
                //                         <Button className="calendar-exit-button" onClick={closeComponent}>
                //                                 Exit
                //                         </Button>
                //                 </div>

                //                 <Sidebar date={orderDate.toDateString()}/>

                //                 <div className="calendar-dates">
                //                         <Datelist selectOrderDate={selectOrderDate}/>
                //                 </div>
                //         </div>)}
                // </div>
                <div className="root-calendar">
                    < NavBar />
                    
                    <div className="calendar-content">
                        < TopBar />
                        < Datelist /> 
                    </div>
                </div>
                

        );
}

export default Calendar;