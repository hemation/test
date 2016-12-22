/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function tabsUpdate(obj) {
    $(".tabs_header .row").removeClass("active");
    obj.addClass("active");


    var show = obj.data("show");

    $(".tabs_body .content").slideUp();
    $("." + show).slideDown();


}

    $("." + $(".tabs li.act").data("show")).show();
    $(".tabs li").click(function() {
        $(".tabs li").removeClass("act");
        $(this).addClass("act");

        $(".tabbody").hide();
        $("." + $(this).data("show")).slideUp();
    });


$(document).ready(function () {
 $("." + $(".tabs li.act").data("show")).hide();
  $("." + $(".tabs li.act").data("show")).slideDown();
    
    
    $(".tabs li").click(function() {
        $(".tabs li").removeClass("act");
        $(this).addClass("act");

        $(".tabbody").hide();
        $("." + $(this).data("show")).slideDown();
    });


    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        pause: 4000,
        slideMargin: 20
    });


    $(".youtube").colorbox({iframe: true, innerWidth: 640, innerHeight: 390});

});