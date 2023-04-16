# How to set date format?

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

*** Make sure to import the moment.js library and it's dependencies before running the code.

# How to set text to json?
To set text to a JSON object,it need to create an object in JavaScript and assign values to its properties by using JSON.stringify() method.

**Here is an example:**
```javascript
/ --- Set key parameter --- //
var key = {}

key.request_datetime = 'value';
key.latest = true  

// Convert text to JSON string
let jsonString = JSON.stringify(key);
console.log(jsonString);
```

**Output**
```
{"request_datetime":"value","latest":true}
```

And convert JSON object to string

```javascript
let json = JSON.parse(jsonString);
console.log(json);
```

# AES-128 Encryption & Decryption

```javascript
// Libary 
var CryptoJS = require("crypto-js");

// --- Function for AES-128 Encryption --- //
function aesEncrypt (data,key) {
   const iv = '';
   const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
       iv: CryptoJS.enc.Utf8.parse(iv),
       mode: CryptoJS.mode.CBC
   });
   return cipher.toString();
}
// --- End Function --- //

 // --- Function for AES-128 Decryption --- //
function aesDecrypt (encrypt,key) {
    const iv = '';
    const cipher = CryptoJS.AES.decrypt(encrypt, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC
    });
 
    return CryptoJS.enc.Utf8.stringify(cipher);
 }
 // ---- End Function ---- //// Libary 
```

# Generate Random Numeber

```javascript
// for generating random number 
function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
} 
```