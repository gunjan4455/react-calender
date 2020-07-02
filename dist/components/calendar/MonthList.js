function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";

class MonthList extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getMonthsList", () => {
      const {
        data,
        setMonth
      } = this.props;
      const list = [];
      data.map(item => {
        list.push( /*#__PURE__*/React.createElement("option", {
          key: item,
          onClick: () => setMonth(item),
          value: item
        }, item));
      });
      return list;
    });

    _defineProperty(this, "handleChange", e => {
      const month = e.target.value;
      this.setState({
        defaultMonth: month
      });
      this.props.setMonth(month);
    });

    this.state = {
      defaultMonth: props.defaultMonth
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("select", {
      size: "1",
      value: this.state.defaultMonth,
      onChange: this.handleChange
    }, this.getMonthsList());
  }

}

;
export default MonthList;