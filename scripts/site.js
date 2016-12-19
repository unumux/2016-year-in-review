require('waypoints/lib/noframework.waypoints.js'); 

const showcases = document.querySelectorAll(".showcase[id]");
const waypoints = [];
const links = document.querySelectorAll(".main-nav__link");

showcases.forEach(showcase => {
    const waypoint = new Waypoint({
        element: showcase,
        handler: function(direction) {
            identifyCurrent(this.element.id, direction);
        },

    });
    waypoints.push(waypoint);
});

function identifyCurrent(id, direction) {
    
    links.forEach((link, index) => {
        link.classList.remove("main-nav__link--current");
    });

    links.forEach((link, index) => {
        if(link.attributes.href.value === `#${id}`) {
            if(direction === "up") {
                const newLink = links[index - 1 >= 0 ? index - 1 : 0];
                setActiveLink(newLink);
            } else {
                console.log(link);
                setActiveLink(link);
            }
        }
    });
}


function setActiveLink(link) {
    link.classList.add("main-nav__link--current");
}

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

jQuery(document).ready(function($) {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('shrink');
        }
        else{
            $('header').removeClass('shrink');
        }
    });
});

