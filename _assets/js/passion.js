$(document).ready(function() {
    $(window).scroll(() => {
        var scroll = $(this).scrollTop();

        $("#bg-1").css({
            transform: "translate(0px, -" + scroll / 28 + "%)"
        });

        $("#bg-2").css({
            transform: "translate(0px, -" + scroll / 50 + "%)"
        });

        $("#bg-2-1").css({
            transform: "translate(0px, -" + scroll / 50 + "%)"
        });
    });

    $(".next").click(function() {
        $("div.slide")
            .find("div.active-sec")
            .next()
            .addClass("active-sec");
        $("div.slide")
            .find("div.active-sec")
            .prev()
            .addClass("non");
        $("div.slide")
            .find("div.active-sec")
            .prev()
            .removeClass("active-sec");

        console.log("next");
    });

    $(".prev").click(function() {
        $("div.slide")
            .find("div.active-sec")
            .prev()
            .addClass("active-sec");
        $("div.slide")
            .find("div.active-sec")
            .next()
            .removeClass("active-sec");
        console.log("prev");
    });
});
