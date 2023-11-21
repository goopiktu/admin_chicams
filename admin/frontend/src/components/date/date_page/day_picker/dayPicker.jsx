import React, { useState } from "react";
import PropTypes from "prop-types";
import "./dayPicker.css";

export default function DayPicker({ selectedDate, onDateChange }) {
  const formatDate = (date) => {
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate());
    const yyyy = date.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  };

  const setDate = (newDate) => {
    const date = newDate || new Date();
    const formattedDate = formatDate(date);
    onDateChange(formattedDate);
  };

  const getPreviousDate = () => {
    const currentDayInMilli = new Date(selectedDate).getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const previousDayInMilli = currentDayInMilli - oneDay;
    const previousDate = new Date(previousDayInMilli);

    setDate(previousDate);
  };

  const getNextDate = () => {
    const currentDayInMilli = new Date(selectedDate).getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const nextDayInMilli = currentDayInMilli + oneDay;
    const nextDate = new Date(nextDayInMilli);

    setDate(nextDate);
  };

  return (
    <div className="body-header">
      <button onClick={getPreviousDate}>Previous</button>
      <h3>{selectedDate}</h3>
      <button onClick={getNextDate}>Next</button>
    </div>
  );
}

DayPicker.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
};
