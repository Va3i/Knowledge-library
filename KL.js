let shown = false;
let dis = false;
let pressed = 1;

let num = document.getElementById("parent").children.length;

let height = $(window).height() - 96;

$(function () {
    $(window).on('resize', function () {
        height = $(window).height() - 95;
        $("#frame").css({ height: height });
    });
    $("#frame").css({ height: height });
    $(".image").click(function () {
        if (shown == false) {
            $(".slide").css("transform", "translateX(0px)");
            $(this).css({ "transform": "translateX(243px) rotate(180deg)", "border-radius": "50% 0 0 50%", });
            shown = true;
        } else {
            $(".slide").css("transform", "translateX(-250px)");
            $(this).css({ "transform": "translateX(0px)", "border-radius": "20%" });
            shown = false;
        }
    });

    $(".second").click(function () {

        if (dis == false) {
            $(".all").css({
                "max-height": num * 50 + "px"
            });
            $("#widget").css("transform", "rotate(90deg)");
            dis = true;
        } else {
            $(".all").css({
                "max-height": "0px"
            });
            $("#widget").css("transform", "rotate(0deg)");
            dis = false;
        }
    });

    $(".first").click(function () {
        pressed = 1;
        $(".item").css("background", "transparent");
        $(this).css("background", "rgb(16, 75, 71)");
        $("iframe").attr("src", "../Kownledge Library/Home.html");
    });

    $("#page1").click(function () {
        pressed = 21;
        $(".item").css("background", "transparent");
        $(this).css("background", "rgb(16, 75, 71)");
        $("iframe").attr("src", "../Kownledge Library/Sleep_Paralysis.html");
    });

    $("#page2").click(function () {
        pressed = 22;
        $(".item").css("background", "transparent");
        $(this).css("background", "rgb(16, 75, 71)");
        $("iframe").attr("src", "../Kownledge Library/Time.html");
    });

    $("#page3").click(function () {
        pressed = 23;
        $(".item").css("background", "transparent");
        $(this).css("background", "rgb(16, 75, 71)");
        $("iframe").attr("src", "../Kownledge Library/The_scale_of_the_universe.html");
    });

    $(".first").click(function () {
        pressed = 1;
        $(".item").css("background", "transparent");
        $(this).css("background", "rgb(16, 75, 71)");
        $("iframe").attr("src", "../Kownledge Library/Home.html");
    });
    $(".third").click(function () {
        pressed = 3;
        $(".item").css("background", "transparent");
        $(this).css("background", "rgb(16, 75, 71)");
        $("iframe").attr("src", "../Kownledge Library/Home.html");
    });

    $(".fourth").click(function () {
        pressed = 4;
        $(".item").css("background", "transparent");
        $(this).css("background", "rgb(16, 75, 71)");
        $("iframe").attr("src", "../Kownledge Library/Home.html");
    });

    $(".item").hover(function () {
        $(this).css("background", "rgb(16, 75, 71)");
    });
    $(".item").mouseleave(function () {
        if (pressed == 0) {
            $(this).css("background", "transparent");
        } else {
            $(this).css("background", "transparent");
            switch (pressed) {
                case 1: $(".first").css("background", "rgb(16, 75, 71)");
                break;
                case 21:$("#page1").css("background", "rgb(16, 75, 71)");
                break;
                case 22:$("#page2").css("background", "rgb(16, 75, 71)");
                break;
                case 23:$("#page3").css("background", "rgb(16, 75, 71)");
                break;
                case 3: $(".third").css("background", "rgb(16, 75, 71)");
                break;
                case 4: $(".fourth").css("background", "rgb(16, 75, 71)");
                break;
            }
        }
    });

    $(".first").css("background", "rgb(16, 75, 71)");

}());