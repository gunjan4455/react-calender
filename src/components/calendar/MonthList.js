import React from "react";

class MonthList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultMonth: props.defaultMonth
    }
  }

  getMonthsList = () => {
    const { data, setMonth } = this.props;
    const list = [];
    data.map(item => {
      list.push(
        <option key={item} onClick={() => setMonth(item)} value={item}>{item}</option>
      );
    });
    return list;
  };

  handleChange = (e) => {
    const month = e.target.value;
    this.setState({ defaultMonth: month });
    this.props.setMonth(month);
  };

  render() {
    return (
      <select
        value={this.state.defaultMonth}
        onChange={this.handleChange}
      >
        {this.getMonthsList()}
      </select>
    );
  }
};

export default MonthList;

