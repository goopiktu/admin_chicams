import './navbar.css';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NavBar(){
    const navigate = useNavigate();
    const [selectedToggle, setSelectedToggle] = useState('');

    const toggleCalendar = () => {
        $('#toggle-calendar').css('background-color', '#A05496');
        $('#toggle-date').css('background-color', '#DCBCD8');
        $('#toggle-settings').css('background-color', '#DCBCD8');

        navigate('/');
    }

    const toggleDate = () => {
        $('#toggle-calendar').css('background-color', '#DCBCD8');
        $('#toggle-date').css('background-color', '#A05496');
        $('#toggle-settings').css('background-color', '#DCBCD8');

        navigate('/date')
        
    }

    const toggleSettings = () => {
        $('#toggle-calendar').css('background-color', '#DCBCD8');
        $('#toggle-date').css('background-color', '#DCBCD8');
        $('#toggle-settings').css('background-color', '#A05496');

        navigate('/settings');
    }

    // const handleToggle = (toggleName) => {
    //     setSelectedToggle(toggleName);
        
    //     if(toggleName === 'calendar'){
    //         navigate('/');
    //     } else{
    //         navigate(`/${toggleName.toLowerCase()}`);
    //     }
    // }

    // useEffect(() => {
    //     if(selectedToggle === 'calendar'){
    //         $('#toggle-calendar').css('background-color', '#A05496');
    //         $('#toggle-date').css('background-color', '#DCBCD8');
    //         $('#toggle-settings').css('background-color', '#DCBCD8');
    //     }

    //     if(selectedToggle === 'date'){
    //         $('#toggle-calendar').css('background-color', '#DCBCD8');
    //         $('#toggle-date').css('background-color', '#A05496');
    //         $('#toggle-settings').css('background-color', '#DCBCD8');
    //     }

    //     if(selectedToggle === 'settings'){
    //         $('#toggle-calendar').css('background-color', '#DCBCD8');
    //         $('#toggle-date').css('background-color', '#DCBCD8');
    //         $('#toggle-settings').css('background-color', '#A05496');
    //     }
    // }, [selectedToggle])

    return(
        <div className="content-navbar">
            <img src="./images/logo.png" alt="logo" className="img-logo"></img>

            <div className="selection">
                <div className="text-container">
                    <div className="text-navbar" onClick={toggleCalendar}>Calendar</div>
                    <div className="toggle-navbar" id="toggle-calendar"></div>
                </div>

                <div className="text-container">
                    <div className="text-navbar" onClick={toggleDate}>Date</div>
                    <div className="toggle-navbar" id="toggle-date"></div>
                </div>

                <div className="text-container">
                    <a className="text-navbar" href="/settings">Settings</a>
                    <div className="toggle-navbar" id="toggle-settings"></div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;