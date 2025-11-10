const fs = require('fs');
const https = require('https');

console.log("Hello World");

var a = 234556;
var b = 34566;

https.get('https://dummyjson.com/products/1', (resp) => {
console.log('Response received');
});

setTimeout(()=>{
    console.log("This is a timeout message after 3 seconds");
}, 3000);

fs.readFile('./file.txt', 'utf-8', (err, data)=>{
    console.log(data);
});

function multiply(a, b){
    return a*b;
}

var c = multiply(a,b);

console.log(c);