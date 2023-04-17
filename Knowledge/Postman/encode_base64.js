// --- Function Encode Base64 --- //
var CryptoJS = require("crypto-js");


var text_word = "My wording"

const encodedWord = CryptoJS.enc.Utf8.parse(text_word); 
const encodedBase64 = CryptoJS.enc.Base64.stringify(encodedWord);
console.log("Base64: "+ encodedBase64);
// --- End Function Encode Base64 --- //