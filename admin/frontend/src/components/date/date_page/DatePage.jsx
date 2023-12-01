import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import LeftContainer from "./left_container/leftContainer";
import RightContainer from "./right_container/rightContainer";
import DayPicker from "./day_picker/dayPicker";
import OrderLimit from "./limiter/limiter";
import RejectButton from "./buttons/reject_button/rejectButton";
import AcceptButton from "./buttons/accept_button/acceptButton";
import CompleteButton from "./buttons/complete_button/completeButton";
import TopBar from "../../header/header.jsx";
import './Datepage.css'
import useUpdate from "../../../hooks/useUpdate.js";
import { useLocation } from 'react-router-dom';

const OrderPage = () => {

    const location = useLocation();
    const dateFromCal = location.state?.dayOfSquare || '';

    const [selectedDate, setSelectedDate] = useState(() => {

        if(dateFromCal !== ''){

            return dateFromCal.toLocaleDateString();
            
        } else{

            const currentDate = new Date();
            const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
            const dd = String(currentDate.getDate());
            const yyyy = currentDate.getFullYear();
        
            const formattedDate = `${mm}/${dd}/${yyyy}`;
            console.log("Initial selectedDate:", formattedDate);
        
            return formattedDate;
        }
    });

    const { data: orders, loading, refetch } = useFetch(`/api/orders/?date=${selectedDate}`);
    const [currentProduct, setCurrentProduct] = useState({});
    const { updateData: updateOrderStatus, loading: updateLoading, error: updateError } = useUpdate("/api/updateOrderStatus", "PATCH");

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
    };

    const handleStatusUpdate = async (order, newStatus) => {
        console.log(order._id, newStatus);
        try {
            await updateOrderStatus({ _id: order._id, status: newStatus });
            console.log("Order status updated successfully");
            if (newStatus === "Rejected" || newStatus === "Completed") {
                refetch();
            }
        } catch (error) {
            console.error("Error updating order status:", error);
        }
    };
    
    return (
        <div className="date-page-container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="order-container"> 
                    <TopBar/>
                    <div className="wrapper">
                        <DayPicker selectedDate={selectedDate} onDateChange={handleDateChange} />
                        <div className="divider-wrapper">
                            <div className="divider"/>
                        </div>
                        
                        <div className="container-wrapper">
                            {orders.length === 0 ? ( <p>No orders.</p>) : (
                                orders.map((order) => (
                                    
                              
                                        <div className="container" key={order.id}>
                                            <div className="order-img">
                                                <img src={`${order.img}`}/>
                                            </div>

                                            <div className="column-container"> 
                                                <div className="header-container">
                                                    <div className="order-number">
                                                        <h1>{order.orderNum}</h1>
                                                        <div className="spacer"/>
                                                    </div>
                                                    <div className="buttoncontainer">
                                                        <AcceptButton order={order} onStatusUpdate={(newStatus) => handleStatusUpdate(order, newStatus)}/>
                                                        <RejectButton order={order} onStatusUpdate={(newStatus) => handleStatusUpdate(order, newStatus)}/>
                                                        <CompleteButton order={order} onStatusUpdate={(newStatus) => handleStatusUpdate(order, newStatus)}/> 
                                                    </div>
                                                </div>
                                                <div className="infocontainer">
                                                    <LeftContainer className="" order={order} />
                                                    <div className="spacer"/>
                                                    <RightContainer className="" order={order} />
                                                </div>
                                            </div>
                                        </div>
                                
                                  
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderPage;
