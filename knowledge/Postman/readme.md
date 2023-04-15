# How to set date format

Here is the code to set the date format using the moment.js library in JavaScript. The format of the date is set to "DD/MM/YYYY HH:mm:ss" which represents day/month/year hours:minutes:seconds. This code can be used in a pre-request script or test in tools like Postman to generate a timestamp or date stamp for requests or tests.

**Example**
```javascript
var moment = require('moment');
var cur_date = moment().format(("DD/MM/YYYY HH:mm:ss"));
console.log("Current DateTime = "+ cur_date);
```

**Output**
```
Current DateTime = 15/04/2023 23:48:00
```
###### Can change date format as by update 
```javascript
moment().format(("{Date time format}"));
```

Make sure to import the moment.js library and it's dependencies before running the code.