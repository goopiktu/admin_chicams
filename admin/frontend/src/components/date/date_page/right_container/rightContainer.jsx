import React from "react";
import './right_container.css'


export default function RightContainer({order}) {

    return(

        <div className="deliverycontainer">
            <div>
                <h1 className="infoPrompt">Delivery Option & Address</h1>
                <p>{order.mode + " | " + order.address}</p>
            </div>

            <div>
                <h1>Order Description</h1>
                <p>{order.orderDes}</p>
            </div>

           

        </div>
    );
}