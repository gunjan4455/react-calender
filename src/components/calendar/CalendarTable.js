import React from 'react';

import RenderTable from './RenderTable';

const CalendarTable = ({ weekDayShortName, dateObject, onDayClick, onPrevNext, selectedDay }) => {
  return (
    <div className="calendar-date">
      <table className="calendar-day">
        <thead>
        <tr>{weekDayShortName}</tr>
        </thead>
        <tbody>
        <RenderTable key={dateObject}
                     dateObject={dateObject}
                     onDayClick={onDayClick}
                     onPrevNext={onPrevNext}
                     selectedDay={selectedDay}/>
        </tbody>
      </table>
    </div>
  );
};

export default CalendarTable;
