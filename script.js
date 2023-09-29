// const btn = document.getElementById("btn");
// const pop = document.getElementsByClassName("pop-main")


$(document).ready(function () {
    $("#btn").click(function () {
        $(".pop-main").addClass("show");
        $(".box-main").addClass("hidden")
    });
});