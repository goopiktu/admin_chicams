import NavBar from '../navbar/navbar.jsx';
import { useEffect } from 'react';

function DatePage(){
    return(
        <div style={{'display' : 'flex'}}> 
            <NavBar/>
            <div>Date Page</div>
        </div>
    )
}

export default DatePage;