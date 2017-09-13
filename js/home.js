document.addEventListener("DOMContentLoaded", function () {

    var scrollbtn = document.querySelector("a[data-scroll]");

    var navLogo = document.querySelector(".nav__logo");
    var navBreadcr = document.querySelector(".nav__breadcr");
    var oldHeroTitle = document.querySelector(".hero__title h3");
    var heroDescr = document.querySelector(".hero__title span");
    var heroArr = document.querySelector(".hero__title a");

    var home_menu = document.querySelector(".main__menu").classList;

    var home_content = document.querySelector(".main__content").classList;


    TweenLite.to([navLogo, navBreadcr], 0, {opacity: 0});


    var range = 200;

    window.addEventListener('scroll', function () {


        var nav = document.querySelector(".nav");
        var navRect = nav.getBoundingClientRect();
        var navH = navRect.height - 10;

        var main = document.querySelector("main");
        var mainOff = main.offsetTop;

        if (window.pageYOffset >= mainOff - navH) {
            home_menu.add("fixed");
            home_content.add("fixed");

            TweenLite.to(navLogo, 0.85, {
                opacity: 1,
                ease: Expo.easeOut
            })
            TweenLite.to(oldHeroTitle, 0.85, {
                opacity: 0,
                scale: 0.75,
                ease: Expo.easeOut
            })
            TweenLite.to([heroDescr, heroArr], 0.85, {
                opacity: 0,
                scale: 0.75,
                ease: Expo.easeOut
            })
            TweenLite.to(navBreadcr, 0.85, {
                opacity: 1,
                ease: Expo.easeOut
            })

        } else { // ---------- ELSE ----------

            home_menu.remove("fixed");
            home_content.remove("fixed");
            TweenLite.to(navLogo, 0.85, {
                opacity: 0,
                ease: Expo.easeOut
            })
            TweenLite.to(oldHeroTitle, 0.85, {
                opacity: 1,
                scale: 1,
                ease: Expo.easeOut
            })
            TweenLite.to([heroDescr, heroArr], 0.85, {
                opacity: 1,
                scale: 1,
                ease: Expo.easeOut
            })
            TweenLite.to(navBreadcr, 0.85, {
                opacity: 0,
                ease: Expo.easeOut
            })
        }


    });


    scrollbtn.addEventListener("click", function (e) {
        e.preventDefault();

        var clicked = e.target;
        var getHref = clicked.getAttribute("href");
        var HrefEl = document.querySelector(getHref);
        TweenLite.to(window, 1.25, {scrollTo: HrefEl, ease: Expo.easeOut});

    })


});


