import React from "react";
import './root.css'


export default function DeliveryContainer({order}) {

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