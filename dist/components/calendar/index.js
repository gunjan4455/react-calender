function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
import moment from "moment";
import { range } from "moment-range";
import { getYear, getMonth, weekDayShortName } from '../../utils';
import MonthList from './MonthList';
import YearTable from './YearTable';
import CalendarTable from './CalendarTable';
import "./calendar.css";
export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "showMonth", (e, month) => {
      this.setState({
        showMonthTable: !this.state.showMonthTable,
        showCalendarTable: !this.state.showCalendarTable
      });
    });

    _defineProperty(this, "setMonth", month => {
      let monthNo = this.state.allmonths.indexOf(month);
      let dateObject = Object.assign({}, this.state.dateObject);
      dateObject = moment(dateObject).set("month", monthNo);
      this.setState({
        dateObject: dateObject,
        showMonthTable: !this.state.showMonthTable,
        showCalendarTable: !this.state.showCalendarTable
      });
      this.props.setDate(dateObject);
    });

    _defineProperty(this, "showYearEditor", () => {
      this.setState({
        showYearNav: true,
        showCalendarTable: !this.state.showCalendarTable
      });
    });

    _defineProperty(this, "onPrevNext", isNext => {
      const {
        dateObject,
        showMonthTable
      } = this.state;
      const curr = showMonthTable ? 'year' : 'month';
      this.setState({
        dateObject: isNext ? dateObject.add(1, curr) : dateObject.subtract(1, curr)
      });
    });

    _defineProperty(this, "setYear", year => {
      let dateObject = Object.assign({}, this.state.dateObject);
      dateObject = moment(dateObject).set("year", year);
      this.setState({
        dateObject: dateObject,
        showMonthTable: !this.state.showMonthTable,
        showYearNav: !this.state.showYearNav
      });
    });

    _defineProperty(this, "onYearChange", e => {
      this.setYear(e.target.value);
    });

    _defineProperty(this, "onDayClick", (e, d) => {
      this.setState({
        selectedDay: d
      }, () => {
        console.log("SELECTED DAY: ", this.state.selectedDay);
      });
    });

    console.log('props-----', props, props.dateObject, moment());
    this.state = {
      showCalendarTable: true,
      showMonthTable: false,
      dateObject: props.dateObject || moment(),
      allmonths: moment.months(),
      showYearNav: false,
      selectedDay: null
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
    console.log('kkkkkkk', this.state);
    const {
      dateObject
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
    }), !this.state.showMonthTable && !this.state.showYearEditor && /*#__PURE__*/React.createElement("span", {
      onClick: e => {
        this.showMonth();
      },
      className: "calendar-label"
    }, getMonth(dateObject), ","), /*#__PURE__*/React.createElement("span", {
      className: "calendar-label",
      onClick: e => {
        this.showYearEditor();
      }
    }, getYear(this.state.dateObject)), /*#__PURE__*/React.createElement("span", {
      onClick: e => {
        this.onPrevNext(true);
      },
      className: "calendar-button button-next"
    })), /*#__PURE__*/React.createElement("div", {
      className: "calendar-date"
    }, this.state.showYearNav && /*#__PURE__*/React.createElement(YearTable, {
      currYear: getYear(dateObject),
      setYear: this.setYear
    }), this.state.showMonthTable && /*#__PURE__*/React.createElement(MonthList, {
      data: moment.months(),
      setMonth: this.setMonth
    })), this.state.showCalendarTable && /*#__PURE__*/React.createElement(CalendarTable, {
      weekDayShortName: weekDayShortName(dateObject),
      dateObject: dateObject,
      onDayClick: this.onDayClick,
      onPrevNext: this.onPrevNext
    }));
  }

}