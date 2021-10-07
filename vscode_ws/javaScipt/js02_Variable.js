"use strict";
//쓰면 좀더 정확히 지적해줌
/*
타입 
number, string, boolean, null, undefinded, object, function, ...
*/

//let 
// var문제
//1.global Scope(Hoisting)
console.log(whyDontUse);
var whyDontUse;
whyDontUse = 1111;
console.log("----------------------");

var test;
console.log(test);
console.log("----------------------");

//2. 블락 무시
{
    var whyDontUse2;
    whyDontUse2 = 22222222;
    console.log(whyDontUse2);
}
console.log(whyDontUse2);

//내 나이, 키 저장후 콘솔에 출력
let age = 20;
let height = 173;
console.log(age +" "+ height);