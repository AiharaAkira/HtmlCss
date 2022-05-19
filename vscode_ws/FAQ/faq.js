$(document).ready(function(){
    $(".faq_a").click(function(){
        var submenu = $(this).next(".faq_hide");

        // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
        if( submenu.is(":visible") ){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    }).mouseover(function(){
        $(this).next(".faq_hide").slideDown();
    });


    // menu class 중에 두번째 있는 menu 의 하위에 있는 a태그에 클릭 이벤트를 발생시킨다.
    $("#faq_menu_first").click();
});

