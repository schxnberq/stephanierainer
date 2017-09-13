window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
document.addEventListener("DOMContentLoaded", function () {


    var burger = document.querySelector(".nav__burger");
    var span1 = document.querySelector(".nav__burger .burgerline1").classList;
    var span2 = document.querySelector(".nav__burger .burgerline2").classList;
    var span3 = document.querySelector(".nav__burger .burgerline3").classList;
    var overlay = document.querySelector(".nav__overlay").classList;
    var exitOverlay = document.querySelector(".nav__overlay__exit");
    var overlayLinks = document.querySelectorAll(".nav__overlay__list__item");


    var showMenuFnc = function () {
        overlay.toggle("showMenu");

        span1.toggle("open");
        span2.toggle("open");
        span3.toggle("open");
    };

    burger.addEventListener("click", showMenuFnc);
    exitOverlay.addEventListener("click", showMenuFnc);


    for (var i = 0; i <= overlayLinks.length - 1; i++) {
        overlayLinks[i].addEventListener("click", function () {

            overlay.remove("showMenu");

            span1.remove("open");
            span2.remove("open");
            span3.remove("open");


        })
    }


});