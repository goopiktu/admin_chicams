import React from "react";
import './right_container.css'
import '../../root.css'


export default function RightContainer({order}) {

    return(

        <div className="deliverycontainer">
            
            <div>   
                <h1>Facebook Link</h1>
                <a href={order.fbLink}>{order.fbLink}</a>
            </div>
            

            <div>
                <h1 className="infoPrompt">Delivery Option & Address</h1>
                <p>{order.mode + " | " + order.address}</p>
            </div>

            <div>
                <h1>Order Description</h1>
                <p>{order.orderDes}</p>
            </div>

            <div>
                <h1>STATUS</h1>
                <p>{order.status}</p>
            </div>

           

        </div>
    );
}