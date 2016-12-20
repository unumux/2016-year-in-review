function updatePoints() {
    const showcases = document.querySelectorAll(".showcase[id]");

    points = [];
    showcases.forEach((showcase) => {
        let point = {
            offset: showcase.offsetTop,
            el: showcase
        }

        points.push(point);
    });
}

function updateHash(scrollPosition) {
    let above = points.filter(point => point.offset <= scrollPosition);

    if (above.length > 0) {
        let currentSection = above[above.length - 1].el;
        let id = currentSection.id;

        currentSection.id = "";
        window.location.hash = `#${id}`;
        currentSection.id = id;
    }

}

function updateNav() {
    const oldEl = document.querySelector(".main-nav__link--current");
    const newEl = document.querySelector(`[href='${window.location.hash}']`);

    if (oldEl !== null) {
        oldEl.classList.remove("main-nav__link--current");
        oldEl.classList.add("main-nav__link");
    }

    if (newEl !== null) {
        newEl.classList.remove("main-nav__link");
        newEl.classList.add("main-nav__link--current");
    }
}

function updateScroll() {
    lastScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateHash(lastScrollPosition);
            ticking = false;
        });
    }

    ticking = true;
}

let points = [];
let lastScrollPosition = 0;
let ticking = false;


document.addEventListener("DOMContentLoaded", function(event) { 
    updatePoints();
    updateNav();
});

window.addEventListener("resize", updatePoints);
window.addEventListener('scroll', updateScroll);
window.addEventListener("hashchange", updateNav);

//Sticky header

// $(function(){
//     $('.page-header--home').data('size','big');
// });

// $(window).scroll(function(){
//     if($(document).scrollTop() > 0)
//     {
//         if($('.page-header--home').data('size') == 'big')
//         {
//             $('.page-header--home').data('size','small');
//             $('.page-header--home').stop().animate({
//                 height:'40px'
//             },600);
//         }
//     }
//     else
//     {
//         if($('.page-header--home').data('size') == 'small')
//         {
//             $('.page-header--home').data('size','big');
//             $('.page-header--home').stop().animate({
//                 height:'100px'
//             },600);
//         }  
//     }
// });

// jQuery(document).ready(function($) {
//     $(window).scroll(function () {
//         if ($(window).scrollTop() > 100) {
//             $('header').addClass('shrink');
//         }
//         else{
//             $('header').removeClass('shrink');
//         }
//     });
// });

