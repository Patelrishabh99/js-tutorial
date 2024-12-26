const balance = new Number(6000);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

// to make a any number as a precision 
const preNumber = 896.4532;
console.log(preNumber.toPrecision(3));   
//it will give the three digit precision.....

const hundred = 20000000;
// console.log(hundred.toLocaleString('en-IN'));



//++++++++++++++++++++++=MATHS+++++++++++++++++++++++++++++log
console.log(Math.abs(-20));    
console.log(Math.abs(12));
console.log(Math.round(20.67));

console.log(Math.ceil(34.23));
console.log(Math.floor(4.9))

//random in math
console.log(Math.random());
console.log(Math.random()*100);


// writing  a  small code of formula to generate the random values between the max and min
const min = 10;
const max = 20;

console.log(" hello in the function ::");
console.log(Math.floor(Math.random()* (max - min + 1)) + min );
