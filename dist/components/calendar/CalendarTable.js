import React from 'react';
import RenderTable from './RenderTable';

const CalendarTable = ({
  weekDayShortName,
  dateObject,
  onDayClick,
  onPrevNext,
  selectedDay
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "calendar-date"
  }, /*#__PURE__*/React.createElement("table", {
    className: "calendar-day"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, weekDayShortName)), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(RenderTable, {
    key: dateObject,
    dateObject: dateObject,
    onDayClick: onDayClick,
    onPrevNext: onPrevNext,
    selectedDay: selectedDay
  }))));
};

export default CalendarTable;