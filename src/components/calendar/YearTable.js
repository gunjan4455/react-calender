import React from 'react';
import moment from "moment";

import { getRangeDates } from "../../utils";

const YearTable = ({ currYear, setYear }) => {

  let nextten = moment()
    .set("year", currYear)
    .add(12, "year")
    .format("Y");

  let tenyear = getRangeDates(currYear, nextten);

  let months = tenyear.map(data =>
    <td
      key={data}
      className="calendar-month"
      onClick={e => {
        setYear(data);
      }}
    >
      <span>{data}</span>
    </td>
  );

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
    return <tr key={i}>{d}</tr>;
  });

  return (
    <table className="calendar-month">
      <thead>
      <tr>
        <th colSpan="4">Select a Year</th>
      </tr>
      </thead>
      <tbody>{yearlist}</tbody>
    </table>
  );
};

export default YearTable;
