"use strict";

const two = 2;

function call() {
    console.log('akira');
    console.log('20');
}


function twoGugu() {

    for (let j = 1; j <= 9; j++) {
        console.log(`${two} * ${j} = ${two * j}`);
    }

}

function add(a, b) {
    console.log(a + b);
}

// 넣은 숫자의 단을 출력해주는 함수
function gugu(userNum) {

    for (let j = 1; j <= 9; j++) {
        console.log(`${userNum} * ${j} = ${userNum * j}`);
    }

}

function printGugudan2() {
    let myInput = document.myForm.i1;
    let myValue = myInput.value; // 값을 사용하고 싶으면.value
    
    alert(myValue);

    for (let j = 1; j <= 9; j++) {
        console.log(`${myValue} * ${j} = ${myValue * j}`);
    }

    myInput.value="";
    myInput.focus();

    return false; //바로 사라지는 것 방지
}

function printGugudan3() {
    let myInput = document.getElementById('i2');
    let myValue = myInput.value;
   
    alert(myValue);
    

    for (let j = 1; j <= 9; j++) {
        console.log(`${myValue} * ${j} = ${myValue * j}`);
    }

    myInput.value="";
    myInput.focus();

    
}