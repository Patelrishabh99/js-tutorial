"use strict";
// console.log(typeof 12.53627);
// console.log(typeof null)
// console.log(typeof undefined)

//convertion and operation

let someNum = 99
let convertedNum = String(someNum);
// console.log(typeof convertedNum);
// console.log(convertedNum);


//**********************OPERATION********************************* *
let value = 100
let negValue = -value
// console.log(negValue);


//+++++++++++++++++++++++++++++OBJECTS++++++++++++++++++++++++++++

let user1 = {
    email : "rishabh@gmail.com",
    id : "rishabh",
}

let user2 = user1;

user2.email = "patel@gmail.com"
console.log(user1.email);
console.log(user2.email);

// stack (primitive)     ---------------------   heap  (non primitive)

