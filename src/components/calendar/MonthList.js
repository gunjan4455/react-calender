import React from "react";

const MonthList = ({data, setMonth}) => {
    let months = [];
    data.map(data => {
        months.push(
            <td
                key={`month_${data}`}
                className="calendar-month"
                onClick={e => {
                    setMonth(data);
                }}
            >
                <span>{data}</span>
            </td>
        );
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
        return <tr key={`month_row_${i}`}>{row}</tr>;
    });

    const showMonth = (month) => {
        console.log('month-------', month);
    };

    return (
        <table className="calendar-month">
            <thead>
            <tr>
                <th colSpan="4">Select a Month</th>
            </tr>
            </thead>
            <tbody>{monthlist}</tbody>
        </table>
    );
};

export default MonthList;

