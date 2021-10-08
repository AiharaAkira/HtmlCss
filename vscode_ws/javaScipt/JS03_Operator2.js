"use strict";


/*
논리 연산자 : 결과가 boolean 나오는 거
*/

let x = 10;
let y = 20;
console.log(x > y);

/*
결합 연산자 : &&, ||, ! : 논리연산자 여러개 묶을 때
*/
let a = x > 5 && y < 10;
console.log(a);
/*
삼항 연산자 : else
조건식? true:false
*/

//나이가 10살 넘으면 welcome 아니면 go home

let age = 5;

let result = age>10? 'welcome' : 'gohome';
console.log(typeof result);

//입장료
//let ticket;
let ticket = 10000;
//할인
//나이가 10살이 넘으면 1000월, 안넘으면 3000원 할인
let discount = age>10? ticket - '1000' : ticket - '3000';  
console.log(discount + "원"); //총금액

// 같다 == or ===

let stringNum = "10";
let numberNum = 10;

//타입을 안따짐
console.log(stringNum == numberNum);
console.log(stringNum != numberNum);
//타입을 따짐
console.log(stringNum === numberNum);
console.log(stringNum !== numberNum);

console.log("--------");
//object
let me1 = {name : 'Mr.Lee', age : 20};
let me2 = {name : 'Mr.Lee', age : 20};
let me3 = me1;

console.log(me1 == me2);
console.log(me1 === me2);

console.log(me1 == me3);
console.log(me1 === me3);
console.log("--------");

console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);
console.log("" == false);
console.log("" === false);