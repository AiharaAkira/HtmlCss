function call(){
    let i1 = document.getElementById('i1');
    let i2 = document.getElementById('i2');
    let i3 = document.getElementById('i3');

    if(i1.value ==''){
        alert('이름을 입력 하세요!')
        i1.focus();
        return false;
    }

    if(i2.value ==''){
        alert('id를 입력 하세요!')
        i2.focus();
        return false;
    }

    if(i3.value ==''){
        alert('비밀번호 입력 하세요!')
        i3.focus();
        return false;
    }

    location.href='test3.html?a='+i1.value+'&b='+i2.value+'&c='+i3.value;
}

