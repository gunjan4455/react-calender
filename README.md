# React Calendar

https://www.npmjs.com/package/react-demo-calendar

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


##### Not Mandatory
```

setDate={<your custom date handler>} 
dateObject={<moment object>}

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

