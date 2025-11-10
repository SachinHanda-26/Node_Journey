console.log("Hello World");

var a = 234556;
var b = 34566;


setTimeout(()=>{
    console.log("This is a timeout message with 0 delay");
},0);



function multiply(a, b){
    return a*b;
}

var c = multiply(a,b);

console.log(c);