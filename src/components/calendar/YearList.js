import React from 'react';
import moment from "moment";

import { getRangeDates } from "../../utils";

class YearList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultYear: props.defaultYear
    }
  }

  getYearsList = () => {
    const { defaultYear, setYear } = this.props;
    const nextten = moment()
      .set("year", defaultYear)
      .add(12, "year")
      .format("Y");

    const tenyear = getRangeDates(defaultYear, nextten);
    return tenyear.map(year =>
      <option
        key={year}
        onClick={e => {
          setYear(year);
        }}
      >
        {year}
      </option>
    );
  };

  handleChange = (e) => {
    const year = e.target.value;
    this.setState({ defaultYear : year });
    this.props.setYear(year);
  };

  render() {
    return (
      <select
        value={this.state.defaultYear}
        onChange={this.handleChange}
      >
        {this.getYearsList()}
      </select>
    );
  }
};

export default YearList;


