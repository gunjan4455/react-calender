# react-country-select

[![npm package][npm-badge]](https://www.npmjs.com/package/react-demo-calendar)

# Project Title

Calender in React

## Getting Started

Calender Component which is often use in react-forms. It has month and year selection.

## Dependency

moment

### Installing
```
npm install react-country-select --save

```

#### Params :


#####Not Mandatory
```

setDate={<your custom date handler>} //for single selection
dateObject={<moment object>} //for multiple selection

```
### Example
```
import React, {Component} from "react";
import { Calender } from "react-demo-calendar";

export default class App extends Component {
     render() {
        return (
            <Calender />
        );
    }
}

```

