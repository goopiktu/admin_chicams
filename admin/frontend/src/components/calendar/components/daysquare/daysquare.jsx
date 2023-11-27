import React from 'react';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import useFetch from "../../../../hooks/useFetch.js";

import '../daysquare/daysquare.css';

function DaySquare({day, month, year, selectOrderDate}){

        const [isValidDay, setIsValidDay] = useState(true);
        const [isValidMonth, setIsValidMonth] = useState(true);
        const [isValidDate, setIsValidDate] = useState(true);
        const [alertMessage, setAlertMessage] = useState('Date is unavailable, pick another date.');
        const [hasOrder, setHasOrder] = useState(false);
        const dayOfSquare = new Date(year, month, day);

        const { data: orders, loading } = useFetch(`/api/orders/?date=${dayOfSquare.toLocaleDateString()}`);

        useEffect(() => {
                console.log(orders);
            }, [orders]);

        useEffect(() => {
                const currentDate = new Date();
                const dayOfSquare = new Date(year, month, day);

                if(dayOfSquare.getMonth() === currentDate.getMonth() &&
                   day <= currentDate.getDate() + 7){
                        setIsValidDay(false);
                        setAlertMessage("Please order 7 days from the current date.");
                }
                else{
                        setIsValidDay(true);
                }

                if(dayOfSquare.getMonth() === currentDate.getMonth()){
                        setIsValidMonth(false);
                }

                else{
                        setIsValidMonth(true);
                }

                if(!isValidDay && !isValidMonth){
                        setIsValidDate(false);
                }

                else{
                        setIsValidDate(true);
                }

                if(dayOfSquare.getDay() === 0){
                        setIsValidDate(false);
                }
        }, [isValidDay, isValidMonth, isValidDate, day, month, year])

        const getStatusColor = (status) => {
                const colorMap = {
                        Pending: '#A05496', 
                        Accepted: '#249D57',
                        Rejected: '#E36363',
                        Completed: '#3CAEA3'
                }; 

                console.log(colorMap[status]);

                return colorMap[status] || 'yellow';
        }

        return(
               <div className="day-square">
                        <div className="day-number-div">
                                <p className="day-number">{day}</p>
                                {/* {loading ? <div> loading... </div> : null}
                                {hasOrder? <div className="order-status" >Order</div> : null } */}
                                {loading ? (
                                        <p>Loading...</p>
                                ) : (
                                        orders && orders.length !== 0 && orders.map((order) => (
                                              <div className="order-status"
                                                   style={{background: getStatusColor(order.status)}}>
                                                {order.orderNum}
                                              </div>
                                        ))
                                )}
                        </div>
               </div>
        )
}

export default DaySquare;
