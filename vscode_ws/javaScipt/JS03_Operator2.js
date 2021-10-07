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