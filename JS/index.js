/*global $ */
$(document).ready(function () {
    'use strict';
    $("#menu").click(function () {
        $("#genres_holder").animate({
            left: "0px"
        }, 200);
        $("#body").animate({
            left: "-250px"
        }, 200);
    });
});