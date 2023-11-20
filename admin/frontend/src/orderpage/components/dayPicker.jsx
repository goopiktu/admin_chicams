import React, { useState } from "react";
import PropTypes from "prop-types";

export default function DayPicker({ selectedDate, onDateChange }) {
  const setDate = (newDate) => {
    const date = newDate || new Date();
    const formattedDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
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
    <div>
      <h3>Date: {selectedDate}</h3>
      <button onClick={getPreviousDate}>Previous</button>
      <button onClick={getNextDate}>Next</button>
    </div>
  );
}

DayPicker.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

