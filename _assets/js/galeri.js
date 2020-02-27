$(document).ready(() => {
    $(".sec1 div#ade").click(() => {
        $("#ade-content.show").css({
            visibility: "unset"
        });
    });

    $(".sec1 div#jess").click(() => {
        $("#jess-content.show").css({
            visibility: "unset"
        });
    });

    $(".sec1 div#ria").click(() => {
        $("#ria-content.show").css({
            visibility: "unset"
        });
    });

    $(".sec1 div#bong").click(() => {
        $("#bong-content.show").css({
            visibility: "unset"
        });
    });

    $(".sec1 div#nadiem").click(() => {
        $("#nadiem-content.show").css({
            visibility: "unset"
        });
    });

    $(".show").click(() => {
        $(".show").css({
            visibility: "hidden"
        });
    });
});
