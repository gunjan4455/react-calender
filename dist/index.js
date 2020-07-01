import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./components/calendar";

function App() {
  return /*#__PURE__*/React.createElement(Calendar, null);
}

const rootElement = document.getElementById("root");
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), rootElement);