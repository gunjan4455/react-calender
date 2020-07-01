import React from 'react';
import moment from "moment";
import { getRangeDates } from "../../utils";

const YearTable = ({
  currYear,
  setYear
}) => {
  let nextten = moment().set("year", currYear).add(12, "year").format("Y");
  let tenyear = getRangeDates(currYear, nextten);
  let months = tenyear.map(data => /*#__PURE__*/React.createElement("td", {
    key: data,
    className: "calendar-month",
    onClick: e => {
      setYear(data);
    }
  }, /*#__PURE__*/React.createElement("span", null, data)));
  let rows = [];
  let cells = [];
  months.forEach((row, i) => {
    if (i % 3 !== 0 || i == 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
  });
  rows.push(cells);
  let yearlist = rows.map((d, i) => {
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, d);
  });
  return /*#__PURE__*/React.createElement("table", {
    className: "calendar-month"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    colSpan: "4"
  }, "Select a Year"))), /*#__PURE__*/React.createElement("tbody", null, yearlist));
};

export default YearTable;