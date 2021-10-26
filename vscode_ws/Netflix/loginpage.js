let today = new Date();   

let thisYear = today.getFullYear(); // 년도

function getParameterByName(name) { name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
 var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search); 
 return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); 
}



let id = getParameterByName('a');

let pw = getParameterByName('b');
let year = getParameterByName('c');
let email = getParameterByName('d');

let id2 = getParameterByName('e');
let pw2 = getParameterByName('f');
let year2 = getParameterByName('g');
let email2 = getParameterByName('h');



let age = thisYear - Number(year);
let age2 = thisYear - Number(year2);


if(age == thisYear){
    age = " ";
}

if(age2 == thisYear){
    age2 == " ";
}



document.write(

    '<h1>id : ' + id + id2+ '</h1>'+
    '<h1>pw : ' + pw + pw2 + '</h1>'+
    '<h1>birthday(year) : ' + year + year2 + '</h1>'+
    '<h1>email : ' + email + email2 + '<h1>'+
    '<h1>age : ' + age +age2+"세" + '</h1>'
  



);