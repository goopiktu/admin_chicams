import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import OrderContainer from "./components/orderContainer";
import DeliveryContainer from "./components/deliveryContainer";
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
                        {orders.map((order) => (
                            <div className="container">

                                <div className="buttoncontainer">
                                    <button>Accept</button>
                                    <button>Reject</button>
                                    <button>Complete</button>
                                </div>

                                <div className="infocontainer">
                                    <OrderContainer
                                        className=""
                                        order={order}
                                    />

                                    <DeliveryContainer
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
