import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import LeftContainer from "./components/leftContainer";
import RightContainer from "./components/rightContainer";
import DayPicker from "./components/dayPicker";
import OrderLimit from "./components/limiter";
import './components/root.css'

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
