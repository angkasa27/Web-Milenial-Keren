$(document).ready(() => {
    $("nav .show").click(() => {
        $("nav .menu").css({
            right: "0"
        });
    });

    $("nav .menu .hide").click(() => {
        $("nav .menu").css({
            right: "-100%"
        });
    });
});
