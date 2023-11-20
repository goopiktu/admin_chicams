import NavBar from '../navbar/navbar.jsx';
import { useEffect } from 'react';

function CalendarPage(){
    return(
        <div style={{'display' : 'flex'}}> 
            <NavBar/>
            <div>Calendar Page</div>
        </div>
    )
}

export default CalendarPage;