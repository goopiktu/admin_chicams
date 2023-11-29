import NavBar from '../navbar/navbar.jsx';
import Header from '../header/header.jsx'; 
import AddContact from './add_contact/addButton.jsx';
import './settings.css';


function Settings(){

    const data = [
        { name: 'Jeannie Ortilla-Tolentino', 
          addr: 'Molino 4, Bacoor, Cavite',
          contactNo: '0917 825 2905', 
          fbLink: 'https://www.facebook.com/Chichamsweetdelight', 
          email:  'jeannie_tolentino@yahoo.com'}
    ];

    return (
        <div className="setting-container">
            <NavBar/>

            <div className="second-container">
                <Header/>

                <div className="setting-bg">
                    <div className="setting-body">
                        <div className="contact-settings">
                            <div className="contact-title">Contact Information</div>

                            <table className="contact-table">
                                <thead>
                                    <tr className="contact-header">
                                        <th className="column-title name">Name</th>
                                        <th className="column-title addr">Address</th>
                                        <th className="column-title contact">Contact No.</th>
                                        <th className="column-title fblink">Facebook Link</th>
                                        <th className="column-title email">Email</th>
                                    </tr>
                                </thead>

                                <tbody className="table-body">
                                    {data.map((row) => (
                                        <tr key={row.name}>
                                            <td className="contact-row">{row.name}</td>
                                            <td className="contact-row">{row.addr}</td>
                                            <td className="contact-row">{row.contactNo}</td>
                                            <td className="contact-row">{row.fbLink}</td>
                                            <td className="contact-row">{row.email}</td>
                                        </tr>
                                    ))}
                                </tbody>


                            </table>

                            <AddContact className="center-btn"/>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Settings;