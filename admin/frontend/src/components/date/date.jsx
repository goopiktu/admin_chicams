import NavBar from '../navbar/navbar.jsx';
import { useEffect } from 'react';
import OrderPage from './date_page/DatePage.jsx';

function DatePage(){
    return(
        <div style={{'display' : 'flex'}}> 
            <NavBar/>
            <OrderPage/>
        </div>
    )
}

export default DatePage;