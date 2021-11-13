




function call() {

    let today = new Date();

    let thisYear = today.getFullYear(); // 년도

    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');
    let input3 = document.getElementById('input3');
    let input4 = document.getElementById('input4');

    // 공백일경우
    if (input1.value == '') {
        alert('아이디를 입력 하세요!')

        return false;
    }

    if (input2.value == '') {
        alert('비밀번호를 입력 하세요!')

        return false;
    }

    if (input3.value == '') {
        alert('출생년도를 입력 하세요!')

        return false;
    }

    if (input3.value < 1900 && NaN(input3.value)) {
        alert('출생년도를 확인 하세요');
        return false;
    }

    if (input4.value == '') {
        alert('이메일을 입력 하세요!')

        return false;
    }


    let age = thisYear - Number(input3.value);
   


    document.getElementById("result1").innerHTML = "id " + input1.value;
    document.getElementById("result2").innerHTML = "pw " + input2.value;
    document.getElementById("result3").innerHTML = "year " + input3.value;
    document.getElementById("result4").innerHTML = "email" + input4.value;
    document.getElementById("result5").innerHTML = "age " + age + "세";
}