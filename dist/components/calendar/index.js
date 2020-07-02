function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
import moment from "moment";
import { range } from "moment-range";
import { getYear, getMonth, weekDayShortName } from '../../utils';
import MonthList from './MonthList';
import YearList from './YearList';
import CalendarTable from './CalendarTable';
import "./calendar.css";
export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "setMonth", month => {
      let monthNo = this.state.allmonths.indexOf(month);
      let dateObject = Object.assign({}, this.state.dateObject);
      dateObject = moment(dateObject).set("month", monthNo);
      this.setState({
        dateObject: dateObject,
        defaultMonth: month
      });
      this.props.setDate && this.props.setDate(dateObject);
    });

    _defineProperty(this, "onPrevNext", isNext => {
      const {
        dateObject
      } = this.state;
      this.setState({
        dateObject: isNext ? dateObject.add(1, 'month') : dateObject.subtract(1, 'month'),
        defaultMonth: getMonth(dateObject),
        defaultYear: getYear(dateObject)
      });
      this.props.setDate && this.props.setDate(dateObject);
    });

    _defineProperty(this, "setYear", year => {
      let dateObject = Object.assign({}, this.state.dateObject);
      dateObject = moment(dateObject).set("year", year);
      this.setState({
        dateObject: dateObject,
        defaultYear: year
      });
      this.props.setDate && this.props.setDate(dateObject);
    });

    _defineProperty(this, "onDayClick", (e, d) => {
      const {
        defaultYear,
        defaultMonth
      } = this.state;
      this.setState({
        selectedDay: d
      }, () => {
        console.log("SELECTED DATE: ", moment(`${d},${defaultMonth},${defaultYear}`));
      });
      this.props.setDate && this.props.setDate(moment(`${d},${defaultMonth},${defaultYear}`));
    });

    const date = props.dateObject || moment();
    this.state = {
      dateObject: date,
      allmonths: moment.months(),
      selectedDay: null,
      defaultMonth: getMonth(date),
      defaultYear: getYear(date)
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.dateObject && props.dateObject !== state.dateObject) {
      return {
        dateObject: props.dateObject
      };
    }

    return null;
  }

  render() {
    const {
      dateObject,
      defaultMonth,
      defaultYear
    } = this.state;
    return /*#__PURE__*/React.createElement("div", {
      className: "tail-datetime-calendar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "calendar-navi"
    }, /*#__PURE__*/React.createElement("span", {
      onClick: e => {
        this.onPrevNext(false);
      },
      className: "calendar-button button-prev"
    }), /*#__PURE__*/React.createElement("span", {
      className: "calendar-label"
    }, /*#__PURE__*/React.createElement(MonthList, {
      defaultMonth: defaultMonth,
      data: moment.months(),
      setMonth: this.setMonth
    })), /*#__PURE__*/React.createElement("span", {
      className: "calendar-label"
    }, /*#__PURE__*/React.createElement(YearList, {
      defaultYear: defaultYear,
      setYear: this.setYear
    })), /*#__PURE__*/React.createElement("span", {
      onClick: e => {
        this.onPrevNext(true);
      },
      className: "calendar-button button-next"
    })), /*#__PURE__*/React.createElement(CalendarTable, {
      weekDayShortName: weekDayShortName(dateObject),
      dateObject: dateObject,
      onDayClick: this.onDayClick,
      onPrevNext: this.onPrevNext,
      selectedDay: this.state.selectedDay
    }));
  }

}