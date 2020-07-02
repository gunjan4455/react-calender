function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import moment from "moment";
import { getRangeDates } from "../../utils";

class YearList extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getYearsList", () => {
      const {
        defaultYear,
        setYear
      } = this.props;
      const nextten = moment().set("year", defaultYear).add(12, "year").format("Y");
      const tenyear = getRangeDates(defaultYear, nextten);
      return tenyear.map(year => /*#__PURE__*/React.createElement("option", {
        key: year,
        onClick: e => {
          setYear(year);
        }
      }, year));
    });

    _defineProperty(this, "handleChange", e => {
      const year = e.target.value;
      this.setState({
        defaultYear: year
      });
      this.props.setYear(year);
    });

    this.state = {
      defaultYear: props.defaultYear
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.defaultYear !== state.defaultYear) {
      return {
        defaultYear: props.defaultYear
      };
    }

    return null;
  }

  render() {
    return /*#__PURE__*/React.createElement("select", {
      value: this.state.defaultYear,
      onChange: this.handleChange
    }, this.getYearsList());
  }

}

;
export default YearList;