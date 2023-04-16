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


// --- Function for AES-128 Encryption Return HEX--- //
function aesEncryptToHex (data,key) {
    const iv = '';
    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.ECB
    });
 
    return cipher.ciphertext.toString();
 }
// ---- End Function ---- //


 // --- Function for AES-128 Decryption --- //
function aesDecrypt (encrypt,key) {
    const iv = '';
    const cipher = CryptoJS.AES.decrypt(encrypt, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC
    });
 
    return CryptoJS.enc.Utf8.stringify(cipher);
 }
 // ---- End Function ---- //