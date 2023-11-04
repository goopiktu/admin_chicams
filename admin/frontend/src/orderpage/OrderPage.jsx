import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import OrderContainer from "./components/orderContainer";
import DeliveryContainer from "./components/deliveryContainer";

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
                    <ul>
                        {orders.map((order, index) => (
                            <div key={index}>
                                <OrderContainer
                                    className=""
                                    order={order}
                                />

                                <DeliveryContainer
                                    className=""
                                    delivery_option={order.mode}
                                />
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default OrderPage;
