import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import LeftContainer from "./left_container/leftContainer";
import RightContainer from "./right_container/rightContainer";
import DayPicker from "./day_picker/dayPicker";
import OrderLimit from "./limiter/limiter";
import RejectButton from "./reject_button/rejectButton";
import './root.css'

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

    const { data: orders, loading } = useFetch(`/api/orders/?date=${selectedDate}`);

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
    };

    useEffect(() => {
        console.log(orders);
    }, [orders]);

    return (
        <div className="date-page-container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="order-container"> 
                    <div className="header">

                    </div>
                    <div className="wrapper">
                        <DayPicker selectedDate={selectedDate} onDateChange={handleDateChange} />
                        <div className="divider-wrapper">
                            <div className="divider"/>
                        </div>
                        
                        <div className="container-wrapper">
                            {/* <OrderLimit/> */}
                            {orders.map((order) => (
                                <div className="container" key={order.id}>

                                    <div className="header-container">
                                        <div className="order-number">
                                            <h1>Order Number</h1>
                                            <div className="spacer"/>
                                            <p>{order._id}</p>
                                        </div>
                                        <div className="buttoncontainer">
                                            <button>Accept</button>
                                            <RejectButton/>
                                            <button>Complete</button> 
                                        </div>
                                    </div>
                                    

                                    <div className="infocontainer">
                                        <LeftContainer
                                            className=""
                                            order={order}
                                        />
                                        <div className="spacer"/>
                                        <RightContainer
                                            className=""
                                            order={order}
                                        />
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderPage;
