// Desafio Ford.

// let s1 = vinNumber.length < 3;
// let s2 = vinNumber.length > 2 && vinNumber.length < 9;
// let s3 = vinNumber.length < 9;

// console.log(s1);

const crypto = require('crypto');

let vinNumber = '1HGCM82633A004352'; // 17
let vim = vinNumber;
let encrypt = crypto.createCipheriv(vim);
let crypted = encrypt.update(vim, 'utf8');
console.log(crypted);

// laranja
