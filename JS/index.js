/*global $ */
$(document).ready(function () {
    $(".menu_img").click(function () {
        $("#genres_holder").animate({
            left: "0px"
        }, 250);
        $("#body").animate({
            left: "200px"
        }, 250);
        $(".menu_img").fadeOut(200);
        $(".menu_img").css("display", "none");
        $(".menu_img_close").fadeIn(50);
    });
    $(".menu_img_close").click(function() {
        $(".menu_img_close").fadeOut(200);
        $(".menu_img_close").css("display", "none");
        $(".menu_img").fadeIn(50);
        $("#genres_holder").animate({
           left: "-200px" 
        }, 250);
        $("#body").animate({
            left: "0px"
        }, 250);
    });
});