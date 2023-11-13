import React, { useState } from "react";

function DayPicker() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate()
  );

  const setDate = (newDate) => {
    const date = newDate || new Date();
    setSelectedDate(
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
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

export default DayPicker;
