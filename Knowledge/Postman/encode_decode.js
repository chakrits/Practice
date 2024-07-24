// --- Function Encode Base64 --- //
var CryptoJS = require("crypto-js");

var text_word = "My wording"

const encodedWord = CryptoJS.enc.Utf8.parse(text_word); 
const encodedBase64 = CryptoJS.enc.Base64.stringify(encodedWord);
console.log("Base64: "+ encodedBase64);
// --- End Function Encode Base64 --- //


const encode = encodeText(text_word,'base64')

function encodeText(str,encoder){
    const word = CryptoJS.enc.Utf8.parse(str); 
    if(encoder == 'base64'){
        return CryptoJS.enc.Base64.stringify(word);
    }
    else if(encoder == 'hex'){
        return CryptoJS.enc.Hex.stringify(word);
    }
    else if(encoder == 'utf8'){
        return CryptoJS.enc.Utf8.stringify(word);
    }
}

const decode = decodeText(encode,'base64')
function decodeText(str,encoder){
    if(encoder == 'base64'){
        const decode = CryptoJS.enc.Base64.parse(str)
        return CryptoJS.enc.Utf8.stringify(decode)
    }
    else if(encoder == 'hex'){
        const decode = CryptoJS.enc.Hex.parse(str)
        return CryptoJS.enc.Utf8.stringify(decode)
    }
    else if(encoder == 'utf8'){
        return CryptoJS.enc.Utf8.stringify(str);
    }
}