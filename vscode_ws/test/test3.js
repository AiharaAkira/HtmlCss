function getParameterByName(name) { name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
 var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search); 
 return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); 
}

let name = getParameterByName('a');

let id = getParameterByName('b');

let pw = getParameterByName('c');

let aa = getParameterByName('aa');
let bb = getParameterByName('bb');

let hab = parseInt(aa) + Number(bb);



document.write(

    '<h1>이름 : ' + name + '<h1>'+
    '<h1>id : ' + id + '</h1>'+
    '<h1>pw : ' + pw + '</h1>'+
    '<h1>pw : ' + hab + '</h1>'
  



);