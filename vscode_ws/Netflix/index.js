let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');
let input5 = document.getElementById('input5');
let input6 = document.getElementById('input6');
let input7 = document.getElementById('input7');
let input8 = document.getElementById('input8');




function  call() {
   
// 둘다 공백일경우
    if(input1.value ==''&&input5.value == ''){
        alert('아이디를 입력 하세요!')
        
        return false;
    }

    if(input2.value ==''&&input6.value == ''){
        alert('비밀번호를 입력 하세요!')
        
        return false;
    }

    if(input3.value ==''&&input7.value == ''){
        alert('출생년도를 입력 하세요!')
        
        return false;
    }

    if(input3.value<1900 && input7.value < 1900){
        alert('출생년도를 확인 하세요');
        return false;
    }

    if(input4.value ==''&&input8.value == ''){
        alert('이메일을 입력 하세요!')
        
        return false;
    }

    location.href='loginpage.html?a='+input1.value+'&b='+input2.value+'&c='+input3.value+'&d='+input4.value+
    'e='+input5.value+'&f='+input6.value+'&g='+input7.value+'&h='+input8.value;
}