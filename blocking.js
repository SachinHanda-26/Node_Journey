const crypto = require('node:crypto');


console.log("Hello World");

var a = 234556;
var b = 34566;

// pbkdf2 is a blocking function - password based key derivation function


// Synchronous version
crypto.pbkdf2Sync('password', 'salt', 1000000, 512, 'sha512');
console.log("First Key is generated");


// Asynchronous version
crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', (err, derivedKey) => {
   console.log("Second Key is generated");
}
);

function multiply(a, b){
    return a*b;
}

var c = multiply(a,b);

console.log(c);