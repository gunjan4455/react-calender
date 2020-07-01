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
        dateObject: props.dateObject,
      };
    }
    return null;
  }

  showMonth = (e, month) => {
    this.setState({
      showMonthTable: !this.state.showMonthTable,
      showCalendarTable: !this.state.showCalendarTable
    });
  };

  setMonth = month => {
    let monthNo = this.state.allmonths.indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", monthNo);
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showCalendarTable: !this.state.showCalendarTable
    });
    this.props.setDate(dateObject);
  };

  showYearEditor = () => {
    this.setState({
      showYearNav: true,
      showCalendarTable: !this.state.showCalendarTable
    });
  };

  onPrevNext = (isNext) => {
    const { dateObject, showMonthTable } = this.state;
    const curr = showMonthTable ? 'year' : 'month';
    this.setState({
      dateObject: isNext ? dateObject.add(1, curr) : dateObject.subtract(1, curr)
    });
  };

  setYear = year => {
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("year", year);
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showYearNav: !this.state.showYearNav,
    });
  };

  onYearChange = e => {
    this.setYear(e.target.value);
  };

  onDayClick = (e, d) => {
    this.setState(
      {
        selectedDay: d
      },
      () => {
        console.log("SELECTED DAY: ", this.state.selectedDay);
      }
    );
  };

  render() {
    console.log('kkkkkkk',this.state);
    const { dateObject } = this.state;

    return (
      <div className="tail-datetime-calendar">
        <div className="calendar-navi">
          <span
            onClick={e => {
              this.onPrevNext(false);
            }}
            className="calendar-button button-prev"
          />
          {!this.state.showMonthTable && !this.state.showYearEditor && (
            <span
              onClick={e => {
                this.showMonth();
              }}
              className="calendar-label"
            >
              {getMonth(dateObject)},
            </span>
          )}
          <span
            className="calendar-label"
            onClick={e => {
              this.showYearEditor();
            }}
          >
            {getYear(this.state.dateObject)}
          </span>
          <span
            onClick={e => {
              this.onPrevNext(true);
            }}
            className="calendar-button button-next"
          />
        </div>
        <div className="calendar-date">
          {this.state.showYearNav && <YearTable currYear={getYear(dateObject)} setYear={this.setYear} />}
          {this.state.showMonthTable && <MonthList data={moment.months()} setMonth={this.setMonth} />}
        </div>
        {this.state.showCalendarTable && <CalendarTable
          weekDayShortName={weekDayShortName(dateObject)}
          dateObject={dateObject}
          onDayClick={this.onDayClick}
          onPrevNext={this.onPrevNext} />}
      </div>
    );
  }
}
