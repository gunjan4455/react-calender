import React from "react";
import moment from 'moment';
import { getCurrentDay, getDaysInMonth, getFirstDayOfMonth } from "../../utils";

const RenderTable = ({
  dateObject,
  onDayClick,
  onPrevNext
}) => {
  let blanks = [];
  let startBlank = moment(dateObject).subtract(1, 'months').endOf('month').format('D');

  for (let i = 0; i < getFirstDayOfMonth(dateObject); i++) {
    console.log('getFirstDayOfMonth(dateObject)');
    blanks.push( /*#__PURE__*/React.createElement("td", {
      onClick: () => onPrevNext(false),
      key: `blank_${i}`,
      className: "calendar-day empty"
    }, startBlank - i));
  }

  let daysInMonth = [];

  for (let d = 1; d <= getDaysInMonth(dateObject); d++) {
    let currentDay = d == getCurrentDay(dateObject) ? 'today' : '';
    daysInMonth.push( /*#__PURE__*/React.createElement("td", {
      key: `td_${d}`,
      className: `calendar-day ${currentDay}`
    }, /*#__PURE__*/React.createElement("span", {
      onClick: e => {
        onDayClick(e, d);
      }
    }, d)));
  }

  var totalSlots = [...blanks, ...daysInMonth];
  let rows = [];
  let cells = [];
  totalSlots.forEach((day, i) => {
    if (i % 7 !== 0 && cells.length < 7) {
      cells.push(day); //will push first 6 elements
    } else {
      rows.push(cells);
      cells = [];
      cells.push(day);
    }

    if (i === totalSlots.length - 1) {
      if (cells.length === 7) {
        rows.push(cells);
      } else {
        const iteration = 7 - cells.length;

        for (let i = 0; i < iteration; i++) {
          cells.push( /*#__PURE__*/React.createElement("td", {
            onClick: () => onPrevNext(true),
            key: `next_td_${i}`,
            className: "calendar-day empty"
          }, i + 1));
        }

        rows.push(cells);
      }
    }
  });
  return rows.map((row, i) => {
    return /*#__PURE__*/React.createElement("tr", {
      key: `tr_${i}`
    }, row);
  });
};

export default RenderTable;