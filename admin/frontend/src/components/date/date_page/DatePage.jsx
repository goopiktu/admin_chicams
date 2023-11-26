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

const OrderPage = () => {
    const [selectedDate, setSelectedDate] = useState(() => {
        const currentDate = new Date();
        const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
        const dd = String(currentDate.getDate());
        const yyyy = currentDate.getFullYear();
      
        const formattedDate = `${mm}/${dd}/${yyyy}`;
        console.log("Initial selectedDate:", formattedDate);
      
        return formattedDate;
    });

    const { data: orders, loading, refetch } = useFetch(`/api/orders/?date=${selectedDate}`);
    const { updateData: updateOrderStatus, loading: updateLoading, error: updateError } = useUpdate("/api/updateOrderStatus", "PATCH");

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
    };

    useEffect(() => {
        console.log(orders);
    }, [orders]);

    const handleStatusUpdate = async (order, newStatus) => {
        console.log(order._id, newStatus);
        try {
            await updateOrderStatus({ _id: order._id, status: newStatus });
            console.log("Order status updated successfully");
            // Refetch the data after the update to trigger a re-render
            refetch();
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
                                        <div className="header-container">
                                            <div className="order-number">
                                                <h1>Order Number</h1>
                                                <div className="spacer"/>
                                                <p>{order.orderNum}</p>
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
