import React from "react";
import './root.css'
export default function OrderContainer({order}) {

    return(

        <div className="ordercontainer">
            <div>
                <h1>Order Number</h1>
                <p>{order._id}</p>
            </div>

            <div>
                <h1>Product</h1>
                {/* <p>{order.product}</p> */}
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
                
                <h1>Facebook Link</h1>
                <a href={order.fbLink}>{order.fbLink}</a>
            </div>


        </div>
    );
}