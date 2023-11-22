import React from "react";
import './leftContainer.css'
export default function LeftContainer({order}) {

    return(

        <div className="leftcontainer">
        
            <div>
                <h1>Ordered On</h1>
                <p>{order.dateOrdered}</p>
            </div>

            <div>
                <h1>Product</h1>
                <p>{order.productName}</p>
                <p></p>
            </div>

            <div>
                <h1>Customer Name</h1>
                <p>{order.name}</p>
            </div>

            <div> 
                <h1>Contact Number</h1>
                <p>{order.contactNo}</p>
            </div>

            <div>
                <h1>Email</h1>
                <p>{order.email}</p>
                
            </div>


        </div>
    );
}