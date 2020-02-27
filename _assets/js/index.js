$(document).ready(() => {
    alert("Untuk tampilan terbaik, disarankan menggunakan mode fullscreen :)");
    $(window).scroll(() => {
        var scroll = $(this).scrollTop();

        $("#bg-1").css({
            transform: "translate(0px, -" + scroll / 28 + "%)"
        });

        $("#bg-2").css({
            transform: "translate(0px, -" + scroll / 50 + "%)"
        });
    });
});
