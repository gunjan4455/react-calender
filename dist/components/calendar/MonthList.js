import React from "react";

const MonthList = ({
  data,
  setMonth
}) => {
  let months = [];
  data.map(data => {
    months.push( /*#__PURE__*/React.createElement("td", {
      key: `month_${data}`,
      className: "calendar-month",
      onClick: e => {
        setMonth(data);
      }
    }, /*#__PURE__*/React.createElement("span", null, data)));
  });
  let rows = [];
  let cells = [];
  months.forEach((row, i) => {
    if (i % 3 !== 0 || i === 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
  });
  rows.push(cells);
  let monthlist = rows.map((row, i) => {
    return /*#__PURE__*/React.createElement("tr", {
      key: `month_row_${i}`
    }, row);
  });

  const showMonth = month => {
    console.log('month-------', month);
  };

  return /*#__PURE__*/React.createElement("table", {
    className: "calendar-month"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    colSpan: "4"
  }, "Select a Month"))), /*#__PURE__*/React.createElement("tbody", null, monthlist));
};

export default MonthList;