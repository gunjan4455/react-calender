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
    const date = props.dateObject || moment();
    this.state = {
      dateObject: date,
      allmonths: moment.months(),
      selectedDay: null,
      defaultMonth : getMonth(date),
      defaultYear : getYear(date)
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

  setMonth = month => {
    let monthNo = this.state.allmonths.indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", monthNo);
    this.setState({
      dateObject: dateObject
    });
    this.props.setDate && this.props.setDate(dateObject);
  };

  onPrevNext = (isNext) => {
    const { dateObject } = this.state;
    this.setState({
      dateObject: isNext ? dateObject.add(1, 'month') : dateObject.subtract(1, 'month'),
      defaultMonth: getMonth(dateObject),
      defaultYear: getYear(dateObject)
    });
    this.props.setDate && this.props.setDate(dateObject);
  };

  setYear = year => {
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("year", year);
    this.setState({
      dateObject: dateObject
    });
    this.props.setDate && this.props.setDate(dateObject);
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
    this.props.setDate && this.props.setDate(this.state.dateObject);
  };

  render() {
    const { dateObject, defaultMonth, defaultYear } = this.state;

    return (
      <div className="tail-datetime-calendar">
        <div className="calendar-navi">
          <span
            onClick={e => {
              this.onPrevNext(false);
            }}
            className="calendar-button button-prev"
          />
          <span className="calendar-label">
              <MonthList defaultMonth={defaultMonth}
                         data={moment.months()}
                         setMonth={this.setMonth} />
            </span>
          <span className="calendar-label">
            <YearList defaultYear={defaultYear} setYear={this.setYear} />
          </span>
          <span
            onClick={e => {
              this.onPrevNext(true);
            }}
            className="calendar-button button-next"
          />
        </div>
        <CalendarTable
          weekDayShortName={weekDayShortName(dateObject)}
          dateObject={dateObject}
          onDayClick={this.onDayClick}
          onPrevNext={this.onPrevNext}
          selectedDay={this.state.selectedDay}
        />
      </div>
    );
  }
}
