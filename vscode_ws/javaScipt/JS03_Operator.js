"use strict";

a = 1;
b = "1";

c = a + b;
console.log(typeof c);

console.log(a+b);
console.log(a/b); // 타입이 다이나믹하게 정해짐
console.log("--------");

//=-*/%
let x = 5;
let y = 2;

let hab = x+y;
let cha = x-y;


//문자연산자
let hi = 'hi~~~~~~~';
let hi2 = 'hello~~~~~~~';
console.log(hi - hi2);//NaN(Not a Number)

//복합연산자
x = x + 1;
console.log(++x);
console.log(x+=1);
x++;
console.log(x);