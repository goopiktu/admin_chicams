import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import LeftContainer from "./components/leftContainer";
import RightContainer from "./components/rightContainer";
import DayPicker from "./components/dayPicker";
import OrderLimit from "./components/limiter";
import './components/root.css'

const OrderPage = () => {
    const [selectedDate, setSelectedDate] = useState(
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate()
    );

    const { data: orders, loading } = useFetch(`/api/orders/?date=${selectedDate}`);

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
    };

    useEffect(() => {
        console.log(orders);
    }, [orders]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2>All Orders</h2>
                    <div className="wrapper">
                        <DayPicker selectedDate={selectedDate} onDateChange={handleDateChange} />
                        <div>
                            <OrderLimit/>
                            {orders.map((order) => (
                                <div className="container" key={order.id}>

                                    <div className="buttoncontainer">
                                        <button>Accept</button>
                                        <button>Reject</button>
                                        <button>Complete</button> 
                                    </div>

                                    <div className="infocontainer">
                                        <LeftContainer
                                            className=""
                                            order={order}
                                        />

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
