import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import LeftContainer from "./components/leftContainer";
import RightContainer from "./components/rightContainer";
import DayPicker from "./components/dayPicker";
// import ApprovalButtons from "./components/buttons";
import './components/root.css'

const OrderPage = () => {
    const { data: orders, loading } = useFetch("/api/orders/");

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
                        <DayPicker/>

                        {orders.map((order) => (
                            <div className="container">

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
            )}
        </div>
    );
};

export default OrderPage;
