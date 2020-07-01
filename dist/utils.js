import moment from "moment";
import { range } from "moment-range";
import React from 'react';

const getDaysInMonth = date => {
  return date.daysInMonth();
};

const getYear = date => {
  return date.format("Y");
};

const getCurrentDay = date => {
  return date.format("D");
};

const getFirstDayOfMonth = date => {
  return moment(date).startOf("month").format("d"); // Day of week 0...1..5...6
};

const getMonth = date => {
  return date.format("MMMM");
};

const getRangeDates = (startDate, stopDate) => {
  const dateArray = [];
  let currentDate = moment(startDate);
  let lastDate = moment(stopDate);

  while (currentDate <= lastDate) {
    dateArray.push(moment(currentDate).format("YYYY"));
    currentDate = moment(currentDate).add(1, "year");
  }

  return dateArray;
};

const weekDayShortName = () => moment.weekdaysShort().map(day => {
  return /*#__PURE__*/React.createElement("th", {
    key: day
  }, day);
});

export { getDaysInMonth, getYear, getCurrentDay, getFirstDayOfMonth, getMonth, getRangeDates, weekDayShortName };